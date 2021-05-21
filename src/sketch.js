var jugador;
var bloques = [];
var b;
function setup(){
  createCanvas(900,600);
  jugador = new Jugador();
  b = new Bolita();
  for(let i = 0; i < 10; i++)
      for(let j = 0; j < 4; j++)
          bloques.push(new Bloques(i*90,j*45));
                            
}       


function draw(){
  background(30);
  jugador.move();
  jugador.show();
  b.move();
  for(let i = 0; i < bloques.length; i++){
    bloques[i].show();
      if(b.choque(bloques[i])){
        b.vy = - b.vy;
        bloques.splice(i,1);
  }

}
  if(b.choque(jugador))
       b.vy = - b.vy;
  if(b.y < 0)
      b.vy = - b.vy;
  b.show();
}
     


