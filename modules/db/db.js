var mysql = require('mysql');
var pool  = null;

exports.connect = function() {
  // ENV=dev nodemon index.js
  // ENV=prod nodemon index.js
  let connection = {
    host: process.env.ENV == 'dev' ? 'localhost' : '127.0.0.1',
    user: process.env.ENV == 'dev' ? 'root' : 'root',
    pass: process.env.ENV == 'dev' ? '' : '',
    name: process.env.ENV == 'dev' ? 'tabebidaspremium' : 'tabebidaspremium',
    port: process.env.ENV == 'dev' ? '8889' : '8889'//
  }

  pool = mysql.createPool({
    connectionLimit : 10,
    host            : connection.host,
    user            : connection.user,
    password        : connection.pass,
    database        : connection.name,
    port            : connection.port
  });

  connection.connect;
};

exports.get = function() {
  return pool;
};
