import { group, PASSWORD, USER } from "../../functions/gui/utils/envVariaveis"
import { criaGroupAPI } from "../../functions/api/api"
import { login } from "../../functions/gui/utils/utils"
import { validaCriacaoGroup } from "../../functions/gui/project/project"

describe('Validando criação de Group via API', () => {
    it('Cria uma Group via API e valida acessando o front-end.', () => {
        const nomeGroup = group.nome
        const pathGroup = group.url

        criaGroupAPI(nomeGroup, pathGroup).then((group) => {
            login(USER, PASSWORD)
            cy.visit(group.body.web_url)
            validaCriacaoGroup(nomeGroup, pathGroup, true)
        })
    })
})