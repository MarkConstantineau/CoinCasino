$('#submit-login-sql').click(function() {
    var user_email = $('#u_email').val();
    var user_pass = $('#u_pass').val();


    var jsonString = {
        user_email: user_email,
        user_pass: user_pass
    }
    console.log("Login")
    $.ajax({
        url: 'http://localhost:7777/userlogin',
        type: 'get',
        data: jsonString,
        success: function(response) {
            console.log("Success")
            var data = JSON.parse(response);
            console.log(data.msg)
            if(data.msg==="Success") {
                window.localStorage.setItem("user_id", data.user_data[0].id);
                location.assign("http://localhost:7777/home");
            }
            else {
                location.assign("http://localhost:7777/login");
                window.alert("Invalid Email or Pass");
            }
        },
        error: function(err) {
            alert(err);
        }
    });
    return false;
})