import mysql from "../configs/mysql.js";

/*
export const getAllUsers = (req, res) => {
  mysql.getConnection((error, connection) => {
    if (error) {
      res.status(500).send(error);
    } else {
      connection.query("SELECT * FROM users ORDER BY id DESC", (error, rows) => {
        connection.release();
        if (error) {
          res.status(500).send(error);
        } else {
          res.send(rows);
        }
      });
    }
  });
};
*/

export const getAllUsers = (req, res) => {
  mysql.query("SELECT * FROM users ORDER BY id DESC", (error, rows) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send(rows);
    }
  });
};

/*
export const getUserById = (req, res) => {
  mysql.getConnection((error, connection) => {
    if (error) {
      res.status(500).send(error);
    } else {
      const { id } = req.params;
      connection.query(
        "SELECT * FROM users WHERE id = ?",
        [id], (error, rows) => {
          connection.release();
          if (error) {
            res.status(500).send(error);
          } else {
            if (rows.length > 0) {
              res.send(rows);
            } else {
              res.status(404).send("user is not found.");
            }
          }
        }
      );
    }
  });
};
*/

export const getUserById = (req, res) => {
  const id = req.params.id;
  mysql.query("SELECT * FROM users WHERE id = ?", [id], (error, rows) => {
    if (error) {
      res.status(500).send(error);
    } else {
      if (rows.length > 0) {
        res.send(rows);
      } else {
        res.status(404).send("user is not found.");
      }
    }
  });
};

/*
export const createUser = (req, res) => {
  mysql.getConnection((error, connection) => {
    if (error) {
      res.status(500).send(error);
    } else {
      const { name, address, age } = req.body;
      connection.query(
        "INSERT INTO users (name, address, age) VALUES (?, ?, ?)",
        [name, address, age],
        (error, rows) => {
          connection.release();
          if (error) {
            res.status(500).send(error);
          } else {
            rows.message = `user with id ${rows.insertId} is created.`;
            res.send(rows.message);
          }
        }
      );
    }
  });
};
*/

export const createUser = (req, res) => {
  const { name, address, age } = req.body;
  mysql.query(
    "INSERT INTO users (name, address, age) VALUES (?, ?, ?)",
    [name, address, age],
    (error, rows) => {
      if (error) {
        res.status(500).send(error);
      } else {
        rows.message = `user with id ${rows.insertId} is created.`;
        res.send(rows.message);
      }
    }
  );
};

/*
export const updateUser = (req, res) => {
  mysql.getConnection((error, connection) => {
    if (error) {
      res.status(500).send(error);
    } else {
      const { id } = req.params;
      const { name, address, age } = req.body;
      connection.query(
        "UPDATE users SET name = ?, address = ?, age = ? WHERE id = ?",
        [name, address, age, id],
        (error, rows) => {
          connection.release();
          if (error) {
            res.status(500).send(error);
          } else {
            if (rows.affectedRows > 0) {
              res.send(`user with id ${id} is updated.`);
            } else {
              res.status(404).send("user is not found.");
            }
          }
        }
      );
    }
  });
};
*/

export const updateUser = (req, res) => {
  const id = req.params.id;
  const { name, address, age } = req.body;
  mysql.query(
    "UPDATE users SET name = ?, address = ?, age = ? WHERE id = ?",
    [name, address, age, id],
    (error, rows) => {
      if (error) {
        res.status(500).send(error);
      } else {
        if (rows.affectedRows > 0) {
          res.send(`user with id ${id} is updated.`);
        } else {
          res.status(404).send("user is not found.");
        }
      }
    }
  );
};

/*
export const deleteUser = (req, res) => {
  mysql.getConnection((error, connection) => {
    if (error) {
      res.status(500).send(error);
    } else {
      const id = req.params.id;
      connection.query(
        "DELETE FROM users WHERE id = ?",
        [id],
        (error, rows) => {
          connection.release();
          if (error) {
            res.status(500).send(error);
          } else {
            if (rows.affectedRows > 0) {
              res.send(`user with id ${id} is deleted.`);
            } else {
              res.status(404).send("user is not found.");
            }
          }
        }
      );
    }
  }); 
};
*/

export const deleteUser = (req, res) => {
  const id = req.params.id;
  mysql.query("DELETE FROM users WHERE id = ?", [id], (error, rows) => {
    if (error) {
      res.status(500).send(error);
    } else {
      if (rows.affectedRows > 0) {
        res.send(`user with id ${id} is deleted.`);
      } else {
        res.status(404).send("user is not found.");
      }
    }
  });
};
