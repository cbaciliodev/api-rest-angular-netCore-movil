const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const usuario = new Schema({

    username: { type: String, unique: true, required: [true, 'El Email es requerido'] },
    clave: { type: String },
    estado: { type: Number, default: 1 }
});

const model = mongoose.model('Usuario', usuario)

module.exports = model;

