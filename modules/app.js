
// Freecode Camp Modules in ES6 - Ex      < < < < < TODO
// https://www.freecodecamp.org/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773/
//
// TODO also Read
// https://medium.com/backticks-tildes/introduction-to-es6-modules-49956f580da

var navButnCnt = 0;

import {singular} from './module1.js';
import * as myModule from './module1.js';

import * as pageTable from './module_page_table.js';

function addNavbutton(name, callback){
  console.log("app.js ADDING BUTTON - - - - S");
  var navbar = document.getElementById('nav_buttons');
  
  var nav_button  = document.createElement('BUTTON');
  
  nav_button.id = `b_nav_${navButnCnt}`;
  nav_button.textContent = `B${navButnCnt}`;
  nav_button.onclick = callback;
  
  navbar.appendChild(nav_button);
  
  //<button id='b_nav_0'>B0</button>
  //callback();
  
  navButnCnt += 1;
  console.log("app.js ADDING BUTTON - - - - E");
}

pageTable.registerPageTarget('pwa_page');
addNavbutton('BR842', pageTable.registerButton); 
//addNavbutton('BR842', pageTable.registerButton); 

function b2(){  
  console.log("app.js "+myVar);
}

function a(){
  var myVar = 'a';
  b2();
}


var myVar = 'global';
console.log("app.js "+myVar);
a();


function greet(name='<put your name here>'){
  console.log("app.js "+`Hello ${name}`);
}


greet("Bob");

greet();

if (window.lib3UtilsDefined){
  console.log("app.js "+`Included: ${libName3Info.libraryName3} v${libName3Info.libName3Version}`);
}
if ( !(window.library_name === undefined) ){
  console.log("app.js "+`App.js Included: ${library_name} v${lib_version}`);  
}

console.log("app.js "+`APP.js - window.lib3function typeof: ${typeof(window.lib3function)} <`)
//window.lib3function();

console.log("app.js "+'PROMISES . . . PROMISES . . .')


Promise.resolve().then( () => console.log("app.js "+'Hey!') );
console.log("app.js "+'Yo!');

myDIYModule.print();     // print refers to a function  () invoke it
myDIYModule.increment();
myDIYModule.print();

console.log("app.js "+'MODULE1 imports');
myModule.singular('potato');     // imported at top of file

console.log(myModule);

myModule.helloCon("I am the potato, KING of all the Edwards");

myModule.helloConsole("No you're a potato");

console.log("app.js radishes: " + singular('radishes'));

console.log("app.js lemon grass: " + singular('lemon grass'));

console.log("app.js donuts: " + singular('donuts'));

console.log("app.js donuts: " + singular('garlic cloves'));

//helloConsole("No you're a potato");






