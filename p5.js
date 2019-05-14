let score;
let direction_h
let direction_v
let y
let s
let f
let c
let v

function setup() {
  direction_h = 1
  direction_v = 1
  score = 0
  x=(100)
  y=(730)
  s=(200)
  f=(300)
  c=(850)
  v=(100)
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(118, 215, 196)
  if ( s > width || s < 0) {
	direction_h = direction_h * -1
  }

  if ( f > height || f < 0) {
	direction_v = direction_v * -1
}


  if (keyIsDown(RIGHT_ARROW)) {
    x = x + 5
  }
  if (keyIsDown(LEFT_ARROW)) {
    x = x - 5
  }
  if (keyIsDown(UP_ARROW)) {
    y = y - 5
  }
  if (keyIsDown(DOWN_ARROW)) {
    y = y + 5
  }
 
if (dist( x, y, s, f) < 100 + 100) {
	score = score + 1
} 
  if (dist( x, y, c, v) < 100 + 100) {
	score = score - 1
    c=200
    v=300
}

  
  fill(255,0,0)
  text(score, 20, 20)	
  f = f + 20*direction_v
  s = s + 20*direction_h


  fill(248, 187, 208) 
  circle(x,y,100)
  fill(215, 189, 226)
  circle(s,f,100)
  fill(0,0,0)
  circle(c,v,100)   
}
