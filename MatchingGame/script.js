window.addEventListener("load", (event) => {
  console.log("page is fully loaded");
});

/*---audios and cutscenes--*/
const begin =  document.getElementById("begin");
const songbk =  document.getElementById("songbk");
const audio = new Audio("audio/resetclick.mp3");
const audio2 = new Audio("audio/resetclick2.mp3");
const defeatAudio = new Audio('audio/defeatlesson.wav');
const dontdieAudio = new Audio('audio/dontdie.wav');
const dontgiveAudio = new Audio('audio/dontgivein.wav');
const wonttellAudio = new Audio('audio/wonttell.wav');
const hurtAudio = new Audio('audio/hurtse.wav');
const clickcard = new Audio('audio/click.wav');
const ahri =document.getElementById("ahri");
const xayah =document.getElementById("xayah");
const rakan =document.getElementById("rakan");
const jinx =document.getElementById("jinx");
const akali =document.getElementById("akali");
const kaisa =document.getElementById("kaisa");
const buttons = document.getElementById("resetting");
/*------fixing music button---*/
let musicPlaying = false;
function playmusic() {
  if (!musicPlaying) {
  songbk.play();
  musicPlaying = true;
  } else {
  songbk.pause();
  musicPlaying = false;
  }
}
function playreset() {
audio.play(); 
audio2.play();
}

/*-------fixing voulume bar------------*/
let slider = document.querySelector('input[type="range"]')
slider.max = 100;
slider.min = 0;
slider.oninput = function () {
	songbk.volume = slider.value / 100
  begin.volume = slider.value / 100
  audio.volume = slider.value / 100
  audio2.volume = slider.value / 100
  defeatAudio.volume = slider.value / 100
  dontgiveAudio.volume = slider.value / 100
  dontdieAudio.volume = slider.value / 100
  wonttellAudio.volume = slider.value / 100
  hurtAudio.volume = slider.value / 100
  matchAudio.volume = slider.value / 100
  winAudio.volume = slider.value / 100
  /*---- too much noise if ast the same volume,extra QOL not needed */
  // ahri.volume = slider.value / 100
  // xayah.volume = slider.value / 100
  // rakan.volume = slider.value / 100
  // jinx.volume = slider.value / 100
  // akali.volume = slider.value / 100
  // kaisa.volume = slider.value / 100
  // clickcard.volume = slider.value / 100
}
/*--------cutscene duration and position------*/
function cutS() {
  ahri.style.display = "inline-block";
  ahri.play();
setTimeout("hidecutS()", 8500);
}
function hidecutS()  {
  ahri.style.display = "none";}
function cut1() {
  xayah.style.display = "inline-block";
  xayah.play();
setTimeout("hidecut1()", 5500);
}
function hidecut1()  {
  xayah.style.display = "none";}
function cut2() {
  rakan.style.display = "inline-block";
  rakan.play();
setTimeout("hidecut2()", 3500);
}
function hidecut2()  {
  rakan.style.display = "none";}
function cut3() {
  jinx.style.display = "inline-block";
  jinx.play();
setTimeout("hidecut3()", 4200);
}
function hidecut3()  {
  jinx.style.display = "none";}
function cut6() {
  akali.style.display = "inline-block";
  akali.play();
setTimeout("hidecut6()", 3500);
}
function hidecut6()  {
  akali.style.display = "none";}
function cut5() {
  kaisa.style.display = "inline-block";
  kaisa.play();
setTimeout("hidecut5()", 3500);
}
function hidecut5()  {
  kaisa.style.display = "none";}
/* ------------main game functions--------------*/
function createNewCard() {
	/* Step 1: Create a new div element and assign it to a variable called cardElement. */
	let cardElement = document.createElement('div');
	/* Step 2: Add the "card" class to the variable 'cardElement' from the previous step. */
	cardElement.classList.add('card');
	/* Step 3: Write the HTML for the children of the card element (card-down and card-up) as a normal string and assign it as the innerHTML of cardElement. */
cardElement.innerHTML = `
<div class="card-down"></div>
<div class="card-up"></div>
`;
  /* Step 4: Return the cardElement. */
  return cardElement;
}
createNewCardTest();

function appendNewCard(parentElement) {
	/* Step 1: Create a new card by calling createNewCard() and assign it to a variable named cardElement. */
	let cardElement = createNewCard('div');
	/* Step 2: Append the card element to the parentElement (making the card element a "child").  */
	parentElement.appendChild(cardElement);
  /* Step 3: Return the card element. */
	return cardElement;
}
appendNewCardTest();

function shuffleCardImageClasses() {
  /* Step 1: Create a new array that contains two of each image class string in order (e.g. "image-1", "image-1", "image-2", "image-2"...). Store the array in a variable called 'cardClasses'.  */
	let cardClasses = ["image-1", "image-1", "image-2", "image-2", "image-3", "image-3", "image-4", "image-4", "image-5", "image-5", "image-6", "image-6"];
	/* Step 2: We're going to use a library to randomly "shuffle" the array we created. The library is called "underscore.js" because it uses an "_" character as an object to contain helper methods. 
	Load underscore.js in your HTML via the CDN then open up the documentation linked below to learn how to use the 'shuffle' method.    
	NOTE: Ignore the "require" syntax shown in the documentation as this is for non-browser environments. The '_' variable will already be available to you from loading the CDN.
	CDN: https://cdnjs.com/libraries/underscore.js/1.4.1
	Shuffle: https://www.tutorialspoint.com/underscorejs/underscorejs_shuffle.htm */
   let shuffleResult = _.shuffle(cardClasses);
	/* Step 3: Return the shuffled array of class names. */
  return shuffleResult;
}
shuffleCardImageClassesTest()

function createCards(parentElement, shuffledImageClasses) {
	/* Step 1: Make an empty array to hold our card objects. */
  let emptyArray = [];
  /* Step 2: Write a for loop that loops 12 times to create the 12 cards we need. */
    for (let i=0; i<12; i++) { 
    /* Step 2(a): Use appendNewCard to create/append a new card and store the result in a variable. */
    let cardElement = appendNewCard(parentElement);
		/* Step 2(b): Add an image class to the new card element using shuffledImageClasses[i]. */
      cardElement.classList.add(shuffledImageClasses[i]);
    /* Step 2(c): Append a new object to the card object array. The object should contain the following properties:
			"index" -- Which iteration of the loop this is.
			"element" -- The DOM element for the card.
			"imageClass" -- The string of the image class on the card. */	
  let Object = {
    index: i,
    element: cardElement,
    imageClass: shuffledImageClasses[i], 
  }
  emptyArray.push(Object);
 }
  /* Step 3: Return the array of 12 card objects. */
return emptyArray;
}
 createCardsTest(); 

function doCardsMatch(cardObject1, cardObject2) {
	/* Step 1: Determine if two cards match. Remember the properties of our card objects from the createCards() function: index, element, and imageClass. */
if (cardObject1.imageClass == cardObject2.imageClass) {
  return true;
} else {
  return false;
}
}
doCardsMatchTest();

/* The 'counters' object below is used as a dictionary to store our counter names and their respective values. Do you remember using objects as dictionaries? If not, go back to that lecture in TBHQ to review. This object is empty for now but we'll fill it up in the following function. */
let counters = {};

function incrementCounter(counterName, parentElement) {
  /* Step 1: If the 'counterName' property is not defined in the 'counters' object, initialize it with a value of 0. */
	if (!counters[counterName])  {
    counters[counterName] = 0;
  } 
  /* Step 2: Increment the counter for 'counterName'. */
	counters[counterName]++;
  /* Step 3: Change the HTML within 'parentElement' to display the new counter value. */
	parentElement.innerHTML = counters[counterName];
}
incrementCounterTest();

/* The 'onCardFlipped' function below will be called each time the user flips a card. The 'lastCardFlipped' variable is used to remember the first card flipped while we wait for the user to flip another card. We need to keep track of this value to determine if the two cards flipped match or not. 'lastCardFlipped' should be reset to 'null' each time a second card is flipped. */
let lastCardFlipped = null;

function onCardFlipped(newlyFlippedCard) {
  /* Step 1: Use the 'incrementCounter' function to add one to the flip counter UI.  */
  incrementCounter("flips", document.getElementById('flip-count'));
	/* Step 2: If 'lastCardFlipped' is null (this is the first card flipped), update 'lastCardFlipped' and return (nothing else to do) */
  if (lastCardFlipped == null) {
    lastCardFlipped = newlyFlippedCard;
    return;
  }
  /* If the above condition was not met, we know there are two cards flipped that should be stored in 'lastCardFlipped' and 'newlyFlippedCard', respectively. */
  /* Step 3: If the cards don't match, remove the "flipped" class from each, reset 'lastCardFlipped' to null, and use a 'return' to exit the function. Remember that newlyFlippedCard and lastCardFlipped are both objects made with the createCards function. This means that, to access each card's classList, you must access the card object's .element property first!  */
if (lastCardFlipped.imageClass != newlyFlippedCard.imageClass) {
  lastCardFlipped.element.classList.remove("flipped");
  newlyFlippedCard.element.classList.remove("flipped");
  /* get health bar*/
var healthbar = document.getElementById("hb");
var healthnumber = healthbar.getAttribute("data-value");
  if (healthnumber <= 50) {
defeatAudio.play();
hurtAudio.play();
resetGame();
  }else {
  healthnumber= healthnumber -50;
  console.log(healthnumber);
 healthbar.setAttribute("style", "width:" + healthnumber + "px;") ;
 healthbar.setAttribute("data-value", healthnumber);
  hurtAudio.play();
  }
 if (healthnumber == 450){
dontdieAudio.play();
  } else  if (healthnumber == 350){
wonttellAudio.play();
  } else  if (healthnumber == 150){
dontgiveAudio.play();
 }
lastCardFlipped = null;
  return;
}  
 
  /* Step 4: Now we have two matching cards. Increment the match counter and optionally add a "glow" effect to the matching cards. */
if (lastCardFlipped.imageClass ==="image-4" && newlyFlippedCard.imageClass === "image-4") {
  cutS();}
if (lastCardFlipped.imageClass ==="image-3" && newlyFlippedCard.imageClass === "image-3") {
  cut3();}
if (lastCardFlipped.imageClass ==="image-2" && newlyFlippedCard.imageClass === "image-2") {
  cut2();}
if (lastCardFlipped.imageClass ==="image-1" && newlyFlippedCard.imageClass === "image-1") {
  cut1();}
if (lastCardFlipped.imageClass ==="image-5" && newlyFlippedCard.imageClass === "image-5") {
  cut5();}
  if (lastCardFlipped.imageClass ==="image-6" && newlyFlippedCard.imageClass === "image-6") {
  cut6();}
//*************

console.log(alert);
incrementCounter("matches",  document.getElementById('match-count'));
lastCardFlipped.element.classList.add('border-glow');
newlyFlippedCard.element.classList.add('border-glow'); 

  /* Step 5: Play either the win audio or match audio based on whether the user has the number of matches needed to win. Both sounds have been loaded in provided.js as matchAudio and winAudio, respectively. */
	let matchAudio = new Audio('audio/match.wav');
  let winAudio = new Audio('audio/win.wav');
  if (counters['matches'] == 6) {
    winAudio.play();
  } else {
    matchAudio.play();
  }
  /* Step 6: Reset 'lastCardFlipped' to null */
lastCardFlipped = null;
}

/* This function should remove all children from the #card-container, reset the flip and match counts displayed in the HTML, reset the counters dictionary to an empty object, reset lastCardFlipped to null, and set up a new game. */
function resetGame() {
	/* Step 1: Get the card container by its id and store it in a variable. */
var healthbar = document.getElementById("hb");
var healthnumber = healthbar.getAttribute("data-value");
healthbar.setAttribute("style", "width: 650px;") 
healthbar.setAttribute("data-value", 650);
let cc = document.getElementById('card-container');
	
	/* Step 2: Clear all the cards by using a while loop to remove the first child of the card container as long as a first child exists.
	See "To remove all children from an element:" in the Examples section of the MDN removeChild documentation -> https://mzl.la/3bklFxP */
while (cc.firstChild) {
  cc.removeChild(cc.firstChild);
}

	/* Step 3: Get the HTML elements that display the flip and match counts and reset their inner text to 0. */ 
let fc = document.getElementById('flip-count');
let mc = document.getElementById('match-count');
fc.innerHTML = 0;
mc.innerHTML = 0;
	
	/* Step 4: Reassign the `counters` dictionary that stores our counter names and their values to be an empty object  */
counters['flips'] = 0;
counters['matches'] = 0;
	/* Step 5: Set lastCardFlipped back to null. */
	lastCardFlipped = null;
	/* Step 6: Set up a new game. */
setUpGame();
}
// ⛔️ Set up the game. Do not edit below this line! ⛔️
setUpGame();