import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";

before( () => {
    it('make an order', () => {
        homePage.visit();
        homePage.getLoginOrRegisterButton().click();
        loginPage.submitLoginForm('baurina11111', '1234567');
        cy.get('[class="nav-pills categorymenu"]')
        .find('[href="https://automationteststore.com/index.php?rt=product/category&path=68"]')
        .click();
        
      })
})
