import * as utils from "../../functions/utils/utils"
import { projeto } from "../../functions/utils/envVariaveis"
import { criaProjeto, validaCriacaoProjeto } from "../../functions/project/project";

describe('Criando um projeto via Interface de Usuário', () => {
    beforeEach(() => {
        utils.login()
        cy.visit('/projects/new')
    })

    it('Deve fazer login na pagina, acessar a guia de "Creat a project" e criar um novo projeto', () => {
        criaProjeto(projeto.nome, projeto.descricao)
        validaCriacaoProjeto(projeto.nome, projeto.descricao)
    })
})