class WishlistPage {
    elements = {
        wishlistLink: () => cy.get('#wishlist-total'),
        mensajeExito: () => cy.get('.alert-success'),
        tablaWishlist: () => cy.get('.table-responsive'),
        btnRemove: () => cy.get('a[data-original-title="Remove"]'),
        mensajeVacio: () => cy.get('#content p').contains('Your wish list is empty')
    }

    irALaLista() {
        this.elements.wishlistLink().click();
    }

    eliminarPrimerProducto() {
        this.elements.btnRemove().first().click();
    }
}

export const wishlistPage = new WishlistPage();