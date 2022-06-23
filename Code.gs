function doGet() {
  return HtmlService.createHtmlOutputFromFile("userHistoryPage");
   
}
//contact message send to the google sheet
function userClicked(name,email,subject,message){
  var url= "https://docs.google.com/spreadsheets/d/1wcaq-u3JFrMMFQd9qL0_6bSIY9CqszZa74qYwG2xb5s/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("contact");
  
  ws.appendRow([name,email,subject,message,new Date()]);
  

}

function unlockLog(user) {
  var url= "https://docs.google.com/spreadsheets/d/1QhnLhOIsIwdAbYL-CvjXbW-nEKg5iu30ZnMSQHR7l28/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("logHistory");
  
  ws.appendRow([user,new Date()]);

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

