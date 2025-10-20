import { group, PASSWORD, USER } from "../../functions/utils/envVariaveis"
import { login } from "../../functions/utils/utils"
import { criaGroup, validaCriacaoGroup } from "../../functions/project/project"

describe('Criando uma grupo via Interface de Usuário', () => {
    beforeEach(() => {
        login(USER, PASSWORD)
    })
    
    it('Deve acessar o sistema e criar um grupo', () => {
        criaGroup(group.nome, group.url, group.file)
        validaCriacaoGroup(group.nome)
    })
})