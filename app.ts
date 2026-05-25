require('dotenv').config();
const express = require('express');
const cors = require('cors');

const authRoutes = require('./src/routes/authRoutes');
const restauranteRoutes = require('./src/routes/restauranteRoutes');
const produtoRoutes = require('./src/routes/produtoRoutes');
const pedidoRoutes = require('./src/routes/pedidoRoutes');

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Rota de health check
app.get('/', (req, res) => {
  res.json({ mensagem: 'API Delivery TCC rodando!', versao: '1.0.0' });
});

// Rotas
app.use('/auth', authRoutes);
app.use('/restaurantes', restauranteRoutes);
app.use('/produtos', produtoRoutes);
app.use('/pedidos', pedidoRoutes);

// Handler de rotas não encontradas
app.use((req, res) => {
  res.status(404).json({ erro: 'Rota não encontrada.' });
});

// Handler de erros globais
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ erro: 'Erro interno no servidor.' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📦 Banco de dados: SQLite via Prisma`);
  console.log(`🔐 Autenticação: JWT\n`);
});
