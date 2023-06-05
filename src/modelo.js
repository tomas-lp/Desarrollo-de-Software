const mysql = require('mysql');
require('dotenv').config({path: '../.env'})

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'desarrollo-7',
  port: process.env.DBConnectionPort || 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar con la base de datos:', err);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

module.exports = connection;