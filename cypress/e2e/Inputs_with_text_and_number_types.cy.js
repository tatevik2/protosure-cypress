describe('Creating Inputs with Text and Number types', () => {

    it('should add inputs with Text and Number Types ', () => {
        const username = 'tatevik@test.io';
        const password = 'yZ95sAzh5VzPcf2';

        cy.visit('https://develop.prtsr.io/login/?next=%2F');

        cy.get('input[data-e2e-name="email"]').eq(0).type(username);
        cy.get('input[data-e2e-name="password"]').type(password);

        cy.get('button[data-e2e-name="login-button"]').click();

        cy.url('https://develop.prtsr.io/').should('include', '/form-templates/');
        cy.get ('a[data-e2e-name="form-template-full-version"]').eq(0).click();

        const dataTransfer = new DataTransfer();

        createInputs(dataTransfer);
    });

    const createInputs = (dataTransfer) => {
        const times = 3;
        const data = [
            {
                label: 'First Name',
                type: 'text'
            },
            {
                label: 'Last Name',
                type: 'text'
            },
            {
                label: 'Card Number',
                type: 'number'
            }
        ]

        for(let i = 0; i < times; i++) {

            // Drag and Drop the text input
            cy.get('span').contains('Text').trigger('dragstart', {
                dataTransfer
            });

            if (i === 0) {
                cy.wait(25000);
            }

            cy.get('div[data-e2e-name="drop-target-container"]').eq(0)
                .trigger('drop', {
                    dataTransfer,
                    force: true,
                })
                .wait(50)
                .trigger('dragend', { dataTransfer, force: true })
            cy.wait(2000);

            // Open the config modal of input
            cy.get('span[class*="fa fa-cog"]').last().click();

            // Change the input label
            cy.get('div[data-sentry="Label"] > input').type(data[i].label);

            // Make the field required
            cy.get('.custom-checkbox input').check({ force: true });

            if (data[i].type === 'number') {
                // Make the input type as number
                cy.get('div[data-e2e-name="Number"] input').check({ force: true });
            }

            cy.get('button').contains('Save').click();
            cy.wait(2000);
        }
    }
})