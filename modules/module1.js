// Ex create a module that exports a function to depluralise a word (food specifically)

// python version: (from: scan_for_each_data.py) mysql_python
// def singular(ingredient):


export function singular(ingredient){
  let singular_ingredient = '';
  
  ingredient = ingredient.toLowerCase();

  // end in s but are singular, or have no plural
  const exceptions = new Set(['beef silverside w&s','lemon grass', 'vegetable samosa indian takeaway mrs']);
  
  // if it doesn't end in s and has no plural should come out fine!
  // , 'fish', 'mutton', 'hogget'}
  
  if (exceptions.has(ingredient)) {
    return ingredient;
  }

  // exceptions with singular version
  const singular_from_plural = {
    'radishes'          : 'radish',
  };
  
  if (singular_from_plural.hasOwnProperty(ingredient) ) {
    return(singular_from_plural[ingredient]);
  }
  
  // ending with
  // cloves > clove - superseed ves > f
  if ( ingredient.match(/cloves$/) ) return( ingredient.replace(/cloves$/,'clove') );

  // cookies > cookie - superseed ies > y - all sorts of cookie flavours
  if ( ingredient.match(/cookies$/) ) return( ingredient.replace(/cookies$/,'cookie') );
  
  // cherries to cherry 
  if ( ingredient.match(/ies$/) ) return( ingredient.replace(/ies$/,'y') );
  
  // various olive - superseed ves > f
  if ( ingredient.match(/olives$/) ) return( ingredient.replace(/olives$/,'olive') );
  
  // leaves > leaf
  if ( ingredient.match(/ves$/) ) return( ingredient.replace(/ves$/,'f') );
  
  // tomatoes > tomato
  if ( ingredient.match(/oes$/) ) return( ingredient.replace(/oes$/,'o') );
  
  // octopii > opctpus
  if ( ingredient.match(/ii$/) ) return( ingredient.replace(/ii$/,'us') );
  
  return(ingredient.replace(/s\b/i,''));  
  
}


//   // from: // https://www.samanthaming.com/tidbits/79-module-cheatsheet/
//   // Name Export | Name Import - - - - - - - - - - - - - - - - - - - - 
//   export const name = 'value';
//   import { name } from '...';
//   
//   // Default Export | Default Import - - - - - - - - - - - - - - - - - 
//   export default 'value';
//   import anyName from '...';
//   
//   // Rename Export | NameImport - - - - - - - - - - - - - - - - - - - 
//   export { name as newName }
//   import { newName } from '...'
//   
//   // Name + Default | Import All - - - - - - - - - - - - - - - - - - -
//   export const name = 'value'
//   export default 'value'
//   import * as anyName from '...'
//   
//   // Export List + Rename | Import List + Rename - - - - - - - - - - - 
//   export {
//     name1,
//     name2 as newName2
//   }
//   import {
//     name1 as newName1,
//     newName2
//   } from '...'

// - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - ES6 standard
// https://www.youtube.com/watch?v=GQ96b_u7rGc - great history lesson!
// from 39m38 ^
// gotchas: https://medium.com/@mattlag/es6-modules-getting-started-gotchas-2ad154f38e2e
// https://www.youtube.com/watch?v=qJWALEoGge4 from 29m import export notes
// - - - - - - - - - - - - -  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  - - - ES6 standard

export function helloConsole(msg='Im in module1.js'){
  console.log(`module1.js ${msg}`);
}

export function helloCon(msg='Im in module1.js'){
  console.log(`module1.js ${msg}`);
}

export function nutrientsFromRecipe(rcp = 0){
  console.log(`module1: nutrients calculated: ${rcp}`); 
}



//export default helloConsole;
