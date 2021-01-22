var canvas = new fabric.Canvas("myCanvas");
var blockImageWidth = 30;
var blockImageHeight = 30;
var playerX = 10;
var playerY = 10;
var playerObject = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
        playerObject = Img;
        playerObject.scaleToWidth(150);
        playerObject.scaleToHeight(140);
        playerObject.set({top: playerY, left: playerX});
        canvas.add(playerObject);
    });
}

function newImage(getImage) {

    fabric.Image.fromURL(getImage, function(Img) {
        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({top: playerY, left: playerX});
        canvas.add(blockImageObject);
    });

}













function up() {
    if(playerY >= 0) {
        playerY = playerY - blockImageHeight;
        console.log("blockImageHeight =" + blockImageHeight);
        console.log("when up arrow key is pressed, X =" + playerX, + "Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}


function down() {
    if(playerY <= 690) {
        playerY = playerY + blockImageHeight;
        console.log("blockImageHeight =" + blockImageHeight);
        console.log("when down arrow key is pressed, X =" + playerX, + "Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}



function right() {
    if(playerX <= 850) {
        playerX = playerX + blockImageWidth;
        console.log("blockImageHeight =" + blockImageWidth);
        console.log("when right arrow key is pressed, X =" + playerX, + "Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}



function left() {
    if(playerX >= 0) {
        playerX = playerX - blockImageWidth;
        console.log("blockImageHeight =" + blockImageWidth);
        console.log("when left arrow key is pressed, X =" + playerX, + "Y =" + playerY);
        canvas.remove(playerObject);
        playerUpdate();
    }
}













window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    keyPressed = e.keyCode;
    console.log(keyPressed);

    //for shift P key (block size goes up)
    if(e.shiftKey == true && keyPressed == "80") {
        blockImageHeight = blockImageHeight + 5;
        blockImageWidth = blockImageWidth + 5;
        document.getElementById("current_width").innerHTML = blockImageWidth;
        document.getElementById("current_height").innerHTML = blockImageHeight;
    }

    //for shift M key (block size goes down)
    if(e.shiftKey == true && keyPressed == "77") {
        blockImageHeight = blockImageHeight - 5;
        blockImageWidth = blockImageWidth - 5;
        document.getElementById("current_height").innerHTML = blockImageHeight;
        document.getElementById("current_width").innerHTML = blockImageWidth;
    }

    // for face (F)
    if(keyPressed == "70") {
        newImage("spiderman_face.png");
        console.log("face");
    }

    //for body (B)
    if(keyPressed == "66") {
        newImage("ironman_body.png");
        console.log("body");
    }

    //for legs (L)
    if(keyPressed == "76") {
        newImage("hulk_legs.png");
        console.log("legs");        
    }

    //for right hand (R)
    if(keyPressed == "82") {
        newImage("spiderman_right_hand.png");
        console.log("right hand");
    }

    // for left (H)
    if(keyPressed == "72") {
        newImage("thor_left_hand.png");
        console.log("left hand");
    }


    // for up
    if(keyPressed == "38") {
        up();
        console.log("up");
    }


    // for down
    if(keyPressed == "40") {
        down();
        console.log("down");
    }

    // for left
    if(keyPressed == "37") {
        left();
        console.log("left");
    }


    // for right
    if(keyPressed == "39") {
        right();
        console.log("right");
    }

}