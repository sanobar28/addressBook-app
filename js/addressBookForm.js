
window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    const textError = document.querySelector('#name-error');
    name.addEventListener('input', function () {
        if (name.value.length == 0) {
            textError.textContent = "";
            return;
        }
        try {
            (new Contact()).name = name.value;
            textError.textContent = "";
        } catch (e) {
            textError.textContent = e;
        }
    });
    const address = document.querySelector('#address');
    const addressError = document.querySelector('#address-error');
    address.addEventListener('input', function () {
        if (address.value.length == 0) {
            addressError.textContent = "";
            return;
        }
        try {
            (new Contact()).address = address.value;
            addressError.textContent = "";
        } catch (e) {
            addressError.textContent = e;
        }
    });
    const phoneNo = document.querySelector('#phone');
    const phoneNoError = document.querySelector('#phone-error');
    phoneNo.addEventListener('input', function () {
        if (phoneNo.value.length == 0) {
            phoneNoError.textContent = "";
            return;
        }
        try {
            (new Contact()).phoneNumber = phoneNo.value;
            phoneNoError.textContent = "";
        } catch (e) {
            phoneNoError.textContent = e;
        }
    });
    const form = document.getElementById('form');
    form.addEventListener('submit', save);
})

//Save event
const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    try {
        let contact = createContactInAddressBook();
    } catch (e) {
        console.error(e);
    }
}

//Reset form
const resetForm = () => {
    console.log("Reset Form");
}

const createContactInAddressBook = () => {
    let contact = new Contact();
    contact._id = new Date().getTime();
    return getFormData(contact);
}

const getFormData = (contact) => {
    contact._name = document.forms["form"]["name"].value;
    contact._address = document.forms["form"]["address"].value;
    contact._city = document.forms["form"]["city"].value;
    contact._state = document.forms["form"]["state"].value;
    contact._phoneNumber = document.forms["form"]["phone"].value;
    contact._zip = document.forms["form"]["zip"].value;
    console.log(contact.toString());
    return contact;
}