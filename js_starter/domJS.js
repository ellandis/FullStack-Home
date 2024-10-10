var selectWithID = document.getElementById('freelunch');
// console.log(selectWithID);

var selectWithClass = document.getElementsByClassName('savingTips');
// console.log(selectWithClass);

var selectTag = document.getElementsByTagName('h1');
// console.log(selectTag);

var querySelect = document.querySelector('h1');
var querySelect1 = document.querySelector('#freelunch');
var querySelect2 = document.querySelector('.savingTips');

console.log(querySelect);
console.log(querySelect1);
console.log(querySelect2);

var divToChange = document.querySelector('.savingTips');
// divToChange.style.height = 'auto';
// divToChange.style.width = '600px';
// divToChange.style.backgroundColor = 'green';
// divToChange.style.fontSize = '30px';
// divToChange.style.border = '5px solid black';

// divToChange.classList.add('addClass');
// divToChange.classList.remove('addClass');
// divToChange.classList.toggle('addClass');
// divToChange.classList.toggle('addClass');

var mylink = document.querySelector('a');
console.log(mylink.getAttribute('href'));

mylink.setAttribute('href', 'https://earnyourleisure.com/');
console.log(mylink.getAttribute('href'));

mylink.textContent = 'Earn Your Leisure';