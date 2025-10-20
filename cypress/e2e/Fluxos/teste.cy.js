import { criaGroup, criaProjeto, validaCriacaoGroup, validaCriacaoProjeto } from "../../functions/project/project"
import { group, PASSWORD, projeto, USER } from "../../functions/utils/envVariaveis"
import { login } from "../../functions/utils/utils"



describe('lçadkçlaskdasd', () => {
    beforeEach(() => {
        login(USER, PASSWORD)
    })

    it('ksajdkasjd', () => {
        criaGroup(group.nome, group.url, group.file)
        validaCriacaoGroup(group.nome)
        criaProjeto(projeto.nome, projeto.descricao)
        validaCriacaoProjeto(projeto.nome, projeto.descricao)
        
    })
})