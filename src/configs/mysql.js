import mysql from "mysql";

/**
 * Configure MySQL:
 */
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "nodejs_users_db",
});

export default pool;
