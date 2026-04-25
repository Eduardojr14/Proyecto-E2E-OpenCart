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

    it('TC-04: Validación de campos obligatorios (Vacíos)', () => {
        // Simplemente hacemos clic en continuar sin llenar nada
        registerPage.elements.continueBtn().click();

        // Validamos que aparezcan los mensajes de error en los campos
        registerPage.elements.firstNameError().should('be.visible').and('contain', 'First Name must be');
        registerPage.elements.emailError().should('be.visible');
        registerPage.elements.errorAlert().should('contain', 'Warning');
    });

    it('TC-03: Registro con email duplicado', () => {
        // Usamos un email que ya registramos en el TC-02 o uno fijo
        registerPage.llenarFormulario({
            nombre: 'Eduardo',
            apellido: 'Parra',
            email: 'eduardo_test_fijo@mail.com', // Asegúrate de haberlo usado antes
            tel: '123456789',
            pass: 'Test1234!',
            acceptPolicy: true
        });

        registerPage.elements.errorAlert()
            .should('be.visible')
            .and('contain', 'Warning: E-Mail Address is already registered!');
    });
});



    