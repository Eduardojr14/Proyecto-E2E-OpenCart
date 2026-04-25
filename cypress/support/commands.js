// ***********************************************
// Comandos personalizados para Cypress
// Archivo: cypress/support/commands.js
// Autor: Eduardo Parra (QA Functional Analyst)
// ***********************************************

// -------------------------------
// 🔐 LOGIN
// -------------------------------
Cypress.Commands.add('loginE2E', (email, password) => {
  cy.visit('/index.php?route=account/login')
  cy.get('#input-email').type(email)
  cy.get('#input-password').type(password)
  cy.get('input[type="submit"]').click()
})



// -------------------------------
//  API
// -------------------------------
Cypress.Commands.add('getProducts', () => {
    return cy.request({
        method: 'GET',
        url: '/index.php?route=api/product/list', // Endpoint teórico de la demo
        failOnStatusCode: false
    });
});

Cypress.Commands.add('addToCartApi', (productId, qty) => {
    return cy.request({
        method: 'POST',
        url: '/index.php?route=api/cart/add',
        body: {
            product_id: productId,
            quantity: qty
        },
        failOnStatusCode: false
    });
});