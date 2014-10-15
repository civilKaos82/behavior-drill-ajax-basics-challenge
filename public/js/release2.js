// Let's explore using json.

$(document).ready(function(){

  //***** BEGIN DO NOT EDIT ***************************************
  $("#reset").on("click", function(event) {
    $("#getResponse").text("");
    $("#postResponse").text("");
  });
  //***** END DO NOT EDIT *****************************************

  //***** PART 3 A ************************************************
  // - Bind a click event to the link with id="getRequest"
  // - invoke an ajax get to the url: "/using_json"
  // - on success, take the json returned on the response
  //   and extract the message.
  // - Place it in the paragraph with id="postResponse"
  //***************************************************************

  // Your code for part 3 A here

  //***** END PART 3 A ********************************************




  //***** PART 3 B ************************************************
  // - Bind a click event to the link with id="postRequest"
  // - invoke an ajax post to the url: "/using_json"
  // - send this data on the post:
  //   name: "Mike Busch", age: 30, description: "Likes Bikes"
  // - on success, take the json returned on the response
  //   and extract the message.
  // - Place it in the paragraph with id="postResponse"
  //***************************************************************

  // Your code for part 3 B here

  //***** END PART 3 B ********************************************


});