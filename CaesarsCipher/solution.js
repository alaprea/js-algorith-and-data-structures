function rot13(str) {
  const a = 65;
  const z = 90;
  const caesar = 13;
  let newStr = "";
  let regex = RegExp(/[A-Z]/)

  for(let i = 0; i < str.length; i++) {

    if (regex.test(str[i])) {
      let asciiNum = str[i].charCodeAt();

      if (asciiNum + caesar > 90) {
        asciiNum = asciiNum + caesar - z + a - 1
      }
      else {
        asciiNum = asciiNum + caesar;
      }

      let newChar = String.fromCharCode(asciiNum);
      newStr = newStr + newChar;
    }

    else newStr = newStr + str[i];
  }
  return newStr;
}

console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));