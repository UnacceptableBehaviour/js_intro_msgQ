// Notes on Memory Management
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management


var library_name="HelperLib 1";
var lib_version='0.0.1';
lotsOfData = new Array(25).join('*');
lotsOfData = lotsOfData + ` ${library_name} START` + lotsOfData
console.log("lib1.js "+lotsOfData);

console.log("lib1.js "+`Included: ${library_name} v${lib_version}`);


var person = new Object();

person["name"] = "John"
person["surname"] = "Hopkins"

console.log("lib1.js "+`name: ${person.name} ${person.surname}`);

var people = {};  //  {} sunonym for new Object();

people_count = 0;

no_of_people = 3;

for (var p=0; p <= no_of_people; p++ ){
  people[`person_${p}`] = person;
}

console.log("lib1.js "+people);

people.person_2.name = "Milly";  // changes everyones name to Milly! 

console.log("lib1.js "+people);  

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

var a1 = ['aa','bb','cc'];
var a2 = ['dd','ee','ff'];
var a3 = a1 + a2;             // creates a string
var a4 = a1.concat(a2);       // creates array - copies data into new space

console.log("lib1.js - - s");
console.log("lib1.js a1 "+a1);
console.log("lib1.js a2 "+a2);
console.log("lib1.js a3 "+a3);
console.log("lib1.js typeof(a3) "+typeof(a3));
console.log("lib1.js a4 "+a4);
console.log("lib1.js typeof(a4)"+typeof(a4));

a1[0] = 'aaaa';     // not refelcted in a4
a4[4] = 'eeee';     // not refelcted in a1

console.log("lib1.js assign to a1[0] & a4[4]");
console.log("lib1.js a1 "+a1);
console.log("lib1.js a2 "+a2);
console.log("lib1.js a3 "+a3);
console.log("lib1.js a4 "+a4);
console.log("lib1.js - - e");
// See note on shallow copy
// https://www.codementor.io/junedlanja/copy-javascript-object-right-way-ohppc777d

// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

var person = new Object();

person.name = "NoFirstName"   // synonym: person["name"] = "NoFirstName"
person.surname = "NoSurname"  // synonym: person["surname"] = "NoSurname"

console.log("lib1.js "+`name: ${person.name} ${person.surname}`);

var people = {};  //  {} sunonym for new Object();

people_count = 0;

no_of_people = 3;

for (var p=0; p <= no_of_people; p++ ){
  people[`person_${p}`] = JSON.parse(JSON.stringify(person));
  //people.`person_${p}` = JSON.parese(JSON.stringify(person));
}

console.log("lib1.js "+people);

people.person_2.name = "Milly";
people.person_2.surname = "Harper";

people.person_3.name = "John";
people.person_3.surname = "Hopkins";


console.log("lib1.js "+people);              // set BreakPoint (BP) here - or type people into the console!

people.person_1.name = "SuckIt";  // reflected in both console.log("lib1.js "+) w/o BP??

console.log("lib1.js "+people);              // then continue to here


lotsOfData = new Array(25).join('*');
lotsOfData = lotsOfData + ` ${library_name} END` + lotsOfData
console.log("lib1.js "+lotsOfData);
