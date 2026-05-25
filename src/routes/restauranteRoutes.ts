const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/restauranteController');
const { autenticar, apenasAdmin } = require('../middlewares/auth');

router.get('/', ctrl.listar);
router.get('/:id', ctrl.buscarPorId);
router.post('/', autenticar, apenasAdmin, ctrl.criar);
router.put('/:id', autenticar, apenasAdmin, ctrl.atualizar);
router.delete('/:id', autenticar, apenasAdmin, ctrl.deletar);

module.exports = router;
