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

// 4.

let a = [1, 2, 3, 3, 2, 2, 5, 7, 8, 9, 5];

function uniqueArr(arr) {
  let resArr = [];

  if (arr.length > 0) {
    resArr[0] = arr[0];
  }

  for (let i = 0; i < arr.length; i++) {
    let showRes = false;

    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === resArr[j]) {
        showRes = true;
        break;
      } else {
        showRes = false;
      }
    }

    if (showRes === false) {
      resArr[resArr.length] = arr[i];
    }
  }

  return resArr;
}

//debugger;

console.log(uniqueArr(a));

// 3.
function removeStr(text, rtext) {
  return text.split(rtext).join("");
}

console.log(removeStr(txt, remWord));

// 4. Given an array of numbers. Create an array containing only unique elements.

// 5. Given a string and symbols. Change first symbol by the second one in the string.

let txt = prompt("Enter some text");
let oldT = prompt("Enter old word");
let newT = prompt("Enter new word");

function replaceStr(text, rtext) {
  for (let i = 0; i < text.length; i++) {
    if (text[i] === rtext) {
      return text.replaceAll(oldT, newT);
    }
  }
}

console.log(replaceStr(txt, oldT));

// 2. worked !!!!!   only sinple word

let a = ["inlets", "enlists", "google", "banana"];
let b = "listen";

function anagr(arr, findeAnagr) {
  let array = [];
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i].length !== findeAnagr.length) {
        break;
      }
      for (let k = 0; k < findeAnagr.length; k++) {
        if (arr[i][j] === findeAnagr[k]) {
          result += findeAnagr[k];
        }
      }
    }
    if (result === arr[i]) {
      return arr[i];
    }
  }
}

console.log(anagr(a, b));

//debugger;
console.log(anagr(a, b));

//--- not work ??
let a = ["applea", "inlets", "enlists", "google", "banana"];
let b = "listen";

function anagr(arr, findAnagr) {
  let array = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length !== findAnagr.length) {
      continue;
    }
    let strArr = "";
    let result = "";
    strArr += arr[i];
    for (let j = 0; j < strArr.length; j++) {
      result += strArr[j];

      if (result !== findAnagr) {
        continue;
      } else {
        return arr[i];
      }
    }
  }
}

debugger;
console.log(anagr(a, b));

// 4 worked!1

let digit = +prompt("Enter digit arry");
let a = [];

for (let i = 0; i < digit; i++) {
  a.push(+prompt("Enter  arrays"));
}

function uniqElem(arr) {
  let result = [];
  let count = 0;
  let bool = false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
        bool = true;
      }
    }
    count++;
    if (count == 1 && bool == false) {
      result.push(arr[i]);
    }
    bool = false;
    count = 0;
  }
  return result;
}

debugger;
console.log(uniqElem(a));
