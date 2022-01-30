$('#data-submit-SQL').click(function() {
    var user_email = $('#user_email').val();
    var user_pass = $('#user_pass').val();

    var jsonString = {
        user_email: user_email,
        user_pass: user_pass
    }

    $.ajax({
        url: 'http://localhost:7777/write-record',
        type: 'post',
        data: jsonString,
        success: function(response) {
            var data = JSON.parse(response);
            alert(data.msg);
        },
        error: function(err) {
            alert(err);
        }
    })
})



