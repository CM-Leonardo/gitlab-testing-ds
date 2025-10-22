import {USER, PASSWORD, group } from "../../functions/gui/utils/envVariaveis"
import { login } from "../../functions/gui/utils/utils"
import { criaGroupAPI, deleteGroups, validaChamadaAPI } from "../../functions/api/api"
import { validaCriacaoGroup } from "../../functions/gui/project/project"

describe('Deve criar um group via API', () => {
    beforeEach(() =>{
        deleteGroups()
    })
    it('Cria um Group via API e valida acessando o front-end.', () => {
        const nomeGroup = group.nome
        const pathGroup = group.url

        criaGroupAPI(nomeGroup, pathGroup).then((group) => {
            validaChamadaAPI(nomeGroup, pathGroup, group, 3)
            
            login(USER, PASSWORD)
            cy.visit(group.body.web_url)
            validaCriacaoGroup(nomeGroup, pathGroup, true)
        })
    })
})