
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

    const cancelIcon = document.getElementById('cancel-icon');
    cancelIcon.addEventListener('click', cancel);
})

//Save event
const save = (event) => {
    event.preventDefault();
    event.stopPropagation();
    var elements = document.getElementsByClassName('text-error');
    var errorElement = Array.prototype.filter.call(elements, function (element) {
        return element.textContent !== '';
    });
    if (errorElement.length > 0) {
        alert("Error Occurred");
    } else {
        try {
            let updateId = extractIdFromUrl();
            if (!updateId) {
                let contact = createContactInAddressBook();
                createAndUpdateStorage(contact);
            } else {
                let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
                let existingContact = addressBookList.filter(contact => contact._id == updateId);
                let editedContact = {
                    ...existingContact
                };
                editedContact = getFormData(editedContact[0]);
                addressBookList.forEach((element, index) => {
                    if (element._id == editedContact._id) {
                        addressBookList[index] = editedContact;
                    }
                });
                localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
            }
            location.href = '../pages/homePage.html';
        } catch (e) {
            console.error(e);
        }
    }
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

//Create address book list store in local storage
function createAndUpdateStorage(contact) {
    let addressBookList = JSON.parse(localStorage.getItem("AddressBookList"));
    if (addressBookList != undefined) {
        addressBookList.push(contact);
    } else {
        addressBookList = [contact]
    }
    alert(addressBookList.toString());
    localStorage.setItem("AddressBookList", JSON.stringify(addressBookList));
    location.href = '../pages/homePage.html';
}

//reset form
const resetForm = () => {
    setValue('#name', '');
    setValue('#address', '');
    setValue('#city', '');
    setValue('#state', '');
    setValue('#phone', '');
    setValue('#zip', '');
}

const setValue = (id, value) => {
    const element = document.querySelector(id);
    element.value = value;
}

//cancle event
const cancel = () => {
    try {
        location.href = '../pages/homePage.html';
    } catch (e) {
        console.error(e);
    }
}