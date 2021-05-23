var tom,tom1,tom2,tom3
var jerry,jerry1,jerry2,jerry3
var gameState = "play"
var garden, gardenImg

function preload() {
    //load the images here
    jerry1 = loadAnimation("images/mouse1.png")
    jerry2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    jerry3 = loadAnimation("images/mouse4.png")

    tom1 = loadAnimation("images/cat1.png")
    tom2 = loadAnimation("images/cat2.png","images/cat3.png")
    tom3 = loadAnimation("images/cat4.png")

    gardenImg = loadImage("images/garden.png")

}

function setup(){
    createCanvas(1000,600);
    //create tom and jerry sprites here

    garden = createSprite(500,400,20,20)
    garden.addImage(gardenImg)

    tom = createSprite(900,height/1.2,20,20)
    tom.addAnimation("sleeping",tom1)
    tom.addAnimation("walking",tom2)
    tom.addAnimation("sitting",tom3)

    jerry = createSprite(width/8,height/1.2,20,20)
    jerry.addAnimation("cheese",jerry1)
    jerry.addAnimation("dancing",jerry2)
    jerry.addAnimation("detector",jerry3)

}

function draw() {
    background(255);

    if(gameState === "play"){

    tom.velocityX = 0

    console.log(tom.x)

    garden.visible = 1
    tom.visible = 1
    jerry.visible = 1

    tom.debug = true
    tom.setCollider("aabb",0,0,700,1000)

    jerry.debug = true
    jerry.setCollider("aabb",0,0,700,1000)

    tom.changeAnimation("sleeping",tom1)
    jerry.changeAnimation("cheese",jerry1)
    jerry.scale = 0.2
    tom.scale = 0.2

    if(keyDown("left") || keyDown("a")){
        tom.velocityX = -5
        tom.changeAnimation("walking",tom2)
        tom.debug = true
        tom.setCollider("aabb",0,0,1000,700)
        jerry.changeAnimation("dancing",jerry2)
    } else if(keyWentUp("left") && keyWentUp("a")){
        tom.changeAnimation("sleeping",tom1)
        tom.velocityX = 0
    }

         if(tom.x <= 300){
             gameState = "over"
            }
        }

         if(gameState === "over"){
            tom.velocityX = 0
            garden.visible = 0

            background("blue")
            textSize(80)
            textAlign(CENTER)
            fill("yellow")
            text("You lose!",width/2,height/2 - 80)
            fill("cyan")
            text("Avoid Jerry next time 😂",width/2,height/2 + 80)

            tom.visible = 0
            jerry.visible = 0

           if(keyDown("space")){
               gameState = "play"
           }
         }

    drawSprites();

}
