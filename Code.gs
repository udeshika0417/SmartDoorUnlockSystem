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

  /*function Searcher() {

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
} */

//search function new  - Hashini
function doGet(e) {
  var htmlOutput =  HtmlService.createTemplateFromFile('admin_userHistoryPage');
  htmlOutput.search='';
 return htmlOutput.evaluate();
} 

function doPost(e) {
  var search =e.parameter.search;
  var htmlOutput =  HtmlService.createTemplateFromFile('admin_userHistoryPage');
  htmlOutput.search= search;
  return htmlOutput.evaluate();
} 

function getSheetData()  { 

var ss= SpreadsheetApp.getActiveSpreadsheet();
var dataSheet = ss.getSheetByName('Student');
 var dataRange = dataSheet.getDataRange();
 var dataValues = dataRange.getDisplayValues();  
return dataValues;
}

function getUrl(){
  var url =ScriptApp.getService().getUrl();
  return url;
   Logger.log(url)
}





//HTTP request to API
function makeHttpPostRequestWithAppsScript() {
	const url = "*******";
	const response = UrlFetchApp.fetch(url, {
		"method": "POST",
		"headers": {
			"x-api-key": "****",
			"cache-control": "no-cache",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		"muteHttpExceptions": true,
		"followRedirects": true,
		"validateHttpsCertificates": true,
		"contentType": "application/x-www-form-urlencoded",
		"payload": "name=****%20****&title=****%20******"
	});

	Logger.log("Response code is %s", response.getResponseCode());
	Logger.log(response.getContentText());
}


