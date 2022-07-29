QUnit.helpers( this );
QUnit.exposeInternals(); // Use only when testing QUnit itself.

// function doGet( e ) {
//   QUnit.urlParams( e.parameter );
//   QUnit.config({
//     title: "QUnit for Google Apps Script - Test suite" // Sets the title of the test page.
//   });
//   QUnit.load( tests );
//   return QUnit.getHtml();
// };

function tests() {
  console = Logger;
  allThingsAreEqual();
  itAddsTen();
}