var firstname = "Alex"
var surname = "Naidoo"
export const role = "Head of Marketing"
// Changed private to variable so that JS can understand stored data

const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display