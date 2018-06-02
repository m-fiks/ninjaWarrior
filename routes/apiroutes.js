// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// Require our Ninja model
// Requiring our models
var db = require("../models");

//Routes
//==============================================================
module.exports = function(app){
    //Get all character Ninja routes
    app.get('/api/allusers', function(req,res){
        db.ninjaTables.findAll({}).then(function(dbUser){
            console.log(dbUser)
            res.json(dbUser)
        })
    });

    //add new user to db
    app.post("/api/new", (req,res) => {
        //console.log(req.body)
        db.ninjaTables.create({
            username: req.body.username,
            score: req.body.score
        }).then((results) => {
            //console.log(results.id);
            res.send(results.id);
            res.end();
        })
    })
    

    //send scores
    app.post('/api/scores', (req,res) => {
        console.log(req.body);
        res.send(req.body);
    })

    app.get('/api/scores', (req,res) => {
        console.log(req)
    })

    //Get specific character route

    //Add a ninja username 

    //Delete a ninja username

}