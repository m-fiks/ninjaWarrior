const express = require("express");
const path = require("path");
var bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 8080;

var db = require("./models");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//static path
// app.use(express.static(path.join(__dirname, "/assets")));
app.use(express.static("public"));

app.get("/", (req,res) => {
    res.send("welcome to the game");
})

require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("App listening on PORT " + PORT);
    });
});