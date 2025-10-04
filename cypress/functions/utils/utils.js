import {USER, PASSWORD} from "../utils/envVariaveis"

export function login() {
    cy.visit('/'); //Visitando pagina
    cy.get('[name="user[login]"]')
            .should('be.visible')
            .type(USER)
        cy.get('[name="user[password]"]')
            .should('be.visible')
                .type(PASSWORD)
        cy.get('input[value="Sign in"]')
            .should('be.visible')
            .click()
}