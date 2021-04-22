const country_list = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia &amp; Herzegovina",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Isle of Man",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jersey",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kuwait",
  "Kyrgyz Republic",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macau",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Montserrat",
  "Morocco",
  "Mozambique",
  "Namibia",
  "Nepal",
  "Netherlands",
  "Netherlands Antilles",
  "New Caledonia",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palestine",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Puerto Rico",
  "Qatar",
  "Reunion",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Pierre &amp; Miquelon",
  "Samoa",
  "San Marino",
  "Satellite",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "South Africa",
  "South Korea",
  "Spain",
  "Sri Lanka",
  "St Kitts &amp; Nevis",
  "St Lucia",
  "St Vincent",
  "St. Lucia",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor L'Este",
  "Togo",
  "Tonga",
  "Trinidad &amp; Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Turks &amp; Caicos",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "Uruguay",
  "Uzbekistan",
  "Venezuela",
  "Vietnam",
  "Virgin Islands (US)",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];

let input = document.querySelector(".textarea");
let btn = document.querySelector(".btn");
let chatareamain = document.querySelector(".chatarea-main");
let chatareaouter = document.querySelector(".chatarea-outer");
let array = [];
let i = 0;

let intro = [
  "Hello, I am Chitti",
  "Hi, I am a Robo",
  "Hello, My name is Chitti",
];
let help = [
  "How may i assist you?",
  "How can i help you?",
  "What i can do for you?",
];
let greetings = [
  "i am good you little piece of love",
  "i am fine, what about you",
  "don't want to talk",
  "i am good",
];

let thank = ["Most welcome", "Not an issue", "Its my pleasure", "Mention not"];
let closing = [
  "Ok bye-bye",
  "As you wish, bye take-care",
  "Bye-bye, see you soon..",
];

btn.addEventListener("click", () => {
  if (input.value.length > 0) {
    showusermsg(input.value);
    showChatBotmsg(input.value);
    document
      .querySelectorAll(".pl")
      .forEach((el, idx) => (el.innerHTML = array[idx]));
  }
});

function showusermsg(usermsg) {
  let output = "";
  output += `<div class="chatarea-inner user">${usermsg.trim()}</div>`;
  chatareaouter.innerHTML += output;
  return chatareaouter;
}

function showChatBotmsg(usermsg) {
  let msg = usermsg.trim().split(" ");
  let output = "";

  msg.forEach((element) => {
    if (country_list.includes(element)) {
      doFetch(element);

      output += `<div class="chatarea-inner chatbot pl"></div>`;

      return false;
    }
  });

  if (msg.includes("hello") || msg.includes("hi")) {
    output += `
    <div class="chatarea-inner chatbot">
    ${intro[Math.floor(Math.random() * intro.length)]}
    </div>`;
  } else if (msg.includes("help")) {
    output += `
    <div class="chatarea-inner chatbot">
    ${help[Math.floor(Math.random() * help.length)]}
    </div>`;
  } else if (
    msg.includes("how") ||
    msg.includes("are") ||
    msg.includes("you")
  ) {
    output += `
    <div class="chatarea-inner chatbot">
    ${greetings[Math.floor(Math.random() * greetings.length)]}
    </div>`;
  } else if (
    (msg.includes("thank") && msg.includes("you")) ||
    msg.includes("thanks")
  ) {
    output += `
    <div class="chatarea-inner chatbot">
    ${thank[Math.floor(Math.random() * thank.length)]}
    </div>`;
  } else {
    output += `<div class="chatarea-inner chatbot">I'm sorry, but I don' t understand!!!</div>`;
  }

  chatareaouter.innerHTML += output;
  input.value = "";

  return chatareaouter;
}

// function doFetch(msg) {
//   fetch(`https://restcountries.eu/rest/v2/name/${msg}`)
//     .then((res) => {
//       if (!res.ok) {
//         throw Error("ERROR");
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data[0]);

//       let arg = `
//         <p>Country: ${data[0].name}</p>
//         <p>Capitol: ${data[0].capital}</p>
//         <p>Language ${data[0].languages[0].name}</p>
//         <p>Population ${data[0].population}</p>
//         <p>Population ${data[0].area} </p>
//         <p>Currency ${data[0].currencies[0].code} </p>
//         <img class= 'flag' src="${data[0].flag}" alt="flag">
//         `.replaceAll("\n", "");
//       array.push(arg);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }
