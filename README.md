# 🛵 Delivery API — TCC Backend

Backend REST com **Node.js + Express + Prisma + SQLite + JWT**.

---

## 🗂️ Estrutura do Projeto

```
delivery-backend/
├── app.js                         # Ponto de entrada
├── .env                           # Variáveis de ambiente
├── prisma/
│   ├── schema.prisma              # Modelos do banco
│   └── seed.js                    # Dados iniciais
└── src/
    ├── controllers/
    │   ├── authController.js
    │   ├── restauranteController.js
    │   ├── produtoController.js
    │   └── pedidoController.js
    ├── routes/
    │   ├── authRoutes.js
    │   ├── restauranteRoutes.js
    │   ├── produtoRoutes.js
    │   └── pedidoRoutes.js
    └── middlewares/
        └── auth.js
```

---

## ⚙️ Como rodar

### 1. Instalar dependências
```bash
npm install
```

### 2. Configurar `.env`
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="sua_chave_secreta_troque_em_producao"
PORT=3000
```

### 3. Criar o banco de dados
```bash
npx prisma migrate dev --name init
```

### 4. Popular com dados de exemplo
```bash
npm run db:seed
```

### 5. Iniciar o servidor
```bash
npm start
# ou em modo de desenvolvimento:
npm run dev
```

---

## 🔐 Autenticação

Todas as rotas protegidas exigem o header:
```
Authorization: Bearer <token>
```

### Roles
| Role    | Permissões                                              |
|---------|---------------------------------------------------------|
| cliente | Ver restaurantes/produtos, criar e ver próprios pedidos |
| admin   | Tudo + gerenciar restaurantes, produtos e status pedidos|

---

## 📡 Endpoints

### Auth
| Método | Rota             | Descrição         | Auth |
|--------|------------------|-------------------|------|
| POST   | /auth/registrar  | Registrar usuário | ❌   |
| POST   | /auth/login      | Login → retorna JWT | ❌ |

**Body registrar:**
```json
{ "nome": "João", "email": "joao@email.com", "senha": "123456" }
```

**Body login:**
```json
{ "email": "joao@email.com", "senha": "123456" }
```

---

### Restaurantes
| Método | Rota               | Descrição                   | Auth   |
|--------|--------------------|-----------------------------|--------|
| GET    | /restaurantes      | Listar todos                | ❌     |
| GET    | /restaurantes/:id  | Buscar por ID (com produtos)| ❌     |
| POST   | /restaurantes      | Criar restaurante           | Admin  |
| PUT    | /restaurantes/:id  | Atualizar restaurante       | Admin  |
| DELETE | /restaurantes/:id  | Deletar restaurante         | Admin  |

---

### Produtos
| Método | Rota                                    | Descrição              | Auth  |
|--------|-----------------------------------------|------------------------|-------|
| GET    | /produtos/restaurante/:restauranteId    | Listar por restaurante | ❌    |
| GET    | /produtos/:id                           | Buscar produto         | ❌    |
| POST   | /produtos                               | Criar produto          | Admin |
| PUT    | /produtos/:id                           | Atualizar produto      | Admin |
| DELETE | /produtos/:id                           | Deletar produto        | Admin |

**Body criar produto:**
```json
{
  "nome": "Pizza Margherita",
  "descricao": "Molho de tomate, mussarela e manjericão",
  "preco": 45.90,
  "restauranteId": 1
}
```

---

### Pedidos
| Método | Rota                  | Descrição                      | Auth    |
|--------|-----------------------|--------------------------------|---------|
| GET    | /pedidos/meus         | Ver meus pedidos               | Cliente |
| POST   | /pedidos              | Criar novo pedido              | Cliente |
| GET    | /pedidos/:id          | Ver pedido por ID              | Cliente/Admin |
| GET    | /pedidos              | Listar todos os pedidos        | Admin   |
| PATCH  | /pedidos/:id/status   | Atualizar status do pedido     | Admin   |

**Body criar pedido:**
```json
{
  "restauranteId": 1,
  "observacao": "Sem cebola, por favor",
  "itens": [
    { "produtoId": 1, "quantidade": 2 },
    { "produtoId": 4, "quantidade": 1 }
  ]
}
```

**Body atualizar status:**
```json
{ "status": "confirmado" }
```

**Status disponíveis:** `pendente` → `confirmado` → `em_preparo` → `saiu_entrega` → `entregue` / `cancelado`

---

## 🗄️ Modelo de Dados

```
Usuario ──< Pedido >── Restaurante
                |
           ItemPedido
                |
            Produto >── Restaurante
```

---

## 🛠️ Scripts disponíveis

```bash
npm start          # Inicia o servidor
npm run dev        # Modo desenvolvimento (hot reload)
npm run db:migrate # Cria/aplica migrations
npm run db:generate# Regenera o Prisma Client
npm run db:studio  # Abre o Prisma Studio (GUI do banco)
npm run db:seed    # Popula dados de exemplo
```
