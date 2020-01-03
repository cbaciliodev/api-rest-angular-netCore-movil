
/**
 * Importados Local
 */
const _c = require('./config/color').color;
const router = require('./router/routes');
const listen = require('./core/bin');
const _mongo = require('./config/db').MONGO_DB;
const db = require('./utils/conection');


/**
 * Dependencias
 */
const express = require('express');
const morgan = require('morgan');
const app = express();

//conection database:
db(_mongo.mongo_url, _mongo.mongo_opts)
    .then((data) => {
        console.log(_c.sky_blue, data);
    }).catch((reason) => {
        console.log(_c.red, reason);
    });

//middleware:
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); //* pull de ip
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS");
    next();
});

//router: rutas
router(app);
//servidor:
listen(app);