import { ACCESS_TOKEN } from "../utils/envVariaveis"

function apiBuscaProjetos() { 
    return cy.request({
            method: 'GET', 
            url: '/api/v4/projects/', 
            headers: { Authorization: ACCESS_TOKEN} 
        })
}

export function deleteAllProjetos() {
    apiBuscaProjetos().then(res => 
        res.body.forEach(project => cy.request())
    )
}