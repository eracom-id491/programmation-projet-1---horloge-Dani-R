let customFont; // Ne pas toucher à cette ligne

// Ne pas toucher au bloc ci-dessous
function preload() {
  customFont = loadFont("../assets/SuisseBold.otf");
}
// ---------------------------------- s//

function setup()
{
  createCanvas(170,200);
}

function draw() {
  background(0);
  showTime(); // Ne pas toucher à cette ligne
  console.log(minute());
  textSize(14);
  text('Monde = Heures', 10, 80);
  fill(255, 255, 255);
  text('Lune = Minutes', 10, 105);
  fill(255, 255, 255);
  text('Satélite = secondes', 10, 130);
  fill(255, 255, 255);
}

function windowResized() {
  resizeCanvas(170, 200); // Ne pas toucher à cette ligne
  
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
  fill(255); // <----- Changez cette valeur pour manipuler la couleur du texte
  textSize(36);
  text(time, 10, 40);
}

function formatTime(value) {
  if (value < 10) {
    value = "0" + value;
  }
  return value;
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          window.ieRequestAnimationFrame     ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();


// -----------------------------------//
