const email = document.getElementById('mail')

//write out a function to test email validity
function testEmail() {
    //write out regexpression for correct email and put in variable
    const emailConstraint = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    //test the input value for that regular expression
    //if it passes, the form validates
    if (emailConstraint.test(email.value) === false) {
        email.setCustomValidity('Enter a valid email with an @ after some letters');
    } else {
        email.setCustomValidity('');
    }
    email.reportValidity();
    

}


//write a function to test the countries
//if the stuff entered in the field matches one of the countries, now error occurs
//if the stuff entered does not match a country, you recieve an error message

//write a function to ensure the password and password confirmation match
//if the two input values do not match, throw an error
//if they do match, let the form submit


//create event listeners that run each function on the corresponding input when a new input occurs.

email.addEventListener('input', function() {
    testEmail();
})