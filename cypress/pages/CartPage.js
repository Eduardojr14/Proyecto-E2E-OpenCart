class CartPage {
    elements = {
        subTotal: () => cy.get('table.table-bordered').contains('Sub-Total').next(),
        ecoTax: () => cy.get('table.table-bordered').contains('Eco Tax').next(),
        vat: () => cy.get('table.table-bordered').contains('VAT').next(),
        total: () => cy.get('table.table-bordered').contains('Total').next(),
        checkoutBtn: () => cy.get('.pull-right .btn-primary').contains('Checkout')
    }

    validarTotales(esperado) {
        this.elements.subTotal().should('contain', esperado.subtotal);
        this.elements.ecoTax().should('contain', esperado.ecoTax);
        this.elements.vat().should('contain', esperado.vat);
        this.elements.total().should('contain', esperado.total);
    }

    irAlCheckout() {
        this.elements.checkoutBtn().click();
    }
}

export const cartPage = new CartPage();