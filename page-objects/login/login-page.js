class Login {

    get usernameInput() {
        return $('#email');
    }

    get continueButton() {
        return $('.login__submit.tds-btn.tds-btn--blue.tds-btn--full');
    }

    get passwordInput() {
        return $('#form-input-credential');
    }

    get signInButton() {
        return $('#form-submit-continue');
    }

    get doNotRecognizeEmailAndPasswordMessage() {
        return $('[data-i18n-key="We could not sign you in"]');
    }

    get checkoutAsAGuestButton() {
        return $('[href="/checkout/billing-shipping-info?guest=true"]');
    }

    login(username, password) {
        this.usernameInput.waitForClickable();
        this.usernameInput.setValue(username);
        this.continueButton.click();
        this.passwordInput.waitForClickable();
        this.passwordInput.setValue(password);
        this.signInButton.waitForClickable();
        this.signInButton.click();
    }

    doNotRecognizeEmailAndPasswordMessageIsDisplayed() {
        this.doNotRecognizeEmailAndPasswordMessage.isDisplayed();
    }

    clickOnCheckoutAsAGuestButton() {
        this.checkoutAsAGuestButton.waitForClickable();
        this.checkoutAsAGuestButton.click();
    }
}

module.exports = new Login();