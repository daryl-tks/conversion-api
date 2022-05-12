var express = require('express');
var router = express.Router();
const connection = require('../connection');
const { validateUser } = require('../validations');

// @DESC - GET users
router.get('/', function (req, res) {
  const query = 'SELECT * FROM users';

  connection.query(query, (err, result) => {
    !err ? res.send({ data: result }) : res.status(400).send({ err_msg: err });
  });
});

// @DESC - POST users
router.post('/', function (req, res) {
  const username = req.body.username;

  connection.query(
    'SELECT username FROM users WHERE username = ?',
    [username],
    (err, result) => {
      if (result.length) {
        res.status(400).send({ error: 'Username already exist', code: 400 });
      } else {
        connection.query(
          'INSERT INTO users SET ?',
          [{ username }],
          (error, result) =>
            result.insertId
              ? res
                  .status(201)
                  .send({ message: 'Successfully created new user' })
              : res.status(400).send({ error, code: 400 })
        );
      }
    }
  );
});

module.exports = router;
