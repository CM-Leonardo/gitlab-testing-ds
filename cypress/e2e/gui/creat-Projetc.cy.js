import { USER, PASSWORD, projeto } from "../../functions/gui/utils/envVariaveis"
import { login } from "../../functions/gui/utils/utils"
import { criaProjeto, validaCriacaoProjeto } from "../../functions/gui/project/project"
import { deleteProjetos } from "../../functions/api/api"

describe('Criando um Projeto via Interface de Usuário', () => {
    beforeEach(() => {
        deleteProjetos()
        login(USER, PASSWORD)
    })

    it('Deve acessar o sistema e criar um projeto.', () => {
        criaProjeto(projeto.nome, projeto.descricao)
        validaCriacaoProjeto(projeto.nome, projeto.descricao)
    })
})