import { projeto, USER, PASSWORD } from "../../functions/utils/envVariaveis"
import { criaProjeto, validaCriacaoProjeto } from "../../functions/project/project";
import { deleteProjetos } from "../../functions/api/api-comandos"
import { login } from "../../functions/utils/utils"

describe('Criando um projeto via Interface de Usuário', () => {
    beforeEach(() => {
        deleteProjetos()
        login(USER, PASSWORD)
    })

    it('Deve fazer login na pagina, acessar a guia de "Creat a project" e criar um novo projeto', () => {
        criaProjeto(projeto.nome, projeto.descricao)
        validaCriacaoProjeto(projeto.nome, projeto.descricao)
    })
})