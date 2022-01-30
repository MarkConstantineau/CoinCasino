var buttonRoll = document.getElementById("button-roll");
var rollResultOne = document.getElementById("roll-resultOne");
var rollResultTwo = document.getElementById("roll-resultTwo");
var userID = localStorage.getItem("user_id");
let currentBalance = document.getElementById("balance")

function diceRoll() {

    var diceOne = document.getElementById("dice-one");
    var diceTwo = document.getElementById("dice-two");
    var diceThree = document.getElementById("dice-three");
    var diceFour = document.getElementById("dice-four");
    
    let bet = document.getElementById("bet").value
    
    let params = "id="+userID+"&bet="+bet
    
    let req = new XMLHttpRequest()

    
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            if (data.error) {
                alert(data.error)
                return
                }
            currentBalance.innerText = data["message"] + " Coins"
            let roll = data.rolls

            diceOne.innerHTML = roll[0];
            diceTwo.innerHTML = roll[1];
            diceThree.innerHTML = roll[2];
            diceFour.innerHTML = roll[3];
         
            let playerTotal = roll[0] + roll[1]
            let houseTotal = roll[2] + roll[3]

            rollResultOne.innerHTML = 'You rolled ' + playerTotal + '.';
            rollResultTwo.innerHTML = 'The house rolled ' + houseTotal + '.';
        }
    }

    req.open("POST", "rolldice", true)
    req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    req.send(params)

}





buttonRoll.addEventListener("click", diceRoll);