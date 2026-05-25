const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/pedidoController');
const { autenticar, apenasAdmin } = require('../middlewares/auth');

// Cliente: ver seus pedidos e criar
router.get('/meus', autenticar, ctrl.listarMeus);
router.post('/', autenticar, ctrl.criar);
router.get('/:id', autenticar, ctrl.buscarPorId);

// Admin: ver todos e atualizar status
router.get('/', autenticar, apenasAdmin, ctrl.listarTodos);
router.patch('/:id/status', autenticar, apenasAdmin, ctrl.atualizarStatus);

module.exports = router;
