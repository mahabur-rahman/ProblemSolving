const arrSum = (arr) => {
  let tempArr = arr.sort((a, b) => {
    return a - b;
  });
  let largest = tempArr.pop();

  let num = 0;
  tempArr.forEach((item) => (num += item));

  return largest === num;
};

console.log(arrSum([1, 3, 12]));
console.log(arrSum([2, 4, 7]));

// after sort
// 1, 3, 6, 8, 12
// 1, 2, 2, 4, 7, 9

// after pop()
// 12
// 9

// original arr after pop()
// 1, 3, 6, 8
// 1, 2, 2, 4, 7
