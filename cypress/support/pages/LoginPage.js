class HomePage {
    visit() {
        cy.visit('https://automationteststore.com/index.php?rt=account/login');
    }

    getLoginField(){
        return cy.get('#loginFrm_loginname');
    }

    getPasswordField(){
        return cy.get('#loginFrm_password');
    }
   
    getSubmitButton(){
        return cy.get('[title="Login"]');
    }

    submitLoginForm(){
        cy.log(`Auth user with username: ${username} and pass: ${password}`);

        this.getLoginField.type(username)
        this.getPasswordField.type(password)
        this.getSubmitButton.click()
    }
}
export default new HomePage();