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


//search function

  function Searcher() {

  const searchString ='test';
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const searchCol= 3;
  //const data = sheet.getDataRange().getValues();
  const rangeNew = sheet.getRange(3,searchCol);
  const data = rangeNew.getValues();
  Logger.log(data);
  const result = data.findIndex(searchString);
  Logger.log(result);

  Array.prototype.finder = function(val){
  if(val =="") return false;
  const arr = [];
  for(let i=0;i<this.length; i++){

    if(this[i].toString().indexof(val)>-1){
arr.push(i);

    }
  }
  return arr;
}
}


