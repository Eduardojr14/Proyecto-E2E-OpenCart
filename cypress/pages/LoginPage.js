class LoginPage {
    // Definimos los selectores en un solo lugar
    elements = {
        emailInput: () => cy.get('#input-email'),
        passwordInput: () => cy.get('#input-password'),
        loginBtn: () => cy.get('input[type="submit"]'),
        errorAlert: () => cy.get('.alert-danger'),
        forgotPasswordLink: () => cy.get('.form-group > a').contains('Forgotten Password')
    }

    // Métodos reutilizables
    ingresarCredenciales(email, password) {
        if (email) this.elements.emailInput().type(email);
        if (password) this.elements.passwordInput().type(password);
    }

    clickLogin() {
        this.elements.loginBtn().click();
    }

    // Un método "Maestro" que combina acciones
    loginCompleto(email, password) {
        this.ingresarCredenciales(email, password);
        this.clickLogin();
    }
}

export const loginPage = new LoginPage();