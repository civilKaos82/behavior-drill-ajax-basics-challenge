// Let's look a the request and response objects while using partials

$(document).ready(function(){

  //***** BEGIN DO NOT EDIT ***************************************
  $("#reset").on("click", function(event) {
    $("#getResponse").text("");
    $("#postResponse").text("");
  });
  //***** END DO NOT EDIT *****************************************

  //***** PART 2 A ************************************************
  // - Bind a click event to the link with id="getRequest"
  // - invoke an ajax get to the url: "/display_info"
  // - on success, take the partial returned on the response
  //   and place the markup inside the div with id="postResponse"
  //***************************************************************

  // Your code for part 2 A here

  //***** END PART 2 A ********************************************




  //***** PART 2 B ************************************************
  // - Bind a click event to the link with id="postRequest"
  // - invoke an ajax post to the url: "/display_info"
  // - send this data on the post:
  //   name: "Mike Busch", age: 30, description: "Likes Bikes"
  // - on success, take the partial returned on the response
  //   and place the markup inside the div with id="postResponse"
  //***************************************************************

  // Your code for part 2 B here

  //***** END PART 2 B ********************************************


});