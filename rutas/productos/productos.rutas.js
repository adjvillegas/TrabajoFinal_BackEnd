const express = require('express');
const routerProduct = express.Router();

routerProduct.get('/listar/:id?', (req, res) => {
    
});

routerProduct.post('/agregar', (req, res) => {

});

routerProduct.put('/actualizar/:id', (req, res) => {

});

routerProduct.delete('/borrar/:id', (req, res) => {

});

module.exports = routerProduct;