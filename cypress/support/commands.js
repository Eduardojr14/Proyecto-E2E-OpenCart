// ***********************************************
// Comandos personalizados para Cypress
// Archivo: cypress/support/commands.js
// Autor: Eduardo Parra (QA Functional Analyst)
// ***********************************************

// -------------------------------
// 🔐 LOGIN
// -------------------------------

// Login por UI (flujo visible)
Cypress.Commands.add('loginUI', (username, password) => {
  cy.get('[data-testid="input-username"]').type(username)
  cy.get('[data-testid="input-password"]').type(password)
  cy.get('[data-testid="btn-login"]').click()
})

// Login por API (rápido y estable)
Cypress.Commands.add('loginAPI', (email, password) => {
  cy.request('POST', '/api/login', { email, password })
    .then(res => {
      window.localStorage.setItem('token', res.body.token)
    })
})

// Login + navegación
Cypress.Commands.add('loginAndGo', (email, password, path) => {
  cy.loginAPI(email, password)
  cy.visit(path)
})


// -------------------------------
// 🌐 NAVEGACIÓN
// -------------------------------

Cypress.Commands.add('goTo', (path) => {
  cy.visit(path)
  cy.url().should('include', path)
})


// -------------------------------
// 🎯 SELECTORES
// -------------------------------

// Selección por data-testid
Cypress.Commands.add('getByTest', (selector) => {
  return cy.get(`[data-testid="${selector}"]`)
})

// Click forzado
Cypress.Commands.add('forceClick', (selector) => {
  cy.get(selector).click({ force: true })
})


// -------------------------------
// 🧪 API & INTERCEPT
// -------------------------------

// Esperar una API específica
Cypress.Commands.add('waitForApi', (method, url) => {
  cy.intercept(method, url).as('apiCall')
  cy.wait('@apiCall')
})

// Mockear respuesta de API
Cypress.Commands.add('mockApi', (method, url, fixture) => {
  cy.intercept(method, url, { fixture }).as('mockedApi')
})


// -------------------------------
// 📄 FORMULARIOS
// -------------------------------

// Llenar formulario usando fixture
Cypress.Commands.add('fillForm', (fixtureName) => {
  cy.fixture(fixtureName).then(data => {
    Object.keys(data).forEach(key => {
      cy.get(`[name="${key}"]`).type(data[key])
    })
  })
})


// -------------------------------
// 📤 ARCHIVOS
// -------------------------------

// Subir archivo
Cypress.Commands.add('uploadFile', (selector, filePath) => {
  cy.get(selector).selectFile(filePath, { force: true })
})


// -------------------------------
// 🧹 SESIÓN
// -------------------------------

Cypress.Commands.add('clearSession', () => {
  cy.clearCookies()
  cy.clearLocalStorage()
})


// -------------------------------
// 👀 VALIDACIONES
// -------------------------------

// Validar texto visible
Cypress.Commands.add('shouldSee', (text) => {
  cy.contains(text).should('be.visible')
})

// Validar que un elemento no exista
Cypress.Commands.add('shouldNotExist', (selector) => {
  cy.get(selector).should('not.exist')
})


// -------------------------------
// 🧱 UTILIDADES
// -------------------------------

// Esperar elemento estable (evita flaky tests)
Cypress.Commands.add('waitForStable', (selector) => {
  cy.get(selector, { timeout: 10000 }).should('be.visible')
})

// Scroll hacia un elemento
Cypress.Commands.add('scrollToElement', (selector) => {
  cy.get(selector).scrollIntoView()
})
