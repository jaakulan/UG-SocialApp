const express = require('express');
const router = express.Router();
const gameCard = require("../models/gameCardModel");

router.get('/games', (request, response) => {
    return {
        game1: "Apex",
        game2: "Fortnite",
        game3: "Overwatch"
    }
});

router.post("/create-gamecard", async (request, response) => {
    if(!request.body.game || !request.body.gamertag || !request.body.email){
        return response.status(400).json({message: "Bad request, please provide a email, "});
    }
    // should probably error check each body field but too lazy
    game = request.body.game
    gamertag = request.body.gamertag
    email = request.body.email
    platform = request.body.platform

    // need to insert into db
    try{
        let success = await gameCard.createGameCard(email, game, gamertag, platform);
        return response.status(200).json(success);
    } catch(e){
        console.log(e);
        return response.status(400).json(e);
    }
});

router.get("/get-gamecards/:email", async (request, response) => {
    if(!request.params){
        return response.status(400).json({message: "Bad request, please provide a usersname and a game"});
    }

    try{
        let card = await gameCard.getGameCards(request.params.email);
        return response.status(200).json(card);
    } catch(e){
        console.log(e);
        return response.status(404).json(e);
    }
});

router.put("/update-gamecard", async (request, response) => {
    if(!request.body){
        return response.status(400).json({message: "Bad request, please provide a email, "});
    }
    // should probably error check each body field but too lazy
    game = request.body.game
    gamertag = request.body.gamertag
    email = request.body.email
    platform = request.body.platform

    try{
        let success = await gameCard.updateGameCard(email, game, gamertag, platform);
        return response.status(200).json(success);
    } catch(e){
        console.log(e);
        return response.status(400).json(e);
    }
});

router.delete("/delete-gamecard/:email/:game", async (request, response) => {
    if(!request.params){
        return response.status(400).json({message: "Bad request, please provide a email and a game"});
    }

    try{
        let success = await gameCard.deleteGameCard(email, game);
        return response.status(200).json(success);
    } catch(e){
        console.log(e);
        return response.status(400).json(e);
    }
});

module.exports = router;