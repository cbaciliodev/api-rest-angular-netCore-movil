/**
 * Importados Local
 */
const _c = require('./configuration/color').color
const router = require('./router/routes');
const listen = require('./core/server');
const _mongo = require('./configuration/database').MONGO_DB
const db = require('./utils/connection');
/**
 * Dependencias
 */
const express = require('express');
const morgan = require('morgan');
const app = express();

//conection database:
db(_mongo.mongo_url, _mongo.mongo_opts).then(data => {
    console.log(_c.sky_blue, data)
}).catch(e => {
    console.log(_c.red, e);
});

//middleware:
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }))
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // http://3.17.110.176:3035
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "POST, GET, DELETE, PUT, OPTIONS");
    next();
});

//router:
router(app);
//servidor
listen(app);
