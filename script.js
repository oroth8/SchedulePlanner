$( "#jBtn" ).click(function() {
  $( ".jumbotron" ).hide( "drop", { direction: "down" }, "slow" );
});


function displayClock(){
  var fullDate = new Date();
  $("#date").text((fullDate.getMonth()+1)+"/"+(fullDate.getDate())+"/"+ (fullDate.getFullYear()));

  if(fullDate.getHours()==0){
    $("#time").text((12+":"+(fullDate.getMinutes())+"AM"));
  }

  else if(fullDate.getHours()<12){

  $("#time").text((fullDate.getHours())+":"+(fullDate.getMinutes())+"AM");
  }
  else if(fullDate.getHours()==12){
    $("#time").text((fullDate.getHours())+":"+(fullDate.getMinutes())+"PM");
  }
  else{
    $("#time").text((fullDate.getHours()-12)+":"+(fullDate.getMinutes())+"PM");
  }
}

displayClock();


function displayPlanner(){

  for(var i=0;i<=24;i++){
    if(i==0){
    var newDiv = $("<div>");
    newDiv.attr("id", i);
    newDiv.attr("class", "plan");
    newDiv.text(12+"am");
    $("#planner-display").append(newDiv);
    $("#"+i).append("<input id=plan" +i+"></input><button id=btn"+i+">+</button>");
    }
    else if(i<12){
    var newDiv = $("<div>");
    newDiv.attr("id", i);
    newDiv.attr("class", "plan");
    newDiv.text(i+"am");
    $("#planner-display").append(newDiv);
    $("#"+i).append("<input id=plan" +i+"></input><button id=btn"+i+">+</button>");
    }
    else if(i==12){
    var newDiv = $("<div>");
    newDiv.attr("id", i);
    newDiv.attr("class", "plan");
    newDiv.text(i+"PM");
    $("#planner-display").append(newDiv);
    $("#"+i).append("<input id=plan" +i+"></input><button id=btn"+i+">+</button>");
    }
    else{
      var PM=i-12;
      var newDiv = $("<div>");
      newDiv.attr("id", i);
      newDiv.attr("class", "plan");
      newDiv.text(PM+"PM");
      $("#planner-display").append(newDiv);
      $("#"+i).append("<input id=plan" +i+"></input><button id=btn"+i+">+</button>");
    }
    var hourCounter = new Date();
    if(i==hourCounter.getHours()){
      var currentDiv = $("#"+i);
      currentDiv.attr("style", "background-color: green;")
    }
    else if(i<hourCounter.getHours()){
      var pastHours = $("#"+i);
      pastHours.attr("style", "background-color: red;")
    }
    else{
      var futureHours = $("#"+i);
      futureHours.attr("style", "background-color: blue;")
    
    }
  }
}

displayPlanner();
