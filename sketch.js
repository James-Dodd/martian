let xcd = [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
let ycd = [1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 0];
let direc = ["N", "E", "S", "W"]
let startx = 1;
let starty = 1;

function setup() {
  createCanvas(1000,1000);
  // input = createInput();
  // input.position(1300, 65);

  // button = createButton('submit');
  // button.position(1500, 65);
  // // button.mousePressed(draw);

  // greeting = createElement('h2', 'welcome to the mars robot sim');
  // greeting.position(1300, 5);

  // textAlign(CENTER);
  // textSize(50);
  bot1 = new Robot(startx, starty);
}

// function greet() {
//   const name = input.value();
//   greeting.html('hello ' + name + '!');
//   input.value('');
// }

// function myInputEvent() {
//   console.log('you are typing: ', this.value());
// }

function grid(cord,axis) {
  if (axis == "Y"){
    position = ycd[cord];
    console.log(position);
    return position;
  }
  else{
    position = xcd[cord];
    console.log(position);
    return position;
  }
}

function drgrid() {
  for (var x = 100; x <= width; x += 100) {
    line(x, 0, x, height);
    for (var y = 100; y <= height; y += 100) {
      line(0, y, width, y);
    }
  }
}

function draw() {
  background(1000,1000,1000);
  drgrid();
  bot1.display();
}

class Robot{
  constructor(startx, starty){
    this.x = (grid(startx, "X"));
    this.y = (grid(starty, "Y"));
    this.diameter = (20,20);
    this.fill = random(100,200)
    this.direction = "E";
  }
  display(){
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}