const mysql = require("mysql");
const config = require("../config.json");

const gameCardPool = mysql.createPool({
  user: config["db-username"],
  password: config["db-password"],
  database: config["db-name"],
  host: config["db-connection-string"],
  connectionLimit: 10
});

// gameCardPool.connect((err) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log("Connected to DB");
//   });
  

const GameCard = (GameCard) => {
  (this.email = GameCard.email),
    (this.game = GameCard.game),
    (this.gamertag = GameCard.gamertag), // in game name
    (this.platform = GameCard.platform);
};

GameCard.createGameCard = (email, game, gamertag, platform) => {
  return new Promise((resolve, reject) => {
    const GameCard = {
      email: email,
      game: game,
      gamertag: gamertag,
      platform: platform,
    };
    const newGameCard = new GameCard(GameCard);

    gameCardPool.query(
      "INSERT INTO gamecards SET ?",
      newGameCard,
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          return reject(err);
        }
        return resolve("added");
      }
    );
  });
};

// get gamecard for user for the specified game
GameCard.getGameCards = (email) => {
  return new Promise((resolve, reject) => {
    gameCardPool.query(
      "SELECT * FROM gamecards WHERE email = ?",
      [email],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          return reject(err);
        }
        // check if the result is not empty
        if (res.length != 0) {
          return resolve(res); // might be res[0]
        }
        // at this point
        return reject(
          "no gamecard exists for user " + email + " for the game " + game
        );
      }
    );
  });
};

GameCard.updateGameCard = (email, game, gamertag, platform) => {
  return new Promise((resolve, reject) => {
    gameCardPool.query(
      "UPDATE gamecards SET gamertag = ? AND platform = ? WHERE email = ? AND game = ? ",
      [gamertag, platform, email, game],
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

GameCard.deleteGameCard = (email, game) => {
  return new Promise((resolve, reject) => {
    locationPool.query(
      "DELETE FROM gamecards WHERE email = ? AND game = ?",
      [email, game],
      (err, res),
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          return reject(err);
        }
        // cant delete location that doesnt exist
        if (res.affectedRows == 0) {
          return reject("Cant delete non-existent game");
        }
        return resolve("deleted");
      }
    );
  });
};

module.exports = GameCard;
