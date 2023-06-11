var mail = document.getElementById("mail");
var emailField = document.getElementById("email-field");
var emailLabel = document.getElementById("email-label");
var emailError = document.getElementById("email-error");
var pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

function validateEmail() {
    emailLabel.style.bottom = "45px";
    if(emailField.value.match(pattern)) {
        mail.classList.add("valid");
        mail.classList.remove("invalid");

        emailError.innerHTML = "";
        emailField.style.borderBottomColor = "#6fef34";
        emailError.style.top = "100%"

    }

    else {
        mail.classList.remove("valid");
        mail.classList.add("invalid");

        emailError.innerHTML = "Please enter a valid email";
        emailField.style.borderBottomColor = "red";
        emailError.style.top = "120%"
    }

    if(emailField.value == "") {
        mail.classList.remove("valid");
        mail.classList.remove("invalid");
        emailError.innerHTML = "";
        emailField.style.borderBottomColor = "#555";
    }

}