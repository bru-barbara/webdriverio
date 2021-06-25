class PaymentPage {

    get cardButton() {
        return $('.tds-btn.tds-btn--full.tds-btn--outline');
    }

    get nameOnCard() {
        return $("[name='/creditCardHolderName']");
    }

    get cardNumber() {
        return $('[label="Card Number"]');
    }

    get CVV() {
        return $('[label="CVV"]');
    }

    get placeOrderButton() {
        return $('.tds-btn.tds-btn--blue.tds-btn--full');
    }

    get errorMessage() {
        return $('.tds-status_msg-body');
    }

    clickCardButton() {
        this.cardButton.waitForClickable();
        this.cardButton.click();
    }

    fillOutCreditCard(name, cardNumber, cvvNumber) {
        this.nameOnCard.scrollIntoView();
        this.nameOnCard.setValue(name);
        this.cardNumber.setValue(cardNumber);
        this.CVV.setValue(cvvNumber);
        this.placeOrderButton.click();
    }

    errorMessageIsDisplayed() {
        this.errorMessage.isDisplayed();
    }
}

module.exports = new PaymentPage();