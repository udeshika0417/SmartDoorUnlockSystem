function doGet() {
  return HtmlService.createHtmlOutputFromFile("Landing");
   

}

function userClicked(email){
  var url= "https://docs.google.com/spreadsheets/d/1QhnLhOIsIwdAbYL-CvjXbW-nEKg5iu30ZnMSQHR7l28/edit#gid=0";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("userDetails");
  
  ws.appendRow([email,new Date()]);
  //Logger.log(name+ " clicked the Button");

}
