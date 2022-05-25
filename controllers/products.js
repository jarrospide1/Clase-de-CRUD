const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../data/products.json');
const productsArray = JSON.parse(fs.readFileSync (filePath, 'utf8'));
console.log(productsArray);

const controller = {

    browse: (req, res) => {
        res.render('products/browse', {
            productsList: productsArray
        });
    },

    read: (req, res) => {
        const productId = req.params.id;
        res.send('llegaste a /products/' + productId);
    },

    create: (req, res) => {
        res.render('products/create.ejs');
    },

    add: (req, res) => {
        /*
        res.send({
            body: req.body,
            file: req.file
        })
        return;*/

        productsArray.push({
            productName : req.body.productName,
            productPrice : req.body.productPrice,
            productImage: req.file.filename
        });

        fs.writeFileSync(filePath, JSON.stringify(productsArray, null, ' '));
        res.redirect('/products');
    },

    detail: (req, res) => {
        const productId = req.params.id;
        const product = productsArray.find( oneProduct => oneProduct.id === productId)
        res.render('products/detail', { product })
    },

    edit: (req, res) => {
        const productId = req.params.id;
        res.send('formulario para a editar el producto' + productId);
    },

    update: (req, res) => {
        const productId = req.params.id;
        res.send('Actualizamos el producto ' + productId);
    },

    delete: (req, res) => {
        const productId = req.params.id;
        res.send('vamos a borrar el producto ' + productId)
    },

}

module.exports = controller;