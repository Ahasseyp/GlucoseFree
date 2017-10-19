$(document).ready(function(){

  var today = new Date();
  var dow = today.getDay();
  var dd = today.getDate();
  var mm = today.getMonth()+1;

  var weekday=new Array(7);
  weekday[1]="Monday";
  weekday[2]="Tuesday";
  weekday[3]="Wednesday";
  weekday[4]="Thursday";
  weekday[5]="Friday";
  weekday[6]="Saturday";
  weekday[7]="Sunday";

  var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"]

  $("#main_title").text(weekday[dow]+ ", "+monthNames[mm] + " " + dd);

  $("#assessment").click(function(){
      $("#main_title").text("Assessment");
      $('.demo-content > div').show();
      $('.demo-content > div:not(#assessment-card)').hide();
  });

  $("#food").click(function(){
      $("#main_title").text("Food");
      $('.demo-content > div').show();
      $('.demo-content > div:not(#food-card)').hide();
  });

  $("#emergency").click(function(){
      $("#main_title").text("Emergency");
      $('.demo-content > div').show();
      $('.demo-content > div:not(#emergency-card)').hide();
  });

  $("#list-option-1").click(function(){
      $("#food-graph").attr("fill", "#d81b60");
  });

  $("#list-option-2").click(function(){
      $("#food-graph").attr("fill", "#f4511e");
  });

  $("#list-option-3").click(function(){
      $("#food-graph").attr("fill", "#ffb300");
  });

  $("#list-option-4").click(function(){
      $("#food-graph").attr("fill", "#388e3c");
  });

});
