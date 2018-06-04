function Ship() {
    this.x = width/2;


    this.show = function() {
        noStroke;
        fill(0);
        rect(this.x, height - 30,30,30);
    }
     this.move = function(dir) {
    this.x += dir*10;
    }
}

