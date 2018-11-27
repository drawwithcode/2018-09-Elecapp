
var myMap;
var canvas;
var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoiZWxlY2FwcCIsImEiOiJjam9yMGZsMWUwNnhrM2ttamx0MW9hZzI5In0.kuk9Uo8nKbTVidD5V63jlg');
var pisaLat = 43.7068074;
var pisaLon = 10.3603587;

var panLat=43.7105345;
var panLon=10.3996538;

var monLat=43.717865;
var monLon=10.3996538;

var nandLat=43.7143345;
var nandLon=10.3993851;

var dafLat=43.7088173;
var dafLon=10.3974531;

var options = {
  lat: pisaLat,
  lng: pisaLon,
  zoom: 13,
  style: "mapbox://styles/elecapp/cjoznd90i0ivq2rqvm1hi9q51",
}
function preload(){
  cecina = loadImage("./assets/cecina.png");

}

//https://api.mapbox.com/styles/v1/elecapp/cjozln3ikado62roz6mng3dcq.html?fresh=true&title=true&access_token=pk.eyJ1IjoiZWxlY2FwcCIsImEiOiJjam9yMGZsMWUwNnhrM2ttamx0MW9hZzI5In0.kuk9Uo8nKbTVidD5V63jlg#14.0/37.268600/-112.942500/0

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  myMap= mappa.tileMap(options);
  myMap.overlay(canvas);
}



function draw() {
clear();

fill('#fcd33f');
stroke('black');
	textFont('Aref Ruqaa');
  textSize(60);
  text('Cecina Advisor', 50, 100);
  textSize(30);
  text('Where to eat Cecina in Pisa (press the mouse to discover more)', 50, 160);


  var pancino = myMap.latLngToPixel(panLat,panLon);
  image(cecina, pancino.x, pancino.y, 50,60);

  var montino = myMap.latLngToPixel(monLat,monLon);
  image(cecina, montino.x, montino.y, 50,60);


  var nando = myMap.latLngToPixel(nandLat,nandLon);
  image(cecina, nando.x, nando.y, 50,60);


  var dafilippo = myMap.latLngToPixel(dafLat,dafLon);
  image(cecina, dafilippo.x, dafilippo.y, 50,60);


  if (mouseIsPressed) {
    textSize(20);
    fill('black');
    text('Da Pancino: vi è bona (here is good)', pancino.x -80, pancino.y-20);
    text('Montino: vesta è la migliore (this one is the best one)', montino.x -80, montino.y-20);
    text('Nando: vi ci vieni quando fai sega a scuola (this one is good)', nando.x -80, nando.y-20);
    text('Da Filippo: vi ci vieni se devi prende ir treno (Cecina on the go)',dafilippo.x -80, dafilippo.y-20);
  }
}
