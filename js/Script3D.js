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
var testvalue;

function init()
{
  container = document.querySelector(".scene");


    //Render
    renderer = new THREE.WebGLRenderer({antialias:true,  alpha:true});
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  
    container.appendChild(renderer.domElement);

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
  light.castShadow = true; 
  scene.add(light);
  light.position.set(600,400,200);
  light.shadow.mapSize.width = 512; 
  light.shadow.mapSize.height = 512; 
  light.shadow.camera.near = 100; 
  light.shadow.camera.far = 5000; 
    chargementmodels();
}

//Charger les modeles 3D
function chargementmodels()
{
    let loader = new THREE.GLTFLoader();

  loader.load("./CodeHorloge/monde.gltf", function(gltf){
    scene.add(gltf.scene);
    monde = gltf.scene.children[1];
    monde.position.set(0,0,0);
    monde.rotation.set(0,0,0);
    monde.receiveShadow  = true;
    monde.castShadow  = true;
    monde.rotation.y = hour() * -24;
    renderer.render(scene,camera);
  })
  

  loader.load("./CodeHorloge/Satelite.gltf", function(gltf){
    scene.add(gltf.scene);
    satM = gltf.scene.children[0];
    satM.position.set(0,0,200);
    satM.scale.set(0.3,0.3,0.3);
    satM.rotation.set(0,0,-100);
    satM.receiveShadow  = true;
    satM.castShadow  = true;
    Null.attach(satM);
    Null.rotation.y = second()*-6;
    Attachable = Null.attach(satM);
    renderer.render(scene,camera);
  })

  loader.load("./CodeHorloge/Lune.gltf", function(gltf){
    scene.add(gltf.scene);
    lune = gltf.scene.children[0];
    lune.position.set(0,0,400);
    lune.rotation.set(0,0,0);
    lune.scale.set(0.5,0.5,0.5);
    lune.receiveShadow  = true;
    lune.castShadow  = true;
    Null2.attach(lune);
    Null2.rotation.y = minute()*-6;
    renderer.render(scene,camera);
  })
  
 loader.load("./CodeHorloge/Null.gltf", function(gltf){
    scene.add(gltf.scene);
    Null = gltf.scene.children[0];
    Null.rotation.set(0,0,0);
    Null.position.set(0,0,0);
    Null.attach(satM);
    renderer.render(scene,camera);
  })

  loader.load("./CodeHorloge/Null.gltf", function(gltf){
    scene.add(gltf.scene);
    Null2 = gltf.scene.children[0];
    Null2.rotation.set(0,0,0);
    Null2.position.set(0,0,0);
    Null2.attach(lune);
    renderer.render(scene,camera);
  })

}

init();

//Animations

//Minutes
//Lune Minutes
/*
function minutesLune()
{
    requestAnimationFrame(minutesLune);
    Null2.rotation.y += 0.006;
    renderer.render(scene, camera);
}
    requestAnimationFrame(minutesLune);

    function rotationAxeLune()
{
    requestAnimationFrame(rotationAxeLune);
    lune.rotation.y += 0.006;
    renderer.render(scene, camera);
}
    requestAnimationFrame(rotationAxeLune);

    
//Satelite
function secondesSatelite()
{
    requestAnimationFrame(secondesSatelite);
    Null.rotation.y += 0.36;
    renderer.render(scene,camera);
}
    requestAnimationFrame(secondesSatelite);


function HeureMonde()
{
    requestAnimationFrame(HeureMonde);
    monde.rotation.y += 0.001;
    renderer.render(scene,camera);
}
    requestAnimationFrame(HeureMonde);  
*/
function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.clientWidth, container.clientHeight);
}

function setup() {

}

window.addEventListener("resize", onWindowResize);

function draw()
{

}