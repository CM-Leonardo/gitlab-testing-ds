import * as utils from "../../functions/utils/utils"
import { projeto } from "../../functions/utils/envVariaveis"
import { criaProjeto, validaCriacaoProjeto } from "../../functions/project/project";

describe('Criando um projeto via Interface de Usuário', () => {
    beforeEach(() => {
        utils.login() //chama funcao de login 
        cy.visit('/projects/new')
    })

    it('Deve fazer login na pagina, acessar a guia de "Creat a project" e criar um novo projeto', () => {
        criaProjeto(projeto.nome, projeto.descricao) //chama funcao de criar projeto
        validaCriacaoProjeto(projeto.nome, projeto.descricao) //chama funcao de validar criacao de projeto
    }) 
})