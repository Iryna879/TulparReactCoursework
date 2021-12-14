const mysql = require('mysql2');
const connection = {
    host     : 'localhost',
    user     : 'root',
    password : '0202Irysuk',
    database : 'medicalcenterdb'
};
const pool = mysql.createPool(connection);
module.exports = pool;
