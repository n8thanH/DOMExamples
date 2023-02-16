// Example 1
/*
const body = document.body;

const newDiv = document.createElement('div');
const newP = document.createElement('p');

newDiv.textContent = "This is text";
newP.textContent = "This is text";

body.append(newDiv, newP);
*/

// Example 2
/*
const list = document.getElementById('navList');
list.innerHTML += "<li><a href=''>New Link</a>";
*/

// Example 3 
/*
const parentEl = document.getElementById('parentElement');
const childEl = document.getElementById('childElement');

const newHeading = document.createElement('h1');
newHeading.textContent = "My First Javascript Project";

parentEl.insertBefore(newHeading, childEl);
*/

// Example 4
/*
const dataDiv = document.getElementById('data');
const exampleAttr = dataDiv.getAttribute('id');
dataDiv.setAttribute('id', 'John');
console.log(dataDiv.id);
*/

// Example 5
/*
const userDiv = document.getElementById('user');
userDiv.dataset.id = "DataId";
userDiv.dataset.name = "DataName";
console.log(userDiv.dataset.id);
console.log(userDiv.dataset.name);
*/

// Example 6
/*
const navigation = document.getElementById('navigation');
console.log(navigation.className);
console.log(navigation.classList);
navigation.classList.add('newClass');
navigation.classList.add('class1', 'class2');
console.log(navigation.className);
navigation.classList.remove('newClass');
navigation.classList.remove('class1', 'class2');
*/

// Example 7
/*
const demoDiv = document.getElementById('color');
demoDiv.classList.toggle('pink');
console.log(demoDiv.className);
demoDiv.classList.toggle('pink');
console.log(demoDiv.className);
*/

// Example 8
/*
const divs = document.getElementsByTagName('div');
divs[0].remove();
divs[0].remove();
*/

// Example 9
/*
const orange = document.getElementById('orange');
orange.parentNode.removeChild(orange);
*/
/*
const colorh1 = document.getElementById('color');
const colorParent = colorh1.parentNode;
const newP = document.createElement('p');
newP.setAttribute('id', 'color');
newP.textContent = 'New Replacement Text';
colorParent.replaceChild(newP, colorh1);
*/