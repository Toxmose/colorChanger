const container = document.querySelector(".container");
const span = document.querySelector("#span");

// eventlistener button
const clicker = document.querySelector("#btn");
clicker.addEventListener("click", () => {
  // generate 3 randon numbers for RGB
  const color1 = Math.floor(Math.random() * 255) + 1;
  const color2 = Math.floor(Math.random() * 255) + 1;
  const color3 = Math.floor(Math.random() * 255) + 1;
  console.log(color1, color2, color3);

  // set backgroundcolor to random values
  container.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
  span.innerHTML = `Red: ${color1} / Green: ${color2} / Blue: ${color3}`;

  //   change text depending on color tone of background
  if (color1 < 50 || color2 < 50 || color3 < 50) {
    container.style.color = "#fff";
  } else container.style.color = "#000";
});
