import { USER, PASSWORD, projeto } from "../../functions/gui/utils/envVariaveis"
import { login } from "../../functions/gui/utils/utils"
import { criaProjeto, validaCriacaoProjeto } from "../../functions/gui/project/project"
import { deleteProjetos } from "../../functions/api/api"

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