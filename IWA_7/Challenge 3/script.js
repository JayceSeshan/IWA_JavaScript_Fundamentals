const leoName = 'Leo'
const leoSurname = 'Musvaire'
const leoBalance = '-9394'

const sarahName = 'Sarah'
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line


const leo = (leoName + " " + leoSurname) + " ( Owed:" + " R" + (Math.abs(leoBalance)).toFixed(2) + ")"
const sarah = (sarahName + " " + sarahSurname) + " ( Owed:" + " R" + (Math.abs(sarahBalance)).toFixed(2) + ")"
const total = "Total amount owed: R"
const Owed = (Math.abs(leoBalance)) + (Math.abs(sarahBalance));
const result = (leo + sarah + divider + total + divider + Owed + divider)


//  console.log(result)

console.log(leo)
console.log(sarah)
console.log(divider)
console.log(total + Owed.toFixed(2))
console.log(divider)
// console.log(Owed)