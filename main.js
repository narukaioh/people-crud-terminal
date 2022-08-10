const readline = require("readline-sync")
const { list, createMenu } = require("./ui")
const {
  addPerson,
  alphabetical,
  numerical,
  getPeople
} = require("./person")

const mainMenu = createMenu(
  ["Adicionar pessoa", "Listar Pessoa", "Sair"],
  "MENU PRINCIPAL"
)

const listMenu = createMenu(
  ["Nome", "Idade", "Sair"],
  "LISTAGEM"
)

mainMenu()

readline.promptCLLoop({
  a: () => {
    const name = readline.question("Digite o nome da pessoa: ")
    const age = readline.question("Digite a idade da pessoa: ")
    const person = { name, age }
    addPerson(person)
    mainMenu()
  },
  l: () => {
    listMenu()
    readline.promptCLLoop({
      n: () => {
        list(getPeople(), alphabetical)
        listMenu()
      },
      i: () => {
        list(getPeople(), numerical)
        listMenu()
      },
      s: () => true
    })
    mainMenu()
  },
  s: () => true
})
