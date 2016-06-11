/**
 * Created by Duy_2 on 2016-05-29.
 */
var socket;
var choice;
var otherPlayers =[];
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
var arrBuff = [];
var countbuff = 0;
window.onload = function(){
    var name = prompt("Nhập tên của bạn", "Username");
    var canvas =  document.createElement("canvas");
    context = canvas.getContext("2d"); // draws
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    gameStart();
    player.name = name;
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
        }, 25);

    initSocketClient();

    };
function gameStart(){
    choice = Math.floor((Math.random() * 2) + 1);
    switch(choice){
        case 1:
            player = new Knight(100,100);
            break;
        case 2:
            player = new Mage(100,100);
            break;
    }
}
function initSocketClient()
{
    socket = io.connect();
    socket.emit('player_created',{x:player.x,y:player.y,choice:choice,name:player.name});
    socket.on("info_player",function(data){
        console.log("My ID " + data.id);
        player.id = data.id;
        for (var i = 0; i < data.players.length; i++){
            switch(data.players[i].choice)
            {
                case 1:
                    var newPlayer = new Knight(data.players[i].x,data.players[i].y);
                    newPlayer.id=data.players[i].id;
                    newPlayer.name = data.players[i].name;
                    otherPlayers.push(newPlayer);
                    break;
                case 2:
                    var newPlayer = new Mage(data.players[i].x,data.players[i].y);
                    newPlayer.id=data.players[i].id;
                    newPlayer.name = data.players[i].name;
                    otherPlayers.push(newPlayer);
                    break;
            }
        }
    });
    socket.on('new_player_connected',function(data){
        switch(data.choice)
        {
            case 1:
                var newPlayer = new Knight(data.x,data.y);
                newPlayer.id=data.id;
                newPlayer.name=data.name;
                otherPlayers.push(newPlayer);
                break;
            case 2:
                var newPlayer = new Mage(data.x,data.y);
                newPlayer.id=data.id;
                newPlayer.name=data.name;
                otherPlayers.push(newPlayer);
                break;
        }
    });
    createmonster();
    createbuff();
}
function createmonster()
{
    socket.on('monster_create',function(data){
        for(var i=0;i<data.monsters.length;i++)
        {
            var chicken= new Chicken(data.monsters[i].x,data.monsters[i].y);
            chicken.id=data.monsters[i].id;
            arrMons.push(chicken);
        }
    });
    // var chicken = new Chicken(200,200);
    // arrMons.push(chicken);

}
function createbuff()
{
    socket.on('buff_create',function(data){
        for(var i=0;i<data.buff.length;i++)
        {
            var speed= new Speed(data.buff[i].x,data.buff[i].y);
            speed.id=data.buff[i].id;
            arrBuff.push(speed);
        }
    });
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
    for(var i = 0; i<arrBuff.length;i++)
    {
        arrBuff[i].draw(context);
    }
    for(var i = 0;i<otherPlayers.length;i++)
    {
        otherPlayers[i].draw(context);
    }
    player.draw(context);
}

function gameUpdate(){
    socket.on('update',function(update)
    {
        for(var i = 0; i<otherPlayers.length;i++)
        {
            if(otherPlayers[i].id == update.id)
            {
                otherPlayers[i].direction = update.direction;
                switch(update.direction)
                {
                    case 1:
                        otherPlayers[i].sprite = otherPlayers[i].spriteUp;
                        break;
                    case 2:
                        otherPlayers[i].sprite = otherPlayers[i].spriteDown;
                        break;
                    case 3:
                        otherPlayers[i].sprite = otherPlayers[i].spriteLeft;
                        break;
                    case 4:
                        otherPlayers[i].sprite = otherPlayers[i].spriteRight;
                        break;
                }
                otherPlayers[i].x = update.x;
                otherPlayers[i].y = update.y;
                otherPlayers[i].sprite.update(update.spx,update.spy);
            }
        }
    });
    socket.on('player_hp',function(data){
        if(player.id = data.id)
        {
            player.currhp = data.hp;
        }
    });
    socket.on('player_dead',function(data){
        if(player.id==data.id)
        {
            player = new Headstone(player.x,player.y);
        }
    });
    socket.on('monster_dead',function(data){
       for(var i=0;i<arrMons.length;i++)
       {
           if(arrMons[i].id == data.id)
           {
               arrMons.splice(i,1);
           }
       }
    });
    for(var i = 0; i<otherPlayers.length;i++)
    {
        otherPlayers[i].update();
    }
    for (var i =0; i< arrWater.length; i++) {
        arrWater[i].update();
    }
    for(var i=0;i< arrBuff.length;i++)
    {
        arrBuff[i].update();
    }
    player.update();
    socket.on('player_attack',function(data){
        for(var i = 0; i<otherPlayers.length;i++)
        {
            if(otherPlayers[i].id == data.id)
            {
                otherPlayers[i].attack();
            }
        }
    });
    socket.emit('player_update',{id:player.id,x:player.x,y:player.y,direction:player.direction,spx:player.speedX,spy:player.speedY});
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
            player.attack();
            socket.emit('player_attack',{id:player.id});
            break;
    }
}

window.onkeyup = function(e){
    switch(e.keyCode) {
        case 87:
            if (player.speedY < 0) {
                player.speedY = 0;
            }
            break;
        case 83:
            if (player.speedY > 0) {
                player.speedY = 0;
            }
            break;
        case 65:
            if (player.speedX < 0) {
                player.speedX = 0;
            }
            break;
        case 68:
            if (player.speedX > 0) {
                player.speedX = 0;
            }
            break;
        case 32:
            if(player.sword != null)
            {
                player.sword = null;
            }
    }
}