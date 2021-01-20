// Ex create a module that implements a page behaviour by clicking a button in the navbar

// Eventually be code from:  <script src='static/nutrient_traffic_lights.js'></script>
  //<script>      
  //  var recipes = {{ recipes|tojson }};       // convert info using tojson filter      
  //  console.log(`recipe_t JS ${recipes[0]['ri_name']} - inline CONCLUDED`);  // sanity check      
  //</script>
var pageTarget;
var pageId = 'example_page';
var htmlSource = '/static/html/recipe.html';



function load_page() {
  console.log(`module_page_example_html_retrieve.js: ${pageId} - loading`);
  
  // HTML Load options
  
  // Opt 1 - this leaves a #document frame around body - not good
  //document.getElementById(pageTarget).innerHTML='<object type="text/html" data="../static/html/nutrient_traffic_lights.html" ></object>';
  
  // Opt 2 - fetch works well - modern API
  fetch(htmlSource)
  .then(function(response) {
    return response.text();
  })
  .then(function(body) {
    document.getElementById(pageTarget).innerHTML = body;
  });

  // Opt - 3 - DEPRECATED - in fact Chrom say remove in version M80
  //var importTag = document.createElement('link');
  //importTag.setAttribute('rel', 'import');
  //importTag.setAttribute('href', '/static/html/nutrient_traffic_lights.html');
  //document.getElementById(pageTarget).appendChild(importTag);

  // opt 4 - xml request - older mechanism
  //var request = new XMLHttpRequest();
  //
  //request.open('GET', '/static/html/nutrient_traffic_lights.html', true);
  //
  //request.onload = function() {
  //  if (request.status >= 200 && request.status < 400) {
  //    var resp = request.responseText;
  //
  //    document.getElementById(pageTarget).innerHTML = resp;
  //  }
  //};
  //
  //request.send();  
  
}





export function getButtonInfo(containers){
  console.log(`module_page_example_html_retrieve.js: registering ${pageId} - to ${containers.main}`);
  
  pageTarget = containers.main;
  
  var buttonInfo = {};

  buttonInfo.callback = load_page;
  buttonInfo.image    = '/static/images/svg/camera.svg'; // or '' < will use text if no image
  buttonInfo.alt      = 'example JS navbar entry';
  buttonInfo.text     = 'EG';
  
  return buttonInfo;
}

//export function helloCon(msg='Im in module1.js'){
//  console.log(`module_page_example_html_retrieve.js ${msg}`);
//}
//
//export function nutrientsFromRecipe(rcp = 0){
//  console.log(`module_page_table: nutrients calculated: ${rcp}`); 
//}
//



export default getButtonInfo;
