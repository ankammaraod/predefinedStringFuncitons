const indent = function (number, paddingContent) {
  let indentation="";  
  if (paddingContent === undefined) {
    paddingContent = " ";
  }
  for (let index = 0; index < number; index++) {
    indentation = indentation + paddingContent
  }
  return indentation;
}

const padStart = function (content, number, paddingContent) {
  return indent(number,paddingContent) + content;
}

console.log(padStart("hai",2));
console.log(padStart("hai",2,"hello"));