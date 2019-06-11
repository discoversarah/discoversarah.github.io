// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBtdWHaRCFO9wVFtatCsYCD1k5l7iMF4qs",
    authDomain: "something-40c4b.firebaseapp.com",
    databaseURL: "https://something-40c4b.firebaseio.com",
    projectId: "something-40c4b",
    storageBucket: "",
    messagingSenderId: "826597144681",
    appId: "1:826597144681:web:c9e568814b820031"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
let database = firebase.database()
let scoreboard = {  }
let yourname = document.getElementById("yourname")
let score;
let time
let speedo
let word
let direction_h
let direction_v 
let knob
let y
let s
let f
let c
let v
let o
let p
let k
let l
let n
let m
let u
let j
let b
let h
let t
let b2
let h2
let t2
let b3
let h3
let t3
let b4
let h4
let t4
let b5
let h5
let t5
let nerd
let naab
let door
let knab
let level
let scoro
let visibility  = true
let visibility2 = true
let visibility3 = true
let visibility4 = true
let visibility5 = true

function setup() {
  createCanvas(windowWidth, windowHeight);  
  direction_h = [1,1,1,1,1]
  direction_v = [1,1,1,1,1]
  speedo = 20
  level = 1
  score = 0
  word = 5
  b = 249
  h = 200
  t = 222
  b2 = 200
  h2 = 249
  t2 = 227
  b3 = 200
  h3 = 247
  t3 = 249
  b4 = 249
  h4 = 202
  t4 = 200
  b5 = 200
  h5 = 223
  t5= 249
  o =100
  p =50
  k =380
  l =50
  n =670
  m =50
  u =970
  j =50
  time = 130
  knob = 20
  nerd = 70
  naab = 50
  knab = 10
  door = 5
  x=(710)
  y=(780)
  s=[100, 1000, 300, 900, 500]
  f=[200, 300, 400, 500, 650]
  c=(1275)
  v=(50)
  scoro = 1
}  

function draw() {
  if (time > 0) {
  
  background(118, 215, 196)
  time = time - 0.04
  for (i=0; i<5; i=i+1) {
  
    s[i] = s[i] + speedo*direction_h[i]
    fill(0,0,0)
    circle(s[i],f[i],word)
    if ( s[i] > width || s[i] < 0) {
      direction_h[i] = direction_h[i] * -1
    }



    if (dist( x, y, s[i], f[i]) < 40 + word) {
	  score = score - scoro
      
    }
  }
   
if (touches.length == 0)   {

  if (keyIsDown(RIGHT_ARROW) && x < 1355) {
    x = x + 8
   
  }
  if (keyIsDown(LEFT_ARROW) && x > 40) {
    x = x - 8
  }
  if (keyIsDown(UP_ARROW) && y > 45) {
    y = y - 8
  }
  if (keyIsDown(DOWN_ARROW) && y < 785) {
    y = y + 8
  }
 
}
 else { 
	x = touches[0].x
	y = touches[0].y
}

	  
   if (score > 100 && level == 1) {
        s=[100, 200, 300, 400, 500]
        word = word + 20
        speedo = speedo + 3
        scoro = scoro +2
        visibility = true
        visibility2 = true
        visibility3 = true
        visibility4 = true
        visibility5 = true
        level = 2 
        knob = knob + 20
        nerd = nerd + 35
        naab = naab + 50
        knab = knab + 10
        door = door + 5
        score  = 0

   }
  
    if (score > 200 && level == 2) {
        s=[200, 400, 600]
        f=[200, 400, 600]
        scoro = scoro + 4
        speedo = speedo + 3
        word = word + 50
        visibility = true
        visibility2 = true
        visibility3 = true
        visibility4 = true
        visibility5 = true
        speedo = speedo + 5
        level = 3
        knob = knob + 30
        nerd = nerd + 80
        naab = naab + 200
        knab = knab + 150
        door = door + 230
        score  = 0 
          
   } 

    if (score > 600 && level == 3) { 
        s=[200, 1000, 200]
        word = word + 30
        scoro = scoro + 10
        visibility = true
        visibility2 = true
        visibility3 = true
        visibility4 = true
        visibility5 = true
        speedo = speedo + 4

        level = 4
        score  = 0
   } 

     

  fill(255,0,0)
  text("Score: " + score, 5, 730)
  fill(255,0,0)
  text("Time: " + time.toFixed(0), 5, 760)
  fill(142, 68, 173)
  text("Level: " + level, 5, 790)


  

  fill(248, 187, 208) 
  circle(x,y,40)
  
  if (visibility == true) {
    fill(b5, h5, t5)
    circle(c,v,50) 
    if (dist( x, y, c, v) < 40 + 50) {
	score = score + door
      visibility=false
      x = 710
      y = 780
    }
  }
  
  if (visibility2 == true) {
    fill(b, h, t)
    circle(o,p,50) 
    if (dist( x, y, o, p) < 40 + 50) {
	score = score + nerd
      visibility2=false
      x = 710
      y = 780
    }
  } 
  
  if (visibility3 == true) {
    fill(b2, h2, t2)
    circle(k,l,50)
    if (dist( x, y, k, l) < 40 + 50) {
	score = score + naab
      visibility3=false
      x = 710
      y = 780
    }
  }
  
  if (visibility4 == true) {
    fill(b3, h3, t3)
    circle(n,m,50)  
    if (dist( x, y, n, m) < 40 + 50) {
	score = score + knab
      visibility4=false
      x = 710
      y = 780
      
    }
  }
    
  if (visibility5 == true) {
    fill(b4, h4, t4)
    circle(u,j,50)   
    if (dist( x, y, u, j) < 40 + 50) {
	score = score + knob
      visibility5=false
      x = 710
      y = 780
    }
  } 
   
}
  else {

  yourname.innerHTML = "Name? <input id=rottle><button onclick='restart()'>Restart</button><button onclick='onclick=generate_alltime_leaderboard()'>All-time leaderboard</button>"
  noLoop()

  }
  
}
function restart() { 
        let rottle = document.getElementById("rottle")
		name = rottle.value 
	    database.ref(name).set(level)
		if (name != "") { 
			scoreboard[name] = level
		}
        alert("Scoreboard: " +JSON.stringify(scoreboard,null,1)) 
		speedo = 20
		level = 1
		score = 0
		word = 5
		b = 249
		h = 200
		t = 222
		b2 = 200
		h2 = 249
		t2 = 227
		b3 = 200
		h3 = 247
		t3 = 249
		b4 = 249
		h4 = 202
		t4 = 200
		b5 = 200
		h5 = 223
		t5= 249
		o =100
		p =50
		k =380
		l =50
		n =670
		m =50
		u =970
		j =50
		time = 130
		knob = 20
		nerd = 70
		naab = 50
		knab = 10
		door = 5
		x=(710)
		y=(780)
		loop()
		yourname.innerHTML = ""
  	  	generate_leaderboard()
}

function generate_leaderboard() {
  scores = Object.values(scoreboard)
  names = Object.keys(scoreboard)
  
  if (scores.length >= 3) {
    let leaderboard = { }
    for (i=0; i<3; i=i+1) {
      max = Math.max(...scores)
      index = scores.indexOf(max)
      leaderboard[names[index]] = max
      names.splice(index,1)
      scores.splice(index,1)
    }
    alert("Leaderboard: " + JSON.stringify(leaderboard,null,1))
  }
}

function generate_alltime_leaderboard() {
	let alltime_leaderboard = { }
	database.ref().orderByValue().limitToLast(3).on("value", function(snapshot) {
		snapshot.forEach(function(data) {
		alltime_leaderboard[data.key] = data.val()
		});
    	});
	if (Object.values(alltime_leaderboard).length > 0) {
	  alert("All-time leaderboard: " + JSON.stringify(alltime_leaderboard,null,1))
    	}
}

generate_alltime_leaderboard()
