// 1 ---------------------
function oddEven(arr) {
  let isOdd = [];
  let isEven = [];

  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      isOdd.push(arr[i]);
    } else {
      isEven.push(arr[i]);
    }
  }
  console.log(isEven);
  console.log(isOdd);
}

debugger;
let a = [45, 12, 3, 6, 17, 0];
console.log(oddEven(a));
// -------------------------
