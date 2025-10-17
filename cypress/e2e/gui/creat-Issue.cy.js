import { criaIssue, criaProjeto, validaCriacaoIssue } from "../../functions/project/project"
import { USER, PASSWORD, projeto, issue} from "../../functions/utils/envVariaveis"
import { login } from "../../functions/utils/utils"

describe('Criando uma issue via Interface de Usuário', () => {
    beforeEach(() => {
        login(USER, PASSWORD)
        criaProjeto(projeto.nome, projeto.descricao)
    })

    it('Deve acessar o projeto e criar uma issue', () => {
        criaIssue(issue.nome, issue.descricao)
        validaCriacaoIssue(issue.nome, issue.descricao)
    })
})