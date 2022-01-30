const e = require('cors');
const { response } = require('express');
const res = require('express/lib/response');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'coin_casino'
});


connection.connect(function(err) {
    if(err) throw err;
    console.log('Connected to MySQL');
})

var services = function(server) {
    server.post('/write-record', function(req,res) {
        
        var data = {
            user_email: req.body.user_email,
            user_pass: req.body.user_pass
        };

        
        var emailCheck = [
            req.body.user_email
        ]
        
        var insertInto = function(data) {
            connection.query("INSERT INTO user_info SET ?" , data);
            console.log("Email successfully added to database");
        }
        
        connection.query("SELECT * FROM user_info WHERE user_email = ?" , emailCheck, function(err, results) {
            console.log(emailCheck);
            console.log(results);
            if(results.length != 0) {
                return res.status(201).send(JSON.stringify({msg: "Email already in use! " + err}));
            } 
             else {
                insertInto(data);
            }
        });
    });

    
    server.get('/userlogin', function(req,res) {
        console.log("User Login")
        var data = [
            req.query.user_email,
            req.query.user_pass
            
        ];

        connection.query("SELECT * FROM user_info WHERE user_email = ? AND user_pass = ? "  , data, function(err, results) {
            console.log(results);
            if(err) {
                return res.status(201).send(JSON.stringify({msg: "Error: " + err}));
            } 
             else {
               
                if (results.length > 0) {
                    return res.status(200).send(JSON.stringify({msg: "Success", user_data:results}));
                } else {
                    return res.status(200).send(JSON.stringify({msg: "Invalid email or pass "}));
                }
            }
        });
    });


    //This is FOR MY ADDFUNDS BUTTON(s)
    server.post("/idwithBalance5", (req, res) => {

        
        let id = req.body.id
        var moneyAmount = req.body.my_message
        
        connection.query("SELECT user_balance FROM user_info WHERE id = ?", id, function(err, results) {
            console.log(results);
            if(err) {
                return res.status(201).send(JSON.stringify({msg: "Error: " + err}));
            } 

            let newBalance = parseInt(results[0].user_balance) + parseInt(moneyAmount)

            connection.query("UPDATE user_info SET user_balance = ? WHERE id = ? ", [newBalance, id], function(err, results) {
                console.log(results);
                
            })
        });
    })

    server.post("/idwithBalance10", (req, res) => {

        
        let id = req.body.id
        var moneyAmount = req.body.my_message
        
        connection.query("SELECT user_balance FROM user_info WHERE id = ?", id, function(err, results) {
            console.log(results);
            if(err) {
                return res.status(201).send(JSON.stringify({msg: "Error: " + err}));
            } 

            let newBalance = parseInt(results[0].user_balance) + parseInt(moneyAmount)

            connection.query("UPDATE user_info SET user_balance = ? WHERE id = ? ", [newBalance, id], function(err, results) {
                console.log(results);
                
            })
        });
        

    })

    server.post("/idwithBalance25", (req, res) => {

       
        let id = req.body.id
        var moneyAmount = req.body.my_message
        
        connection.query("SELECT user_balance FROM user_info WHERE id = ?", id, function(err, results) {
            console.log(results);
            if(err) {
                return res.status(201).send(JSON.stringify({msg: "Error: " + err}));
            } 

            let newBalance = parseInt(results[0].user_balance) + parseInt(moneyAmount)

            connection.query("UPDATE user_info SET user_balance = ? WHERE id = ? ", [newBalance, id], function(err, results) {
                console.log(results);
                
            })
        });
        

    })

    server.post("/idwithBalance50", (req, res) => {

     
        let id = req.body.id
        var moneyAmount = req.body.my_message
        
        connection.query("SELECT user_balance FROM user_info WHERE id = ?", id, function(err, results) {
            console.log(results);
            if(err) {
                return res.status(201).send(JSON.stringify({msg: "Error: " + err}));
            } 

            let newBalance = parseInt(results[0].user_balance) + parseInt(moneyAmount)

            connection.query("UPDATE user_info SET user_balance = ? WHERE id = ? ", [newBalance, id], function(err, results) {
                console.log(results);
                
            })
        });
        

    })

    server.post("/idwithBalance100", (req, res) => {

       
        let id = req.body.id
        var moneyAmount = req.body.my_message
        
        connection.query("SELECT user_balance FROM user_info WHERE id = ?", id, function(err, results) {
            console.log(results);
            if(err) {
                return res.status(201).send(JSON.stringify({msg: "Error: " + err}));
            } 

            let newBalance = parseInt(results[0].user_balance) + parseInt(moneyAmount)

            connection.query("UPDATE user_info SET user_balance = ? WHERE id = ? ", [newBalance, id], function(err, results) {
                console.log(results);
                
            })
        });
        

    })


    server.post("/coinflip", (req, res) => {
        let id = req.body.id
        let bet = req.body.bet
        let side = req.body.side
        

        connection.query("SELECT user_balance FROM user_info WHERE id = ?" , id, function(err, results) {
            
            
            if(err) {
                return res.status(201).send(JSON.stringify({msg: "Error: " + err}));
            } 

            let currentBalance = parseInt(results[0].user_balance);

            if (bet > currentBalance || bet < 100) {
                res.send({
                    error: "Bet is too low or not enough balance"
                })
                return
            }

            let flip = Math.random() < 0.5
            if ((flip <= 0.5 && side == "tails") || (flip > 0.5 && side == "heads")) {
                currentBalance += parseInt(bet)
            } else {
                currentBalance -= bet
            }

            connection.query("UPDATE user_info SET user_balance = ? WHERE id = ?", [currentBalance, id], function (err, results) {
                console.log(results)
            })
            res.send({
                flip: flip <= 0.5? "tails" : "heads",
                message: currentBalance
            })
        })
    })

    server.post("/rolldice", (req, res) => {
        let id = req.body.id
        let bet = req.body.bet
        
        connection.query("SELECT user_balance FROM user_info WHERE id = ?" , id, function(err, results) {
            
            if(err) {
                return res.status(201).send(JSON.stringify({msg: "Error: " + err}));
            } 

            let currentBalance = parseInt(results[0].user_balance);

            if (bet > currentBalance || bet < 100) {
                res.send({
                    error: "Bet is too low or not enough balance"
                })
                return
            }


            let playerD1 = Math.floor(Math.random() * (6 - 1)) + 1;
            let playerD2 = Math.floor(Math.random() * (6 - 1)) + 1;
            let houseD1 = Math.floor(Math.random() * (6 - 1)) + 1;
            let houseD2 = Math.floor(Math.random() * (6 - 1)) + 1;

            if (playerD1 + playerD2 > houseD1 + houseD2) {
                currentBalance += parseInt(bet)
            } else {
                currentBalance -= bet
            }

            connection.query("UPDATE user_info SET user_balance = ? WHERE id = ?", [currentBalance, id], function (err, results) {
                console.log(results)
            })
            res.send({
                rolls: [playerD1, playerD2, houseD1, houseD2],
                message: currentBalance
            })
        })
    })

    server.get("/getHeadsBalance", (req, res) => {
        let id = req.query.id

        connection.query("SELECT user_balance FROM user_info WHERE id = ?" , id , function(err, results ) {
            
            res.send({
                bettingBalance: results[0].user_balance
            })

        })

    })


    server.get("/balance" , (req, res) => {
        let id = req.query.id
        let balance = req.query.balance
    
        connection.query("SELECT user_balance FROM user_info WHERE id = ?" , id , function(err, results ) {
            
            res.send({
                data: results[0].user_balance
            })

        })

    })
    

};




module.exports = services;





