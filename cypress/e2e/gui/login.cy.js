import { USER, PASSWORD } from "../../functions/utils/envVariaveis"; //Importanto variaveis para uso
import * as login from "../../functions/login/login"; //Importando função de login

describe('Login com credenciais invalidas', () => {
    it('Deve tentar logar no sistema com USER_NAME incorreto', () => { 
        login.login("nome_incorreto", PASSWORD); //Chamando função de login
        cy.get('.flash-alert').should('contain', 'Invalid Login or password.');
    })

    it('Deve tentar logar no sistema com PASSWORD incorreta', () => {
        login.login(USER, "senha_incorreta");
        cy.get('.flash-alert').should('contain', 'Invalid Login or password.');
    })
})

describe('Login com credenciais validas', () => {
    it('Deve fazer login no sistema com USER_NAME e PASSWORD validos', () => {
        login.login(USER, PASSWORD)
        cy.get('.blank-state-welcome-title').should('contain.text', 'Welcome to GitLab')
    })
})