const usuarioService = require('../services/usuarioService');
const _http = require('../../../utils/http');
const _c = require('../../../config/http_code');

const express = require('express');

const router = express.Router();


router.post('/', (req, res) => {

    let username = req.body;

    console.log(username);

    usuarioService.login(username)
        .then((data) => {
            _http.ok(req, res, _c.Ok.code, data);
        }).catch((reason) => {
            _http.err(req, res, _c.Internal_Server_Error.code, reason, reason);
        });
});

module.exports = router;

