var mysql = require('mysql2');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'daryl',
  password: 'D@rylSinon1993',
  database: 'khelraja',
});

connection.connect((error) => {
  if (!!error) {
    console.log('ERROR', error);
  } else {
    console.log('CONNECTED');
  }
});

connection.end();
