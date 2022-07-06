const ratings = document.querySelectorAll(".rating");
const button = document.querySelector(".btn");
const cardInitial = document.querySelector(".wrapper");
const cardThankYou = document.querySelector(".thankyou-card");
const ratingSpan = document.querySelector(".ratingtext");

ratings.forEach((rating) => {
  rating.addEventListener("click", function (event) {
    event.preventDefault();

    ratings.forEach((rating) => {
      rating.classList.remove("selected");
    });
    this.classList.add("selected");
  });
});

button.addEventListener("click", function (event) {
  event.preventDefault();
  const selectedRating = document.querySelector(".rating.selected");
  const selectedRatingvalue =
    selectedRating != null ? selectedRating.getAttribute("data-val") : 0;
  if (selectedRating == null) {
    alert("Please select a rating before clicking submit.");
    return false;
  }
  cardInitial.classList.add("hide");
  ratingSpan.innerHTML = selectedRatingvalue;
  cardThankYou.classList.remove("hide");
});
