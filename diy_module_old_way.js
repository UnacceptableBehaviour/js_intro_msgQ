console.log("diy_module_old_way:************************ START ************************");

// https://www.samanthaming.com/tidbits/79-module-cheatsheet/
// https://www.youtube.com/watch?v=GQ96b_u7rGc
// Ex create  a DIY module modules 21m27 ^ 

// using an IIFE - https://www.youtube.com/watch?v=3cbiZV4H22c 3m30

var myAnonIIFE = ( function() { console.log("diy_module_old_way: blarney stones"); })();
//                  ^expression                                                       ^causes immiediate invocation!

var myNamedIIFE = ( banana = function() { console.log("diy_module_old_way: that was a nice banana!!"); })();
//                  ^expression                                                       ^causes immiediate invocation!

pear = banana;
banana();
console.log("diy_module_old_way: pear call next");
pear();

var myNamedIIFE = ( fruit = function(edible="banana") { console.log(`diy_module_old_way: that was a nice ${edible}!!`); })();
//                  ^expression                                                       ^causes immiediate invocation!

fruit('apple');
fruit('nectarine');


// var myDIYModule = (function() {})();

var myDIYModule = (function() { // closure scope start
  // private vars
  var counter = 0;              // let and  const use block scope
                                // all function declared in this closure scope have access to counter  
  // exposed functions
  return {
    increment:  function(){ counter += 1; },
    print:      function(){ console.log(`diy_module_old_way: counter:${counter}`); },
  } // defining an object - keys for which map to functions

})();
//} closure scope end
//) expression ends
//(); invoke

// myDIYModule returns object (hash of functions)
myDIYModule.print();     // print refers to a function  () invoke it
myDIYModule.increment();
myDIYModule.print();
console.log(`diy_module_old_way:myDIYModule.counter?: ${myDIYModule.counter}`); // counter is not accessible


// revealing module pattern - similar to above (but more readable IMHO)

var myRevealingModule = (function() {
  var counter = 0;
                
  var increment = function(){
    counter += 1;
  };
  
  var print = function(){
    console.log(`diy_module_old_way: REVEAL counter:${counter}`);
  };
                  
  return {
    increment: increment,
    print:     print,
  } 

})();

myRevealingModule

// myDIYModule returns object (hash of functions)
myRevealingModule.print();     // print refers to a function  () invoke it
myRevealingModule.increment();
myRevealingModule.print();
console.log(`diy_module_old_way:myRevealingModule.counter?: ${myRevealingModule.counter}`); // counter is not accessible




console.log("diy_module_old_way:******************* OVER AND OUT *******************");