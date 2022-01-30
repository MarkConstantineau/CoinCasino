const path = require('path');

//Page Listener 



var router = function(server) {
    server.get('/', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/frontpage.html"));
    });

    server.get('/createacc', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/createacc.html"));
    });

    server.get('/login', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/login.html"));
    });

    server.get('/home', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/home.html"));
    });

    server.get('/addfunds', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/addfunds.html"));
    });

    server.get('/addfunds500', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/addfunds500.html"));
    });

    server.get('/addfunds1000', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/addfunds1000.html"));
    });

    server.get('/addfunds2500', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/addfunds2500.html"));
    });

    server.get('/addfunds5000', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/addfunds5000.html"));
    });

    server.get('/addfunds10000', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/addfunds10000.html"));
    });

    server.get('/games', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/games.html"));
    });

    server.get('/coinflip', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/coinflip.html"));
    });

    server.get('/dice', function(req, res) {
        res.status(200).sendFile(path.join(__dirname + "/../client/dice.html"));
    });

    

};

module.exports = router;