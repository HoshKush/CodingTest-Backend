const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'cosmo.cbome6leip4k.ap-northeast-2.rds.amazonaws.com',
    user: 'master',
    password : '12345678',
    port: 3306,
    database: 'mydb'
});

module.exports = connection;
