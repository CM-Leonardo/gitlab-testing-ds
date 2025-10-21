import { group, PASSWORD, USER } from "../../functions/utils/envVariaveis"
import { login } from "../../functions/utils/utils"
import { criaGroup, validaCriacaoGroup } from "../../functions/project/project"
import { deleteProjetos } from "../../functions/api/api-comandos"

describe('Criando uma grupo via Interface de Usuário', () => {
    beforeEach(() => {
        deleteProjetos()
        login(USER, PASSWORD)
    })
    
    it('Deve acessar o sistema e criar um grupo', () => {
        criaGroup(group.nome, group.url, group.file)
        validaCriacaoGroup(group.nome)
    })
})