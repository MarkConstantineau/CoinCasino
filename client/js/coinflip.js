
let result = document.querySelector("#winner");
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let headAmount = document.getElementById("heads-tag");
let tailsAmount = document.getElementById("tails-tag");
let headsButton = document.querySelector("#heads-button");
let tailsButton = document.querySelector("#tails-button");
let cancelButton = document.querySelector("#cancel-bet");
let realBalance = localStorage.getItem("realBalance");
let actualRealBalance = parseInt(realBalance);
let currentBalance = document.getElementById("balance")
var newBalance = 0;
var balanceHeads = 0;
var balanceTails = 0;
var checkamount = 0;
var userID = localStorage.getItem("user_id");
var useToCheck = localStorage.getItem("useMeToCheck");
var useToActuallyCheck = parseInt(useToCheck);





 

function bet(side) {

    let bet = document.getElementById("bet").value
    
    let params = "id="+userID+"&bet="+bet+"&side="+side
    
    let req = new XMLHttpRequest()

    //attach a function to the onreadystatechange property of req object
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);

            if (data.error) {
                alert(data.error)
                return
            }

            if (data.flip == "tails") {
                
                    coin.style.animation = "spin-tails 3s forwards";
                

                setTimeout(function(){
                    coin.style.animation = ""
                    result.innerText = "Tails is the winner!" 
                    currentBalance.innerText = data["message"] + " Coins"
                }, 3000);
            } else {
                    coin.style.animation = "spin-heads 3s forwards";
               

                setTimeout(function(){
                    coin.style.animation = ""
                    result.innerText = "Heads is the winner!" 
                    currentBalance.innerText = data["message"] + " Coins"
                }, 3000);
            }
        }
    }

    req.open("POST", "coinflip", true)
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.send(params)

    result.innerText = ""
    resetFields();
    resetValues();
    resetButtons();
}


function headsWins() {
result.innerText = "Heads is winner!";
}

function tailsWins() {
result.innerText = "Tails is winner!"
}

function resetFields() {
    document.getElementById("heads-tag").value = "0";
    document.getElementById("tails-tag").value = "0";
}

function resetValues() {
    balanceHeads = 0;
    balanceTails = 0;
}

function resetButtons() {
    headsButton.disabled = true;
    tailsButton.disabled = true;
    cancelButton.disabled = true;
    setTimeout(function(){
        tailsButton.disabled = false;
        headsButton.disabled = false;
        cancelButton.disabled = false;
    },3000);
}


function cancelEverything() {
    document.getElementById("heads-tag").value = "0";
    document.getElementById("tails-tag").value = "0";
    tailsButton.disabled = false;
    headsButton.disabled = false;
}

