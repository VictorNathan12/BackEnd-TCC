const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/produtoController');
const { autenticar, apenasAdmin } = require('../middlewares/auth');

// Listar produtos de um restaurante específico
router.get('/restaurante/:restauranteId', ctrl.listarPorRestaurante);
router.get('/:id', ctrl.buscarPorId);
router.post('/', autenticar, apenasAdmin, ctrl.criar);
router.put('/:id', autenticar, apenasAdmin, ctrl.atualizar);
router.delete('/:id', autenticar, apenasAdmin, ctrl.deletar);

module.exports = router;
