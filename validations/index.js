var express = require('express');
const res = require('express/lib/response');
var router = express.Router();
const connection = require('../connection');

const validateUser = ({ username }) => {
  return connection.query(
    'SELECT username FROM users WHERE username = ?',
    [username],
    (err, result) => result.length
  );
};

module.exports = { validateUser };
