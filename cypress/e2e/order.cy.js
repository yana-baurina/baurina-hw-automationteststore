///<reference types="cypress"/>

import user from '../fixtures/user.json'
import { login } from '../support/helper'


it('Order', () => {

    login(user);

    cy.get('#filter_keyword')
        .type('LOOSE BRONZER');

    cy.get('.button-in-search')
        .click();

    cy.get('.productpagecart').click();
    cy.get('#cart_checkout1').click();
    cy.get('[title="Confirm Order"]').click();
    cy.get('.maintext').should('contain', " Your Order Has Been Processed!");

})