
// TODO Add comments to this for refresh w/o exec
// Read and add updates / demo
// https://stackoverflow.com/questions/950087/how-do-i-include-a-javascript-file-in-another-javascript-file
//
// Various include solutions
// https://hype.codes/how-include-js-file-another-js-file

// Freecode Camp Modules in ES6 - Ex      < < < < < TODO
// https://www.freecodecamp.org/news/how-to-use-es6-modules-and-why-theyre-important-a9b20b480773/
//
// TODO also Read
// https://medium.com/backticks-tildes/introduction-to-es6-modules-49956f580da


function b2(){  
  console.log(myVar);
}

function a(){
  var myVar = 'a';
  b2();
}


var myVar = 'global';
console.log(myVar);
a();


function greet(name='<put your name here>'){
  console.log(`Hello ${name}`)
}


greet("Bob");

greet();

if (window.lib3UtilsDefined){
  console.log(`Included: ${libName3Info.libraryName3} v${libName3Info.libName3Version}`);
}
if ( !(window.library_name === undefined) ){
  console.log(`App.js Included: ${library_name} v${lib_version}`);  
}

console.log(`APP.js - window.lib3function typeof: ${typeof(window.lib3function)} <`)
//window.lib3function();

console.log('PROMISES . . . PROMISES . . .')

Promise.resolve().then( () => console.log('Hey!') );
console.log('Yo!');
