import { USER, PASSWORD, issue } from "../../functions/gui/utils/envVariaveis"
import { login } from "../../functions/gui/utils/utils"
import { criaIssueAPI, deleteProjetos, validaChamadaAPI } from "../../functions/api/api"
import { validaCriacaoIssue } from "../../functions/gui/project/project"

describe('Deve criar uma issue via API', () => {
    beforeEach(() => {
        deleteProjetos()
    })
    it('Cria uma Issue via API e valida acessando o front-end.', () => {
        const nomeIssue = issue.nome
        const descricaoIssue = issue.descricao

        //função cria issue via API
        criaIssueAPI(nomeIssue, descricaoIssue).then((issue) => {
           validaChamadaAPI(nomeIssue, descricaoIssue, issue, 2)
            
           login(USER, PASSWORD) //faz login para acessar o front 
            cy.visit(issue.body.web_url) //pega a url a partir do response body e acessa a issue criado
            validaCriacaoIssue(nomeIssue, descricaoIssue)// valida a criação
        })
    })
})