import { productPage } from '../../pages/ProductPage';
import { cartPage } from '../../pages/CartPage';

describe('Flujo de Compra y Validación de Impuestos', () => {

    it('TC-01 al TC-09: Proceso completo de compra y cálculos', () => {
        // 1. Agregar HP LP3065 (ID 47)
        cy.visit('/index.php?route=product/product&product_id=47');
        productPage.validarDatosProducto('HP LP3065', '$122.00');
        productPage.agregarAlCarrito();

        // 2. Agregar Canon EOS 5D (ID 30)
        cy.visit('/index.php?route=product/product&product_id=30');
        // Nota: Canon tiene una opción de color que hay que seleccionar
        cy.get('#input-option226').select('Red'); 
        productPage.agregarAlCarrito();

        // 3. Ir al carrito
        cy.visit('/index.php?route=checkout/cart');

        // 4. TC-08: Validación de Impuestos y Totales
        const valoresEsperados = {
            subtotal: '$180.00',
            ecoTax: '$4.00',
            vat: '$36.00',
            total: '$220.00'
        };
        cartPage.validarTotales(valoresEsperados);

        // 5. TC-09: Validar pantalla de Checkout
        cartPage.irAlCheckout();
        cy.url().should('include', 'route=checkout/checkout');
        cy.get('h2').should('contain', 'Step 1: Checkout Options');
    });
});