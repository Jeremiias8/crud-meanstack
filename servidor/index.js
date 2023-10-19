'use strict'

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors'); 

const app = express();
const port = 3000;

/* Conectar a BD de otra forma 
    const conectarDB = require('./config/db');

    conectarDB();
*/

app.use(bodyParser.urlencoded({extended : false}));
// cualquier tipo de petición que la convierta a formato json
app.use(bodyParser.json());

app.use(cors()); 

app.use((req, res, next) => {

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
  
}); 

app.use(express.json());

app.use('/api/productos', require('./routes/producto'));

/* Conexión MongoDB */
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/meanproductos')
    .then(() => {
        console.log("Conexión a la BBDD exitosa !");

        app.listen(port, () => {
            console.log("Server is working...");
        });
    })
    .catch(err => console.log(err));