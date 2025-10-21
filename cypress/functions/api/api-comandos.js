import { ACCESS_TOKEN, projeto } from "../utils/envVariaveis"


export function criaProjetoAPI(nome, descricao) {
   return cy.request({
        method: 'POST',
        url: `/api/v4/projects/`,
        body: {
            name: nome,
            description: descricao,
            initialize_with_readme: true
        },
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }, 
    })
}

export function deleteProjetos() {
    cy.request({ //busca todos os projetos
        method: 'GET',
        url: '/api/v4/projects/',
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
    }).then(resp => { //passa por todos os projetos e pega o id. O id será usado para buscar e deletar todos os projetos
        resp.body.forEach(project => cy.request({
            method: 'DELETE',
            url: `/api/v4/projects/${project.id}`,
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }, 
        }))
    })
}

// ----- ISSUES ----- //

export function criaIssueAPI(nome, descricao) { //criação de issue OK ---> acessar issue e validar no front FAZER
     criaProjetoAPI(projeto.nome, projeto.descricao).then(response => {
        cy.request({
            method: 'POST',
            url: `/api/v4/projects/${response.body.id}/issues`,
            body: {
                title: nome,
                description: descricao
            },
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }, 
        })
    })
}

