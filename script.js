let countNum = document.getElementById("count");
let savedCounts = document.getElementById("saved-counts");
let savedTotal = document.getElementById("saved-total-prayers");

let count = 0;
let totalPrayers = 0;

function increment() {
  count += 1;
  countNum.innerHTML = count;
}

function resetCount() {
  count = 0;
  countNum.innerHTML = "0";
}

function save() {
  if (count > 0) {
    let countStr = " " + count + " - ";
    savedCounts.textContent += countStr;

    totalPrayers += count;
    savedTotal.textContent = "Total Prayers : " + totalPrayers;
    resetCount();
  }
}

function reset() {
  count = 0;
  countNum.innerHTML = "0";
  savedCounts.textContent = "Previous Prayers : ";
  totalPrayers = 0;
  savedTotal.textContent = "Total Prayers : ";
}
