class SearchPage {
    elements = {
        searchBox: () => cy.get('input[name="search"]'),
        searchBtn: () => cy.get('.input-group-btn > .btn'),
        resultsTitle: () => cy.get('#content h1'),
        productsList: () => cy.get('.product-layout'),
        noResultsMsg: () => cy.get('#content p').contains('search criteria'),
        addToCartBtn: () => cy.get('button[onclick*="cart.add"]').first()
    }

    buscar(termino) {
        this.elements.searchBox().clear().type(termino);
        this.elements.searchBtn().click();
    }
}

export const searchPage = new SearchPage();