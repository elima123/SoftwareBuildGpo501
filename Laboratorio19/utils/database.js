const mariadb = require("mariadb");

const pool = mariadb.createPool({
    host:"localhost",
    user:"root",
    password:"password",
    database: "users_test",
    connectionLimit:5
});

module.exports = async () => {
    try {
        const connection = await pool.getConnection();
        return connection;
    } catch (error) {
        throw error; // Re-throw the error for proper handling
    }
};