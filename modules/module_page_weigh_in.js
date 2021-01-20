// Ex create a module that implements a page behaviour by clicking a button in the navbar

// Eventually be code from:  <script src='static/js/module_page_weigh_in.js'></script>
  //<script>      
  //  var dtk = {{ daily_tracker|tojson }};
  //</script>
var pageTarget;
var pageId = 'weigh_in_page'
var htmlSource = '/static/html/weigh_in_page.html';

function load_page() {
  console.log(`module_page_weigh_in.js: ${pageId} - loading: ${htmlSource}`);
  fetch(htmlSource)
  .then(function(response) {
    return response.text();
  })
  .then(function(body) {
    document.getElementById(pageTarget).innerHTML = body;
  });
  
}

export function getButtonInfo(containers){
  console.log(`module_page_weigh_in.js: return button info ${pageId} - to ${containers.main}`);
  
  pageTarget = containers.main;
  
  var buttonInfo = {};

  buttonInfo.callback = load_page;
  buttonInfo.image    = '/static/images/svg/balance-scale.svg'; // or '' < will use text if no image
  buttonInfo.alt      = 'weigh in page';
  buttonInfo.text     = 'NT';
  
  return buttonInfo;
}



//<script src='static/js/module_page_weigh_in.js'></script>

// debug
//document.getElementById('dbg_wt').textContent = '98.3';
//document.getElementById('dbg_f').textContent = '34.0';
//document.getElementById('dbg_w').textContent = '51.2';
//<td id='dbg_wt'>weight: {{daily_tracker['dtk_weight']}}</td>
//<td id='dbg_f'>fat: {{daily_tracker['dtk_pc_fat']}}</td>
//<td id='dbg_w'>water: {{daily_tracker['dtk_pc_h2o']}}</td>   


export default getButtonInfo;
