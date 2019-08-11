$( document ).ready( function (){

    $( "button" ).on("click", function(){

    var firstName = $("#first_name").val();
    var lastName = $("#last_name").val();
    var emailAddress = $("#email").val();
    var passwordLogin = $("#password").val();
    var placeholder;




    if (firstName === "") {
        placeholder = $("#first_name").attr("placeholder");
        $("#first_name").addClass("error");
        $("#first_name").attr("placeholder", "");
        $("#error_first_name").html("First Name cannot be empty");
    } else {
        $("#first_name").removeClass("error");
        $("#error_first_name").html("");
    }

    if (lastName === "") {
        placeholder = $("#last_name").attr("placeholder");
        $("#last_name").addClass("error");
        $("#last_name").attr("placeholder", "");
        $("#error_last_name").html("Last Name cannot be empty");
    } else {
        $("#last_name").removeClass("error");
        $("#error_last_name").html("");
    }

    if (passwordLogin === "") {
        placeholder = $("#password").attr("placeholder");
        $("#password").addClass("error");
        $("#password").attr("placeholder", "");
        $("#error_password").html("Password cannot be empty");
    } else {
        $("#password").removeClass("error");
        $("#error_password").html("");
    }

    emailValidation(emailAddress);

    
    });

    function emailValidation(email){

        var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


        if (email === "") {
            $("#email").addClass("error");
            $("#email").attr("placeholder", "");
            $("#error_email").html("Email cannot be empty");
    
        } else if (!email.match(pattern) ) {
            $("#email").addClass("error");
            $("#error_email").html("Looks like this is not an email");
            $("#email").val("email@example.com");
    
        } else {
            $("#email").removeClass("error");
            $("#error_email").html("");

    
        }
    }

    
});