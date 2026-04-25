import { searchPage } from '../../pages/SearchPage';

describe('Flujo de Búsqueda - OpenCart', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('TC-02 y TC-06: Búsqueda por nombre exacto y Case-Insensitive (iPhone)', () => {
        const terminos = ['iPhone', 'IPHONE', 'iphone'];
        
        terminos.forEach((termino) => {
            searchPage.buscar(termino);
            searchPage.elements.productsList().should('have.length.at.least', 1);
            searchPage.elements.productsList().first().should('contain', 'iPhone');
        });
    });

    it('TC-05 y TC-07: Búsqueda sin resultados y caracteres especiales', () => {
        const terminosInvalidos = ['xyz123', '@@@'];
        
        terminosInvalidos.forEach((termino) => {
            searchPage.buscar(termino);
            searchPage.elements.noResultsMsg().should('be.visible');
            searchPage.elements.productsList().should('not.exist');
        });
    });

    it('TC-09: Agregar producto al carrito desde los resultados', () => {
        searchPage.buscar('MacBook');
        searchPage.elements.addToCartBtn().click();
        
        // Validación de integración con el carrito
        cy.get('.alert-success').should('contain', 'Success: You have added');
        cy.get('#cart-total').should('not.contain', '0 item(s)');
    });

    // --- CAPA API (Integración) ---
    it('API-TC-01: Validar endpoint de búsqueda vía GET', () => {
        cy.request('GET', '/index.php?route=product/search&search=iPhone')
            .then((response) => {
                expect(response.status).to.eq(200);
                // Validamos que el cuerpo de la respuesta contenga el producto esperado
                expect(response.body).to.include('iPhone');
            });
    });

    it('TC-04: Búsqueda parcial (cam -> Canon)', () => {
        searchPage.buscar('cam');
        searchPage.elements.productsList().should('have.length.at.least', 1);
        searchPage.elements.productsList().should('contain', 'Canon');
    });

    it('TC-08: Navegación desde resultados al detalle del producto', () => {
        searchPage.buscar('iPhone');
        cy.get('.caption a').first().click(); // Clic en el nombre del producto
        
        // Validación de navegación
        cy.url().should('include', 'route=product/product');
        cy.get('#content h1').should('have.text', 'iPhone');
    });
});