function PrimeTime(num) { 
  var divisibleByNumber = 0;
  // divide it by all the numbers before it. if divisible (i.e. remainder is zero),
  // then add it to the divisibleByNumber counter.
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      divisibleByNumber++;
    }
  }  
  if (divisibleByNumber > 0) {
    return num + " is not a prime number.";
  } else {
    return num + " is a prime number.";
  }
}
console.log(PrimeTime(809));
console.log(PrimeTime(3));