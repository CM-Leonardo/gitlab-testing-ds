
export function login(user, password) {
    cy.visit('/'); //Visitando pagina
    cy.get('[name="user[login]"]')
            .should('be.visible')
            .type(user)
        cy.get('[name="user[password]"]')
            .should('be.visible')
                .type(password)
        cy.get('input[value="Sign in"]')
            .should('be.visible')
            .click()
}

