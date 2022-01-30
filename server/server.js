const express = require('express');
const cors = require('cors');
const server = express();
const path = require('path');
const bodyParser = require('body-parser');

server.use(cors());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin' , '*');
    next();
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: false}));
server.use("/client", express.static(path.resolve(__dirname + "/../client")));


var coinServer;
var port = 7777;

//Page Listeners

var router = require("./router.js");
router(server);


// Services Listener

var services = require("./services.js");
services(server);


//listen 

coinServer = server.listen(port,function(err) {
    if(err) throw err;

    console.log("Listening on port: " + port);
})