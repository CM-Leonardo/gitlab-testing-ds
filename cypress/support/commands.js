import { ACCESS_TOKEN } from "../functions/utils/envVariaveis"

//Comando de buscar todos os projetos 
Cypress.Commands.add('buscaProjetosAPI', () => {
    cy.request({
        method: 'GET',
        url: '/api/v4/projects/',
        headers: { Authorization: ACCESS_TOKEN },
    })
})