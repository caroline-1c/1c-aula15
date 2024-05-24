function setup() {
  createCanvas(600, 400);
  background("rgb(6,6,87)");//função para pintar o fundo
}

function draw() {
  stroke("rgb(32,183,247)");//altera a cor da borda do desenho
  fill("rgb(245,145,209)")
  
  if(mouseIsPressed){
    rect(mouseX, mouseY, 40, 40);
}
}