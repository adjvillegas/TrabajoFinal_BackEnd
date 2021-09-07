const express = require('express');
const routerCarrito = express.Router();

routerCarrito.get('/listar/:id?', (req, res) => {
 
});

routerCarrito.post('/agregar/:id_producto', (req, res) => {

});


routerCarrito.delete('/borrar/:id', (req, res) => {

});

module.exports = routerCarrito;