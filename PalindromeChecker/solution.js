function palindrome(str) {
  let regex = RegExp(/[^A-Za-z0-9]/g);
  let newStr = str.replace(regex,"");
  newStr = newStr.toLowerCase();
  console.log(newStr)

  let i = 0;
  let j = newStr.length - 1;
  let palindrome = true;

  while(palindrome && i <= j) {
    if (newStr[i] !== newStr[j]) palindrome = false
    i++;
    j--;
  }
  return palindrome;
}

console.log(palindrome("A man, a plan, a canal. Panama"));