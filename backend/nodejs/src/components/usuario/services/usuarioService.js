const Usuario = require('../model/usuarioModel');


function login(username) {

    return new Promise((resolve, reject) => {

        let query = {
            username: username.username
        }

        //console.log(query)

        Usuario.findOne(query, (err, result) => {

            if (err) reject(err);

            resolve(result);

        })
    });
}

module.exports = {

    login: login

}
