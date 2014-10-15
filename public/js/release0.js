// Getting to know ajax

$(document).ready(function(){

  //***** BEGIN DO NOT EDIT ************************************
  $("#reset").on("click", function(event) {
    $("#getResponse").text("");
    $("#postResponse").text("");
  });
  //***** END DO NOT EDIT **************************************

  //***** PART 1 A *********************************************
  // - Bind a click event to the link with id="getRequest"
  // - invoke an ajax get to the url: "/basic_request"
  // - on success, take the response and place it in the
  //   paragraph with id="getResponse"
  //************************************************************

  // Your code for part 1 A here

  //***** END PART 1 A *****************************************




  //***** PART 1 B *********************************************
  // - Bind a click event to the link with id="postRequest"
  // - invoke an ajax post to the url: "/basic_request"
  // - send this data on the post:
  //   name: "Mike Busch", age: 30, description: "Likes Bikes"
  // - on success, take the response and place it in the
  //   paragraph with id="postResponse"
  //************************************************************

  // Your code for part 1 B here

  //***** END PART 1 B *****************************************


});