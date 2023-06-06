// script.js
// Order 1
biscuitsElements = document.querySelectorAll('[data-key="order1"] .biscuits .count');
donutsElements = document.querySelectorAll('[data-key="order1"] .donuts .count');
pancakesElements = document.querySelectorAll('[data-key="order1"] .pancakes .count');
statusElement = document.querySelector('[data-key="order1"]');
const root = document.querySelector('[data-key=order1]')
 
// Updating biscuits count
biscuitsElements.forEach((element) => {
element.textContent = statusElement.dataset.biscuits
});
// Updating donuts count
donutsElements.forEach((element) => {
  element.textContent = statusElement.dataset.donuts;
});
 
// Updating pancakes count
pancakesElements.forEach((element) => {
  element.textContent = statusElement.dataset.pancakes;
});
 
const status1 = root.querySelector('.status').querySelector('dd')
status1.textContent = (root.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending')
 
 
// Order 2
 biscuitsElements = document.querySelectorAll('[data-key="order2"] .biscuits .count');
 donutsElements = document.querySelectorAll('[data-key="order2"] .donuts .count');
 pancakesElements = document.querySelectorAll('[data-key="order2"] .pancakes .count');
 statusElement = document.querySelector('[data-key="order2"]');
 const root2 = document.querySelector('[data-key=order2]')
// 
// Updating biscuits count
 biscuitsElements.forEach((element) => {
 element.textContent = statusElement.dataset.biscuits
 });
// Updating donuts count
 donutsElements.forEach((element) => {
   element.textContent = statusElement.dataset.donuts;
 });
 
// Updating pancakes count
 pancakesElements.forEach((element) => {
   element.textContent = statusElement.dataset.pancakes;
 });
 
 const status2 = root2.querySelector('.status').querySelector('dd')
 status2.textContent = (root2.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending')
 
 
// Order 3 
biscuitsElements = document.querySelectorAll('[data-key="order3"] .biscuits .count');
donutsElements = document.querySelectorAll('[data-key="order3"] .donuts .count');
pancakesElements = document.querySelectorAll('[data-key="order3"] .pancakes .count');
statusElement = document.querySelector('[data-key="order3"]');
 const root3 = document.querySelector('[data-key=order3]')
//  Updating biscuits count
 biscuitsElements.forEach((element) => {
   element.textContent = statusElement.dataset.biscuits
 });
//  Updating donuts count
donutsElements.forEach((element) => {
   element.textContent = statusElement.dataset.donuts;
 });
 
// Updating pancakes count
 pancakesElements.forEach((element) => {
   element.textContent = statusElement.dataset.pancakes;
 });
 const status3 = root3.querySelector('.status').querySelector('dd')
 status3.textContent = (root3.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending')
 