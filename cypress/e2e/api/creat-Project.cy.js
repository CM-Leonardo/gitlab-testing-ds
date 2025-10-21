import { criaProjetoAPI } from "../../functions/api/api-comandos"
import { validaCriacaoProjeto } from "../../functions/project/project"
import { USER, PASSWORD, projeto } from "../../functions/utils/envVariaveis"
import { login } from "../../functions/utils/utils"

describe('Deve criar um projeto via API', () => {

   beforeEach(() => {
        login(USER, PASSWORD)
   })

    it('Deve criar um projeto via API e acessa-lo via front-end', () => {
        const nomeProjeto = projeto.nome
        const descricaoProjeto = projeto.descricao
        criaProjetoAPI(nomeProjeto, descricaoProjeto).then((response) => { 

            const link = response.body.path
            cy.visit(`/root/${link}`)
            validaCriacaoProjeto(nomeProjeto, descricaoProjeto, true)
        })
    })
})