export function criaProjeto(nome, descricao) {
    cy.get('input[id="project_name"]')
                .eq(0)
                .should('be.visible')
                .type(nome)
            cy.get('textarea[id="project_description"]')
                .eq(0)
                .should('be.visible')
                .type(descricao)
            cy.get('input[value="Create project"]')
                .eq(0)
                .should('be.visible')
                .click()
}

export function validaCriacaoProjeto(nome, descricao) {
    cy.get('.flash-notice')
            .should('contain', `Project '${nome}' was successfully created.`)
        cy.get('.home-panel-title').should('contain', nome)
        cy.get('p[dir="auto"]').should('contain', descricao)
}