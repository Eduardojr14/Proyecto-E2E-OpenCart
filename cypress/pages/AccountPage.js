class AccountPage {
    elements = {
        logoutOption: () => cy.get('.list-group-item').contains('Logout'),
        logoutHeader: () => cy.get('#content h1'),
        continueBtn: () => cy.get('.pull-right .btn-primary'),
        contentBody: () => cy.get('#content')
    }

    clickLogout() {
        this.elements.logoutOption().click();
    }
}

export const accountPage = new AccountPage();