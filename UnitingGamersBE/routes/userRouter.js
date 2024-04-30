const express = require('express');
const db = require('../models/user');
const router = express.Router();


/* Get a user's username according to a user's email.
*/
router.get('/username/:email', async (req, res) => {
    try {
        let results = await db.usernameByEmail(req.params.email);
        res.json(results);
    } catch(err) {
        console.log(err);
        res.status(400).json({
          error: 'Could not retrieve username'
        })
    }
});

/* Get a user's name according to a user's email.
*/
router.get('/name/:email', async (req, res) => {
    try {
        let results = await db.nameByEmail(req.params.email);
        res.json(results);
    } catch(err) {
        console.log(err);
        res.status(400).json({
          error: 'Could not retrieve name'
        })
    }
});

module.exports = router;