const heightInput = document.querySelector(".height input");
const legInput = document.querySelector(".leg input");

const taterLength = 33;
const taterLegs = 6;

heightInput.addEventListener("input", (e) => {
  legInput.value = Math.round(
    (parseInt(heightInput.value, 10) * taterLegs) / taterLength
  );
});

legInput.addEventListener("input", (e) => {
  heightInput.value = Math.round(
    (parseInt(legInput.value, 10) * taterLength) / taterLegs
  );
});
