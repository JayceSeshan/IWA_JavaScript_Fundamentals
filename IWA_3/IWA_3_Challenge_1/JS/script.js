import { company } from './configuration.js'

//Corrected the linking to the configuration.js file

import { year } from './configuration.js'

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message;

// Added curly brackets around our syntax