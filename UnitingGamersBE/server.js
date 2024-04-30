const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors")
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const authenticationRouter = require('./routes/authenticationRouter');
const descriptionRouter = require('./routes/descriptionRouter');
const imageRouter = require('./routes/imageRouter');
const locationRouter = require('./routes/locationRouter');
const gamesRouter = require('./routes/gamesRouter');
const gameStatsRouter = require("./routes/gameStatsRouter");
const connectionsRouter = require('./routes/connectionsRouter');
const friendsRouter = require('./routes/friendsRouter');
const userRouter = require('./routes/userRouter');
const gameCardRouter = require("./routes/gameCardRouter");

dotenv.config();

const checkToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (token == null) {
    return res.sendStatus(401);
  }
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.sendStatus(403); //forbidden
    }
    req.user = user;
    next();
  })
};

const app = express();

app.use(express.json());

// add checkToken middleware
app.use('/api/auth', authenticationRouter);
app.use('/api/descriptions', descriptionRouter);
app.use('/api/images', imageRouter.router);
app.use('/api/location', locationRouter);
app.use('/api/games', gamesRouter);
app.use('/api/game-stats', gameStatsRouter);
app.use('/api/game-card', gameCardRouter);
app.use('/api/connections', connectionsRouter);
app.use('/api/friends', friendsRouter);
app.use('/api/user', userRouter);

app.use(express.static('static_content'));
app.use(cors());
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", checkToken, (req, res) => {
  res.status(200).json({ message: "Welcome to Thomas." });
});

app.use("/test-html", express.static(__dirname + '/test-HTML'));


app.listen(process.env.PORT || 5000)

// if (localStorage.getItem("email") === null || localStorage.getItem("token") === null) {
//}
