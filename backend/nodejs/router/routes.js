const loginRouter = require('../components/client/auth/loginAuth');
const clienteRouter = require('../components/client/controller/usuarioController');

const router = (server) => {

    server.use('/login', loginRouter)
    server.use('/cliente', clienteRouter)

}

module.exports = router;






