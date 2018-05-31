// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

const app = express();

const PORT = process.env.PORT || 8080;


//static path
app.use(express.static(path.join(__dirname, "/public")));

// Requiring our models for syncing
var db = require('./models')


// Sets up the Express app to handle data parsing


app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/public/assets/index.html"));
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


// Static directory
// app.use(express.static("public"));

// Routes
// =============================================================
// require("./routes/api-routes.js")(app);

// app.listen(PORT, () => {
//     console.log(`listening on 8080`)
// })

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});
  

// testing branch merges