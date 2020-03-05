const mongoose = require('mongoose');
const Schema = mongoose.Schema

const usuario = new Schema({

    username: { type: String, unique: true, required: [true, 'El email es requerido'] },
    clave: { type: String, required: true },
    name: { type: String, required: true },
    estado: { type: Number, default: 1 }
});

const model = mongoose.model('Usuario', usuario);
module.exports = model