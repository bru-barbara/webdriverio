class HomePage {

    get sigInLink () {
        return $('[href="?signIn=true"]');
    }

    get vehicleAccessoriesLink() {
        return $('[href="/category/vehicle-accessories"')
    }

    navigateToSignInPage() {
        this.sigInLink.waitForClickable();
        this.sigInLink.click();
    }

    navigateToVehicleAccessoriesPage() {
        this.vehicleAccessoriesLink.waitForClickable();
        this.vehicleAccessoriesLink.click();
    }

}

module.exports = new HomePage();