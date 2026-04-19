
/// <reference types="cypress" />

describe('Smoke Test con Allure', () => {

    it('Carga la página principal', () => {
        cy.allure().feature('Smoke');
        cy.allure().story('Carga de página');
        cy.allure().severity('normal');

        cy.visit('/');
        cy.contains('Your Store').should('be.visible');
    });

});
