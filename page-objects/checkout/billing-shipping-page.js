class BillingAndShippingPage {

    get firstNameGuestCheckout() {
        return $('#profileFirstName');
    }

    get lastNameGuestCheckout() {
        return $('#profileLastName');
    }

    get emailGuestCheckout() {
        return $('#guestEmail');
    }

    get firstNameShipping() {
        return $('#firstNameShipping');
    }

    get lastNameShipping() {
        return $('#lastNameShipping');
    }

    get addressShipping() {
        return $('#addressShipping');
    }

    get cityShipping() {
        return $('#cityShipping');
    }

    get stateShipping() {
        return $('#stateShipping');
    }

    get zipCodeShipping() {
        return $('#zipCodeShipping');
    }

    get phoneNumberShipping() {
        return $('#phoneNumber');
    }

    get continueButton() {
        return $('.tds-btn.tds-btn--blue.tds-btn--full.shippinginfo__container__submit__button');
    }

    fillOutGuestCheckout(firstName, lastName, email) {
        this.firstNameGuestCheckout.waitForClickable();
        this.firstNameGuestCheckout.setValue(firstName);
        this.lastNameGuestCheckout.setValue(lastName);
        this.emailGuestCheckout.setValue(email);
    }

    fillOutShipping(firstName, lastName, address, city, value, state, zipCode, phoneNumber) {
        this.firstNameShipping.setValue(firstName);
        this.lastNameShipping.setValue(lastName);
        this.addressShipping.setValue(address)
        this.cityShipping.setValue(city);
        this.stateShipping.selectByAttribute(value, state);
        this.zipCodeShipping.setValue(zipCode);
        this.phoneNumberShipping.setValue(phoneNumber);
        this.continueButton.click();
        this.continueButton.waitForClickable();
        this.continueButton.click();
    }
    clickContinueButton() {
        this.continueButton.waitForClickable();
        this.continueButton.click();
    }
}


module.exports = new BillingAndShippingPage();