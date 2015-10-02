console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );

  $(".add").change(function(){
    var left = parseInt($("input#left").val()) || 0;
    var right = parseInt($("input#right").val()) || 0;
    var total = left + right;
    $("#total").val(total);
  });
});