// return (true) only if all values are unique, otherwise return (false)

// Using Array, Object, String Method(lastIndexOf())
//  set data structure

const unique = (str) => {
  // third way 👍

  for (let i = 0; i < str.length; i++) {
    if (str.lastIndexOf(str[i]) !== i) {
      return false;
    }
  }

  return true;
  // =====================
  // second way 👍
  //   let values = {};
  //   for (let letter of str) {
  //     if (values[letter]) {
  //       return false;
  //     }
  //     values[letter] = "exists";
  //   }
  //   return true;
  //   ============================
  // 1st way 👍
  //   let values = [];
  //   for (let letter of str) {
  //     if (values.indexOf(letter) !== -1) {
  //       return false;
  //     }
  //     values.push(letter);
  //   }
  //   return true;
};

console.log(unique("abcde"));
console.log(unique("abcadefb"));
