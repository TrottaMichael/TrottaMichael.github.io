var ship;
var alien= [];
var pellets = [];
var xdir = 1;
var right = false;
var edge = false;

function setup (){
    createCanvas(600, 400);
    ship = new Ship();
    //pellet = new pellet(width/2, height/2);
    for (var i = 0; i < 5; i++) {
    alien[i] = new Alien(i*100+50);
    }
}




function draw() {
    background(51);
    ship.show();
    right = false;

        for (var i = alien.length -1; i >= 0; i--) {
            alien[i].show();
            alien[i].move();
                if (alien[i].x2 > width) {
                    right = true;
                }
                if (right) {
                    xdir = -1;
                    alien[i].shiftDown();
                }
                if (alien[i].x1 > width || alien[i].x1 < 0) {
                    edge= true;
                    xdir = 1;
                }

                for (var j = 0; j < pellets.length; j++) {
                    pellets[j].show();
                    pellets[j].move();

            if (pellets[j].hits (alien[i])){

                console.log("impact");
                alien.splice(i,1)
        }
        if (pellets[j].y < 0){
            pellets.splice(j,1)
                    }
    }
    }
}

function keyPressed() {
    if (key === ' ') {
        var pellet = new Pellet(ship.x, height);
        pellets.push(pellet);
    }
    if (keyCode === RIGHT_ARROW) {
        ship.move(1);
    }else if (keyCode === LEFT_ARROW) {
        ship.move(-1);
}
}