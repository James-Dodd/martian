function setup() {
  createCanvas(1000,1000);
}

function draw() {
  background(1000,1000,1000);
  for (var x = 100; x <= width; x += 100) {
    line(x, 0, x, height);
    for (var y = 100; y <= height; y += 100) {
      line(0, y, width, y);
    }
  }
}