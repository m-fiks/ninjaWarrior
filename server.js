const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const expressHbs = require("express-handlebars");

app = express();

const PORT = process.env.PORT || 8080;

//static path
// app.use(express.static(path.join(__dirname, "/assets")))

app.get("/", (req,res) => {
    res.send("welcome to the game");
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`)
})

// testing branch merges