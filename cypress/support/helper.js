export function login(user) {

    cy.log('Open website login page');
    cy.visit('/index.php?rt=account/login');

    cy.log('Check user is unauthorized');
    cy.getCookie('customer').should('be.null');

    cy.log('Authorize user');
    cy.get('#loginFrm_loginname').type(user.username);
    cy.get('#loginFrm_password').type(user.password);
    cy.get('button[type="submit"]').contains('Login').click();
}

export function findProduct(productName) {
    cy.get('body').then( body => {
        if(body.find(`.prdocutname[title="${productName}"]`).length > 0){
            cy.get(`.prdocutname[title="${productName}"]`).click();
        } else {
            cy.get('ul.pagination a').contains('>').click();
            findProduct(productName)
        }
    })
}