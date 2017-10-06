

$( document ).ready(function() {

var responseText = "<li class ='output' id = 'botOutput'> Bot output </li>";
var latestUserInput = "";

$('#sendButton').click(function(){

  //prevent page from refreshing on submit
  $("#messageForm").submit(function(e) {
    e.preventDefault();
  });

 //store the user's entry in a variable
 latestUserInput = document.getElementById('userInput').value;
 console.log(latestUserInput)

 //append bot message
 if (latestUserInput !== "") {
   $( "#outputArea" ).append(responseText);
 } else {
   console.log("input was blank");
 }


});

});
