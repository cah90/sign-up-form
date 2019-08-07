$( document ).ready( function (){

    $( "button" ).on("click", function(){

    var firstName = $(first_name).val();
    var lastName = $(last_name).val();
    var emailAddress = $(email).val();
    var passwordLogin = $(password).val();

    var pattern = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    $("form").each(function(){

        if (firstName.length === 0) {
            $("#first_name").css("border", "2px solid hsl(0, 100%, 74%)");
            $("#error_first_name").html($("#first_name").attr("placeholder") + " cannot be empty");
        }    
    
        if (lastName.length === 0) {
            $("#last_name").css("border", "2px solid hsl(0, 100%, 74%)");
            $("#error_last_name").html($("#last_name").attr("placeholder") + " cannot be empty");
        }  
    
        if (emailAddress.length === 0) {
            $("#email").css("border", "2px solid hsl(0, 100%, 74%)");
            $("#error_email").html($("#email").attr("placeholder") + " cannot be empty");
        } else if (emailAddress !== pattern ) {
            $("#email").css("border", "2px solid hsl(0, 100%, 74%)");
            $("#error_email").html("Looks like this is not an email");
        }
    
        if (passwordLogin.length === 0) {
            $("#password").css("border", "2px solid hsl(0, 100%, 74%)");
            $("#error_password").html($("#password").attr("placeholder") + " cannot be empty");
        }  
    });

    
    });
});