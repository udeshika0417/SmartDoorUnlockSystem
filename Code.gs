function doGet() {
  return HtmlService.createHtmlOutputFromFile("adminPage");
   
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


