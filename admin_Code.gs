// link HTML files
function doGet(e) {
  Logger.log( Utilities.jsonStringify(e) );
  if (!e.parameter.page) {
    // When no specific page requested, return "home page"
    var htmlOutput =  HtmlService.createTemplateFromFile('admin_homePage');
     htmlOutput.search='';
      return htmlOutput.evaluate();
  }
  // else, use page parameter to pick an html file from the script
  return HtmlService.createTemplateFromFile(e.parameter['page']).evaluate();
}

function getScriptUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}

function getSheetData()  { 

var ss= SpreadsheetApp.openById("1QhnLhOIsIwdAbYL-CvjXbW-nEKg5iu30ZnMSQHR7l28");
var dataSheet = ss.getSheetByName('contactDetails');
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
   const data = {
    "name": "Test User",
    "job": "Test Job"
};
   const url = "https://reqres.in/api/users";
   const response = UrlFetchApp.fetch(url, {
     "method": "POST",
     "headers": {
       "cache-control": "no-cache",
       "Content-Type": "application/json"
     },
     "muteHttpExceptions": true,
     "followRedirects": true,
     "validateHttpsCertificates": true,
     "contentType": "application/json",
     "payload": JSON.stringify(data)
   });

   Logger.log("Response code is %s", response.getResponseCode());
   Logger.log(response.getContentText());

}





