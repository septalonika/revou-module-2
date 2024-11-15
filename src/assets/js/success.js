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

const username = urlParams.get("name") || "";
const email = urlParams.get("email") || "";
const room = urlParams.get("room") || "";
const message = document.getElementById("successMessage");
const capitalizedUsername = capitalizeFirstCharacter(username);
const capitalizedRoom = capitalizeFirstCharacter(room);

if (username) {
  const capitalizedUsername = capitalizeFirstCharacter(username);
  const capitalizedRoom = capitalizeFirstCharacter(room);
  message.innerText = `Hi ${capitalizedUsername}, we have received your request and we already sent your booking code on ${email}, hope you will enjoy your ${capitalizedRoom}`;
} else {
  message.innerText = `we have sent an email to ${email}`;
}
