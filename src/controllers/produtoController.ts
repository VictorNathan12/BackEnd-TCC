import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class ProdutoController {
  async listarPorRestaurante(req: Request, res: Response) {
    const { restauranteId } = req.params;

    try {
      const produtos = await prisma.produto.findMany({
        where: {
          restauranteId: Number(restauranteId),
        },

        orderBy: {
          nome: "asc",
        },
      });

      return res.json(produtos);
    } catch (err: any) {
      return res.status(500).json({
        erro: "Erro ao listar produtos.",
        detalhe: err.message,
      });
    }
  }

  async buscarPorId(req: Request, res: Response) {
    const { id } = req.params;

    try {
      const produto = await prisma.produto.findUnique({
        where: {
          id: Number(id),
        },

        include: {
          restaurante: {
            select: {
              id: true,
              nome: true,
            },
          },
        },
      });

      if (!produto) {
        return res.status(404).json({
          erro: "Produto não encontrado.",
        });
      }

      return res.json(produto);
    } catch (err: any) {
      return res.status(500).json({
        erro: "Erro ao buscar produto.",
        detalhe: err.message,
      });
    }
  }

  async criar(req: Request, res: Response) {
    const { nome, descricao, preco, restauranteId } = req.body;

    if (!nome || preco == null || !restauranteId) {
      return res.status(400).json({
        erro: "Nome, preço e restauranteId são obrigatórios.",
      });
    }

    try {
      const produto = await prisma.produto.create({
        data: {
          nome,
          descricao,
          preco: Number(preco),
          restauranteId: Number(restauranteId),
        },
      });

      return res.status(201).json(produto);
    } catch (err: any) {
      return res.status(500).json({
        erro: "Erro ao criar produto.",
        detalhe: err.message,
      });
    }
  }

  async atualizar(req: Request, res: Response) {
    const { id } = req.params;

    const { nome, descricao, preco, disponivel } =
      req.body;

    try {
      const produto = await prisma.produto.update({
        where: {
          id: Number(id),
        },

        data: {
          nome,
          descricao,

          preco:
            preco != null
              ? Number(preco)
              : undefined,

          disponivel,
        },
      });

      return res.json(produto);
    } catch (err: any) {
      if (err.code === "P2025") {
        return res.status(404).json({
          erro: "Produto não encontrado.",
        });
      }

      return res.status(500).json({
        erro: "Erro ao atualizar produto.",
        detalhe: err.message,
      });
    }
  }

  async deletar(req: Request, res: Response) {
    const { id } = req.params;

    try {
      await prisma.produto.delete({
        where: {
          id: Number(id),
        },
      });

      return res.json({
        mensagem: "Produto deletado com sucesso.",
      });
    } catch (err: any) {
      if (err.code === "P2025") {
        return res.status(404).json({
          erro: "Produto não encontrado.",
        });
      }

      return res.status(500).json({
        erro: "Erro ao deletar produto.",
        detalhe: err.message,
      });
    }
  }
}

export { ProdutoController };