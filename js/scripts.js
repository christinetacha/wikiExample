$(document).ready(function() {
  $("form#arithmetic").submit(function(event) {
      var firstnumber = parseInt($("input#firstnumber").val());
      var secondnumber = parseInt($("input#secondnumber").val());

      $("#addednumbers").empty().append(firstnumber + secondnumber);
      $("#result").show();
    event.preventDefault();
  });
});
