import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";

it('Authorization', () => {
  homePage.visit();
  homePage.getLoginOrRegisterButton().click();
  loginPage.submitLoginForm('baurina11111', '1234567');
})