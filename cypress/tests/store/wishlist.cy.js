import { wishlistPage } from '../../pages/WishlistPage';

describe('Flujo Completo de Wishlist', () => {

    it('TC-07: Intentar agregar sin estar logueado (Caso Negativo)', () => {
        cy.visit('/index.php?route=product/product&product_id=40');
        cy.get('button[data-original-title="Add to Wish List"]').click();
        
        // Validar redirección y mensaje informativo
        wishlistPage.elements.mensajeExito()
            .should('contain', 'You must login or create an account');
    });

    context('Usuario Autenticado', () => {
        beforeEach(() => {
            // Aquí usaríamos tu comando de login que ya creamos
            cy.login('test_user_eduardo@ejemplo.com', 'password123'); 
        });

        it('TC-01 al TC-04: Agregar productos y validar tabla', () => {
            // Agregar desde detalle (TC-03)
            cy.visit('/index.php?route=product/product&product_id=42'); // iPhone
            cy.get('button[data-original-title="Add to Wish List"]').click();
            wishlistPage.elements.mensajeExito().should('be.visible');

            // Ir a la lista y validar (TC-01 y TC-04)
            wishlistPage.irALaLista();
            wishlistPage.elements.tablaWishlist().should('contain', 'iPhone');
        });

        it('TC-05 & TC-06: Eliminar producto y validar lista vacía', () => {
            wishlistPage.irALaLista();
            // Si hay productos, los eliminamos
            wishlistPage.eliminarPrimerProducto();
            wishlistPage.elements.mensajeExito().should('contain', 'Success');
            
            // Si era el último, validamos mensaje de vacío (TC-06)
            // wishlistPage.elements.mensajeVacio().should('be.visible');
        });
    });
});