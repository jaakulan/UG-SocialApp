const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const db = require('../models/authentication');
const dotenv = require('dotenv');
dotenv.config();

function generateToken(email) {
    return jwt.sign(email, process.env.TOKEN_SECRET, {});
}

router.post("/signup", async (request, response) => {
    if (!(request.body.name || request.body.username || request.body.password || request.body.email)) {
        return response.status(400).json({ message: "Credentials Missing" });
    }
    try {
        // Ensure user does not already exist

        var { name, username, email, password} = request.body;
        
        let data = await db.signup(name, username, email, password);

        if (data != "Success") {
            return response.sendStatus(400);
        }
        return response.sendStatus(201);
    } catch(err) {
        console.log(err);
        return response.status(400).json(err);
    }
});

router.post("/login", async (request, response) => {
    if (!(request.body.email || request.body.password)) {
        return response.status(400).json({ message: "Credentials Missing" });
    }
    try {
        var {email, password} = request.body;
        
        let data = await db.login(email, password);

        if (data != "Success") {
            return response.sendStatus(400);
        }
        const token = generateToken({ email : email});
        return response.status(200).json({ token: token, email: email});

    } catch(err) {
        return response.status(400).json(err);
    }
});

module.exports = router;
