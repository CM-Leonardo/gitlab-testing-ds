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
export function validaCriacaoProjeto(nome, descricao, api = false) { //parametro api adicionado. Quando criamos um projeto via api, a mensagem de "successfully created"
    if(api === true) {                                              // não é exibida, e isso quebra o teste. Criei uma validação para que quando for via API, a validação seja diferente 
        cy.get('.home-panel-title')
            .should('contain', nome)
        cy.get('p[dir="auto"]')
            .should('contain', descricao)
    }else {
        cy.get('.flash-notice')
            .should('contain', `Project '${nome}' was successfully created.`)
        cy.get('.home-panel-title')
            .should('contain', nome)
        cy.get('p[dir="auto"]')
            .should('contain', descricao)
    }
}

// ----- ISSUES ----- //

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
    cy.get('[title="Close issue"]')
        .eq(1)
        .should('be.visible')
}

// ----- GROUP ----- //

//função cria group
export function criaGroup(nome, url, file) {
    cy.visit('/dashboard/groups')
    cy.get('[class="btn btn-success"]')
        .should('be.visible')
        .click()
    cy.get('[id="group_name"]')
        .should('be.visible')
        .type(nome)
    cy.get('[id="group_path"]')
        .should('be.visible')
        .clear()
        .type(url)
    cy.get('input#group_avatar')
        .selectFile(file, { force:true })
    cy.get('[class="file_name js-avatar-filename"]')
        .contains('icon.png')
    cy.get('[type="submit"]')
        .should('be.visible')
        .click()
}

//validação de ciaação via API adicionada aqui tambe. Mais informações consultar a função validaCriacaoProjeto()
export function validaCriacaoGroup(nome, path, api = false) {
    if( api === true) {
        cy.get('.home-panel-title')
            .should('contain.text', nome)
        cy.url().should('include', path)
    } else {
        cy.get('[class="flash-notice mb-2"]')
            .should('contain.text', `Group '${nome}' was successfully created.`)
        cy.get('.home-panel-title')
            .should('contain.text', nome)
    }
}
