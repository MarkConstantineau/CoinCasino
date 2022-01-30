const pay10 = document.getElementById("pay10")
    
     pay10.addEventListener("click", event => {

       

        var userID = localStorage.getItem("user_id");
        var moneyAmount = 1000;
        let params = "id="+userID+"&my_message="+moneyAmount;
    
        let req = new XMLHttpRequest()

        req.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                let data = JSON.parse(this.responseText)
                alert(data.message)
            }
        }
        
        
        req.open("POST", "idwithBalance10", true);

        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.send(params)
    })
  