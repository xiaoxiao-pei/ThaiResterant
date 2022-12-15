// Developed by: Patrick Loutfi
// Date: August 10, 2022

function verifyCheckout() {

    // declaring and initializing variables from section Who's Ordering

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    // set the background to blue if input is not filled

    let firstNameInput = document.getElementById("firstName");
    let lastNameInput = document.getElementById("lastName");
    let emailInput = document.getElementById("email");
    let phoneInput = document.getElementById("phone");

    // regurlar expression for verifying phone and emails

    const regexPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;


    // setting variables for How do You want it? section

    let pickDate = document.getElementById("date").value;
    let pickTime = document.getElementById("time").value;

    // setting background if fields ommitted in How do You want it? section

    let dateInput = document.getElementById("date");
    let timeInput = document.getElementById("time");

    // Payment information section

    // regurlar expression to check for visa card numbers

    const regexCreditNum = /^((4\d{3})|(5[1-5]\d{2})|(6011))-?\d{4}-?\d{4}-?\d{4}|3[4,7]\d{13}$/;
    const regexCreditExpiration = /^((0[1-9])|(1[0-2]))\/(\d{2})$/;
    const regexCvc = /^([0-9]{3,4})$/;

    // declaring and initializing variables for Payment information section

    let creditCards = document.getElementById("creditCard").value;
    let creditExpirationDate = document.getElementById("expiration").value;
    let cvcNum = document.getElementById("cvc").value;
    let cardHolderFirstName =  document.getElementById("ccfirstName").value;
    let cardHolderLastName = document.getElementById("cclastName").value;

    // declaring variables for background color of Payment Information section

    let creditInput = document.getElementById("creditCard");
    let expirationInput = document.getElementById("expiration");
    let cvcInput = document.getElementById("cvc");
    let cardFirstNameInput = document.getElementById("ccfirstName");
    let cardLastNameInput = document.getElementById("cclastName");

    // to check fields are filled correctly

    if (firstName.length === 0) {
        firstNameInput.scrollIntoView();
        firstNameInput.focus();
        setTimeout(() => alert("Please enter a valid first name."), 1000);
        return false;

    }
    else if (lastName.length === 0) {
        lastNameInput.scrollIntoView();
        lastNameInput.focus();
        setTimeout(() => alert("Please enter a valid last name."), 1000);
        return false;
    }
    else if (regexEmail.test(email) != true) {
        emailInput.scrollIntoView();
        emailInput.focus();
        setTimeout(() => alert("Please enter a valid email"), 1000);
        return false;
    }
    else if (regexPhone.test(phone) != true) {
        phoneInput.scrollIntoView();
        phoneInput.focus();
        setTimeout(() => alert("Please enter a valid phone number"), 1000);
        return false
    }
    else if (pickDate == "") {
        dateInput.scrollIntoView();
        dateInput.focus();
        setTimeout(() => alert("Please enter a valid pickup date."), 1000);
        return false

    }
    else if (pickTime == "") {
        timeInput.scrollIntoView();
        timeInput.focus();
        setTimeout(() => alert("Please enter a valid pickup time."), 1000);
        return false
    }
    else if (regexCreditNum.test(creditCards) != true){
        creditInput.scrollIntoView();
        creditInput.focus();
        setTimeout(() => alert("Please enter a valid credit card number."), 1000);
        return false
    }
    else if (regexCreditExpiration.test(creditExpirationDate) != true) {
        expirationInput.scrollIntoView();
        expirationInput.focus();
        setTimeout(() => alert("Please enter a valid expiration date."), 1000);
        return false
    }
    else if (regexCvc.test(cvcNum) != true) {
        cvcInput.scrollIntoView();
        cvcInput.focus();
        setTimeout(() => alert("Please enter a valid CVC number."), 1000);
        return false
    }
    else if (cardHolderFirstName.length === 0) {
        cardFirstNameInput.scrollIntoView();
        cardFirstNameInput.focus();
        setTimeout(() => alert("Please enter a valid First name"), 1000);
        return false
    }
    else if (cardHolderLastName.length === 0 ) {
        cardLastNameInput.scrollIntoView();
        cardLastNameInput.focus();
        setTimeout(() => alert("Please enter a valid last name"), 1000);
        return false
    }
    return true;

}

// Order Summary

// Determine if promo code is legitimate
function findArray(arr, target) {
    const arrayKeys = Object.keys(arr);
    for (let i = 0; i < arrayKeys.length; i++) {
        if (target == arrayKeys[i]) {
            const discount = arr[target] * 100;
            return document.getElementById("promoField").innerHTML = `-${(discount).toFixed(2)}%`;
        }
    }
    alert("Sorry, invalid promo code, please try again.")
}

// checks the promotion code entered if it matches what is in the 'database'
function verifyPromoCode() {
    //  array of promotion code
    const promoArray = { "J89Y": 0.05, "VB98": 0.10, "OP89": 0.15 };

    // get value input from client
    const promoCode = document.getElementById("promo").value;

    // run the verifyPromoCode to determine percent discount
    findArray(promoArray, promoCode);
    total_with_tax();

}

// on click of any tip button, will populate tip field with desired tip %

document.getElementById('tip10').addEventListener('click', () => {
    document.getElementById("tipField").value = parseFloat((subtotalValue * 0.10)).toFixed(2);
    total_with_tax();
});
// tip 15%
document.getElementById('tip15').addEventListener('click', () => {
    document.getElementById("tipField").value = parseFloat((subtotalValue * 0.15)).toFixed(2);
    total_with_tax()
});
// tip 20%
document.getElementById('tip20').addEventListener('click', () => {
    document.getElementById("tipField").value = parseFloat((subtotalValue * 0.20)).toFixed(2);
    total_with_tax()
});



// determing the total taxes
function total_with_tax() {
    // fixed number for now, will be based on team input
    subtotalValue = parseFloat(localStorage.getItem('totalOrdered'));
    let num = subtotalValue;

    // the subtotal will be calculated by the value taken from Order details, $50 is a place holder for now
    document.getElementById("subTotal").innerHTML = "$" + subtotalValue.toFixed(2);

    // tax amount for 5%
    let taxValue5 = num * 0.05;
    document.getElementById("taxField").innerHTML = `$${taxValue5.toFixed(2)}`;

    // tax amount for 10%
    let taxValue10 = num * 0.09975;
    document.getElementById("taxField10").innerHTML = `$${taxValue10.toFixed(2)}`;

    // retrieving the tip amount selected
    let tipAmount = parseFloat(document.getElementById("tipField").value);
   
    // determing the promotion reduction
    let promoPercent = parseFloat(document.getElementById("promoField").innerHTML);
    let promoAmount = (promoPercent / 100) * num;


    // determining the values that affect the total and calculating the total
    if (isNaN(tipAmount)) {
        if (isNaN(promoAmount)) {
            const total = num + taxValue5 + taxValue10;
            return document.getElementById('totalField').innerHTML = total.toFixed(2);
        }
        else {
            num = num + promoAmount;
            taxValue5 = num * 0.05;
            taxValue10 = num * 0.10;
            const total = num + taxValue10 + taxValue5;
            return document.getElementById('totalField').innerHTML = total.toFixed(2);
        }
    }
    else if (tipAmount != NaN) {
        if (isNaN(promoAmount)) {       
            const total = num + taxValue10 + taxValue5 + tipAmount;
            return document.getElementById('totalField').innerHTML = total.toFixed(2);
        } 
        else {
            num = num + promoAmount;
            taxValue5 = num * 0.05;
            taxValue10 = num * 0.10;
            const total = num + taxValue10 + taxValue5 + tipAmount;
            return document.getElementById('totalField').innerHTML = total.toFixed(2);
        }
    }
}







