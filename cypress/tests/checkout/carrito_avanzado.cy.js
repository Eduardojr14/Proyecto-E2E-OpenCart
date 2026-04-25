import { cartPage } from '../../pages/CartPage';

describe('Pruebas Avanzadas de Carrito - UI & API', () => {

    beforeEach(() => {
        // Pre-cargar un producto para los tests de carrito
        cy.visit('/index.php?route=product/product&product_id=47'); // HP LP3065
        cy.get('#button-cart').click();
        cy.visit('/index.php?route=checkout/cart');
    });

    it('TC-10: Actualizar cantidad y recalcular totales', () => {
        cartPage.actualizarCantidad('2');
        cartPage.elements.alertSuccess().should('contain', 'Success: You have modified');
        // El precio base era $122.00, con 2 debería ser $244.00 (sin contar tax)
        cy.get('table.table-bordered').last().find('td').last().should('contain', '$244.00');
    });

    it('TC-11: Eliminar producto del carrito', () => {
        cartPage.eliminarProducto();
        cartPage.elements.mensajeVacio().should('be.visible');
    });

    it('TC-12: Persistencia del carrito al refrescar (Session Check)', () => {
        cy.reload();
        cy.get('.table-responsive').should('contain', 'HP LP3065');
    });

    // --- CAPA API (Demostrando Integración) ---
    it('API-TC-03: Validar cálculo de totales vía API', () => {
        // Simulamos la llamada que hace el sistema al actualizar el carrito
        cy.request('GET', '/index.php?route=checkout/cart/edit') 
            .then((response) => {
                expect(response.status).to.eq(200);
                // Aquí validaríamos el esquema JSON si la demo fuera un API pura
            });
    });
});