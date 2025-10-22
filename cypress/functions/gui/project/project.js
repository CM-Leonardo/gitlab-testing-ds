//função cria projeto
export function criaProjeto(nome, descricao, visit = true) {
    if(visit === false) {
        cy.get('[data-action="new-project"]')
            .should('be.visible')
            .click()
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
    } else {
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
    
}

function starProjeto() {
    cy.get('[type="button"]')
        .contains('Star')
        .click()
    cy.get('[type="button"]')
        .contains('Unstar')
        .should('contain.text', 'Unstar')
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
        starProjeto()
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
export function criaGroup(nome, url, file, visit = true) {
    if(visit === false) {
        cy.get('[class="btn"]')
            .contains(' Groups ')
            .click()
        cy.get('[class="qa-your-groups-link"]')
            .should('be.visible')
            .click({ force:true })
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
    } else {
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
}

// --- LABEL --- //

export function criaLabel(title, descricao, color) {
    cy.get('[data-track-property="labels"]')
        .should('be.visible')
        .click()
    cy.get('[data-is-link="true"]')
        .should('be.visible')
        .click({ force:true })
    cy.get('[id="new_label_link"]')
        .should('be.visible')
        .click()
    cy.get('[id="label_title"]')
        .should('be.visible')
        .type(title)
    cy.get('[id="label_description"]')
        .should('be.visible')
        .type(descricao)
    cy.get('[id="label_color"]')
        .should('be.visible')
        .clear().type(color)
    cy.get('[value="Create label"]')
        .should('be.visible')
        .click()
}

function priorizaLabel() {
    cy.get('[aria_label="Prioritize label"]')
        .should('be.visible')
        .click( {force:true} )
}

export function validaCriaLabel(title, descricao, color) {
    cy.get('[class="label-name"]')
        .should('contain.text', title)
    cy.get('[class="description-text"]')
        .should('contain.text', descricao)
    cy.get('.badge.color-label')
        .should('have.attr', 'style')
        .and('include', `background-color: ${color}`)

    priorizaLabel()
    cy.get('.prioritized-labels')
        .find('.label-list-item')
        .should('exist')
}

export function criaFile(nome, descricao) {
    cy.get('[class="project-name"]')
        .eq(0)
        .should('be.visible')
        .click()
    cy.get('[class="breadcrumb-item-text js-breadcrumb-item-text"]')
        .should('be.visible')   
        .click()
    cy.get('[class="nav-link btn btn-success d-flex align-items-center"]')
        .should('be.visible')
        .click()
    cy.get('[id="file_name"]')
        .should('be.visible')
        .type(nome)
    cy.get('[class="ace_content"]')
        .should('be.visible')
        .type(descricao)
    cy.get('[type="submit"]')
        .should('be.visible')
        .click()
}

export function validaMerge(branch, label) {
    cy.get('[class="title qa-title"]')
        .should('contain.text', `WIP: ${branch}`)
    cy.get('[class="block labels"]')
        .should('contain.text', label)
}

export function validaFile(nome) {
    cy.get('[class="flash-notice mb-2"]')
        .should('be.visible')
    cy.get('[class="file-title-name qa-file-title-name"]')
        .should('contain.text', nome)
}

export function criaBranch(nome){
    cy.get('[class="breadcrumb-item-text js-breadcrumb-item-text"]')
            .click()
        cy.get('[class="nav-link stat-link d-flex align-items-center"]')
            .eq(1)
            .click()
        cy.get('[class="btn btn-success"]')
            .click()
        cy.get('[id="branch_name"]')
            .type(nome)
        cy.get('[type="submit"]')
            .click({force:true})
}

export function criaMerge(title){
    cy.wait(2000)
    cy.get('[title="New merge request"]')
            .should('be.visible')
            .click()
        cy.get('[id="merge_request_description"]')
            .should('be.visible')
            .type(title)
        cy.get('[class="assign-to-me-link qa-assign-to-me-link "]')
            .should('be.visible')
            .click()
        cy.get('[class="dropdown-toggle-text"]')
            .should('contain.text', 'Administrator')
        cy.get('[type="button"]')
            .contains('Labels')
            .should('be.visible')
            .click()
        cy.get('[class="label-item d-flex flex-row text-break-word"]')
            .should('be.visible')
            .wait(1000)
            .click({ force:true })
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
