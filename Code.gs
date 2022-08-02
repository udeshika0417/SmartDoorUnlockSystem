
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
//get Data for admin_userContactPage
function getData()  { 

var ss= SpreadsheetApp.openById("1QhnLhOIsIwdAbYL-CvjXbW-nEKg5iu30ZnMSQHR7l28");
var dataSheet = ss.getSheetByName('contactDetails');
 var dataRange = dataSheet.getDataRange();
 var dataValues = dataRange.getDisplayValues();  
return dataValues;
}


//Logging Unlock Data To spreadsheet
  function unlockLog(user) {
    try {
      var user = Session.getActiveUser().getEmail();
      var url= "https://docs.google.com/spreadsheets/d/1QhnLhOIsIwdAbYL-CvjXbW-nEKg5iu30ZnMSQHR7l28/edit#gid=393886744";
      var ss = SpreadsheetApp.openByUrl(url);
      var ws = ss.getSheetByName("unlockHistory");
    ws.appendRow([user,new Date()]);
    Logger.log("button click works")
} catch(e){
  Logger.log(e);
  return e;
}
    
  }

//search for admin_userHistory
function getDataNew()  { 

var ss= SpreadsheetApp.openById("1QhnLhOIsIwdAbYL-CvjXbW-nEKg5iu30ZnMSQHR7l28");
var dataSheet = ss.getSheetByName('unlockHistory');
 var dataRange = dataSheet.getDataRange();
 var dataValues = dataRange.getDisplayValues();  
return dataValues;
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
// function doGet(e) {
//   var htmlOutput =  HtmlService.createTemplateFromFile('admin_userHistoryPage');
//   htmlOutput.search='';
//  return htmlOutput.evaluate();
// } 

function getSheetData()  { 

var ss= SpreadsheetApp.openById("1QhnLhOIsIwdAbYL-CvjXbW-nEKg5iu30ZnMSQHR7l28");
var dataSheet = ss.getSheetByName('contactDetails');
 var dataRange = dataSheet.getDataRange();
 var dataValues = dataRange.getDisplayValues();  
return dataValues;
}

// function getUrl(){
//   var url =ScriptApp.getService().getUrl();
//   return url;
//    Logger.log(url)
// }




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



