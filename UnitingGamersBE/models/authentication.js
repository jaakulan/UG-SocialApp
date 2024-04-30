const mysql = require('mysql');
const config = require("../config.json");

const authPool = mysql.createPool({
    user: config["db-username"],
    password: config["db-password"],
    host: config["db-connection-string"],
    database: config["db-name"],
    connectionLimit: 10,
    port: 3306
});

// authPool.connect((err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
// })

// Repersents a tuple in the database
let authDatabaseTuple = function(User) {
    this.name = User.name;
    this.username = User.username;
    this.email = User.email;
    this.password = User.password;
}

authDatabaseTuple.signup = (name, username, email, password) => {
    return new Promise((resolve, reject) => {
        authPool.query(
            'INSERT INTO users SET name = ?, username = ?, email = ?, password = ?',
            [name, username, email, password],
            (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    return reject(err);
                }
                if (res.affectedRows == 0) {
                    return reject("Error");
                }
                return resolve("Success");
            });
    });
};

authDatabaseTuple.login = (email, password) => {
    return new Promise((resolve, reject) => {
        authPool.query(
            'SELECT * FROM users WHERE email = ? and password = ?',
            [email, password],
            (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    return reject(err);
                }
                if (res.length == 1) {
                    return resolve("Success");
                }
                return reject("Error");
            });
    });
};

module.exports = authDatabaseTuple;
