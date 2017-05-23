//  1. Write a function `lengths` that accepts a single parameter as an argument, namely
// an array of strings. The function should return an array of numbers where each
// number is the length of the corresponding string.

// your code here
var array = ["write", "function", "a", "that"];
var lengths = function(array){
  this.stringLength = [];
  for (var i = 0; i < array.length; i++){
    var lengthofWord = 0;
    for (var j = 0; j < array[i].length; j++){
      lengthofWord++;
    }
    this.stringLength.push(lengthofWord);
  }
  return this.stringLength;
}

lengths(array);

// 2. Write a Javascript function called `transmogrifier`
// This function should accept three arguments, which you can assume will be numbers.
// Your function should return the "transmogrified" result
//
// The transmogrified result of three numbers is the product of the first two numbers,
// raised to the power of the third number.

// your code

var transmogrifier = function(num1, num2, num3){
  return Math.pow(num1 * num2 , num3);
}

transmogrifier(2,2,2);

// 3. Write a function `wordReverse` that accepts a single argument, a string. The
// method should return a string with the order of the words reversed. Don't worry
// about punctuation.

// your code here

var wordReverse = function(string){
  this.reversedWord = [];
  for (var i = string.length-1; i >= 0 ; i--){
    this.reversedWord.push(string[i]);
  }

  return this.reversedWord;
}

wordReverse("string");
