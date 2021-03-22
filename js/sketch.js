let customFont; // Ne pas toucher à cette ligne

// Ne pas toucher au bloc ci-dessous
function preload() {
  customFont = loadFont("../assets/Suisse Bold.otf");
}
// ---------------------------------- s//

function draw() {
  background(0);
  showTime(); // Ne pas toucher à cette ligne
  console.log(minute());
}

function windowResized() {
  resizeCanvas(200, 65); // Ne pas toucher à cette ligne
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
  text(time, 20, height - 20);
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
