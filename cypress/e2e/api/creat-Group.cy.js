import { group, PASSWORD, USER } from "../../functions/utils/envVariaveis"
import { criaGroupAPI } from "../../functions/api/api-comandos"
import { login } from "../../functions/utils/utils"
import { validaCriacaoGroup } from "../../functions/project/project"

describe('Validando criação de Group via API', () => {

    it('Valida a criação de Group via API pelo front-end', () => {
        const nomeGroup = group.nome
        const pathGroup = group.url

        criaGroupAPI(nomeGroup, pathGroup).then((group) => {
            login(USER, PASSWORD)
            cy.visit(group.body.web_url)
            validaCriacaoGroup(nomeGroup, pathGroup, true)
        })
    })
})