import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const STATUS_VALIDOS = [
  "pendente",
  "confirmado",
  "em_preparo",
  "saiu_entrega",
  "entregue",
  "cancelado",
];

class PedidoController {
  async listarMeus(req: any, res: Response) {
    const usuarioId = req.usuario.id;

    try {
      const pedidos = await prisma.pedido.findMany({
        where: {
          usuarioId,
        },

        include: {
          restaurante: {
            select: {
              id: true,
              nome: true,
            },
          },

          itens: {
            include: {
              produto: {
                select: {
                  id: true,
                  nome: true,
                },
              },
            },
          },
        },

        orderBy: {
          criadoEm: "desc",
        },
      });

      return res.json(pedidos);
    } catch (err: any) {
      return res.status(500).json({
        erro: "Erro ao listar pedidos.",
        detalhe: err.message,
      });
    }
  }

  async listarTodos(req: Request, res: Response) {
    try {
      const pedidos = await prisma.pedido.findMany({
        include: {
          usuario: {
            select: {
              id: true,
              nome: true,
              email: true,
            },
          },

          restaurante: {
            select: {
              id: true,
              nome: true,
            },
          },

          itens: {
            include: {
              produto: {
                select: {
                  id: true,
                  nome: true,
                },
              },
            },
          },
        },

        orderBy: {
          criadoEm: "desc",
        },
      });

      return res.json(pedidos);
    } catch (err: any) {
      return res.status(500).json({
        erro: "Erro ao listar pedidos.",
        detalhe: err.message,
      });
    }
  }

  async buscarPorId(req: any, res: Response) {
    const { id } = req.params;

    const usuarioId = req.usuario.id;

    const isAdmin = req.usuario.role === "admin";

    try {
      const pedido = await prisma.pedido.findUnique({
        where: {
          id: Number(id),
        },

        include: {
          usuario: {
            select: {
              id: true,
              nome: true,
              email: true,
            },
          },

          restaurante: {
            select: {
              id: true,
              nome: true,
              endereco: true,
            },
          },

          itens: {
            include: {
              produto: {
                select: {
                  id: true,
                  nome: true,
                },
              },
            },
          },
        },
      });

      if (!pedido) {
        return res.status(404).json({
          erro: "Pedido não encontrado.",
        });
      }

      if (!isAdmin && pedido.usuarioId !== usuarioId) {
        return res.status(403).json({
          erro: "Sem permissão para ver este pedido.",
        });
      }

      return res.json(pedido);
    } catch (err: any) {
      return res.status(500).json({
        erro: "Erro ao buscar pedido.",
        detalhe: err.message,
      });
    }
  }

  async criar(req: any, res: Response) {
    const usuarioId = req.usuario.id;

    const { restauranteId, itens, observacao } = req.body;

    if (
      !restauranteId ||
      !itens ||
      !Array.isArray(itens) ||
      itens.length === 0
    ) {
      return res.status(400).json({
        erro: "restauranteId e pelo menos um item são obrigatórios.",
      });
    }

    try {
      const ids = itens.map((i: any) => i.produtoId);

      const produtos = await prisma.produto.findMany({
        where: {
          id: {
            in: ids,
          },

          restauranteId: Number(restauranteId),

          disponivel: true,
        },
      });

      if (produtos.length !== ids.length) {
        return res.status(400).json({
          erro: "Um ou mais produtos não encontrados ou indisponíveis.",
        });
      }

      const produtoMap = Object.fromEntries(
        produtos.map((p) => [p.id, p])
      );

      let total = 0;

      const itensMapeados = itens.map((item: any) => {
        const produto = produtoMap[item.produtoId];

        const subtotal = produto.preco * item.quantidade;

        total += subtotal;

        return {
          produtoId: item.produtoId,
          quantidade: item.quantidade,
          precoUni: produto.preco,
        };
      });

      const pedido = await prisma.pedido.create({
        data: {
          usuarioId,

          restauranteId: Number(restauranteId),

          total,

          observacao,

          itens: {
            create: itensMapeados,
          },
        },

        include: {
          restaurante: {
            select: {
              id: true,
              nome: true,
            },
          },

          itens: {
            include: {
              produto: {
                select: {
                  id: true,
                  nome: true,
                },
              },
            },
          },
        },
      });

      return res.status(201).json(pedido);
    } catch (err: any) {
      return res.status(500).json({
        erro: "Erro ao criar pedido.",
        detalhe: err.message,
      });
    }
  }

  async atualizarStatus(req: Request, res: Response) {
    const { id } = req.params;

    const { status } = req.body;

    if (!STATUS_VALIDOS.includes(status)) {
      return res.status(400).json({
        erro: `Status inválido. Use: ${STATUS_VALIDOS.join(", ")}`,
      });
    }

    try {
      const pedido = await prisma.pedido.update({
        where: {
          id: Number(id),
        },

        data: {
          status,
        },
      });

      return res.json(pedido);
    } catch (err: any) {
      if (err.code === "P2025") {
        return res.status(404).json({
          erro: "Pedido não encontrado.",
        });
      }

      return res.status(500).json({
        erro: "Erro ao atualizar status.",
        detalhe: err.message,
      });
    }
  }
}

export { PedidoController };