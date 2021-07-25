/**
 * UC4 Address book contacts with input validations
 */

class Contact {

    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        } else {
            throw "Name is incorrect";
        }
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let nameRegex = RegExp('^[a-zA-Z0-9\\s]{3,}$');
        let wordArray = address.split(" ");
        wordArray.forEach(element => {
            if (!nameRegex.test(element)) {
                throw "address is incorrect";
            }
        });
        if (nameRegex.test(address)) {
            this._address = address;
        } else {
            throw "address is incorrect";
        }
    }

    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let nameRegex = RegExp('^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$');
        if (nameRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        } else {
            throw "phoneNumber is incorrect";
        }
    }
    get zip() {
        return this._zip;
    }
    set zip(zip) {
        this._zip = zip;
    }

    toString() {
        return "id=" + this.id + ",name=" + this.name + ",address=" + this.address + ",city=" + this.city + ",state=" + this.state + ",phoneNumber=" + this.phoneNumber + ",zip=" + this.zip;
    }
}