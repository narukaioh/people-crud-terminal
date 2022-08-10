
const UI = () => {
  const header = (title) => console.log(`\n==== ${title} ====\n`)

  const createMenu = (options, title) => () => {
    const menu = options.map(option => (
      {
        index: option[0].toLowerCase(),
        option
      })
    )
    header(title)
    menu.map(item => {
      console.log(`${item.index} > ${item.option}`)
    })
    console.log("\nDigite uma opção: \n")
  }

  const list = (people, sortable) => {
    header("LISTA DE PESSOAS")
    const sorted = sortable ? people.sort(sortable) : people
    console.table(sorted)
    console.log("")
  }

  return {
    header,
    list,
    createMenu
  }
}

module.exports = UI()