    const pay5 = document.getElementById("pay5")
    
     pay5.addEventListener("click", event => {

   

        var userID = localStorage.getItem("user_id");
        var moneyAmount = 500;
        let params = "id="+userID+"&my_message="+moneyAmount;
    
        let req = new XMLHttpRequest()

        req.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText)
                alert(data.message)
            }
        }
        
        
        req.open("POST", "idwithBalance5", true);

        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send(params)
    })
  