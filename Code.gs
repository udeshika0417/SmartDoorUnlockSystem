function doGet() { 
  return HtmlService.createHtmlOutputFromFile("user_homePage");
}
// link HTML files
/* function doGet(e) {
  Logger.log( Utilities.jsonStringify(e) );
  if (!e.parameter.page) {
    // When no specific page requested, return "home page"
    return HtmlService.createTemplateFromFile('home').evaluate();
  }
  // else, use page parameter to pick an html file from the script
  return HtmlService.createTemplateFromFile(e.parameter['page']).evaluate();
}

function getScriptUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}
*/

//contact message send to the google sheet
function userClicked(name,email,subject,message){
  var url= "https://docs.google.com/spreadsheets/d/1wcaq-u3JFrMMFQd9qL0_6bSIY9CqszZa74qYwG2xb5s/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("contact");
  
  ws.appendRow([name,email,subject,message,new Date()]);
  

}

function onEdit(e) {
  SpreadsheetApp.getUi().alert("User Email is " + getUserEmail());
}

function getUserEmail() {
  var userEmail = PropertiesService.getUserProperties().getProperty("userEmail");
  if(!userEmail) {
    var protection = SpreadsheetApp.getActive().getRange("A1").protect();
    // tric: the owner and user can not be removed
    protection.removeEditors(protection.getEditors());
    var editors = protection.getEditors();
    if(editors.length === 2) {
      var owner = SpreadsheetApp.getActive().getOwner();
      editors.splice(editors.indexOf(owner),1); // remove owner, take the user
    }
    userEmail = editors[0];
    protection.remove();
    // saving for better performance next run
    PropertiesService.getUserProperties().setProperty("userEmail",userEmail);
  }
  return userEmail;
}


//Get User History Data
 function getHistoryData(){
   var url= "https://docs.google.com/spreadsheets/d/1QhnLhOIsIwdAbYL-CvjXbW-nEKg5iu30ZnMSQHR7l28/edit#gid=0";
   var ss = SpreadsheetApp.openByUrl(url);
   var ws = ss.getSheetByName("userDetails");
   var historyData = ws.getRange(2,1,ws.getLastRow()-1,2).getValues();
   Logger.log(historyData)
 }

//Logging Unlock Data To spreadsheet
  function unlockLog(user) {
    try {
  var url= "https://docs.google.com/spreadsheets/d/1QhnLhOIsIwdAbYL-CvjXbW-nEKg5iu30ZnMSQHR7l28/edit#gid=0";
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("unlockHistory");
 
    ws.appendRow([user,new Date()]);
} catch(e){
  Logger.log(e);
  return e;
}
    
  }



