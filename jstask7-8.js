function baitap1() {
  var arr = [1, 2, 3, 4, -5, 6, 7];
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      console.log(arr[i]);
      sum += arr[i];
    } else {
      continue;
    }
  }
  console.log("Tổng các số dương:", sum);
  document.getElementById("resultBt1").innerHTML = sum;
}
//=========================================================================================
function baitap2() {
  var arr = [1, 2, 3, 4, -5, 6, 7];
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count++;
    } else {
      continue;
    }
  }
  console.log("Có", count, "số dương");
  document.getElementById("resultBt2").innerHTML = "Có " + count + " số dương";
}
//=========================================================================================
function baitap3() {
  var arr = [1, 2, 3, 4, -5, 6, 7];
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  console.log("Số nhỏ nhất:", min);
  document.getElementById("resultBt3").innerHTML = min;
}
//=========================================================================================
function baitap4() {
  var arr = [1, 2, 3, 4, -5, 6, 7];
  var min = arr[0];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < min && arr[i] > 0) {
      min = arr[i];
    }
  }
  document.getElementById("resultBt4").innerHTML = min;
}
//=========================================================================================
function baitap5() {
  var arr = [1, 2, 3, 4, -5, 6, 7];
  var even = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even = arr[i];
    }
  }
  document.getElementById("resultBt5").innerHTML = even;
}
//=========================================================================================

function baitap6() {
  var arr = [1, 2, 3, 4, -5, 6, 7];
  var a = document.getElementById("txtFirst").value * 1;
  var b = document.getElementById("txtSecond").value * 1;
  var temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
  document.getElementById("resultBt6").innerHTML = arr;
}
//=========================================================================================
function baitap7() {
  var arr = [1, 2, 3, 4, -5, 6, 7];
  var isSwapper = false;
  for (var k = arr.length - 1; k >= 0; k--) {
    for (var i = 0; i < k; i++) {
      if (arr[i] > arr[i + 1]) {
        var temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSwapper = true;
      }
    }
    if (isSwapper === false) {
      console.log(arr);
      return;
    }
  }
  document.getElementById("resultBt7").innerHTML = arr;
}
//=========================================================================================
function ex8(n) {
  var isRight = true;
  if (n < 2) {
    isRight = false;
  }
  var i = 2;
  while (i < n) {
    if (n % i == 0) {
      isRight = false;
      break;
    }
    i++;
  }
  return isRight;
}
function baitap8() {
  var arr = [4, 2, 3, 1, 8, 6, 9];
  for (var i = 0; i < arr.length; i++) {
    if (ex8(arr[i]) == true) {
      console.log("Số nguyên tố đầu tiên:", arr[i]);
      break;
    }
  }
  document.getElementById("resultBt8").innerHTML = arr[i];
}
//=========================================================================================
function baitap9() {
  var arr = [4, 0.1, "4", 2, -3, 1, 9];
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (Number.isInteger(arr[i])) {
      console.log("Yeahh!!!");
      count++;
    } else {
      console.log("Wrong");
    }
  }
  document.getElementById("resultBt9").innerHTML = count + " Số nguyên";
}
//=========================================================================================
function baitap10() {
  var arr = [4, 1, 2, 3, -1, -9, -6, -8];
  var negativeNumber = 0;
  var positiveNumber = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveNumber++;
    } else {
      negativeNumber++;
    }
  }
  if (positiveNumber > negativeNumber) {
    console.log("Số dương > Số âm");
    document.getElementById("resultBt10").innerHTML = "Số dương > Số âm";
  } else if (positiveNumber < negativeNumber) {
    console.log("Số dương < Số âm");
    document.getElementById("resultBt10").innerHTML = "Số dương < Số âm";
  } else {
    console.log("Số dương = Số âm");
    document.getElementById("resultBt10").innerHTML = "Số dương = Số âm";
  }
}
