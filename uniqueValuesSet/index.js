const unique = (str) => {
  // other way

  return new Set(str).size === str.length;

  // ===========================

  //   let tempStr = new Set();

  //   for (let x of str) {
  //     if (tempStr.has(x)) {
  //       return false;
  //     }
  //     tempStr.add(x);
  //   }
  //   return true;
};

console.log(unique("abcde"));
console.log(unique("abcadfb"));
