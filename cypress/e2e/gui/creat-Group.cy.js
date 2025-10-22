import { group, PASSWORD, USER } from "../../functions/gui/utils/envVariaveis"
import { login } from "../../functions/gui/utils/utils"
import { criaGroup, validaCriacaoGroup } from "../../functions/gui/project/project"
import { deleteProjetos } from "../../functions/api/api"

describe('Criando uma grupo via Interface de Usuário', () => {
    beforeEach(() => {
        login(USER, PASSWORD)
        deleteProjetos()
    })
    
    it('Deve acessar o sistema e criar um grupo.', () => {
        criaGroup(group.nome, group.url, group.file)
        validaCriacaoGroup(group.nome)
    })
})