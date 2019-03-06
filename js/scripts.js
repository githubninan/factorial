//factorial
var factorial = function(number) {
  if (number === 0 || number === 1)
  {
    return 1;
  }

for (var i = number - 1; i >= 1; i --)
{
  number *=i;
}
return number;
}
//Palindrome
function checkPalindrome(string)
{
  for (var i=0; i<=string.length/2; i++)
  {
    if (string[i] != string[string.length-1-i])
    {
      return false;
    }
  }
  return true;
}

//Prime Sifting
var myArray = [];
function isPrime(num)
{
  for (var i = 2; i < num; i++)
  {
    if (num % i === 0)
    {
      return  false;
    }
  }
return num > 1;

}
function getPrime(num) {
for (var index = num - 1; index > 1; index --)
{
  if (isPrime(index))
  {
    myArray.push(index);
  }
}
alert (myArray);
}


//factorial
$(document).ready(function() {
  $("form#factorial").submit(function(event)
  {
    event.preventDefault();

    var number = parseInt($("input#number").val());
    var result = factorial(number);

    $(".number").text(result);

    $("#result").show();
     });

  //palindrome
  $("form#palindrome").submit(function(event)
  {
    event.preventDefault();

    var string = $("input#string").val();
    var resultPalindrome = checkPalindrome(string);

    $(".string").text(resultPalindrome);
    $("#result-palindrome").show();
  })
//prime sifting
  $("form#prime-number").submit(function(event)
{
  event.preventDefault();

  var num = parseInt($("input#input-number").val());
  var resultPrime = getPrime(num);
  $(".prime-numbers").text(resultPrime);
  $("#result-prime").show();

})



 });
