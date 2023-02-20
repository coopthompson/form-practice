const email = document.getElementById('mail');
const countries = document.getElementById('country');
const pass = document.getElementById('pass');
const match = document.getElementById('pass-confirm')


function testEmail() {
    const emailConstraint = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailConstraint.test(email.value) === false) {
        email.setCustomValidity('Enter a valid email with an @ after some letters');
    } else {
        email.setCustomValidity('');
    }
    email.reportValidity();
}


function testCountry() {
    const allCountries = [
        'United States', 'France', 'Singapore', 'Japan', 'Egypt', 'Other'
    ];
    if (allCountries.includes(countries.value) === true) {
        countries.setCustomValidity('');
    } else {
        countries.setCustomValidity('Must match one of the provided countries');
    }

    countries.reportValidity();
}





function matchPass () {
    if(match.value === pass.value) {
        match.setCustomValidity('');
    } else {
        match.setCustomValidity('Passwords do not match');
    }
    match.reportValidity();
}


//create event listeners that run each function on the corresponding input when a new input occurs.

email.addEventListener('input', () => {
    testEmail();
})

countries.addEventListener('input', () => {
    testCountry();
})

match.addEventListener('input', () => {
    matchPass();
})