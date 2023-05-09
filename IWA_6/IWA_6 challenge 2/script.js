const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

// Took out all variables within the if statement
// console.log each one

const taxAsDecimal = parseInt(tax) / 100;
console.log(taxAsDecimal);

const startingAfterTax = salary * 1 - taxAsDecimal;
console.log(startingAfterTax);

const balance = startingAfterTax - transport - food - rent;
console.log(balance); 

// still struggling to figure this bit out
// the final console.log doesnt function when in the if statement
 if (hourOfDay && minuteOfDay !== null && hourOfDay === '00' && minuteOfDay === '00') {} 
 console.log('R',balance.toFixed(2));