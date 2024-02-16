// ekhane amon function gulo use kora hoy j function gulo multiple jaygay use hoye thake.

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-600", "text-white");
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-600", "text-white");
}
function getTextElementValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}
function setTextElementValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}
function getElementTextById(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function getRandomAlphabet() {
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");

  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);

  const alphabet = alphabets[index];
  return alphabet;
}

// function getRandomAlphabet() {
//   // get or create an alphabet array
//   const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//   const alphabets = alphabetString.split("");
//   // console.log(alphabets);

//   // get a random index between 0 - 25
//   // math.random()*25 etar mane holo math.random() dile minimum number 0 theke shuru hobe and maximum number 1 hoite pare er modde tomare elomelo bhabe number gulo dibe.kintu tumi jodi math.random()*25 daw tahole maximum number jodi 1 hoy tahole number ta 25 diye gun hobe ar jar output 25 tar mane se 1 theke shuru hoye maximum 25 porjonto elomelobhabe tomare output dite thakbe
//   // round er kaj holo toma k random doshomik number theke integer ba purno number a convert kore dibe

//   const randomNumber = Math.random() * 25;
//   const index = Math.round(randomNumber);

//   const alphabet = alphabets[index];
//   // console.log(index, alphabet);
//   return alphabet;
// }
