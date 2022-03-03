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

const padEnd = function (content, number, paddingContent) {
  return content+indent(number,paddingContent) ;
}

console.log(padEnd("hai",2));
console.log(padEnd("hai",2,"hello"));