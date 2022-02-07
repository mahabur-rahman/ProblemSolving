const checkLongestWord = (str) => {
  const checkStrToSplit = str.split(" ");
  let word = "";

  for (let x of checkStrToSplit) {
    if (x.length > word.length) {
      word = x;
    }
  }
  return word;
};

console.log(checkLongestWord("I am mahabur rahman"));
console.log(checkLongestWord("Js is an awesome language"));
