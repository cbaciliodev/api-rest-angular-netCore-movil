const service = require('../services/usuarioService');
const auth = require('../../../middlewares/autenticacion');
const _http = require('../../../utils/http');
const _c = require('../../../configuration/http_code');
const router = require('express').Router();

router.get('/', [auth.verifyToken], (req, res) => {

    service.list()
        .then((data) => {
            _http.ok(req, res, _c.Ok.code, data);
        }).catch((reason) => {
            _http.err(req, res, _c.Internal_Server_Error.code, reason, reason);
        });
});

router.get('/all', (req, res) => {

    service.listAll()
        .then((data) => {
            _http.ok(req, res, _c.Ok.code, data);
        }).catch((reason) => {
            _http.err(req, res, _c.Internal_Server_Error.code, reason, reason);
        });
});

router.post('/', (req, res) => {

    let cliente = req.body;
    service.add(cliente)
        .then((data) => {
            _http.ok(req, res, _c.Created.code, data);
        }).catch((reason) => {
            _http.err(req, res, _c.Internal_Server_Error.code, reason.errmsg, reason);
        });
});

router.delete('/:id', (req, res) => {

    let id = req.params.id;

    service.remove(id)
        .then((data) => {
            _http.ok(req, res, _c.Created.code, data);
        }).catch((reason) => {
            _http.err(req, res, _c.Internal_Server_Error.code, reason.errmsg, reason);
        });
});

module.exports = router;
