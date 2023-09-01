const availableNumbers = [[1000, "M"],[900, "CM"],[500, "D"],[400, "CD"],[100, "C"],[90, "XC"],[50, "L"],[40, "XL"],[10, "X"],[9, "IX"],[5, "V"],[4, "IV"],[1, "I"]];

function convertToRoman(num) {
  let romanNum = "";
  let sum = 0;

  while (sum != num) {
    let i = 0;
    let found = false;

    while(!found) {
      if (sum + availableNumbers[i][0] <= num) found = true;
      else i++;
    }
    sum = sum + availableNumbers[i][0];
    romanNum = romanNum + availableNumbers[i][1];
  }
  return romanNum;
}

console.log(convertToRoman(68));