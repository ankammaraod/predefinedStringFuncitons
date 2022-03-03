const indexOf = function (content, character, number) {
  let index = number;
  if (index === undefined) {
    index = 0;
  }

  while (index < content.length) {
    if (content[index] === character) {
      return index;
    }
    index++;
  }
}

console.log(indexOf("hello","l",3));