function PrimeTime(num) { 
  var isPrime = false;
  var divisibleByNumber = 0;
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      divisibleByNumber++;
      if (divisibleByNumber > 0) {
        isPrime = false;
        return num + " is not a prime number";
      }
    } else {
      return num + " is a prime number.";
    }
  }
}
console.log(PrimeTime(22));
console.log(PrimeTime(3));