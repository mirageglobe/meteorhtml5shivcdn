/*global Router, Meteor, Tracker, EJSON, Accounts, Mongo, user, console, Session, Template, UI */
/*jslint nomen : true*/

if (Meteor.isClient) {
  // Create a new div in memory to test against. Assume
  // the browser is > IE9 by default.
  var div = document.createElement("div"),
    isIeLessThan9 = true;

  // Inject a conditional IE9 comment and see if it is found.
  div.innerHTML = "<!--[if lt IE 9]><injm></injm><![endif]-->";

  // Since the content of the comment is ignored
  // in other browsers, this will return false in everything
  // but older IE browsers.
  isIeLessThan9 = (div.getElementsByTagName("injm").length === 1);

  if (isIeLessThan9) {
    // Generate a script DOM node and customize attributes.
    var script  = document.createElement('script');
    script.type = 'text/javascript';
    script.src  = '//cdn.jsdelivr.net/html5shiv/3.7.3/html5shiv.min.js';
    // Ensure the document is ready with Meteor.startup()
    Meteor.startup(function () {
      // Load the script into the document with document.body
      // because IE doens't make it easy to select the head withoutf jQuery.
      "use strict";
      document.body.appendChild(script);
    });
  }
}
