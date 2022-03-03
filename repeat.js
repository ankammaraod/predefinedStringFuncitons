const repeat = function (content, number) {
  let repeatedString = "";
  for (let index = 0; index < number; index++) {
    repeatedString = repeatedString + content;
    
  }
  return repeatedString;
}

console.log(repeat("hai", 4));