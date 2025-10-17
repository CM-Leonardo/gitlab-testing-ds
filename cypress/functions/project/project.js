//função cria projeto
export function criaProjeto(nome, descricao) {
    cy.visit('/projects/new')
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

//função valida a criação do projeto
export function validaCriacaoProjeto(nome, descricao) {
    cy.get('.flash-notice')
            .should('contain', `Project '${nome}' was successfully created.`)
        cy.get('.home-panel-title').should('contain', nome)
        cy.get('p[dir="auto"]').should('contain', descricao)
}

//função cria issue
export function criaIssue(nome, descricao) {
    cy.get('.shortcuts-issues')
            .should('be.visible')
            .click()
    cy.get('#new_issue_link')
        .should('be.visible')
        .click()
    cy.get('[id="issue_title"]')
        .should('be.visible')
        .type(nome)
    cy.get('[id="issue_description"]')
        .should('be.visible')
        .type(descricao)
    cy.get('[name="commit"]')
        .should('be.visible')
        .click()
}

//função valida issue
export function validaCriacaoIssue(nome, descricao){
    cy.get('[class="title qa-title"]')
        .should('contain', nome)
    cy.get('[class="md"]')
        .should('contain', descricao)
}