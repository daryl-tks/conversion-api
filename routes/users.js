var express = require('express');
var router = express.Router();
const connection = require('../connection');
const { validateUser } = require('../validations');

// @DESC - GET users
router.get('/', function (req, res) {
  const query = 'SELECT * FROM users';

  connection.query(query, (err, rows, fields) => {
    const data = { data: rows };
    !err ? res.send(data) : res.status(400).send({ err_msg: err });
  });
});

// @DESC - POST users
router.post('/', function (req, res) {
  const username = req.body.username;

  connection.query(
    'SELECT username FROM users WHERE username = ?',
    [username],
    (err, result) =>
      result.length &&
      res.status(400).send({ err_msg: 'Username already exist', code: 400 })
  );

  connection.query('INSERT INTO users SET ?', [{ username }], (err, result) =>
    console.log('result', result)
  );
});

module.exports = router;
