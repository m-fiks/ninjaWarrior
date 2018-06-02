// *** Dependencies
const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");
const db = require('./models')
const app = express();
const PORT = process.env.PORT || 8080;

//static path
app.use(express.static(path.join(__dirname, "/public")));

// Sets up the Express app to handle data parsing
app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/public/assets/index.html"));
})

// app.get("/", (req,res) => {
//     res.sendFile(path.join(__dirname, "/public/assets/index.html"));
// })

// Set Handlebars.
var exphbs = require("express-handlebars");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

require("./routes/apiroutes.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
});
