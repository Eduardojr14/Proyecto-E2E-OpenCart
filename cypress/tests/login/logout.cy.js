import { loginPage } from '../../pages/LoginPage';
import { accountPage } from '../../pages/AccountPage';

describe('Flujo de Logout - OpenCart', () => {

    beforeEach(() => {
        // Precondición: Estar logueado
        cy.visit('/index.php?route=account/login');
        loginPage.loginCompleto('test_user_eduardo@ejemplo.com', 'password123');
    });

    it('TC-01, TC-02 y TC-03: Logout exitoso y validación de mensajes', () => {
        accountPage.clickLogout();

        // Validaciones
        accountPage.elements.logoutHeader().should('have.text', 'Account Logout');
        accountPage.elements.contentBody().should('contain', 'You have been logged off your account.');
        accountPage.elements.continueBtn().should('be.visible');
    });

    it('TC-04: Validar acceso restringido tras logout (Seguridad)', () => {
        accountPage.clickLogout();

        // Intentar acceder a una página protegida (Historial de órdenes)
        cy.visit('/index.php?route=account/order');

        // Validación: El sistema debe redirigir al Login
        cy.url().should('include', 'route=account/login');
        cy.get('#content h1').should('not.contain', 'My Orders');
        cy.get('#content h1').should('contain', 'Account Login');
    });

    it('TC-05: Validar persistencia de la sesión cerrada', () => {
        accountPage.clickLogout();
        
        // Al recargar la página, no debería haber rastro del usuario
        cy.reload();
        cy.get('.list-inline').should('not.contain', 'My Account');
        cy.get('.list-inline').should('contain', 'Login');
    });
    
    it('TC-05: Validar comportamiento del carrito tras logout', () => {
        // 1. Agregar algo al carrito primero
        cy.visit('/index.php?route=product/product&product_id=40'); // iPhone
        cy.get('#button-cart').click();
        
        // 2. Hacer Logout
        accountPage.clickLogout();
        
        // 3. Validar que el header del carrito sigue siendo funcional
        cy.get('#cart-total').should('be.visible');
    });
});