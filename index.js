const modal = document.querySelector(".rating__modal");
const rating = document.querySelector(".movies__rating");
let averageRating = document.querySelector(".rating-start");
let ratingInput = document.querySelector(".rating__modal-input");
const ratingButton = document.querySelector(".rating__modal-button");



// rating color changer
if (averageRating.innerHTML >= 0 && averageRating.innerHTML < 5) {
  averageRating.style.color = "red";
} else if (averageRating.innerHTML >= 5 && averageRating.innerHTML < 8) {
  averageRating.style.color = "yellow";
} else if (averageRating.innerHTML >= 8 && averageRating.innerHTML <= 10) {
  averageRating.style.color = "#ADBF3A";
}

// rating limit 1 - 10
ratingInput.addEventListener("change", function () {
  let v = parseInt(this.value);
  if (v < 1) this.value = 1;
  if (v > 10) this.value = 10;
});

// add active class to show modal

rating.onmouseover = rating.onmouseout = rating.onmousemove = handler;

function handler(event) {
  if (event.type == "mouseover") {
    modal.classList.add("active");
  }
}

// array to store movie rating
let ratingArr = [];
ratingArr.push(Number(averageRating.innerHTML));


// calculate the average rating in the array
ratingButton.addEventListener("click", function () {
    ratingArr.push(Number(ratingInput.value));
    console.log(ratingArr);
  averageRating.innerHTML = (ratingArr.reduce((a, b) => (a + b)) / ratingArr.length).toFixed(1); //round to 1 decimal place

  if (averageRating.innerHTML >= 0 && averageRating.innerHTML < 5) {
    averageRating.style.color = "red";
  } else if (averageRating.innerHTML >= 5 && averageRating.innerHTML < 8) {
    averageRating.style.color = "yellow";
  } else if (averageRating.innerHTML >= 8 && averageRating.innerHTML <= 10) {
    averageRating.style.color = "#ADBF3A";
  }

  modal.classList.remove("active");

  return averageRating;
});
