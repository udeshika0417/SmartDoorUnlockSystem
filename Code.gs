// link HTML files
function doGet(e) {
  

  Logger.log( Utilities.jsonStringify(e) );
  if (!e.parameter.page) {
    // When no specific page requested, return "home page"
    return HtmlService.createTemplateFromFile('admin_homePage').evaluate();
  }
  // else, use page parameter to pick an html file from the script
  return HtmlService.createTemplateFromFile(e.parameter['page']).evaluate();
}

function getScriptUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;

 
}


