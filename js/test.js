// Games

//let points = 0;
//let resp0 = prompt("What of the capital of Armenia ");

//if (resp0 === "Yerevan") {
//  points = points + 1;
//}

//let resp1 = prompt("What of the capital of Russia ");

//if (resp1 === "Moscow") {
//  points = points + 1;
//}

//let resp2 = prompt("What of the capital of France ");

//if (resp2 === "Paris") {
//  points = points + 1;
//}

//alert(`You resives ${points} out of 3`);

//-------------------
//  if , if else

//let x = prompt("What is your name?");
//let z = prompt("What is your surname");

//if (x === "Yura") {
//  if (z === "Avetisyan") {
//    alert("vay ba barv dzez");
//  } else {
//    alert("Yura ba es inch ka chka");
//  }
//} else if (x === "Anush") {
//  alert("barev Anush");
//} else if (x === "Vazgen") {
//  alert("Vazgen hi");
//} else {
//  alert("ammm");
//}

//-------------------
//  Number and String

//let x = "20";
//let y = +x;

//if (y === 20) {
//  alert("ya");
//}

//-------------------
//  while

//let i = 0;

//while (i < 3) {
//  alert(i);
//  i++;
//}

//while (true) {
//  let userResponse = prompt("hi");
//  if (userResponse === "exit") {
//    break;
//  }
//  alert("OK, we will continue");
//}

//-------------------
//  array

//let x = [44, 989, 8, 57];

//x[1] = 9;
//let y = x[1];

//alert(x.length);

//let x = [5, "miban", true, false, [5, 8, 99]];

//console.log(x[4][1]); //8

//-------------------
//  games tic tac toe

//let board = [
//  [" _ ", " _ ", " _ "],
//  [" _ ", " _ ", " _ "],
//  [" _ ", " _ ", " _ "],
//];
//let player = "x";
//while (true) {
//  let boardStrt =
//    board[0].join("  ") +
//    "\n" +
//    board[1].join("  ") +
//    "\n" +
//    board[2].join("  ");

//  let row = +prompt("enter row" + "\n" + boardStrt);
//  let column = +prompt("enter column" + "\n\n" + boardStrt);

//  if (board[row][column] !== "_") {
//    alert("you lose!!!");
//    break;
//  }

//  board[row][column] = player;

//  if (player === "x") {
//    player = "o";
//  } else {
//    player = "x";
//  }
//}

//let a = ["Hakob", "Poghos", "Petros", "Aramis", "Nika", "Yura"];

//let i = 0;
//let i2 = a.length - 1;

//while (i < a.length / 2) {
//  let d = a[i];
//  a[i] = a[i2];
//  a[i2] = d;

//  i++;

//  i2 = i2 - 1;
//}

//console.log(a);
