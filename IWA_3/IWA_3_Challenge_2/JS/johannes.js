var firstname = "Johannes"
var surname = "Potgieter" 
export const role = "Intern"
// Changed private to variable so that JS can understand stored data

const display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#johannes').innerText = display