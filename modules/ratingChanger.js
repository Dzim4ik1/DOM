import { movies } from "../data.js";

function colorChanger() {
  const modal = document.querySelector(".rating__modal");
  const rating = document.querySelector(".movies__rating");
  const averageRating = document.querySelector(".rating-start");
  const ratingInput = document.querySelector(".rating__modal-input");
  const ratingButton = document.querySelector(".rating__modal-button");

  // rating color changer

  const ratingValue = averageRating.innerHTML;

  let ratingColor = "";

  if (ratingValue < 5) ratingColor = "red";
  else if (ratingValue < 8) ratingColor = "yellow";
  else if (ratingValue <= 10) ratingColor = "#ADBF3A";

  averageRating.style.color = ratingColor;

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
    averageRating.innerHTML = (
      ratingArr.reduce((a, b) => a + b) / ratingArr.length
    ).toFixed(1); //round to 1 decimal place

    // rating color changer
    const ratingValue = averageRating.innerHTML;

    let ratingColor = "";

    if (ratingValue < 5) ratingColor = "red";
    else if (ratingValue < 8) ratingColor = "yellow";
    else if (ratingValue <= 10) ratingColor = "#ADBF3A";

    averageRating.style.color = ratingColor;
    //

    modal.classList.remove("active");

    return averageRating;
  });
}

colorChanger();
