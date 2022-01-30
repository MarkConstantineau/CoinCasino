const pay25 = document.getElementById("pay25")
    
pay25.addEventListener("click", event => {

   // One of the ways to pass data through a post request
   // for more discussion on it, see https://stackoverflow.com/questions/9713058/send-post-data-using-xmlhttprequest

   var userID = localStorage.getItem("user_id");
   var moneyAmount = 2500;
   let params = "id="+userID+"&my_message="+moneyAmount;

   let req = new XMLHttpRequest()

   req.onreadystatechange = function() {
       if (this.readyState == 4 && this.status == 200) {
           let data = JSON.parse(this.responseText)
           alert(data.message)
       }
   }
   
   // you wouldn't be able to run this request in your browser search because you would have no way of sending the 
   // params through it
   req.open("POST", "idwithBalance25", true);

   req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
   req.send(params)
})
