$(document).ready(function() {

// hides the jumbotron once clicked
$( "#jBtn" ).click(function() {
  $( ".jumbotron" ).hide( "drop", { direction: "down" }, "slow" );
});
// hides the planner container initially
$( ".planner" ).hide();
// when jumbo tron button is clicked the planner container shows
$( "#jBtn" ).click(function() {
  $( ".planner" ).show();
});


// displays the time and date
function displayClock(){
  setInterval(function(){
  var fullDate = new Date();
  // formatting for single digit minute values
  if(fullDate.getMinutes()<10){
  var minutes = "0"+fullDate.getMinutes();}
  else{
    var minutes = fullDate.getMinutes();
  }
  // displays the full date
  $("#date").text("Today's Date: "+(fullDate.getMonth()+1)+"/"+(fullDate.getDate())+"/"+ (fullDate.getFullYear()));
  //if conditions for hour formatting 
  if(fullDate.getHours()==0){
    $("#time").text((12+":"+(fullDate.getMinutes())+"AM"));
  }

  else if(fullDate.getHours()<12){

  $("#time").text((fullDate.getHours())+":"+minutes+"AM");
  }
  else if(fullDate.getHours()==12){
    $("#time").text((fullDate.getHours())+":"+minutes+"PM");
  }
  else{
    $("#time").text((fullDate.getHours()-12)+":"+minutes+"PM");
  }
  }, 100);
}
// clock is displayed initially
displayClock();

// main planner function
function displayPlanner(){
// loop to focus what hour of the day the planner is on
  for(var i=0;i<24;i++){
    // midnight condition
    if(i==0){
      // creating a new div for the time slot
    var newDiv = $("<div>");
    // assigning it an id based on the hour
    newDiv.attr("id", i);
    // assigning div a class
    newDiv.attr("class", "plan");
    // creating a h4 tag to display the time
    var h4 = $("<h4>");
    // filling in the h4 tag with text to display the time
    h4.text(12+"AM");
    // attaching the the h4 tag to the newly created div
    $(newDiv).append(h4);
    // attaching the newly created div to the planner display container
    $("#planner-display").append(newDiv);
    // attaching an input box and button to the new div that was just created (this format/process continues for all time conditions)
    $("#"+i).append("<input id=plan" +i+" type=text class=userInput></input><button class=btn id="+i+">+</button>");
    }
    // 1am to 11am condition
    else if(i<12){
    var newDiv = $("<div>");
    newDiv.attr("id", i);
    newDiv.attr("class", "plan");
    var h4 = $("<h4>");
    h4.text(i+"AM");
    $(newDiv).append(h4);
    $("#planner-display").append(newDiv);
    $("#"+i).append("<input id=plan" +i+" type=text class=userInput></input><button class=btn id="+i+">+</button>");
    }
    // noon condition
    else if(i==12){
    var newDiv = $("<div>");
    newDiv.attr("id", i);
    newDiv.attr("class", "plan");
    var h4 = $("<h4>");
    h4.text(i+"PM");
    $(newDiv).append(h4);
    $("#planner-display").append(newDiv);
    $("#"+i).append("<input id=plan" +i+" type=text class=userInput></input><button class=btn id="+i+">+</button>");
    }
    // 1pm to 11pm condtion
    else{
      var PM=i-12;
      var newDiv = $("<div>");
      newDiv.attr("id", i);
      newDiv.attr("class", "plan");
      var h4 = $("<h4>");
      h4.text(PM+"PM");
      $(newDiv).append(h4);
      $("#planner-display").append(newDiv);
      $("#"+i).append("<input id=plan" +i+" type=text class=userInput></input><button class=btn id="+i+">+</button>");
    }
    // this section allows the div to be color cordinated based on time of day
    // variable created to track what hour the planner is on more simply
    var hourCounter = new Date();
    // color for current hour div
    if(i==hourCounter.getHours()){
      var currentDiv = $("#"+i);
      currentDiv.attr("style", "background-color: #28a745;")
    }
    // colors for past hour divs
    else if(i<hourCounter.getHours()){
      var pastHours = $("#"+i);
      pastHours.attr("style", "background-color: #6c757d;")
    }
    // colors for future hour divs
    else{
      var futureHours = $("#"+i);
      futureHours.attr("style", "background-color: #007bff;")
    
    }
  }
}
// planner is always displayed
displayPlanner();

// local storage section >>>
// when a button is clicked, the value in the adjacent input box is taken and stored in local storage
$("button").click(function() {
  // whatever button is clicked, it takes that button's ID
var btnID = this.id;
// creating the ability to access the input section's text vaue
var userInput = document.getElementById("plan"+btnID);
// storing the input sections text value by hour section
localStorage.setItem(this.id, userInput.value);
});

// creating a loop that will grab all the stored information from the localstorage to display in the planner when page is refreshed
for(var i=0;i<24;i++){
  // creating a variable for the aquired information from the given hour found in local storage
  var storageInput = localStorage.getItem(i);
  // displaying the stored text from the local storage
  document.getElementById("plan"+i).value = storageInput;
}

});