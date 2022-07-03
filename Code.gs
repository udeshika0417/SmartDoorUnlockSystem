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