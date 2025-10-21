//COMANDO LOGIN -> executa o login e salva o cache quando necessário 
export function login(user, password, cacheSession = true) {
    const executaLogin = () => {
        cy.visit('/'); //Visitando pagina
        cy.get('[name="user[login]"]')
            .should('be.visible')
            .type(user)
        cy.get('[name="user[password]"]')
            .should('be.visible')
                .type(password)
        cy.get('input[value="Sign in"]')
            .should('be.visible')
            .click()
    }

    const validate = () => { //valida se a sessão esta ativa, se estiver ele reutiliza, se não, cria uma nova
        cy.visit('/')
        cy.location('pathname', { timeout: 1000 })
            .should('not.eq', '/users/sign_in')
    }

    const options = { //repassa o cache para outras specs de teste
        cacheAcrossSpecs: true,
        validate,
    }

    if (cacheSession) { //validação, se cacheSession = true 
        cy.session(user, executaLogin, options) // -> executa o login com salvamento de sessão
    } else {
        executaLogin() // -> se não, executa o login sem salvar sessão. É recomendado usar o cacheSession false em testes de login, ja que queremos validar o login no sistema
    }
}

//COMANDO LOGOUT -> 
export function logout() {
    cy.get('.header-user-avatar')
        .should('be.visible')
        .click()
    cy.contains('Sign out')
        .should('be.visible')
        .click()

}
