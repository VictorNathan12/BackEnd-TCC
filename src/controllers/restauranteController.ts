import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class RestauranteController {
  async listar(req: Request, res: Response) {
    try {
      const restaurantes =
        await prisma.restaurante.findMany({
          include: {
            _count: {
              select: {
                produtos: true,
              },
            },
          },

          orderBy: {
            nome: "asc",
          },
        });

      return res.json(restaurantes);
    } catch (err: any) {
      return res.status(500).json({
        erro: "Erro ao listar restaurantes.",
        detalhe: err.message,
      });
    }
  }

  async buscarPorId(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const restaurante =
        await prisma.restaurante.findUnique({
          where: {
            id: Number(id),
          },

          include: {
            produtos: {
              where: {
                disponivel: true,
              },
            },
          },
        });

      if (!restaurante) {
        return res.status(404).json({
          erro: "Restaurante não encontrado.",
        });
      }

      return res.json(restaurante);
    } catch (err: any) {
      return res.status(500).json({
        erro: "Erro ao buscar restaurante.",
        detalhe: err.message,
      });
    }
  }

  async criar(req: Request, res: Response) {
    const {
      nome,
      descricao,
      endereco,
      telefone,
    } = req.body;

    if (!nome || !endereco) {
      return res.status(400).json({
        erro: "Nome e endereço são obrigatórios.",
      });
    }

    try {
      const restaurante =
        await prisma.restaurante.create({
          data: {
            nome,
            descricao,
            endereco,
            telefone,
          },
        });

      return res.status(201).json(restaurante);
    } catch (err: any) {
      return res.status(500).json({
        erro: "Erro ao criar restaurante.",
        detalhe: err.message,
      });
    }
  }

  async atualizar(req: Request, res: Response) {
    const { id } = req.params;

    const {
      nome,
      descricao,
      endereco,
      telefone,
    } = req.body;

    try {
      const restaurante =
        await prisma.restaurante.update({
          where: {
            id: Number(id),
          },

          data: {
            nome,
            descricao,
            endereco,
            telefone,
          },
        });

      return res.json(restaurante);
    } catch (err: any) {
      if (err.code === "P2025") {
        return res.status(404).json({
          erro: "Restaurante não encontrado.",
        });
      }

      return res.status(500).json({
        erro: "Erro ao atualizar restaurante.",
        detalhe: err.message,
      });
    }
  }

  async deletar(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await prisma.restaurante.delete({
        where: {
          id: Number(id),
        },
      });

      return res.json({
        mensagem:
          "Restaurante deletado com sucesso.",
      });
    } catch (err: any) {
      if (err.code === "P2025") {
        return res.status(404).json({
          erro: "Restaurante não encontrado.",
        });
      }

      return res.status(500).json({
        erro: "Erro ao deletar restaurante.",
        detalhe: err.message,
      });
    }
  }
}

export { RestauranteController };