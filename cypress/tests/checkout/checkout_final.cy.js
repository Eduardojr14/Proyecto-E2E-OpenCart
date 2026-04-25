import { checkoutPage } from '../../pages/CheckoutPage';

describe('Flujo Final: Compra de extremo a extremo', () => {

    beforeEach(() => {
        // 1. Precondición: Carrito con producto
        cy.visit('/index.php?route=product/product&product_id=40'); // iPhone
        cy.get('#button-cart').click();
        cy.visit('/index.php?route=checkout/checkout');
    });

    it('TC-01 al TC-08: Checkout completo hasta página de éxito', () => {
        // TC-02: Login desde el Checkout
        checkoutPage.loginCheckout('test_user_eduardo@ejemplo.com', 'password123');

        // TC-03 a TC-06: Procesar el acordeón de pasos
        // Nota: Usamos esperas implícitas de Cypress para manejar la carga dinámica de cada paso
        checkoutPage.completarPasosEstandar();

        // TC-07 y TC-08: Confirmación y Éxito
        checkoutPage.confirmarPedido();
        
        // Validación final
        checkoutPage.elements.successTitle()
            .should('be.visible')
            .and('have.text', 'Your order has been placed!');
        
        cy.url().should('include', 'route=checkout/success');
    });
});