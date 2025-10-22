import { USER, PASSWORD, projeto } from "../../functions/gui/utils/envVariaveis"
import { login } from "../../functions/gui/utils/utils"
import { criaProjetoAPI, validaChamadaAPI } from "../../functions/api/api"
import { validaCriacaoProjeto } from "../../functions/gui/project/project"

describe('Deve criar um projeto via API', () => {
    it('Cria um Projeto via API e valida acessando o front-end.', () => {
        const nomeProjeto = projeto.nome
        const descricaoProjeto = projeto.descricao

        //função cria projeto via API
        criaProjetoAPI(nomeProjeto, descricaoProjeto).then((project) => {
            validaChamadaAPI(nomeProjeto, descricaoProjeto, project, 1) 
            
            login(USER, PASSWORD) //faz login para acessar o front 
            cy.visit(project.body.web_url) //pega a url a partir do response body e acessa o projeto criado
            validaCriacaoProjeto(nomeProjeto, descricaoProjeto, true) // valida a criação
        })
    })
})