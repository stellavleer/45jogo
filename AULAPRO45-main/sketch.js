var bg, bgImg;
var player;



function preload(){

  bgImg = loadImage("assets/bg.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)
  bg.scale = 1.1
  

  //criando o sprite do jogador
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
  player.addImage(shooterImg)
  player.scale = 0.3
  player.debug = true
  player.setCollider("rectangle",0,0,300,300)
 

}

function draw() {
  background(0); 

  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
    player.y = player.y+30
  }
  if(keyWentDown("space")){

  }
  else if(keyWentUp("space")){
  }


  drawSprites();

}

//AULA 45 - DECOMPOSIÇÃO DO JOGO
/*
1 - mudar background
2 - inserir personagem
3 - colocar imagem da natureza
4 - baixar imagem da natureza suja
5 - baixar imagem de lixo
6 - inserir sons
7- hospedar no github
*/