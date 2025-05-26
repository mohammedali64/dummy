// Write your code below:
const mainHeading = document.getElementById('main-heading');
mainHeading.style.color = 'orange';
const header = document.getElementById('header');
header.style.backgroundColor = 'green';
header.style.borderBottom = '2px solid orange';
const basketHeading = document.getElementById('basket-heading');
basketHeading.style.color = 'green';
const thanksDiv = document.getElementById('thanks');
const paragraph = document.createElement('p');
paragraph.textContent = 'Please visit us again';
thanksDiv.appendChild(paragraph);
