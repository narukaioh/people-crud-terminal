const people = []

const ManagePeople = () => {
  const CATEGORY = {
    CHILD: 'Criança',
    TEEN: 'Adolescente',
    ADULT: 'Adulto',
    ELDERY: 'Idoso'
  }

  const ageInRange = (age, range) => age >= range.min && age <= range.max

  const getCategory = (age) => {
    if (ageInRange(age, { min: 0, max: 12 })) return CATEGORY.CHILD
    if (ageInRange(age, { min: 13, max: 19 })) return CATEGORY.TEEN
    if (ageInRange(age, { min: 20, max: 64 })) return CATEGORY.ADULT
    return CATEGORY.ELDERY
  }

  const alphabetical = (a, b) => {
    const nameA = a.name.toLowerCase()
    const nameB = b.name.toLowerCase()
    if (nameA > nameB) return 1
    if (nameA < nameB) return -1
    return 0
  }

  const numerical = (a, b) => a.age - b.age

  const addPerson = (person) => {
    people.push({
      ...person,
      category: getCategory(person.age)
    })
  }

  const getPeople = function () {
    return people
  }

  return {
    getPeople,
    alphabetical,
    numerical,
    addPerson
  }
}

module.exports = ManagePeople()