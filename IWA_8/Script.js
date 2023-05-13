const leoName = 'Leo Musvaire'
const leoNumber = '2'
const leoStreet = 'Church St.'
const leoPostal = '3105'
const leoBalance = '-10'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'
const sarahNumber = '13'
const sarahStreet = 'William Close'
const sarahPostal = '0310'

// Only change below this line

let leo = {
	name: leoName ,
	age: 24 ,
	balance : parseInt(Math.abs(leoBalance)) ,
	accessId : '47afb389-8014-4d0b-aff3-e40203d2107f',


	 address : {
		number : leoNumber ,
		street : leoStreet,
		postalCode : leoPostal,
	 }
}

const sarah = {
	 name: sarahName.trim()+ ' ' + sarahSurname ,
	 age: 62 ,
	 balance: parseInt(Math.abs(sarahBalance))  ,
	 accessId : '6b279ae5-5657-4240-80e9-23f6b635f7a8' ,
	

	 address : {
		 number: sarahNumber,
		 street: sarahStreet,
		 postalCode : sarahPostal,
	 }
	}

 console.log(leo)
 
 console.log(leo.address.number)
 console.log(leo.address.street)
 console.log(leo.address.postalCode)
//  console.log(sarah, sarah['address'.number.postalCode.street])
console.log(sarah)
console.log(sarah.address.number)
console.log(sarah.address.street)
console.log(sarah.address.postalCode)