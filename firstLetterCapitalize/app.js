const capitalizeWord = (str) => {
  const words = str.split(" ").map((word) => {
    let firstLetter = word.slice(0, 1);

    let rest = word.slice(1);
    firstLetter = firstLetter.toUpperCase();

    return `${firstLetter}${rest}`;
  });

  return words.join(" ");
};

console.log(capitalizeWord("I woke up early today"));
console.log(capitalizeWord("Dhaka is the capital of bangladesh"));
