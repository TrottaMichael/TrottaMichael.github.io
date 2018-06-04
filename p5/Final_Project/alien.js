function Alien(x) {
    this.x1= x;
    this.y1= 100;
    this.x2= x+30;
    this.y2= 100;
    this.x3= x+15;
    this.y3= 80;

    // this.xdir = 1;
    // this.ydir = 0;

    this.shiftDown = function() {
        this.y1 + 25;
        this.y2 + 25;
        this.y3 + 25;

    }
    this.show = function() {
        noStroke();
        fill(200);
        triangle(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3);
    }
    this.move = function() {
        this.x1 = this.x1 + xdir;
        this.x2 = this.x2 + xdir;
        this.x3 = this.x3 + xdir;

        // this.y = this.y + this.ydir;
    }


}