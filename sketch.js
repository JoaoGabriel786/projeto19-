function preload(){
menino_run1=loadAnimation("./png/")
menino_run2=loadAnimation(Run2.png)
menino_jump5=loadAnimation(Jump5.png)
menino_derrotado=loadAnimation(Dead9.png)
}

function setup() {
 createCanvas (600,600)
 menino = createSprite (20,580,50,50)
 menino.addImage (menino_run1)
 menino.addImage (menino_run2)
 menino.addImage (menino_jump5)
 menino.addImage (menino_derrotado)


}

function draw() {
 background (51)
 drawSprites ()
}