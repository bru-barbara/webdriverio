const LoginPage = require('../../page-objects/login/login-page');
const HomePage = require('../../page-objects/homepage/homepage-page');
const { expect } = require('chai');
const Credentials = require('../../data/credentials.json');

describe('Login', () => {
    xit('Should not be able to sign in', () => {
      browser.url('./');

      //Close modal and click on Tesla Account link
      HomePage.navigateToSignInPage();

      //Login
      LoginPage.login(Credentials.LoginIncorrect.username, Credentials.LoginIncorrect.password);

      //Verify error message
      LoginPage.doNotRecognizeEmailAndPasswordMessageIsDisplayed();
      const errorMessage = LoginPage.doNotRecognizeEmailAndPasswordMessage.getText();
      expect(errorMessage).to.equal("We could not sign you in");
    });
});
