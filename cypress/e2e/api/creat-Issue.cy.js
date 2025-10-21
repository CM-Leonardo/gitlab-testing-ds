import { USER, PASSWORD, issue } from "../../functions/utils/envVariaveis"
import { login } from "../../functions/utils/utils"
import { criaIssueAPI } from "../../functions/api/api-comandos"
import {  } from "../../functions/project/project"

describe('Deve criar uma issue via API', () => {
   beforeEach(() => {
        login(USER, PASSWORD)
   })

    it('Deve criar uma issue via API e acessa-lo via front-end', () => {
        const nomeIssue = issue.nome 
        const descricaoIssue = issue.descricao
        criaIssueAPI(nomeIssue, descricaoIssue) //criação de issue OK ---> acessar issue e validar no front FAZER
    })
})