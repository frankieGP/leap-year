$(document).ready(function(){
  $("form#leap-year").submit(function(event){
    event.preventDefault();
    var year = parseInt($("input#years").val());
    var result = leapYear(year);
    $("#result").text(result);
  });
});

var leapYear = function(year) {
  return false;
};
