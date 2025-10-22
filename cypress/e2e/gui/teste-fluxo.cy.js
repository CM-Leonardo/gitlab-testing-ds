import { USER, PASSWORD, group, projeto, label, issue, file, nomeBranch, titleMerge } from "../../functions/gui/utils/envVariaveis"
import { login } from "../../functions/gui/utils/utils"
import { criaGroup, criaProjeto, validaCriacaoGroup, validaCriacaoProjeto, criaLabel, criaIssue, validaCriaLabel, criaFile, validaFile, criaBranch, validaCriacaoIssue, criaMerge, validaMerge } from "../../functions/gui/project/project"
import { deleteProjetos, deleteGroups } from "../../functions/api/api"

describe('Testes Gerais - Validando fluxos', () => {
    const nomeGroup = group.nome
    const pathGroup = group.url
    const nomeProjeto = projeto.nome
    const descricaoProjeto = projeto.descricao
    const nomeIssue = issue.nome
    const descricaoIssue = issue.descricao
    const nomeLabel = label.title
    const descricaoLabel = label.descricao
    const color = label.color
    const nomeFile = file.nome
    const descricaoFile = file.descricao
    const validaBranch = nomeBranch
    const branch = validaBranch.charAt(0).toUpperCase() + validaBranch.slice(1);
   
    beforeEach(() => {
        login(USER, PASSWORD)
    })
    it('Deve acessar o sistema, criar um GRUPO, dentro do grupo deve criar um PROJETO, dentro do projeto deve criar uma ISSUE, dentro da issue deve criar uma LABEL', () => {
        cy.visit('/')
        criaGroup(nomeGroup, pathGroup, group.fileTesteGeral, false)
        validaCriacaoGroup(nomeGroup)
        criaProjeto(nomeProjeto, descricaoProjeto, false)
        validaCriacaoProjeto(nomeProjeto, descricaoProjeto)    
        criaIssue(nomeIssue, descricaoIssue)
        validaCriacaoIssue(nomeIssue, descricaoIssue)
        criaLabel(nomeLabel, descricaoLabel, color)
        validaCriaLabel(nomeLabel, descricaoLabel, color)
    })

    it('Deve acessar o projeto criado, criar um FILE, voltar para o projeto, criar uma BRANCH e dentro da branch fazer um MERGE.', () => {
        cy.visit('/')
        criaFile(nomeFile, descricaoFile)
        validaFile(nomeFile)
        criaBranch(nomeBranch)
        criaMerge(titleMerge)
        validaMerge(branch, nomeLabel)
    })
})