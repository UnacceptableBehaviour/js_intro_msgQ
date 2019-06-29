
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
window.lib3function();