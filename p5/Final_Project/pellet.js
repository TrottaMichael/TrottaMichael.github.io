function Pellet(x,y) {
    this.x = x;
    this.y = y;
    this.r = 4;

    this.show = function() {
        noStroke();
        fill(200);
        ellipse(this.x,this.y, this.r*2,this.r*2);
    };
    this.move = function() {
        this.y= this.y - 3;
    }
    this.hits = function(that) {
            if (this.y - this.r <= that.y1 && this.y- this.r >= that.y3 && that.x1 < this.x && this.x < that.x2) {
                return true;
            } else {
                return false;
            }

    }

}