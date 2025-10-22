import { ACCESS_TOKEN, group, projeto } from "../gui/utils/envVariaveis"

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

export function deleteGroups() { 
    cy.request({
        method: 'GET',
        url: '/api/v4/groups/',
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
    }).then(resp => {
        resp.body.forEach(group => cy.request({
            method: 'DELETE',
            url: `/api/v4/groups/${group.id}`,
            headers: { Authorization: `Bearer ${ACCESS_TOKEN}` }, 
        }))
    })
}

// ----- ISSUES ----- //

export function criaIssueAPI(nome, descricao) {
     return criaProjetoAPI(projeto.nome, projeto.descricao).then(response => {
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

// ---- GROUP ---- ///

export function criaGroupAPI(nome, path) {
    return cy.request({
        method: 'POST',
        url: '/api/v4/groups',
        body: {
            name: nome,
            path: path
        },
        headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
    })
}

// --- UTILS --- ///

export function validaChamadaAPI(name, descricao, response, tipo){
    if(tipo === 1) { //valida criação projeto via API
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(name)
        expect(response.body.description).to.equal(descricao)
    } 
    else if(tipo === 2) { //valida criação issue via api
        expect(response.status).to.equal(201)
        expect(response.body.title).to.equal(name)
        expect(response.body.description).to.equal(descricao)
    } 
    else if (tipo === 3) { // valida criação group via api
        expect(response.status).to.equal(201)
        expect(response.body.name).to.equal(name)
        expect(response.body.path).to.equal(descricao)
    }
}


        

