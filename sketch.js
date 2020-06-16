let xcd = [];
let ycd = [];
Xsize = 50;
Ysize = 50;
//            N    E    S    W
//            0    1    2    3
let direax = ["Y", "X", "Y", "X"];
let direcd = [100, 100,  -100, -100];
let insstep = 0;
let startx = 0;
let starty = 3;
let startdir = 3;
inst = ["L", "L", "F", "F", "F", "L", "F", "L", "F", "L"];

function setup() {
  grid1 = new grid(Xsize, Ysize);

  

  // input = createInput();
  // input.position(1300, 65);

  // button = createButton('submit');
  // button.position(1500, 65);
  // // button.mousePressed(draw);

  // greeting = createElement('h2', 'welcome to the mars robot sim');
  // greeting.position(1300, 5);

  // textAlign(CENTER);
  // textSize(50);
  createCanvas(1000,1000);
  frameRate(1);
  bot1 = new Robot(startx, starty, startdir);
}

// function greet() {
//   const name = input.value();
//   greeting.html('hello ' + name + '!');
//   input.value('');
// }

// function myInputEvent() {
//   console.log('you are typing: ', this.value());
// }

function gridcal(cord,axis) {
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
  for (var x = grid1.canx; x <= width; x += grid1.canx) {
    line(x, 0, x, height);
    for (var y = grid1.cany; y <= height; y += grid1.cany) {
      line(0, y, width, y);
    }
  }
}





function draw() {
  background(1000,1000,1000);
  drgrid();
  bot1.display();
  bot1.movero(inst[insstep++]);
}

class Robot{
  constructor(startx, starty, startdir){
    this.x = (gridcal(startx, "X"));
    this.y = (gridcal(starty, "Y"));
    this.diameter = (20,20);
    this.fill = random(100,200)
    this.direction = startdir;
  }
  movero(inst) {
    this.direction = (inst == "R") ? (this.direction = (this.direction === 3) ? (this.direction = 0) : (this.direction = this.direction+1)) :(this.direction);
    this.direction = (inst == "L") ? (this.direction = (this.direction === 0) ? (this.direction = 3) : (this.direction = this.direction-1)) :(this.direction);
    if (inst == "F") {
    this.x = (direax[this.direction] == "X") ? (this.x =(direcd[this.direction] === 100) ? (this.x = this.x + 100) : (this.x = this.x -100)) : (this.x);
    this.y = (direax[this.direction] == "Y") ? (this.y =(direcd[this.direction] === 100) ? (this.y = this.y + 100) : (this.y = this.y -100)) : (this.y);
    console.log(this.x, this.y);
    }
  }

  display(){
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}

class grid{
  constructor(Xsize, Ysize){
    this.canx = (1000/Xsize);
    this.cany = (1000/Ysize);
  }

  buildx(xcd){
    for (var x = this.canx; x <= width; x += this.canx) {
      append(xcd, x);
    }
  }
  buildy(ycd){
    for (var y = this.cany; y <= height; y += this.cany) {
      append(ycd, y);
    }
  }
}