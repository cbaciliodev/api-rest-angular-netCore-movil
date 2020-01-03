const usuarioController = require('../components/usuario/controller/usuarioController');



const router = (server) => {

    server.use('/usuario', usuarioController);

}

module.exports = router;