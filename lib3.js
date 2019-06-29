if (!window.lib3UtilsDefined) {
    window.lib3UtilsDefined = true;
    
    // block scope - this cannot be refrences from app.js
    // if block
    const libName3Info = {
      'libraryName3': "HelperLib3",
      'libName3Version': '0.0.3'           
    };
    
    // pointless - polutes namespace - but works
    window.libName3Info = libName3Info;
    
    
    console.log('libraryName3: loaded -S');    

    (function() { // IIFE	(immediately invoked function expression)
    // immidiately creates context onth stack
    // any messages added in the mean time will have to wait until execution of
    // this has completed as a minimum - (plus anything els on the stack!)
    
      console.log('libraryName3: this is the start');
    
      setTimeout(function cb() {
        console.log('libraryName3: Callback 1: this is a msg from call back');
      });
    
      console.log('libraryName3: this is just a message');
    
      setTimeout(function cb1() {
        console.log('libraryName3: Callback 2: this is a msg from call back');
      }, 0);
    
      console.log('libraryName3: this is the end');
    
    })();
    
    // OUTPUT
    // "this is the start"
    // "this is just a message"
    // "this is the end"
    // note that function return, which is undefined, happens here 
    // "Callback 1: this is a msg from call back"
    // "Callback 2: this is a msg from call back"
    
    function callMeFromTheApp(){                        // not in scope cannot call from app.js  
    //window.callMeFromTheApp = function () {               // pointless - polutes namespace - but works
      console.log('lib3UtilsDefined:callMeFromTheApp');
      console.log(`lib3UtilsDefined: ${(new Date).getMilliseconds()}`);
    };
    
    window.lib3function = callMeFromTheApp;
    console.log(`lib3.js - window.lib3function typeof: ${typeof(callMeFromTheApp)} <`)
    console.log(`lib3.js - window.lib3function typeof: ${typeof(window.lib3function)} <`)
    
    console.log('libraryName3: loaded -E');
    
} else {
  console.log(`lib3UtilsDefined: is ALREADY DEFINED <${window.lib3UtilsDefined}> ${ Date.getMilliseconds} `);        
}
