let customFont; // Ne pas toucher à cette ligne

//3D
let container;
let camera;
let renderer;
let scene;
let monde;
let satM;
let Null;
let Null2;
let lune;

// Ne pas toucher au bloc ci-dessous
function preload() {
  customFont = loadFont("../assets/Suisse Bold.otf");
}
// ---------------------------------- s//

function init()
{
  container = document.querySelector(".scene");


    //Render
    renderer = new THREE.WebGLRenderer({antialias:true,  alpha:true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
  
    container.appendChild(renderer.domElement);
  
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  //creation de la scene
  scene = new THREE.Scene();
  
  const fov = 35;
  const aspect = container.clientWidth/container.clientHeight;
  const near = 0.1;
  const far = 10000;

  //camera
  camera= new THREE.PerspectiveCamera(fov,aspect,near,far);

  camera.position.set(0,0,1000);

  //lumiere
  const light = new THREE.PointLight(0Xffffff,2);
  scene.add(light);
  light.castShadow = true;
  light.position.set(600,400,200);

  light.shadow.mapSize.width = 1024; // default
  light.shadow.mapSize.height = 1024; // default
  light.shadow.camera.near = 5; // default
  light.shadow.camera.far = 1000; // default

  //Load model
  let loader = new THREE.GLTFLoader();

  loader.load("./CodeHorloge/monde.gltf", function(gltf){
    scene.add(gltf.scene);
    monde = gltf.scene.children[1];
    monde.position.set(0,0,0);
    monde.rotation.set(0,0,0);
    monde.castShadow = true;
    monde.receiveShadow = true;
    renderer.render(scene,camera);
  })

  loader.load("./CodeHorloge/Null.gltf", function(gltf){
    scene.add(gltf.scene);
    Null = gltf.scene.children[0];
    Null.rotation.set(0,0,0);
    Null.position.set(0,0,0);
  })

  loader.load("./CodeHorloge/Null.gltf", function(gltf){
    scene.add(gltf.scene);
    Null2 = gltf.scene.children[0];
    Null2.rotation.set(0,0,0);
    Null2.position.set(0,0,0);
  })

  loader.load("./CodeHorloge/Satelite.gltf", function(gltf){
    scene.add(gltf.scene);
    satM = gltf.scene.children[0];
    satM.position.set(0,0,200);
    satM.scale.set(0.3,0.3,0.3);
    satM.rotation.set(0,0,-100);
    satM.castShadow = true;
    satM.receiveShadow = true;
    Null.attach(satM);
    renderer.render(scene,camera);
  })

  loader.load("./CodeHorloge/Lune.gltf", function(gltf){
    scene.add(gltf.scene);
    lune = gltf.scene.children[0];
    lune.position.set(0,0,400);
    lune.rotation.set(0,0,0);
    lune.scale.set(0.5,0.5,0.5);
    lune.castShadow = true;
    lune.receiveShadow = true;
    Null2.attach(lune);
    renderer.render(scene,camera);
  })

}


//Secondesx
function renderun()
{
  Null.rotation.y += second();
  renderer.render(scene,camera);
  requestAnimationFrame(renderun);
}

requestAnimationFrame(renderun);
//Heures
function renderdeux()
{
  monde.rotation.y += hour();
  renderer.render(scene,camera);
  requestAnimationFrame(renderdeux);
}

requestAnimationFrame(renderdeux);
//Minutes
function renderlune()
{
  Null2.rotation.y += minute();
  renderer.render(scene,camera);
  requestAnimationFrame(renderlune);
}
requestAnimationFrame(renderlune);
//Rotation lune
function renderlunetourner()
{
  lune.rotation.y += 0.01;
  renderer.render(scene,camera);
  requestAnimationFrame(renderlunetourner);
}
requestAnimationFrame(renderlunetourner);


function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

function setup() {
  createCanvas(200, 65); // Ne pas toucher à cette ligne
  init();
}

window.addEventListener("resize", onWindowResize);

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
// -----------------------------------//
