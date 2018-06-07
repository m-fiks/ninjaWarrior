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
            //include : [{model : DB.User, limit 5}],
            order : [['score', 'DESC']],
            limit : 10
        }).then(function(ninjaScore){
            res.json(ninjaScore);
        });
    });

    //Get specific character route

    //Add a ninja username 

    //Delete a ninja username

}