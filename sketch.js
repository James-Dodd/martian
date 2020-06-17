// hello and welcome to the martian robot grid
// below enter the max X cordinate:
let Xsize = 10;
//below enter the max Y cordinate
let Ysize = 10;
//below enter the start X cordinate:
let startx = 0;
//below enter the start X cordinate:
let starty = 3;
//            N    E    S    W
//            0    1    2    3
//below enter the starting direction using the number coredponding to the direction:
let startdir = 3;
//enter the instructions below:
let inst = ["L", "L", "F", "F", "F", "L", "F", "L", "F", "L"];

let xcd = [];
let ycd = [];
//            N    E    S    W
//            0    1    2    3
let direax = ["Y", "X", "Y", "X"];
let direcd = [];
let insstep = 0;

function setup() {
  grid1 = new grid(Xsize, Ysize);
  for (var x = 0; x <= 1000; x += grid1.canx) {
    append(xcd, x);
  }
  for (var y = 1000; y >= 0; y -= grid1.cany) {
    append(ycd, y);
  }
  append(direcd, grid1.nm);
  append(direcd, grid1.em);
  append(direcd, grid1.sm);
  append(direcd, grid1.wm);
  console.log(grid1.nm, grid1.em, grid1.sm, grid1.wm);
  console.log(xcd);
  console.log(ycd);
  console.log(inst);
  createCanvas(1000,1000);
  frameRate(1);
  bot1 = new Robot(startx, starty, startdir);
  console.log(direcd);
}

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
  for (var x = 0; x <= 1000; x += grid1.canx) {
    line(x, 0, x, height);
    for (var y = 0; y <= 1000; y += grid1.cany) {
      line(0, y, width, y);
    }
  }
}

function draw() {
  background(1000,1000,1000);
  drgrid();
  bot1.display();
  console.log("before:");
  console.log(bot1.direction);
  bot1.movero(inst[insstep++], grid1);
  console.log("arfter:");
  console.log(bot1.direction);
  if (insstep > inst.length){
    noLoop();
  }
}

class Robot{
  constructor(startx, starty, startdir){
    this.x = (gridcal(startx, "X"));
    this.y = (gridcal(starty, "Y"));
    this.diameter = (20,20);
    this.fill = random(100,200)
    this.direction = startdir;
  }
  movero(inst, grid1) {
    this.direction = (inst == "R") ? (this.direction = (this.direction === 4) ? (this.direction = 0) : (this.direction = this.direction+1)) :(this.direction);
    this.direction = (inst == "L") ? (this.direction = (this.direction === 0) ? (this.direction = 3) : (this.direction = this.direction-1)) :(this.direction);
    if (inst == "F") {
    this.x = (direax[this.direction] == "X") ? (this.x =(direcd[this.direction] === grid1.em) ? (this.x = this.x + grid1.em) : (this.x = this.x + grid1.wm)) : (this.x);
    this.y = (direax[this.direction] == "Y") ? (this.y =(direcd[this.direction] === grid1.nm) ? (this.y = this.y + grid1.nm) : (this.y = this.y + grid1.sm)) : (this.y);
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
    this.nm = (-this.canx); 
    this.em = this.cany;
    this.sm = this.cany;
    this.wm = (-this.canx);
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