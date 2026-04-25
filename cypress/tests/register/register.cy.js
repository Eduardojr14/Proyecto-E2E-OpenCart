import { registerPage } from '../../pages/RegisterPage';

describe('Flujo de Registro - OpenCart', () => {
    
    const emailUnico = `test_user_${Date.now()}@mail.com`;

    beforeEach(() => {
        // TC-01: Acceso a la pantalla de Registro
        cy.visit('/index.php?route=account/register');
    });

    it('TC-02: Registro exitoso con datos válidos', () => {
        registerPage.llenarFormulario({
            nombre: 'Eduardo',
            apellido: 'Parra',
            email: emailUnico,
            tel: '123456789',
            pass: 'Clave123!',
            acceptPolicy: true
        });

        // Validaciones
        cy.url().should('include', 'route=account/success');
        cy.get('#content h1').should('contain', 'Your Account Has Been Created!');
    });

    it('TC-06: Validación de políticas de privacidad (Sin marcar)', () => {
        registerPage.llenarFormulario({
            nombre: 'Eduardo',
            apellido: 'Parra',
            email: `error_${Date.now()}@mail.com`,
            tel: '123456789',
            pass: 'Clave123!',
            acceptPolicy: false // No aceptamos
        });

        registerPage.elements.errorAlert()
            .should('be.visible')
            .and('contain', 'Warning: You must agree to the Privacy Policy!');
    });
});