const burgerBtn = document.getElementsByClassName("burger-btn")[0];
const burgerMenu = document.getElementsByClassName("burger-menu")[0];
const burgerMenuOuter = document.getElementsByClassName("burger-menu-outer")[0];

burgerMenuOuter.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  burgerMenuOuter.classList.toggle("active");
});

burgerBtn.addEventListener("click", () => {
  burgerBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  burgerMenuOuter.classList.toggle("active");
});

function capitalizeFirstCharacter(str) {
  if (str.length === 0) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const paramValue = urlParams.get("room");

const capitalizedString = capitalizeFirstCharacter(paramValue);

console.log(paramValue);

const imgElement = document.getElementById("dynamicImg");

const hotelName = document.getElementById("hotelName");

hotelName.innerText = `${capitalizedString} Bed`;

imgElement.src = `../assets/images/rooms/${paramValue}.webp`;

const roomName = document.getElementById("roomName");

roomName.value = paramValue;
