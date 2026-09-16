let answerResults = ["bruh","warned you","._."];
let answer =  "8";

function setup() {
  let canvas = createCanvas(500, 700);
  canvas.parent('test');
}

function draw() {
  background(128, 128, 128);

  fill(0);  
  ellipse(width/2, 300, 300);
  fill(255);
  ellipse (width/2,295,110);
  fill(0);
  textSize(35);
  textAlign(CENTER);
  //text("8",230,320);
  text(answer,width/2,310);
  
  textSize(60);
  text("Dont Touch Me!",250,80)

  //button
   if (mouseX > 176 && mouseX < 325 && mouseY > 481 && mouseY < 580){
    fill(100);
  }else{
     fill(255);
  }
  
  
  rectMode(CENTER);
  rect(width/2,530,150,100);
  fill(0);
  textSize(32);
  text("I dare you", width/2,550);

 

  console.log(mouseX,mouseY); 
}

function mousePressed(){
  if (mouseX > 176 && mouseX < 325 && mouseY > 481 && mouseY < 580){
answer = random(answerResults);
  }

}