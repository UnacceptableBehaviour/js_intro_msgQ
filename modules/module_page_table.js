// Ex create a module that implements a page behaviour by clicking a button in the navbar

var pageTarget;

function load_table(container_id, rid){
  console.log(`module_page_table.js: LOADING ${rid} into ${container_id}`);
}

export function registerPageTarget(pageId){
  console.log(`module_page_table.js: ${pageId} - registering`);  
  pageTarget = pageId; 
}

function load_page() {
  document.getElementById(pageTarget).innerHTML='<object type="text/html" data="html/nutrient_traffic_lights.html" ></object>';
}

export function registerButton(msg='Im in module_page_table.js'){
  console.log(`module_page_table.js: ${msg} - registering`);  
  load_page();
}

//export function helloCon(msg='Im in module1.js'){
//  console.log(`module_page_table.js ${msg}`);
//}
//
//export function nutrientsFromRecipe(rcp = 0){
//  console.log(`module_page_table: nutrients calculated: ${rcp}`); 
//}
//



//export default helloConsole;
