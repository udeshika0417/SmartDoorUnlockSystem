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
	const url = "https://childrengo.org/subscribe/";
	const response = UrlFetchApp.fetch(url, {
		"method": "POST",
		"headers": {
			// "x-api-key": "****",
			"cache-control": "no-cache",
			"Content-Type": "application/x-www-form-urlencoded"
		},
		"muteHttpExceptions": true,
		"followRedirects": true,
		"validateHttpsCertificates": true,
		"contentType": "application/x-www-form-urlencoded",
		// "payload": "name=****%20****&title=****%20******"
    "payload":"email=gopeyiy161@teasya.com"
	});

	Logger.log("Response code is %s", response.getResponseCode());
	Logger.log(response.getContentText());
}

