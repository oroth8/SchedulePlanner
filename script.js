$(document).ready(function() {

$( "#jBtn" ).click(function() {
  $( ".jumbotron" ).hide( "drop", { direction: "down" }, "slow" );
});


function displayClock(){
  setInterval(function(){
  var fullDate = new Date();
  if(fullDate.getMinutes()<10){
  var minutes = "0"+fullDate.getMinutes();}
  else{
    var minutes = fullDate.getMinutes();
  }

  $("#date").text("Today's Date: "+(fullDate.getMonth()+1)+"/"+(fullDate.getDate())+"/"+ (fullDate.getFullYear()));

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

displayClock();


function displayPlanner(){

  for(var i=0;i<24;i++){
    if(i==0){
    var newDiv = $("<div>");
    newDiv.attr("id", i);
    newDiv.attr("class", "plan");
    var h4 = $("<h4>");
    h4.text(12+"AM");
    $(newDiv).append(h4);
    $("#planner-display").append(newDiv);
    $("#"+i).append("<input id=plan" +i+" type=text class=userInput></input><button class=btn id="+i+">+</button>");
    }
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
    var hourCounter = new Date();
    if(i==hourCounter.getHours()){
      var currentDiv = $("#"+i);
      currentDiv.attr("style", "background-color: #28a745;")
    }
    else if(i<hourCounter.getHours()){
      var pastHours = $("#"+i);
      pastHours.attr("style", "background-color: #6c757d;")
    }
    else{
      var futureHours = $("#"+i);
      futureHours.attr("style", "background-color: #007bff;")
    
    }
  }
}

displayPlanner();

$("button").click(function() {

var btnID = this.id;
var userInput = document.getElementById("plan"+btnID);
localStorage.setItem(this.id, userInput.value);
});

for(var i=0;i<24;i++){
  var storageInput = localStorage.getItem(i);
  document.getElementById("plan"+i).value = storageInput;
}

});