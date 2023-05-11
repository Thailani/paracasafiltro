noseX=0;
noseY=0;

function preload() {

}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
}

function draw(){
  image(video, 0, 0, 300, 300);
  image(nariz, noseX, noseY, 30, 30);
}

