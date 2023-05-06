// Routes

const express = require('express');
const router = express.Router();
const prodController = require('../controllers/productoController');

router.post('/', prodController.crearProducto);
router.get('/', prodController.obtenerProducto);
router.put('/:id', prodController.actualizarProducto);
router.get('/:id', prodController.obtenerProductos);
router.delete('/:id', prodController.eliminarProducto);

module.exports = router;
