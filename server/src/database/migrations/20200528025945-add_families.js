const total = 194
const arrayItems = [ ...Array(Math.ceil(total + 1)).keys()].slice(1)
const families = arrayItems.reduce((prev, next) => { 
  const value = { 
    family: next, 
    created_at: new Date(), 
    updated_at: new Date()  
  } 
  prev.push(value) 
  return prev 
}, [])

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('families', families)
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('families', null, {})
  }
}
