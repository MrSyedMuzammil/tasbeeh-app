let countNum = document.getElementById("count");
let savedCounts = document.getElementById("saved-counts");
let savedTotal = document.getElementById("saved-total-prayers");
let container = document.querySelector(".container");

let count = 0;
let totalPrayers = 0;

function increment(event) {
  if (event) {
    event.stopPropagation();
  }
  count += 1;
  countNum.innerHTML = count;
}

function resetCount() {
  count = 0;
  countNum.innerHTML = "0";
}

function save(event) {
  event.stopPropagation();
  if (count > 0) {
    let countStr = " " + count + " - ";

    const label = "Previous Prayers :";

    const currentPrayers = savedCounts.textContent.replace(label, "");

    const newPrayerList = label + " " + count + " -" + currentPrayers;

    savedCounts.textContent = newPrayerList;

    totalPrayers += count;
    savedTotal.textContent = "Total Prayers : " + totalPrayers;

    resetCount();
  }
}

function reset(event) {
  event.stopPropagation();
  count = 0;
  countNum.innerHTML = "0";
  savedCounts.textContent = "Previous Prayers : ";
  totalPrayers = 0;
  savedTotal.textContent = "Total Prayers : ";
}
