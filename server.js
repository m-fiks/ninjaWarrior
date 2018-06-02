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
const db = require('./models')


const app = express();

const PORT = process.env.PORT || 8080;

//static path
app.use(express.static(path.join(__dirname, "/public")));

// Requiring our models for syncing


// Sets up the Express app to handle data parsing

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/public/assets/index.html"));
})

// app.get("/", (req,res) => {
//     res.sendFile(path.join(__dirname, "/public/assets/index.html"));
// })


// Set Handlebars.
var exphbs = require("express-handlebars");

//app.engine("handlebars", exphbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Handlebars
//app.engine("handlebars", expressHbs({ defaultLayout: "main" }));
//app.set("view engine", "handlebars");

// Static directory
// app.use(express.static("public"));

// Routes
// =============================================================
require("./routes/apiroutes.js")(app);

require("./routes/html-routes.js")(app);

// app.listen(PORT, () => {
//     console.log(`listening on 8080`)
// })

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});
  

// testing branch merges