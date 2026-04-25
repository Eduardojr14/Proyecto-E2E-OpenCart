class ProductPage {
    elements = {
        productName: () => cy.get('#content h1'),
        productPrice: () => cy.get('h2').contains('$'),
        addToCartBtn: () => cy.get('#button-cart'),
        successAlert: () => cy.get('.alert-success')
    }

    agregarAlCarrito() {
        this.elements.addToCartBtn().click();
    }

    validarDatosProducto(nombre, precio) {
        this.elements.productName().should('have.text', nombre);
        this.elements.productPrice().should('contain', precio);
    }
}

export const productPage = new ProductPage();