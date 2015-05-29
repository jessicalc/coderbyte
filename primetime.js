function PrimeTime(num) { 
  var divisibleByNumber = 0;
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      divisibleByNumber++;
      if (divisibleByNumber > 0) {
//         console.log(divisibleByNumber); // make sure you're only making the computer count once. once the computer has found a number that num can be divided by, stop!
        return num + " is not a prime number.";
      }
    } else {
        return num + " is a prime number."; 
    }
  }
}
console.log(PrimeTime(801));
console.log(PrimeTime(4));