/**
 * Created by Duy_2 on 2016-05-29.
 */

var context;
var player;
var arrWater = new Array();
var arrTree = new Array();
var arrGrass = new Array();
var arrBrick = new Array();
var arrGoldBrick = new Array();
var arrStone = new Array();
var arrCobbleStone =  new Array();
var arrDirt = new Array();
var arrMons = [];

window.onload = function(){
    var canvas =  document.createElement("canvas");
    context = canvas.getContext("2d"); // draws
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    gameStart();
 for (var i = 0 ; i < 60; i++){
            for (var j = 0;j < 60 ; j++){
                if(map[i][j] == 0){
                    var grass = new Grass(i,j);
                    arrGrass.push(grass);
                }
                if(map[i][j] == 1){
                    var water = new Water(i,j);
                    arrWater.push(water)
                }
                if (map[i][j] == 2) {
                    var tree = new Tree(i,j);
                    arrTree.push(tree);
                }
                if (map[i][j] == 3) {
                    var brick = new Brick(i,j);
                    arrBrick.push(brick);
                }
                if (map[i][j] == 4) {
                    var goldBrick = new GoldBrick(i,j);
                    arrGoldBrick.push(goldBrick);
                }
                if (map[i][j] == 5) {
                    var stone = new Stone(i,j);
                    arrStone.push(stone);
                }
                if (map[i][j] == 6) {
                    var cobbleStone = new CobbleStone(i,j);
                    arrCobbleStone.push(cobbleStone);
                }
                if (map[i][j] == 7) {
                    var dirt = new Dirt(i,j);
                    arrDirt.push(dirt);
                }
            }
        }
        setInterval(()=>{
            player.update();
            gameUpdate();
            gameDrawer(context);
        }, 17);
    };

function gameStart(){
    player = new Knight(100,100);
    var golem = new Golem(100,100);
    arrMons.push(golem);
}

function gameDrawer(context){
    context.fillStyle = "black";
    context.fillRect(0,0,window.innerWidth,window.innerHeight);

    for (var a = 0; a < arrGrass.length;a++){
        arrGrass[a].draw(context);
    }
    for (var b = 0; b < arrWater.length;b++){
        arrWater[b].draw(context);
    }
    for (var c = 0; c < arrTree.length;c++){
        arrTree[c].draw(context);
    }
    for (var d = 0; d < arrBrick.length;d++){
        arrBrick[d].draw(context);
    }
    for (var e = 0; e <arrGoldBrick.length;e++){
        arrGoldBrick[e].draw(context);
    }
    for (var f = 0; f < arrStone.length; f++){
        arrStone[f].draw(context);
    }
    for (var g = 0; g < arrCobbleStone.length; g++){
        arrCobbleStone[g].draw(context);
    }
    for (var h = 0; h < arrDirt.length; h++){
        arrDirt[h].draw(context);
    }

    for(var i = 0; i<arrMons.length;i++)
    {
        arrMons[i].draw(context);
    }
    player.draw(context);
}

function gameUpdate(){
    for (var i =0; i< arrWater.length; i++) {
        arrWater[i].update();
    }
    player.update();
    for(var i=0;i< arrMons.length;i++)
    {
        arrMons[i].update();
    }
}

window.onkeydown = function(e){
    switch (e.keyCode){
        case 87: // W
            player.move(1);
            break;
        case 83: // S
            player.move(2);
            break;
        case 65: // A
            player.move(3);
            break;
        case 68: // D
            player.move(4);
            break;
        case 32: // SPACEBAR
            player.strike();
            break;
    }
}

window.onkeyup = function(e){
    switch(e.keyCode) {
        case 87:
            if (player.speedy < 0) {
                player.speedy = 0;
            }
            break;
        case 83:
            if (player.speedy > 0) {
                player.speedy = 0;
            }
            break;
        case 65:
            if (player.speedx < 0) {
                player.speedx = 0;
            }
            break;
        case 68:
            if (player.speedx > 0) {
                player.speedx = 0;
            }
            break;
    }
}