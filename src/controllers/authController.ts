import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

class AuthController {
  async registrar(req: Request, res: Response) {
    const { nome, email, senha, role } = req.body;

    if (!nome || !email || !senha) {
      return res.status(400).json({
        erro: "Nome, email e senha são obrigatórios.",
      });
    }

    try {
      const existe = await prisma.usuario.findUnique({
        where: { email },
      });

      if (existe) {
        return res.status(409).json({
          erro: "Email já cadastrado.",
        });
      }

      const senhaHash = await bcrypt.hash(senha, 10);

      const usuario = await prisma.usuario.create({
        data: {
          nome,
          email,
          senha: senhaHash,
          role: role || "cliente",
        },

        select: {
          id: true,
          nome: true,
          email: true,
          role: true,
          criadoEm: true,
        },
      });

      return res.status(201).json({
        mensagem: "Usuário criado com sucesso.",
        usuario,
      });
    } catch (err: any) {
      return res.status(500).json({
        erro: "Erro interno ao registrar usuário.",
        detalhe: err.message,
      });
    }
  }

  async login(req: Request, res: Response) {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({
        erro: "Email e senha são obrigatórios.",
      });
    }

    try {
      const usuario = await prisma.usuario.findUnique({
        where: { email },
      });

      if (!usuario) {
        return res.status(401).json({
          erro: "Credenciais inválidas.",
        });
      }

      const senhaValida = await bcrypt.compare(
        senha,
        usuario.senha
      );

      if (!senhaValida) {
        return res.status(401).json({
          erro: "Credenciais inválidas.",
        });
      }

      const token = jwt.sign(
        {
          id: usuario.id,
          email: usuario.email,
          role: usuario.role,
        },

        process.env.JWT_SECRET as string,

        {
          expiresIn: "7d",
        }
      );

      return res.json({
        token,

        usuario: {
          id: usuario.id,
          nome: usuario.nome,
          email: usuario.email,
          role: usuario.role,
        },
      });
    } catch (err: any) {
      return res.status(500).json({
        erro: "Erro interno ao fazer login.",
        detalhe: err.message,
      });
    }
  }
}

export { AuthController };