describe('Login functionality with invalid credentials', () => {

    it('should show error message for empty fields/invalid credentials', () => {
        const username = 'tatevik@test.io';
        const password = 'yZ95sAzh5VzPcf';

        cy.visit('https://develop.prtsr.io/login/?next=%2F')


        //Empty fields
        cy.get('button[data-e2e-name="login-button"]').click()
        cy.get('div').contains('Invalid login or password')


        //Invalid credentials
        cy.get('input[data-e2e-name="email"]').eq(0).type(username);
        cy.get('input[data-e2e-name="password"]').type(password);


        // Click the login button
        cy.get('button[data-e2e-name="login-button"]').click()


        // Assert that the appropriate error message is displayed
        cy.get('div').contains('Invalid login or password')


    });



 })