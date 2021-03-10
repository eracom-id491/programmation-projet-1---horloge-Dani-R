let customFont; // Ne pas toucher à cette ligne

// Ne pas toucher au bloc ci-dessous
function preload() {
  customFont = loadFont("../assets/Suisse Bold.otf");
}
// ---------------------------------- s//

function setup() {
  createCanvas(windowWidth, windowHeight); // Ne pas toucher à cette ligne
}

function draw() {
  background(255);
  showTime(); // Ne pas toucher à cette ligne
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // Ne pas toucher à cette ligne
}

// Les blocs showTime et formatTime s'occupent d'afficher correctement l'heure en bas à gauche de la page.
function showTime() {
  let time =
    formatTime(hour()) +
    ":" +
    formatTime(minute()) +
    ":" +
    formatTime(second());
  textFont(customFont);
  fill(0); // <----- Changez cette valeur pour manipuler la couleur du texte
  textSize(36);
  text(time, 20, height - 20);
}

function formatTime(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}
// -----------------------------------//
