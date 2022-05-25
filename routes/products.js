const express = require('express');
const router = express.Router();
const path = require('path')

// Multer require y setup
const multer = require('multer');

const multerDiskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '../public/uploads'))
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '_' + file.fieldname + path.extname(file.originalname))
    }
});

const upload = multer({ storage: multerDiskStorage });

const productsController = require('../controllers/products')

//GET localhost:3000/products
router.get('/', productsController.browse);

//GET localhost:3000/products/create
router.get('/create', productsController.create);
//POST localhost:3000/products
router.post('/', upload.single('productImage'), productsController.add);

// GET localhost:3000/products/:id
router.get('/:id', productsController.detail);

//GET localhost:3000/products/edit/id
router.get('/edit/:id', productsController.edit);
//PUT  localhost:3000/products/id
router.get('/:id', productsController.update);

//DELETE localhost:3000/products/id
router.delete('/:id', productsController.delete);

//GET localhost:3000/products/id
// Tiene que ir al final 
router.get('/:id', productsController.read);

module.exports = router;