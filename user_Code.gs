// link HTML files
function doGet() { 
   return HtmlService.createHtmlOutputFromFile("user_homePage");

}
function userClicked(name,email,subject,message){
  var url= "https://docs.google.com/spreadsheets/d/1QhnLhOIsIwdAbYL-CvjXbW-nEKg5iu30ZnMSQHR7l28/edit#gid=393886744";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("contactDetails");
  
  ws.appendRow([name,email,subject,message,new Date()]);
  

}

//Logging Unlock Data To spreadsheet
function unlockLog(user) {
  try {
    var user = Session.getActiveUser().getEmail();
    var url= "https://docs.google.com/spreadsheets/d/1QhnLhOIsIwdAbYL-CvjXbW-nEKg5iu30ZnMSQHR7l28/edit#gid=0";
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("unlockHistory");
    ws.appendRow([user,new Date()]);
  } catch(e){
    Logger.log(e);
    return e;
  }
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

