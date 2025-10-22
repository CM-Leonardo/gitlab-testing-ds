// Criando pasta para importar as variaveis, usamos essa funcionalidade combinada com o cypress.env para garantir a segurança de dados sensiveis
// Alem disso, criar variaveis ajuda da reusabilidade de codigo e legibilidade-

import { faker } from '@faker-js/faker'

const USER = Cypress.env("user_name");
const PASSWORD = Cypress.env("user_password");
const ACCESS_TOKEN = Cypress.env("access_token")

// ----------- criando nomes fakes para a criação de porjetos e issues ----------- //

const projeto = {
    nome: faker.random.words(2),
    descricao: faker.random.words(5)
}

const issue = {
    nome: faker.random.words(1),
    descricao: faker.random.words(3)
}


const group = {
    nome: faker.random.words(1),
    url: faker.random.words(1),
    file: 'cypress/fixtures/files/icon.png'
}



export {
    USER, 
    PASSWORD, 
    ACCESS_TOKEN,
    projeto,
    issue,
    group
}