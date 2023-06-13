import homePage from "../support/pages/HomePage";
import loginPage from "../support/pages/LoginPage";

describe("Registartion and login", () => {
  beforeEach(() => {
    cy.visit('https://automationteststore.com/index.php?rt=account/login');

  });

    it("registration", () => {
      cy.get('[title="Continue"]').click();
      cy.get('#AccountFrm_firstname').type('Yana');
      cy.get('#AccountFrm_lastname').type('Baurina');
      cy.get('#AccountFrm_email').type('baurina11111@gmail.com');
      cy.get('#AccountFrm_address_1').type('88 High St, ');
      cy.get('#AccountFrm_city').type('Galashiels');
      cy.get('#AccountFrm_zone_id').select('Scottish Borders');
      cy.get('#AccountFrm_postcode').type('TD1 1SQ');
      cy.get('#AccountFrm_loginname').type('baurina11111');
      cy.get('#AccountFrm_password').type('1234567');
      cy.get('#AccountFrm_confirm').type('1234567');
      cy.get('#AccountFrm_agree').check('1');

      cy.get('[title="Continue"]').click();

      cy.get('[class="maintext"]').contains('text', ' Your Account Has Been Created!');
    })



    
    it.only("login", () => {
      cy.get('#loginFrm_loginname').type('baurina11111');
      cy.get('#loginFrm_password').type('1234567');
      cy.get('[title="Login"]').click();

      cy.get('span.subtext').should('contain', 'Yana')
    })
});