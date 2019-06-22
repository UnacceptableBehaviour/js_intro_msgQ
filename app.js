
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

console.log(`App.js Included: ${library_name} v${lib_version}`);