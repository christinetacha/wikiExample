$(document).ready(function() {
  $("form#arithmetic").submit(function(event) {
      var firstnumber = parseInt($("input#firstnumber").val());
      var secondnumber = parseInt($("input#secondnumber").val());

      $("#addednumbers").empty().append(firstnumber + secondnumber);
      $("#result").show();
    event.preventDefault();
  });

  $("form#array").submit(function(event) {
    var array = [];
    var numberuno = parseInt($("input#numberuno").val());


    $("#arraynumbers").empty().append(array.push(numberuno));
    $("#array").trigger('reset');
  event.preventDefault();
  });

  $("form#array").click(function(event) {
    $("#result").show();
    event.preventDefault();
  });
});
