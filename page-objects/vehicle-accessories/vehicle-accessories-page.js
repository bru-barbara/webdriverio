class VehicleAccesoriesPage {

    get firstProduct() {
        return $$('.product-tile__images')[0];
    }

    navigateToFirstProduct() {
        this.firstProduct.isDisplayed();
        this.firstProduct.click();
    }
}

module.exports = new VehicleAccesoriesPage();