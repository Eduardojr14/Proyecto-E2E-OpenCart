class RegisterPage {
    elements = {
        firstName: () => cy.get('#input-firstname'),
        lastName: () => cy.get('#input-lastname'),
        email: () => cy.get('#input-email'),
        telephone: () => cy.get('#input-telephone'),
        password: () => cy.get('#input-password'),
        confirmPassword: () => cy.get('#input-confirm'),
        policyCheckbox: () => cy.get('input[name="agree"]'),
        continueBtn: () => cy.get('input[value="Continue"]'),
        errorAlert: () => cy.get('.alert-danger'),
        fieldErrors: () => cy.get('.text-danger')
    }

    llenarFormulario(datos) {
        if(datos.nombre) this.elements.firstName().type(datos.nombre);
        if(datos.apellido) this.elements.lastName().type(datos.apellido);
        if(datos.email) this.elements.email().type(datos.email);
        if(datos.tel) this.elements.telephone().type(datos.tel);
        if(datos.pass) {
            this.elements.password().type(datos.pass);
            this.elements.confirmPassword().type(datos.pass);
        }
        if(datos.acceptPolicy) this.elements.policyCheckbox().check();
        this.elements.continueBtn().click();
    }
}

export const registerPage = new RegisterPage();