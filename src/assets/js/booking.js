const burgerBtn = document.getElementsByClassName("burger-btn")[0];
const burgerMenu = document.getElementsByClassName("burger-menu")[0];
const burgerMenuOuter = document.getElementsByClassName("burger-menu-outer")[0];

const rooms = {
  single: {
    "single-1": {
      description:
        "Our Single-1 Bed offers a cozy and comfortable retreat for solo travelers. This room features a plush single bed with premium linens, a dedicated workspace, and modern amenities. Enjoy the convenience of an en-suite bathroom stocked with complimentary toiletries, all set in a serene atmosphere perfect for relaxation.",
      features: [
        "Cozy single bed with luxurious bedding",
        "Workspace equipped with a desk and chair",
        "En-suite bathroom with shower",
        "High-speed Wi-Fi",
        "Flat-screen TV",
        "Tasteful decor creating a welcoming ambiance",
      ],
    },
    "single-2": {
      description:
        "Single-2 Bed provides a tranquil escape with its inviting decor and comfortable layout. This room includes a single bed, ample storage space, and a well-appointed en-suite bathroom. Ideal for those seeking solitude and comfort after a day of exploration.",
      features: [
        "Comfortable single bed with quality linens",
        "Ample storage space",
        "En-suite bathroom with modern fixtures",
        "High-speed Wi-Fi",
        "Flat-screen TV",
        "Warm lighting for a cozy atmosphere",
      ],
    },
    "single-3": {
      description:
        "Single-3 Bed is designed for the modern traveler, featuring contemporary furnishings and thoughtful amenities. This room includes a plush single bed, a work desk, and an en-suite bathroom, ensuring you have everything you need for a pleasant stay.",
      features: [
        "Plush single bed with premium bedding",
        "Work desk for productivity",
        "En-suite bathroom with complimentary toiletries",
        "High-speed Wi-Fi",
        "Flat-screen TV",
        "Stylish decor enhancing your experience",
      ],
    },
    "single-4": {
      description:
        "Our Single-4 Bed combines comfort and functionality, making it an ideal choice for solo guests. With its inviting ambiance, this room features a comfortable single bed, an en-suite bathroom, and all essential amenities to make your stay enjoyable.",
      features: [
        "Comfortable single bed with soft linens",
        "En-suite bathroom with shower",
        "High-speed Wi-Fi access",
        "Flat-screen TV for entertainment",
        "Thoughtfully designed space for relaxation",
      ],
    },
  },
  double: {
    "double-1": {
      description:
        "Double-1 Bed is perfect for couples or friends seeking comfort and space. This room features a spacious double bed adorned with soft linens and an en-suite bathroom equipped with modern amenities. Relax in the cozy seating area or enjoy your favorite shows on the flat-screen TV.",
      features: [
        "Spacious double bed with premium bedding",
        "Cozy seating area for relaxation",
        "En-suite bathroom with shower or bathtub",
        "Flat-screen TV and high-speed Wi-Fi",
        "Elegant decor enhancing the room's charm",
      ],
    },
    "double-2": {
      description:
        "Our Double-2 Bed offers an inviting atmosphere with ample natural light. Featuring a comfortable double bed and stylish furnishings, this room is designed to provide a relaxing getaway. The en-suite bathroom includes complimentary toiletries for your convenience.",
      features: [
        "Comfortable double bed with quality linens",
        "Bright decor creating an uplifting ambiance",
        "En-suite bathroom with modern fixtures",
        "High-speed Wi-Fi access and flat-screen TV",
        "Seating area perfect for unwinding",
      ],
    },
    "double-3": {
      description:
        "Double-3 bed combines luxury and comfort, featuring a large double bed and elegant furnishings. The en-suite bathroom provides both shower and bathtub options, making it ideal for relaxation after a long day.",
      features: [
        "Large double bed with soft bedding",
        "En-suite bathroom with both shower and bathtub",
        "High-speed Wi-Fi and flat-screen TV",
        "Stylish decor enhancing comfort",
        "Seating area for leisure or work",
      ],
    },
    "double-4": {
      description:
        "Double-4 Bed is designed for those who appreciate style and comfort. With its spacious layout, this room provides everything needed for a pleasant stay, including an en-suite bathroom stocked with premium toiletries.",
      features: [
        "Spacious double bed with luxurious linens",
        "En-suite bathroom with complimentary toiletries",
        "High-speed Wi-Fi access and flat-screen TV",
        "Elegant furnishings creating a sophisticated atmosphere",
        "Cozy seating area for relaxation",
      ],
    },
  },
  twin: {
    "twin-1": {
      description:
        "Twin-1 Bed is perfect for friends or family traveling together. Featuring two comfortable single beds, this room provides flexibility without sacrificing comfort. The en-suite bathroom is equipped with essential amenities.",
      features: [
        "Two comfortable single beds with quality linens",
        "Cozy seating area ideal for socializing",
        "En-suite bathroom with modern amenities",
        "High-speed Wi-Fi access and flat-screen TV",
        "Bright decor that enhances relaxation",
      ],
    },
    "twin-2": {
      description:
        "Our Twin-2 Bed offers ample space for two guests, featuring two well-appointed twin beds. The room's design ensures comfort while providing all necessary amenities to make your stay enjoyable.",
      features: [
        "Two twin beds providing personal space",
        "En-suite bathroom stocked with essentials",
        "High-speed Wi-Fi access",
        "Flat-screen TV for entertainment",
        "Inviting decor creating a warm atmosphere",
      ],
    },
    "twin-3": {
      description:
        "Twin-3 Bed combines functionality and style, making it ideal for travelers who prefer separate sleeping arrangements. Enjoy the convenience of an en-suite bathroom along with modern amenities.",
      features: [
        "Two separate twin beds with soft bedding",
        "En-suite bathroom featuring contemporary fixtures",
        "High-speed Wi-Fi access",
        "Flat-screen TV to unwind after exploring",
        "Thoughtful design enhancing guest comfort",
      ],
    },
    "twin-4": {
      description:
        "Twin-4 Bed is designed to accommodate two guests comfortably. With two single beds and an inviting atmosphere, this room is perfect for friends or family looking to share their stay.",
      features: [
        "Two comfortable twin beds",
        "Cozy seating area suitable for relaxation",
        "En-suite bathroom equipped with modern amenities",
        "High-speed Wi-Fi access",
        "Bright decor promoting a cheerful ambiance",
      ],
    },
  },
};

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

const description = { single: {}, double: {}, twin: {} };

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const paramValue = urlParams.get("room");

const capitalizedString = capitalizeFirstCharacter(paramValue);

const roomType = paramValue.split("-")[0];

const imgSm = document.getElementById("booking-img-small");
const imgMd = document.getElementById("booking-img-medium");
const imgLg = document.getElementById("booking-img-large");
const imgDefault = document.getElementById("booking-img-default");
const roomDescription = document.getElementById("room-description");

imgSm.srcset = `../assets/images/rooms/${roomType}/${paramValue}-small.webp`;
imgMd.srcset = `../assets/images/rooms/${roomType}/${paramValue}-medium.webp`;
imgLg.srcset = `../assets/images/rooms/${roomType}/${paramValue}-large.webp`;
imgDefault.src = `../assets/images/rooms/${roomType}/${paramValue}-large.webp`;

roomDescription.innerText = rooms[roomType][paramValue].description;

const hotelName = document.getElementById("hotelName");

hotelName.innerText = `${capitalizedString} Bed`;

const roomName = document.getElementById("roomName");

roomName.value = paramValue;
