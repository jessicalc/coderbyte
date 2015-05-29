// http://jsbin.com/pelige/1/edit?js,console

// I started by creating an array of all the numbers leading up to the number. So
// if my num = 9, then I made an array of [9, 8, 7, 6, 5, 4, 3, 2, 1] 

function PrimeTime(num) { 
  var array = [];
  for (i = num; i >= 0; i--) {
    array.push(i);
  } 
// Then, I looped through my array (excluding num and 1, since all numbers are divisible
// by those, durr) and divided num by every number before it. If the remainder was 0
// (in other words, if it was divisible by the divisor), then I added the divisor to
// the array (called "zeroes"). If it wasn't divisible by anything, then the array would
// be empty. You can see how I checked for stuff by uncommenting my console.log comments.
  var zeroes = [];
  for (i = 1; i < array.length - 2; i++) {
//    console.log(num + " / " + array[i] + " = " + (num / array[i])); 
//    console.log(num % array[i]);
    if (num % array[i] == 0) {
      zeroes.push(array[i]);
    } 
  };
//  console.log(zeroes);
  
  if (zeroes.length > 0) {
    return num + " is NOT a prime number because you can divide it by other numbers!";
  } else {
    return num + " is a prime number because you can only divide it by itself and 1!";
  }
}

console.log(PrimeTime(113));
console.log(PrimeTime(4));