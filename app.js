// requiero express
const express = require('express');

// ejecuto la aplicación
const app = express();

// levanto el servidor
app.listen(3000, () => console.log('servidor corriendo en el puerto 3000'));

//setup template engine
app.set('view engine', 'ejs')

//setup del req.body
app.use(express.urlencoded( {extended: false} ));
app.use(express.json())

//Configuracion de archivos estaticos
app.use(express.static(__dirname + '/public'));

//requiero las rutas
const routes = require('./routes/rutas')
app.use('/', routes);

const productRoutes = require('./routes/products');
app.use('/products', productRoutes);