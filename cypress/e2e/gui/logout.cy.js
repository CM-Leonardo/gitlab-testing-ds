import { USER, PASSWORD } from "../../functions/gui/utils/envVariaveis"
import { login, logout } from "../../functions/gui/utils/utils"

describe('Logout no sistema', () => {
    beforeEach(() => {
        login(USER, PASSWORD, false)
    })

    it('Deve fazer login no sistema e logo em seguida executar o logout', () => {
        logout() 
        cy.url().should('include',  '/sign_in')
    })
})