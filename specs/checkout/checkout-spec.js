const HomePage = require("../../page-objects/homepage/homepage-page");
const VehicleAccesoriesPage = require("../../page-objects/vehicle-accessories/vehicle-accessories-page");
const PDP = require("../../page-objects/pdp/product-page");
const LoginPage = require("../../page-objects/login/login-page");
const BillingAndShippingPage = require("../../page-objects/checkout/billing-shipping-page");
const Credentials = require("../../data/credentials.json");

describe("Checkout", () => {
  it("Navigate to Billing and Shipping page and fill out form", () => {
    browser.url("./");
    HomePage.navigateToVehicleAccessoriesPage();
    VehicleAccesoriesPage.navigateToFirstProduct();
    PDP.clickOnAddToCartButton();
    PDP.clickOnCheckoutButton();
    LoginPage.clickOnCheckoutAsAGuestButton();
    BillingAndShippingPage.fillOutGuestCheckout(
      Credentials.CheckoutInformation.firstName,
      Credentials.CheckoutInformation.lastName,
      Credentials.CheckoutInformation.email
    );
    BillingAndShippingPage.fillOutShipping(
      Credentials.CheckoutInformation.firstName,
      Credentials.CheckoutInformation.lastName,
      Credentials.CheckoutInformation.address,
      Credentials.CheckoutInformation.city,
      Credentials.CheckoutInformation.value,
      Credentials.CheckoutInformation.state,
      Credentials.CheckoutInformation.zipCode,
      Credentials.CheckoutInformation.phoneNumber
    );
  });
});
