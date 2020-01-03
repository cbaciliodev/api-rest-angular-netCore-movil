const response = {

    create: (req, res, code, data) => {

        let result = {
            ok: true,

        }

        if (data) {
            result.data = data;
        }

        res.status(code).json(result);

    },

    ok: (req, res, code, data) => {

        let status = {
            ok: true
        }

        if (data) {
            status.data = data;
        }

        res.status(code).json(status);

    },

    err: (req, res, code, message, err) => {

        let error = {
            ok: false,
            message: message
        }

        if (err) {
            error.exception = err;
        }

        res.status(code || 500).json(error);

    },

    auth: (req, res, code, data) => {

        let result = {
            ok: true
        }

        if (data) {

            result.data = data;
        }

        res.status(code).json(result)

    },
    unauth: (req, res, code, err) => {

        let result = {
            ok: false,
            mensaje: err
        }

        res.status(code).json(result);
    }

};

module.exports = response;
