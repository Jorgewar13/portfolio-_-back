describe('AboutMePage', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000'); // Ajusta la URL según corresponda
    });

    it('should fill out the form and submit successfully', () => {
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('john.doe@example.com');
        cy.get('input[name="phone"]').type('123456789');
        cy.get('textarea[name="message"]').type('This is a test message');

        cy.get('form').submit();

        // Verifica que el formulario se haya enviado correctamente
        cy.contains('Formulario enviado con éxito').should('exist');
    });

    it('should handle form submission failure', () => {
        // Mockear la solicitud POST para simular un fallo
        cy.intercept('POST', 'http://localhost:3001/contacts', {
            statusCode: 500,
            body: 'Internal Server Error',
            delayMs: 1000 // Agrega un pequeño retraso para simular la solicitud
        }).as('postContact');

        // Llenar el formulario
        cy.get('input[name="name"]').type('John Doe');
        cy.get('input[name="email"]').type('john.doe@example.com');
        cy.get('input[name="phone"]').type('123456789');
        cy.get('textarea[name="message"]').type('This is a test message');

        // Enviar el formulario
        cy.get('form').submit();

        // Verificar que se mostró un error
        cy.contains('Error al enviar el formulario').should('exist');

        // Verificar que la solicitud se hizo correctamente
        cy.wait('@postContact').then(interception => {
            expect(interception.response.statusCode).to.equal(500);
        });
    });
});
