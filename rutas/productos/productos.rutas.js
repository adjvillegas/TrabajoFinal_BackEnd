const express = require('express');
const routerProduct = express.Router();

routerProduct.use(express.json());
routerProduct.use(express.urlencoded({extended: true}))

const Archivo = require('../../controller/archivoClass');

const file = new Archivo();

routerProduct.get('/listar/:id?', (req, res) => {


    const fileRead = async(id) => {
        const response = await file.readForId('productos', id)
        res.json(response)
    }
 
    fileRead(req.params.id);

});

routerProduct.post('/agregar', (req, res) => {

    const save = async(odata) => {

        const respose = await file.download('productos', odata);

        res.json(respose)

    };

    save({nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        codigo: req.body.codigo,
        foto: req.body.foto,
        precio: req.body.precio,
        stock: req.body.stock})

});

routerProduct.put('/actualizar/:id', (req, res) => {

    const update = async(id, odata) => {

        const respose = await file.update('productos', odata, id);

        res.json(respose)

    };

    update( req.params.id,
        {    
            nombre: req.body.nombre,
            descripcion: req.body.descripcion,
            codigo: req.body.codigo,
            foto: req.body.foto,
            precio: req.body.precio,
            stock: req.body.stock

        })    

});

routerProduct.delete('/borrar/:id', (req, res) => {

});

module.exports = routerProduct;