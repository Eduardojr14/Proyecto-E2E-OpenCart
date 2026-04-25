class CheckoutPage {
    elements = {
        // Paso 1: Opciones (Login)
        loginEmail: () => cy.get('#input-email'),
        loginPassword: () => cy.get('#input-password'),
        loginBtn: () => cy.get('#button-login'),
        
        // Botones "Continue" de cada sección
        continueBilling: () => cy.get('#button-payment-address'),
        continueDelivery: () => cy.get('#button-shipping-address'),
        continueShippingMethod: () => cy.get('#button-shipping-method'),
        
        // Paso 5: Payment Method
        termsCheckbox: () => cy.get('input[name="agree"]'),
        continuePaymentMethod: () => cy.get('#button-payment-method'),
        
        // Paso 6: Confirm Order
        confirmOrderBtn: () => cy.get('#button-confirm'),
        
        // Pantalla de Éxito
        successTitle: () => cy.get('#content h1')
    }

    loginCheckout(email, pass) {
        this.elements.loginEmail().type(email);
        this.elements.loginPassword().type(pass);
        this.elements.loginBtn().click();
    }

    completarPasosEstandar() {
        // Asumiendo que usamos direcciones ya existentes para agilizar el test
        this.elements.continueBilling().click();
        this.elements.continueDelivery().click();
        this.elements.continueShippingMethod().click();
        this.elements.termsCheckbox().check();
        this.elements.continuePaymentMethod().click();
    }

    confirmarPedido() {
        this.elements.confirmOrderBtn().click();
    }
}

export const checkoutPage = new CheckoutPage();