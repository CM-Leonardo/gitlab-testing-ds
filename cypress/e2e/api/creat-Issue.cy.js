import { USER, PASSWORD, issue } from "../../functions/utils/envVariaveis"
import { login } from "../../functions/utils/utils"
import { criaIssueAPI } from "../../functions/api/api-comandos"
import { validaCriacaoIssue } from "../../functions/project/project"

describe('Deve criar uma issue via API', () => {
    it('Deve criar uma issue via API e acessa-lo via front-end', () => {
        const nomeIssue = issue.nome
        const descricaoIssue = issue.descricao

        //função cria issue via API
        criaIssueAPI(nomeIssue, descricaoIssue).then((issue) => {
            login(USER, PASSWORD) //faz login para acessar o front 
            cy.visit(issue.body.web_url) //pega a url a partir do response body e acessa a issue criado
            validaCriacaoIssue(nomeIssue, descricaoIssue)// valida a criação
        })
    })
})