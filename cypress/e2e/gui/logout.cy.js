import { login, logout } from "../../functions/gui/utils/utils"
import { PASSWORD, USER } from "../../functions/gui/utils/envVariaveis"

describe('Logout no sistema', () => {
    beforeEach(() => {
        login(USER, PASSWORD, false)
    })

    it('Deve fazer login no sistema e logo em seguida executar o logout', () => {
        logout() 
        cy.url().should('include',  '/sign_in')
    })
})