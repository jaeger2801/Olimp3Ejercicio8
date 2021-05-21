function Bloques(x, y){
    this.x = x;
    this.y = y;
    this.w = 80;
    this.h = 40;
    this.top = this.x - this.w/2;
    this.bottom = this.x + this.w/2;
    this.color1 = random(255);
    this.color2 = random(255);
    this.color3 = random(255);

    this.show = function(){
        stroke(30);
        fill(this.color1, this.color2, 255);
        //fill(30, 183, 151);
        rect(this.x + 45, this.y + 30, 85, 40);
    }
}