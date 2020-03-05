const jwt = require('jsonwebtoken');
const secret = require('../configuration/keys');

const token = (data) => {

   return jwt.sign(data, secret.seed, secret.time);

};

module.exports = token;

