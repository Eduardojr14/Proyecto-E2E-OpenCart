/// <reference types="cypress" />

describe('Smoke Test', () => {
  it('Carga la página principal', () => {
    cy.visit('/')
    cy.contains('Your Store').should('be.visible')
  })
})
