import { loginPage } from '../../pages/LoginPage';

describe('Flujo de Autenticación - OpenCart', () => {

    beforeEach(() => {
        // TC-01: Acceso a la pantalla de Login
        cy.visit('/index.php?route=account/login'); 
    });

    it('TC-02: Login exitoso con credenciales válidas', () => {
        // Usamos el método reutilizable
        loginPage.loginCompleto('eduardo_test@ejemplo.com', 'pass1234');

        // Validaciones de éxito
        cy.url().should('include', 'route=account/account');
        cy.get('#content h2').should('contain', 'My Account');
    });

    it('TC-03: Login fallido con contraseña incorrecta', () => {
        loginPage.loginCompleto('eduardo_test@ejemplo.com', 'clave_error');

        // Validación del mensaje de error que definiste en el MD
        loginPage.elements.errorAlert()
            .should('be.visible')
            .and('contain', 'Warning: No match for E-Mail Address and/or Password.');
    });

    it('TC-05: Validación de campos obligatorios', () => {
        // Intentamos loguear sin escribir nada
        loginPage.clickLogin();

        loginPage.elements.errorAlert().should('be.visible');
    });
});