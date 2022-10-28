// PROMPT:
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105
Zero alone is fine, don't worry about it. Poor guy anyway

// MY SOLUTION:
function noBoringZeros (n) {
    return Number(n.toString().replace(/0+$/, ''));
}

// OR
function noBoringZeros(n) {
    while(n%10==0 && n!=0){n/=10;}
    return n;
  }

// OR
function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
      n = n / 10 
    }
    return n
  }

// OR
const noBoringZeros = n => parseInt(n.toString().replace(/0+$/g, "") + 0) / 10;

// the while loop will keep running until there are no zeroes left, for example, there is a 960,000 and it will keep going down to 96,000 and then 9,600 and then 960 and then 96 and then the loop stops.