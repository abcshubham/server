const mysql = require('mysql');

function connect() {
    const connection = mysql.createConnection({
        host: '172.17.0.1',
        user: 'root',
        password: 'manager',
        database: 'dac_feb_2019',
        port:8265
    });

    connection.connect();
    return connection;
}

module.exports = {
    connect: connect
};
