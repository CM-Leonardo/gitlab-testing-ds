import { USER, PASSWORD } from "../../functions/utils/envVariaveis"; //Importanto variaveis para uso
import { login } from "../../functions/utils/utils"

describe('Login com credenciais invalidas', () => {
    it('Deve tentar logar no sistema com USER_NAME incorreto', () => { 
        login("nome_incorreto", PASSWORD, false); //Chamando função de login
        cy.get('.flash-alert').should('contain', 'Invalid Login or password.');
    })

    it('Deve tentar logar no sistema com PASSWORD incorreta', () => {
        login(USER, "senha_incorreta", false);
        cy.get('.flash-alert').should('contain', 'Invalid Login or password.');
    })
})

describe('Login com credenciais validas', () => {
    it('Deve fazer login no sistema com USER_NAME e PASSWORD validos', () => {
        login(USER, PASSWORD, false)
        cy.get('.header-user-avatar').should('be.visible')
    })
})