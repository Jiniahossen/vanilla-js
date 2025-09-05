const count = document.querySelector(".count");
const increment = document.querySelector(".increment");
const decrement = document.querySelector(".decrement");

let countNumber = 0;
increment.addEventListener("click", function () {
  countNumber += 1;
  count.innerText = countNumber;
});
decrement.addEventListener("click", function () {
  if (countNumber > 0) {
    countNumber -= 1;
    count.innerText = countNumber;
  }
});
