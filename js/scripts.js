
var factorial = function(number) {
  if (number === 0 || number === 1)
  {
    return 1;
  }

for (var i = number - 1; i >= 1; i -=1)
{
  number *=i;
}
return number;
}

$(document).ready(function() {
  $("form#factorial").submit(function(event) {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    var result = factorial(number);

    $(".number").text(result);

    $("#result").show();
     });
   });



   function forwards (word) {

     for (i=0; i<word.length; i ++)
     {
      return result;
    }
   };

   function palindrome (word)
   {
     return word.split ('').reverse().join('');
    }
    reverseWord ("racecar");
