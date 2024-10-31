const MySQLAdapter = require('@bot-whatsapp/database/mysql')

const adapterDB = new MySQLAdapter({
    host: process.env.MYSQL_DB_HOST,
    user: process.env.MYSQL_DB_USER,
    database: process.env.MYSQL_DB_NAME,
    password: process.env.MYSQL_DB_PASSWORD,
    port: process.env.MYSQL_DB_PORT,
});

module.exports = adapterDB; // Exporta el adaptador
