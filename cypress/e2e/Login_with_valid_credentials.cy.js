describe('Login functionality with valid credentials/Log out', () => {

    it('should login with valid credentials', () => {
        const username = 'tatevik@test.io';
        const password = 'yZ95sAzh5VzPcf2';

        cy.visit('https://develop.prtsr.io/login/?next=%2F')

        cy.get('input[data-e2e-name="email"]').eq(0).type(username);
        cy.get('input[data-e2e-name="password"]').type(password);


        // Click the login button
        cy.get('button[data-e2e-name="login-button"]').click()

        cy.url('https://develop.prtsr.io/').should('include', '/form-templates/');

        //Log out
        cy.get('ul.navbar-nav').eq(0).within(() => {
            cy.get('button.dropdown-toggle').click()
                cy.get('a').contains("Logout").click()

        })

    });





})





