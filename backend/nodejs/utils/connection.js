const mongoose = require('mongoose');


function conectar(uri, options) {

    return new Promise((resolve, reject) => {

        mongoose.connect(uri, options, (err) => {

            if (err) {
                reject(err);
            }

            resolve(`base de datos: online`);
        })
    });
};

module.exports = conectar;