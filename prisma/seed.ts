import bcrypt from "bcrypt";
import { prisma } from "../config/prisma";

async function main() {
  // Usuário admin
  const senhaAdmin = bcrypt.hashSync(
    "admin123",
    10
  );

  const admin = await prisma.usuario.create({
    data: {
      nome: "Administrador",
      email: "admin@delivery.com",
      senha: senhaAdmin,
      role: "admin",
    },
  });

  console.log("Admin criado:", admin);

  // Usuário cliente
  const senhaCliente = bcrypt.hashSync(
    "cliente123",
    10
  );

  const cliente = await prisma.usuario.create({
    data: {
      nome: "João Silva",
      email: "joao@email.com",
      senha: senhaCliente,
      role: "cliente",
    },
  });

  console.log(
    "Cliente criado:",
    cliente
  );

  // Restaurante
  const restaurante =
    await prisma.restaurante.create({
      data: {
        nome: "Burger House",
        descricao:
          "Hambúrguer artesanal",
        endereco:
          "Rua Central, 123",
        telefone:
          "(41) 99999-9999",
      },
    });

  console.log(
    "Restaurante criado:",
    restaurante
  );

  // Produtos
  const produto1 =
    await prisma.produto.create({
      data: {
        nome: "X-Burger",
        descricao:
          "Hambúrguer com queijo",
        preco: 25.9,
        restauranteId:
          restaurante.id,
      },
    });

  const produto2 =
    await prisma.produto.create({
      data: {
        nome: "Batata Frita",
        descricao:
          "Porção média",
        preco: 15.5,
        restauranteId:
          restaurante.id,
      },
    });

  console.log(
    "Produtos criados:",
    produto1,
    produto2
  );

  // Pedido
  const pedido =
    await prisma.pedido.create({
      data: {
        total: 41.4,
        usuarioId: cliente.id,
        restauranteId:
          restaurante.id,

        itens: {
          create: [
            {
              quantidade: 1,
              precoUni: 25.9,
              produtoId:
                produto1.id,
            },
            {
              quantidade: 1,
              precoUni: 15.5,
              produtoId:
                produto2.id,
            },
          ],
        },
      },
    });

  console.log(
    "Pedido criado:",
    pedido
  );
}

main()
  .catch((e) => {
    console.error(e);
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });