function romanNumeral(string) {
  // make object for values, mapping symbols to numeric vals
  // have total = 0
  // add last digit
  //iterate over string from 2nd to last digit to beginning
    // for each value:
      // if numeric value is less than prev value
        // subtract that value from total
      // else add it to total

  let total = 0;
  let numeralVals = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }

  total += numeralVals[string[string.length -1]];

  for (let i = string.length - 2; i >=0; i--) {
    if (numeralVals[string[i]] < numeralVals[string[i+1]]) {
      total -= numeralVals[string[i]]
    } else {
      total += numeralVals[string[i]]
    }
  }

  return total;


}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));

  console.log("");

  console.log("Expecting: 502");
  console.log(romanNumeral('DII'));

  console.log("");

  console.log("Expecting: 1984");
  console.log(romanNumeral('MCMLXXXIV'));


}

module.exports = romanNumeral;

// Please add your pseudocode to this file
// And a written explanation of your solution
