// ATTENTION: Die Funktionen werden über den Button in der HTML ausgeführt. Um unterschiedliche Funktionen zu probieren muss der Name der Funktion in der HTML bei onclick="[Funktionsname()]" eingetragen werden (Zeile 15 index.html).
​
// IMPORT
​
// VARIABLES
const container = document.getElementById("container");
const body = document.querySelector("body");
const quote = document.getElementById("quote");
const nameOne = document.getElementById("nameOne");
const nameTwo = document.getElementById("nameTwo");
const submit = document.getElementById("submit");
// EVENTS
//______ Bubbling - wenn mehrere Events auf verschachtelten Elementen liegen werden die Events nacheinander ausgeführt.
​
// Eventlistener on Container, containerFarbe soll sich ändern
// Eventlistener on box1, box1 Farbe soll sich ändern
​
//______ Delegation - parent ein Event geben und über event.target die kinder auswählen
// Eventlistener auf container, Farbe des target soll sich ändern.
​
// STYLE INJECTING mit Object.assign([element].style,[ObjectWithStyles]);
​
// FUNCTIONS
​
// NASA API ASTRO PICTURE OF THE DAY
const apod = async () => {
 try {
  const response = await fetch(
   "https://api.nasa.gov/planetary/apod?date=2023-01-03&api_key=DEMO_KEY"
  );
  const data = await response.json();
  console.log(data.hdurl);
  body.style.background = `url(${data.hdurl})`;
 } catch (error) {
  console.log(error);
 }
};​
// RANDOM QUOTE API
const motivation = async () => {
 const options = {
  method: "GET",
  headers: {
   "X-RapidAPI-Key": "cc112b0b2cmshfb87ac2a691ba48p1f9360jsna08324b55413",
   "X-RapidAPI-Host": "quotes15.p.rapidapi.com",
  },
 };​
 fetch("https://quotes15.p.rapidapi.com/quotes/random/", options)
  .then((response) => console.log(response.json()))
  .then((response) => {
   quote.innerText = `${response.content} -- ${response.originator.name}`;
  })
  .catch((err) => console.error(err));
};​
// LOVERS CALCULATOR API
const loversUpdate = () => {
 const options = {
  method: "GET",
  headers: {
   "X-RapidAPI-Key": "cc112b0b2cmshfb87ac2a691ba48p1f9360jsna08324b55413",
   "X-RapidAPI-Host": "love-calculator.p.rapidapi.com",
  },
 };​
 let nameOneValue = nameOne.value;
 let nameTwoValue = nameTwo.value;​
 // testen, ob namen eingegeben wurden, und ob sie nur aus Buchstaben bestehen
 if (
  nameOneValue.length > 0 &&
  nameTwoValue.length > 0 &&
  /^[a-zA-Z]+$/.test(nameOneValue) &&
  /^[a-zA-Z]+$/.test(nameTwoValue)
 ) {
  fetch(
    `https://love-calculator.p.rapidapi.com/getPercentage?fname=${nameOneValue}&sname=${nameTwoValue}`,
    options
   )
   .then((response) => response.json())
   .then((response) => {
    quote.innerText = `${response.percentage} - ${response.result}`;
    console.log(response);
   })
   .catch((err) => console.error(err));
 } else {
  window.alert("You have to use letters only");
 }
};​
// WEATHER API BY API NINJAs
const weather = async () => {
 const options = {
  method: "GET",
  headers: {
   "X-RapidAPI-Key": "cc112b0b2cmshfb87ac2a691ba48p1f9360jsna08324b55413",
   "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
 };​
 const data1 = await fetch(
  `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${nameOne.value}`,
  options
 );
 const data2 = await data1.json();
 console.log(data2);
 quote.innerText = `Feels like: ${data2.feels_like} - is actually: ${data2.temp} `;
};