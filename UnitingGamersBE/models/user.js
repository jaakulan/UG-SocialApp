const mysql = require('mysql');
const config = require('../config.json');

const usersPool = mysql.createPool({
    password: config['db-password'],
    user: config['db-username'],
    database: 'UG',
    host: config['db-connection-string'],
    port: '3306'
});

let usersDB = function(User){
    this.email = User.email; // email
    this.name = User.name; // name
    this.location = User.location; // location
    this.username = User.username; // username
    this.password = User.password; // password
    this.description = User.description; // description
};

/* Get a user's username according to a user's email.
*/
usersDB.usernameByEmail = (email) => {
    return new Promise((resolve, reject)=>{
        usersPool.query('SELECT username from users WHERE email = ?', 
        [email], 
        (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

/* Get a user's name according to a user's email.
*/
usersDB.nameByEmail = (email) => {
    return new Promise((resolve, reject)=>{
        usersPool.query('SELECT name from users WHERE email = ?', 
        [email], 
        (err, results)=>{
            if(err){
                return reject(err);
            }
            return resolve(results);
        });
    });
};

module.exports = usersDB;