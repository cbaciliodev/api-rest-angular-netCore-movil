const Usuario = require('../model/usuarioModel');
const _token = require('../../../utils/token');
const bcryptjs = require('bcryptjs');

const login = (cliente) => {

    console.log(cliente);
    
    let query = {
        username: { $eq: cliente.username }
    };
    
    return new Promise((resolve, reject) => {
        
        Usuario.findOne(query, (err, result) => {
            
            if (err) { reject(err); }
            
            if (!result) { reject(`Usuario no existe o credenciales incorrectas - email`); }
            
            console.log(cliente, ' ---------------------------------------');

            
            let compare = bcryptjs.compareSync(cliente.clave, result.clave);

            if (!compare) { reject(`Usuario no existe o credenciales incorrectas - clave`); }

            result.clave = ':)';

            let data = {
                result: result
            }

            let token = _token(data);

            data.token = token;

            resolve(data);
        });
    });
};

const list = () => {

    return new Promise((resolve, reject) => {

        Usuario.find((err, result) => {

            if (err) reject(err);

            resolve(result);
        });

    });
};


const listAll = () => {

    let estado = {

        estado: {
            $ne: 3
        }
    };

    console.log(estado);

    return new Promise((resolve, reject) => {

        Usuario.find(estado, (err, result) => {

            if (err) reject(err);

            resolve(result);
        });

    });
};

const add = (cliente) => {

    let model = new Usuario({

        username: cliente.username,
        clave: bcryptjs.hashSync(cliente.clave, 10),
        name: cliente.name
    });

    console.log(model);

    return new Promise((resolve, reject) => {

        model.save(model, (err, result) => {

            if (err) reject(err);
            resolve(result);
        });
    });
};

const remove = (id) => {

    let estado = { estado: 3 }

    let query = {
        _id: id
    };

    console.log(query);

    return new Promise((resolve, reject) => {

        //Usuario.findByIdAndUpdate()
        Usuario.findByIdAndUpdate(query, estado, (err, result) => {

            if (err) reject(err);

            resolve(result);
        });
    });
};

module.exports = {

    login: login,
    list: list,
    add: add,
    remove: remove,
    listAll: listAll

};