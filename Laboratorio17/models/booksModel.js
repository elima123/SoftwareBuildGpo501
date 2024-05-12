// models/booksModel.js

const mariadb = require("mariadb");
const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "test",
    connectionLimit: 5
});

// Define el modelo de libros
const BooksModel = {
    getAllBooks: async () => {
        let conn;
        try {
            conn = await pool.getConnection();
            const rows = await conn.query("SELECT * FROM books");
            return rows;
        } catch (error) {
            throw error;
        } finally {
            if (conn) {
                conn.end();
            }
        }
    }
};

module.exports = BooksModel;
