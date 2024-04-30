const mysql = require("mysql");
const config = require("../config.json");

const locationPool = mysql.createPool({
  user: config["db-username"],
  password: config["db-password"],
  database: config["db-name"],
  host: config["db-connection-string"],
  connectionLimit: 10
});

// locationPool.connect((err) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//   console.log("Connected to DB");
// });

const location = (User) => {
  (this.email = User.email), (this.location = User.location);
};

// Add a new location to a new user
location.createLocation = (email, location) => {
  return new Promise((resolve, reject) => {
    locationPool.query(
      "UPDATE users SET location = ? WHERE email = ?",
      [location, email],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          return reject(err);
        }

        if (res.affectedRows == 0) {
          return reject("Cant add location");
        }

        return resolve("added");
      }
    );
  });
};

location.getAll = () => {
  return new Promise((resolve, reject) => {
    locationPool.query(
      "SELECT DISTINCT location FROM users",
      [],
      (err, res) => {
        if(err){
          console.log("error: ", err);
          return reject(err);
        }
        if (res.length != 0) {
          return resolve(res);
        }
        // at this point
        return reject("no location found for user with email: " + email);
      }
    );
  });
};

// Get a users location
location.getLocation = (email) => {
  return new Promise((resolve, reject) => {
    locationPool.query(
      "SELECT location FROM users WHERE email = ?",
      email,
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          return reject(err);
        }
        // check if the result is not empty
        if (res.length != 0) {
          return resolve(res[0]);
        }
        // at this point
        return reject("no location found for user with email: " + email);
      }
    );
  });
};

// update a users location
location.updateLocation = (email, location) => {
  return new Promise((resolve, reject) => {
    locationPool.query(
      "UPDATE users SET location = ? WHERE email = ?",
      [location, email],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          return reject(err);
        }

        if (res.affectedRows == 0) {
          return reject("Cant update non-existent location");
        }

        return resolve("updated");
      }
    );
  });
};

// delete a users location
location.deleteLocation = (email) => {
  return new Promise((resolve, reject) => {
    locationPool.query(
      "UPDATE users SET location = ? WHERE email = ?",
      ["", email],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          return reject(err);
        }

        if (res.affectedRows == 0) {
          return reject("Cant delete non-existent location");
        }

        return resolve("deleted");
      }
    );
  });
};

module.exports = location;
