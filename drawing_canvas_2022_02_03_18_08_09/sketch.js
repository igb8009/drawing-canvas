function setup() {
  createCanvas(400, 400);
  background(220);
  bttn= createButton("clear the canvas");
  bttn.mousePressed(clearCanvas);
  colBttn=createButton('change color'); 
  colBttn.mousePressed(changeCol);
  
  mySlider=createSlider(5,100,50);
}

function draw() {

}

function mouseDragged(){
  let d = mySlider.value(); 
  circle(mouseX,mouseY,mySlider.value());
}
function clearCanvas(){
  background("white");
}
function changeCol(){
  noStroke();
  fill(random (250),random(240),random(30));
}