// Requiring our models
var db = require("../models");

// Routes
module.exports = function(app){
    //Get all character Ninja routes
    app.get('/api/allusers', function(req,res){
        db.ninjaTables.findAll({}).then(function(dbUser){
            //console.log(dbUser)
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
            //res.end();
            res.json({ id: results.id });
        })
    })
        
    //send scores
    app.put('/api/:id', (req,res) => {
        //console.log(`PARAMS: ${req.params.id}`);
        //res.send(req.body);
        db.ninjaTables.update({
            score: req.body.score
        }, {
            where: {
                id: req.params.id
            }
        }).then((results) => {
            res.json(results)
        })
    })

    app.get('/api/scores', (req,res) => {
        db.ninjaTables.findAll({  
            where: {
                score: 200
            }

        }).then(function(dbUser){
            console.log(dbUser);
            //db.ninjaTables.findAll({ attributes: ['score'] }).then(function(dbUser){    
            //console.log(dbUser)
            //console.log(res.json(dbUser) + "this is the api scores route");
            //console.log(dbUser[0].dataValues.username);
            //console.log(dbUser[0].dataValues.score);
            //res.json(dbUser)
        });
        //console.log(req + "this is the request")
        //console.log(res + "this is the response");
    });

    //Get specific character route

    //Add a ninja username 

    //Delete a ninja username

}