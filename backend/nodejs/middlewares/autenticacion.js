const jwt = require('jsonwebtoken');
const key = require('../configuration/keys');
const code = require('../configuration/http_code');

module.exports.verifyToken = (req, res, next) => {

    var _token = req.query.token;

    jwt.verify(_token, key.seed, (err, decode) => {

        console.log(decode.result, ' decode1');

        if (err) {
            return res.status(code.Unauthorized.code).json({
                ok: false,
                mensaje: `Token incorrecto`,
                errors: err
            });
        };


        req.result = decode.result;

        console.log(req.result, ' decode2');

        next();
    });
};

