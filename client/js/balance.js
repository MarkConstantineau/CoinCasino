window.addEventListener("load", event => {

    const userID = localStorage.getItem("user_id");
    const currentBalance = document.getElementById("balance");
    
    

    
    

    let req = new XMLHttpRequest()
    
    
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            
             
            var newBalance = JSON.parse(this.responseText)
            localStorage.setItem("realBalance", newBalance["data"])
            currentBalance.innerText = newBalance["data"] + " Coins"

             console.log(newBalance["data"])
             
        }
    }




    
    req.open("GET", "balance?id="+userID, true)
    req.send()
    })