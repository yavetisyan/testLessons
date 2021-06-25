////function checkAge(age) {
////  if (age > 18) {
////    return true;
////  } else {
////    return confirm("Your parents know ?");
////  }
////}

////let a = prompt("Enter you age");

////if (checkAge(a)) {
////  alert("Access Granded");
////} else {
////  alert("Access DENIDE,, i am call you parents");
////}

////function str(num) {
////  let strSum = String(num);
////  let result = "";

////  for (let i = 0; i < strSum.length; i++) {
////    if (+strSum[i] === 9) {
////      result += strSum[i];
////    }
////  }
////  return result.length;
////}
////let someNumber = prompt("Enter number");

////console.log(str(someNumber));

////function ask(question, yes, no) {
////  if (confirm(question)) yes();
////  else no();
////}

////function showOk() {
////  alert("Are you sure ?");
////}
////function showCancel() {
////  alert("You are canveled ");
////}
////ask(" mAre you  sure ?????", showOk, showCancel);

////---------------------

//function f1(a, b, c) {}

//function sum3(x1, y1) {
//  console.log(x1 + y1);
//}

//sum3(22, 11);
//sum3(15, 1);

//function showSum(elem, x, y) {
//  document.querySelector(elem).textContent = x + y;
//}

//function showSum2(elem, x, y) {
//  elem.textContent = x + y;
//}

//showSum(".out-2", 5, 6);

//const out1 = document.querySelector(".out-1");

//showSum2(out1, 7, 8);

//function showSum3(x, y, elem = ".out-1") {
//  console.log(arguments);
//  document.querySelector(elem).textContent = x + y;
//}

//showSum3(10, 10);
////showSum3(10, 15, ".out-2");

//function showSumAll() {
//  console.log(arguments);
//  //let sum = 0;
//  //for (let i = 0; i < arguments.length; i++) {
//  //  sum += arguments[i];
//  //}

//  let sum = Array.from(arguments).reduce((accum, item) => (accum += item));
//  console.log(sum);
//}

//showSumAll(4, 5, 6, 20);

//Учитывая массив чисел. Напишите функцию для разделения четных и нечетных чисел в разные массивы.

//debugger;
//let arrLength = +prompt("Enter Array Length");

//let arr = [];

//for (let i = 0; i < arrLength; i++) {
//  let arraY = Math.abs(+prompt("Enter Arrays"));
//  arr.push(arraY[i]);
//}

//console.log(arr);

//4
//let digit = +prompt("Enter digit arry");
//let a = [];

//for (let i = 0; i < digit; i++) {
//  a.push(+prompt("Enter  arrays"));
//}

//function uniqElem(arr) {
//  let result = [];
//  let count = 0;
//  let bool = false;

//  for (let i = 0; i < arr.length; i++) {
//    for (let j = 0; j < result.length; j++) {
//      if (arr[i] === result[j]) {
//        bool = true;
//      }
//    }
//    count++;
//    if (count == 1 && bool == false) {
//      result.push(arr[i]);
//    }
//    bool = false;
//    count = 0;
//  }
//  return result;
//}

////debugger;
//console.log(uniqElem(a));

//---------------------

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
