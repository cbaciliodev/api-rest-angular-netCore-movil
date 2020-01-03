const Usuario = require('../model/usuarioModel');


function login(body) {

    return new Promise((resolve, reject) => {

        let query = {
            username: body.username
        }

        //console.log(query)

        Usuario.findOne(query, (err, result) => {

            if (err) reject(err);

            //console.log(result.clave, ' result');

            if (!result) {
                reject('Credeciales Incorrectas - Username');
            } else {

                if (result.clave != body.clave) reject('Credeciales Incorrectas - Clave')
            }

            resolve(result);

        })
    });
}

module.exports = {

    login: login

}
