let date = 2050
let status = 'parent'
let count = 0
// used let instead of const so that values will be able to change when necessary
// made parent a string by adding quotation marks
if (date === 2050) {
	console.log("January, New Year's Day")
	console.log("March, Human Rights Day")

	// first I'll try dividing the if statements with their respective 'console.log'

	if (date === 2050) {
	console.log('April, Family Day')
	console.log('April, Freedom Day')
	count = count + 4
	}
	// I added a quotation mark to make everything within the bracket a string
	
	if (status === 'student') {
	  console.log('June, Youth Day')
		count = count + 1
  }

	console.log("August, Women's Day")
	console.log('September, Heritage Day')

	// I got rid of the variable let infront of date coz the code was reading the string instead of the numner 2050
    date = 'December'
	console.log(date, 'Day of Reconciliation')
	count = count + 3

	if (status === 'parent') {
	  console.log(date, 'Christmas Day')
	count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)