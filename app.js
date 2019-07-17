let qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let ul = document.querySelector('ul');
let keyRowDiv = document.getElementsByClassName('keyrow');
let keyPress = keyRowDiv.value;
let missed = 0;
let btnReset = document.getElementsByClassName('btn__reset');
let mainContainer = document.getElementsByClassName('main-container');
let overlay = document.getElementById('overlay');
let phrases = [
  ['i love coding'],
  ['javascript is fun'],
  ['working with arrays'],
  ['object literals'],
  ['front end web development']
];

function getRandomPhraseAsArray(arr) {
  let upper = 5;
  let arrayNumber = Math.floor(Math.random() * upper);
  let phraseNumber = arr[arrayNumber].toString();
  let split = phraseNumber.split('');
  return split;
}


function addPhraseToDisplay(arr) {
  const phraseArray = getRandomPhraseAsArray(phrases);
  ul.innerHTML = '<li>' + phraseArray + '</li>';
}

function checkLetter(){

}


overlay.addEventListener("click", function(){
  overlay.style.display = 'none';
  addPhraseToDisplay();
});
