function Jugador(){
    this.x = width/2;
    this.y = height;
    this.w = 120;
    this.h = 10;
    this.desp = 20;
    this.top = this.x - this.w/2;
    this.bottom = this.x + this.w/2;

    this.show = function(){
        rectMode(CENTER);
        fill(0, 105, 150);
        rect(this.x, this.y - 15, this.w, this.h,6);
    }

    this.move = function(){
        if(mouseX > this.x)
            this.x += this.desp;
        else if(mouseX < this.x)
            this.x -= this.desp;

        this.top = this.x - this.w/2;
        this.bottom = this.x + this.w/2;
    }
}