import { criaProjetoAPI } from "../../functions/api/api-comandos"
import { validaCriacaoProjeto } from "../../functions/project/project"
import { USER, PASSWORD, projeto } from "../../functions/utils/envVariaveis"
import { login } from "../../functions/utils/utils"

describe('Deve criar um projeto via API', () => {
    it('Cria um Projeto via API e valida acessando o front-end.', () => {
        const nomeProjeto = projeto.nome
        const descricaoProjeto = projeto.descricao

        //função cria projeto via API
        criaProjetoAPI(nomeProjeto, descricaoProjeto).then((project) => { 
            login(USER, PASSWORD) //faz login para acessar o front 
            cy.visit(project.body.web_url) //pega a url a partir do response body e acessa o projeto criado
            validaCriacaoProjeto(nomeProjeto, descricaoProjeto, true) // valida a criação
        })
    })
})