class PDP {
    
    get addToCartButton() {
        return $('[value="Add To Cart"]');
    }

    get checkoutButton() {
        return $('[href="/checkout/billing-shipping-info"]')
    }

    clickOnAddToCartButton() {
        this.addToCartButton.waitForClickable();
        this.addToCartButton.click();
    }

    clickOnCheckoutButton() {
        this.checkoutButton.waitForClickable();
        this.checkoutButton.click();
    }
}

module.exports = new PDP();