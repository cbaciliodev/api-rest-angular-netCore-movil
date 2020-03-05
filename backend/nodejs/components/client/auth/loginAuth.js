const service = require('../services/usuarioService');
const _http = require('../../../utils/http');
const _c = require('../../../configuration/http_code');
const router = require('express').Router();

router.post('/', (req, res) => {

    let cliente = req.body;

    service.login(cliente)
        .then((data) => {
            _http.auth(req, res, _c.Ok.code, data);
        }).catch((reason) => {
            _http.unauth(req, res, _c.Internal_Server_Error.code, reason);
        })
})


module.exports = router;