function Bolita(){
    this.x = width / 2;
    this.y = height /2 + 50;
    this.radius = 20;
    this.vx = 8;
    this.vy = 8;

    this.show = function(){
        fill(255,0,0);
        ellipse(this.x, this.y, this.radius,this.radius);
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;
        if(this.x > width || this.x < 0)
           this.vx = -this.vx;

    }
    
    this.choque = function(e){
        if(this.y <= e.y + e.h/2 + 30 && this.y >= e.y - e.h/2)
           if(this.x >= e.top && this.x <=e.bottom)
             return true;
        return false;
    }
}