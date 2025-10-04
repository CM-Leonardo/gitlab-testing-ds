// Criando pasta para importar as variaveis, usamos essa funcionalidade combinada com o cypress.env para garantir a segurança de dados sensiveis
// Alem disso, criar variaveis ajuda da reusabilidade de codigo e legibilidade-

const USER = Cypress.env("user_name");
const PASSWORD = Cypress.env("user_password");
const ACCESS_TOKEN = Cypress.env("access_token")

export {
    USER, 
    PASSWORD, 
    ACCESS_TOKEN
}