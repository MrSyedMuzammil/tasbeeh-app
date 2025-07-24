let countNum = document.getElementById("count");

let count = 0;

function increment() {
  count += 1;
  countNum.innerHTML = count;
}

function reset() {
  count = 0;
  countNum.innerHTML = "0";
}
