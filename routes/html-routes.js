// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html
    // app.get("/userAccess", function (req, res) {
    //     res.sendFile(path.join(__dirname, " ....sign up page link goes here...."));
    // });

    
    app.get("/", function (req, res) {
        res.render(path.join(__dirname, "../views/layouts/main.handlebars"));
    });

    
    app.get("/index", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/index.html"));
    });

    // authors route loads author-manager.html
    // app.get("/about", function (req, res) {
    //     res.sendFile(path.join(__dirname, "../public/.......html...."));
    // });

};