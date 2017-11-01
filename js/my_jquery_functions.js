$(document).ready(function(){

  var today = new Date();
  var dow = today.getDay();
  var dd = today.getDate();
  var mm = today.getMonth();

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

  $("#glevel_input").hide();

  $("#main_title").text(weekday[dow]+ ", "+monthNames[mm] + " " + dd);

  $("#home").click(function(){
    $("#main_title").text(weekday[dow]+ ", "+monthNames[mm] + " " + dd);
    $('.demo-content > div').show();
  });

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

  $("#manual_input_button").click(function(){
    $("#glevel_input").show();
  });

  $("#settings").click(function(){
    $("#main_title").text("Account Settings");
    $('.demo-content > div').hide();
  });

  $("#manual_input").on('keyup', function(e) {
    if(e.keyCode == 13) {
      $("#glevel_input").hide();
      $("#glevel_int").text($('#manual_input').val());
      $('#manual_input').val(null);
    }
  });

});
