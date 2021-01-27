function checkEmailFormat(){
    var email_address = 
    document.getElementById("email_input").value;
    var success_message = "<h6> Email successfully recorded </h6>";
    var failed_message = "<h6> Invalid email address </h6>";
    var resp_msg = document.getElementById("response_message");

    if(email_address.includes("@") && (email_address.includes(".com") || email_address.includes(".edu"))){
        resp_msg.innerHTML = success_message;
    } else {
        resp_msg.innerHTML = failed_message;
    }
}

// better way to validate email (SOURCE: STACKOVERFLOW)
// function validateEmail(email) {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }

