const http = require('http');
const _p = require('../configuration/server').server;

const listen = (server) => {

    const _server = http.Server(server);
    _server.listen(_p.port, _p.host, () => {
        console.log(`Servidor corriendo en http://${_p.host}:${_p.port}`)
    })

}

module.exports = listen;
