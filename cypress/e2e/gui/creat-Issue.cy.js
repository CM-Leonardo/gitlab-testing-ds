import { PASSWORD, USER, issue } from "../../functions/gui/utils/envVariaveis"
import { login } from "../../functions/gui/utils/utils"
import { criaIssue, validaCriacaoIssue } from "../../functions/gui/project/project"
import { deleteProjetos, criaProjetoAPI } from "../../functions/api/api"


describe('Criando uma issue via Interface de Usuário', () => {
    beforeEach(() => {
        deleteProjetos()
        login(USER, PASSWORD)
        //como a pré-condição é ter um projeto, e ele não faz parte do fluxo, criamos ele a partir da API
        criaProjetoAPI(projeto.nome, projeto.descricao).then((response) => {
            cy.visit(response.body.web_url)
        })
    })

    it('Deve acessar o projeto e criar uma issue', () => {
        criaIssue(issue.nome, issue.descricao)
        validaCriacaoIssue(issue.nome, issue.descricao)
    })
})