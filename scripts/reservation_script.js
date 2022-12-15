function verifyCheckoutRerservation() {
    // declaring and initiliazing variables
    // personal information

    let firstName = document.getElementById("firstname").value;
    // alert(firstName.length)

    let lastName = document.getElementById("lastname").value;
    let phoneNum = document.getElementById("phonenumber").value;
    let email = document.getElementById("email").value;

    // date and time values
    let pickDate = document.getElementById("date").value;

    let pickTime = document.getElementById('optionSelect');

    // set the background to blue if input is not filled
    let firstNameInput = document.getElementById("firstname");
    let lastNameInput = document.getElementById("lastname");
    let phoneInput = document.getElementById("phonenumber");
    let emailInput = document.getElementById("email");
    let dateInput = document.getElementById("date");
    let timeInput = document.getElementById("optionSelect");

    // regurlar expression for verifying phone and emails

    const regexPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    const regexEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    // verifying inputs
    if (firstName.length === 0) {
        firstNameInput.focus();
        setTimeout(() => alert("Please enter a valid first name."), 500);
        return false;

    }
    else if (lastName.length == 0) {
        lastNameInput.focus();
        setTimeout(() => alert("Please enter a valid last name."), 500);
        return false;
    }
    else if (regexEmail.test(email) != true) {
        emailInput.focus();
        setTimeout(() => alert("Please enter a valid email"), 500);
        return false;
    }
    else if (regexPhone.test(phoneNum) != true) {
        phoneInput.focus();
        setTimeout(() => alert("Please enter a valid phone number"), 500);
        return false
    }
    else if (pickDate == "") {
        dateInput.focus();
        setTimeout(() => alert("Please enter a valid pickup date."), 500);
        return false
    }
    else if (pickTime.selectedIndex === 0) {
        timeInput.focus();
        setTimeout(() => alert("Please enter a valid pickup time."), 500);
        return false
    }
    return true;
}