var library_name="HelperLib 2";     // overwrites library_name from lib1.js
var lib_version='0.0.1';            // overwrites lib_version from lib1.js

console.log("lib2.js "+`Included: ${library_name} v${lib_version}`);

lotsOfData = new Array(25).join('*');

lotsOfData = lotsOfData + ` ${library_name} START` + lotsOfData

console.log("lib2.js "+typeof(lotsOfData));
console.log("lib2.js "+lotsOfData);



// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// demonstrates how timers may not be that accurate if there's work being done!
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

// get time now
const s = new Date().getSeconds();
console.log("lib2.js "+`Start ${s}`);


// set anonymous f() to run in 500ms
// this message w/ associated function() is pushed onto the msg Q 500ms from now
setTimeout(function() {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log("lib2.js "+"Ran after " + (new Date().getSeconds() - s) + " seconds");
}, 500);
// this doesn't actually run until code in app.js finished!


console.log("lib2.js "+`lib2.js: setTimeout registered ${new Date().getSeconds()}`);

// wait for two seconds from start
// do work for 2000ms
while(true) {
  if(new Date().getSeconds() - s >= 2) {
    console.log("lib2.js "+"Good, looped for 2 seconds");
    break;
  }
}

// touch more work to do
console.log("lib2.js "+`me first ${new Date().getSeconds()}`);



lotsOfData = new Array(25).join('*');
lotsOfData = lotsOfData + ` ${library_name} END` + lotsOfData
console.log("lib2.js "+lotsOfData);