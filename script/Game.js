/**
 * Created by Duy_2 on 2016-05-29.
 */
var socket;
var choice;
var posx;
var posy;
var otherPlayers =[];
var context;
var player;
var arrMons = [];
var arrBuff = [];
var arrTower = new Array();
var arrDragStatue = new Array();
var arrGrass = new Array();
var arrStatue1 = new Array();
var arrStatue2 = new Array();
var arrStatue3 = new Array();
var arrSnow =  new Array();
var arrDirt = new Array();
var arrWell = new Array();
var arrBigTree = new Array();
var arrBush = new Array();
var arrTent = new Array();
var arrBonfire_1 = new Array();
var arrBonfire_2 = new Array();
var arrTrunk = new Array();
var arrFlower_1 = new Array();
var arrFlower_2 = new Array();
var arrStoneStep = new Array();
var arrFlower_4 = new Array();
var arrRock_1 = new Array();
var arrRock_2 = new Array();
var arrWoodPile = new Array();
var arrRoadSign = new Array();
var arrWoodenTombstone = new Array();
var arrFuckedUpTree = new Array();
var arrDirt1 = new Array();
var arrTable1 = new Array();
var arrTable2 = new Array();
var arrTable3 = new Array();
var arrTable4 = new Array();
window.onload = function() {
    var canvas = document.createElement("canvas");
    context = canvas.getContext("2d"); // draws
    canvas.width = 1925;
    canvas.height = 1920;
    document.body.appendChild(canvas);
}
    function login() {
        gameStart(parseInt($("[name=class]:checked").val()));
        player.name = $("#username").val();
        for (var i = 0; i < 60; i++) {
            for (var j = 0; j < 60; j++) {
                if (map[i][j] == 0) {
                    var grass = new Grass(i, j);
                    arrGrass.push(grass);
                }
                if (map[i][j] == 1) {
                    var tower = new Tower(j, i);
                    arrTower.push(tower)
                }
                if (map[i][j] == 2) {
                    var dragStatue = new DragStatue(j, i);
                    arrDragStatue.push(dragStatue);
                }
                if (map[i][j] == 3) {
                    var statue1 = new Statue1(j, i);
                    arrStatue1.push(statue1);
                }
                if (map[i][j] == 4) {
                    var statue2 = new Statue2(j, i);
                    arrStatue2.push(statue2);
                }
                if (map[i][j] == 5) {
                    var statue3 = new Statue3(j, i);
                    arrStatue3.push(statue3);
                }
                if (map[i][j] == 6) {
                    var snow = new Snow(j, i);
                    arrSnow.push(snow);
                }
                if (map[i][j] == 7) {
                    var dirt = new Dirt(j, i);
                    arrDirt.push(dirt);
                }
                if (map[i][j] == 8) {
                    var well = new Well(j, i);
                    arrWell.push(well);
                }
                if (map[i][j] == 9) {
                    var bigTree = new BigTree(j, i);
                    arrBigTree.push(bigTree);
                }
                if (map[i][j] == 10) {
                    var bush = new Bush(j, i);
                    arrBush.push(bush);
                }
                if (map[i][j] == 11) {
                    var flower_1 = new Flower_1(j, i);
                    arrFlower_1.push(flower_1);
                }
                if (map[i][j] == 12) {
                    var flower_2 = new Flower_2(j, i);
                    arrFlower_2.push(flower_2);
                }
                if (map[i][j] == 13) {
                    var stoneStep = new StoneStep(j, i);
                    arrStoneStep.push(stoneStep);
                }
                if (map[i][j] == 14) {
                    var flower_4 = new Flower_4(j, i);
                    arrFlower_4.push(flower_4);
                }
                if (map[i][j] == 15) {
                    var bonfire_1 = new Bonfire_1(j, i);
                    arrBonfire_1.push(bonfire_1);
                }
                if (map[i][j] == 16) {
                    var bonfire_2 = new Bonfire_2(j, i);
                    arrBonfire_2.push(bonfire_2);
                }
                if (map[i][j] == 17) {
                    var trunk = new Trunk(j, i);
                    arrTrunk.push(trunk);
                }
                if (map[i][j] == 18) {
                    var rock_1 = new Rock_1(j, i);
                    arrRock_1.push(rock_1);
                }
                if (map[i][j] == 19) {
                    var rock_2 = new Rock_2(j, i);
                    arrRock_2.push(rock_2);
                }
                if (map[i][j] == 20) {
                    var tent = new Tent(j, i);
                    arrTent.push(tent);
                }
                if (map[i][j] == 21) {
                    var woodPile = new WoodPile(j, i);
                    arrWoodPile.push(woodPile);
                }
                if (map[i][j] == 22) {
                    var roadSign = new RoadSign(j, i);
                    arrRoadSign.push(roadSign);
                }
                if (map[i][j] == 23) {
                    var woodenTombstone = new WoodenTombstone(j, i);
                    arrWoodenTombstone.push(woodenTombstone);
                }
                if (map[i][j] == 24) {
                    var fuckedUpTree = new FuckedUpTree(j, i);
                    arrFuckedUpTree.push(fuckedUpTree);
                }
                if (map[i][j] == 25) {
                    var dirt1 = new Dirt1(j, i);
                    arrDirt1.push(dirt1);
                }
                if (map[i][j] == 26) {
                    var table1 = new Table1(j, i);
                    arrTable1.push(table1);
                }
                if (map[i][j] == 27) {
                    var table2 = new Table2(j, i);
                    arrTable2.push(table2);
                }
                if (map[i][j] == 28) {
                    var table3 = new Table3(j, i);
                    arrTable3.push(table3);
                }
                if (map[i][j] == 29) {
                    var table4 = new Table4(j, i);
                    arrTable4.push(table4);
                }

            }
        }
        setInterval(()=> {
            player.update();
            gameUpdate();
            gameDrawer(context);
        }, 25);
        initSocketClient();
        $("#myModal").modal({
            show: false
        });
    };
function gameStart(choice1){
    choice = choice1;
    if(choice != 1 && choice != 2 && choice != 3 && choice != 4)
    {
        choice = 1;
    }
    switch(choice){
        case 1:
            player = new Knight(100,250);
            break;
        case 2:
            player = new Mage(100,250);
            break;
        case 3:
            player = new Archer(100,250);
            break;
        case 4:
            player = new Assassin(100,250);
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
                case 3:
                    var newPlayer = new Archer(data.players[i].x,data.players[i].y);
                    newPlayer.id=data.players[i].id;
                    newPlayer.name = data.players[i].name;
                    otherPlayers.push(newPlayer);
                    break;
                case 4:
                    var newPlayer = new Assassin(data.players[i].x,data.players[i].y);
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
            case 3:
                var newPlayer = new Archer(data.x,data.y);
                newPlayer.id=data.id;
                newPlayer.name=data.name;
                otherPlayers.push(newPlayer);
                break;
            case 4:
                var newPlayer = new Assassin(data.x,data.y);
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
    for (var b = 0; b < arrTower.length;b++){
        arrTower[b].draw(context);
    }
    for (var c = 0; c < arrBonfire_1.length;c++){
        arrBonfire_1[c].draw(context);
    }
    for (var d = 0; d < arrStatue1.length;d++){
        arrStatue1[d].draw(context);
    }
    for (var e = 0; e <arrStatue2.length;e++){
        arrStatue2[e].draw(context);
    }
    for (var f = 0; f < arrStatue3.length; f++){
        arrStatue3[f].draw(context);
    }
    for (var g = 0; g < arrSnow.length; g++){
        arrSnow[g].draw(context);
    }
    for (var h = 0; h < arrDirt.length; h++){
        arrDirt[h].draw(context);
    }
    for (var i = 0; i < arrWell.length; i++){
        arrWell[i].draw(context);
    }
    for(var j = 0 ;j<arrBigTree.length;j++){
        arrBigTree[j].draw(context);
    }
    for(var j = 0 ;j<arrDragStatue.length;j++){
        arrDragStatue[j].draw(context);
    }
    for(var j = 0 ;j<arrBush.length;j++){
        arrBush[j].draw(context);
    }
    for(var j = 0 ;j<arrTent.length;j++){
        arrTent[j].draw(context);
    }
    for(var j = 0 ;j<arrBonfire_2.length;j++){
        arrBonfire_2[j].draw(context);
    }
    for(var j = 0 ;j<arrTrunk.length;j++){
        arrTrunk[j].draw(context);
    }
    for(var j = 0 ;j<arrFlower_1.length;j++){
        arrFlower_1[j].draw(context);
    }
    for(var j = 0 ;j<arrFlower_2.length;j++){
        arrFlower_2[j].draw(context);
    }
    for(var j = 0 ;j<arrStoneStep.length;j++){
        arrStoneStep[j].draw(context);
    }
    for(var j = 0 ;j<arrFlower_4.length;j++){
        arrFlower_4[j].draw(context);
    }
    for(var j = 0 ;j<arrRock_1.length;j++){
        arrRock_1[j].draw(context);
    }
    for(var j = 0 ;j<arrRock_2.length;j++){
        arrRock_2[j].draw(context);
    }
    for(var j = 0 ;j<arrWoodPile.length;j++){
        arrWoodPile[j].draw(context);
    }
    for(var j = 0 ;j<arrRoadSign.length;j++){
        arrRoadSign[j].draw(context);
    }
    for(var j = 0 ;j<arrWoodenTombstone.length;j++){
        arrWoodenTombstone[j].draw(context);
    }
    for(var j = 0 ;j<arrFuckedUpTree.length;j++){
        arrFuckedUpTree[j].draw(context);
    }
    for(var j = 0 ;j<arrDirt1.length;j++){
        arrDirt1[j].draw(context);
    }
    for(var j = 0 ;j<arrTable1.length;j++){
        arrTable1[j].draw(context);
    }
    for(var j = 0 ;j<arrTable2.length;j++){
        arrTable2[j].draw(context);
    }
    for(var j = 0 ;j<arrTable3.length;j++){
        arrTable3[j].draw(context);
    }
    for(var j = 0 ;j<arrTable4.length;j++){
        arrTable4[j].draw(context);
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
    posx = getposx();
    posy = getposy();
    context.fillStyle="yellow";
    context.font="50px Arial";
}

function gameUpdate(){
    window.scrollBy(player.speedX,player.speedY);
    socket.on('player_attack',function(data){
        for(var i = 0; i<otherPlayers.length;i++)
        {
            if(otherPlayers[i].id == data.id)
            {
                otherPlayers[i].attack();
            }
        }
    });
    for(var i = 0; i<otherPlayers.length;i++)
    {
        otherPlayers[i].update();
    }
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
                otherPlayers[i].lv = update.lv;
                otherPlayers[i].sprite.update(update.spx,update.spy);
            }
        }
    });
    socket.on('mini_stun',function(data){
        if(player.id == data.id)
        {
            player.ministun = 1;
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
    socket.on('update_tanker_delete_server', function (data) {
            for(var i = 0; i < otherPlayers.length; i++){
                if (data.id == otherPlayers[i].id){
                    otherPlayers.splice(i,1);
                }
            }
    });
    for(var i=0;i< arrBuff.length;i++)
    {
        arrBuff[i].update();
    }
    player.update();
    socket.emit('player_update',{id:player.id,x:player.x,y:player.y,direction:player.direction,spx:player.speedX,spy:player.speedY,lv:player.lv})
    window.scrollTo(player.x-736,player.y-352);
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
        case 74: // SPACEBAR
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
function getposx()
{
    var posx = 0;
    if((player.x >= 736 && player.x <= 1296))
    {
        posx = player.x - 736 + 50;
    }
    if((player.x >= 0 && player.x <=736))
    {
        posx = 50;
    }
    if((player.x >= 736 && player.x <=1296))
    {
        posx = player.x - 736 +50;
    }
    if((player.x >= 1296 && player.x <=1925))
    {
        posx = 610;
    }
    return posx;
}
function getposy()
{
    var posy = 0;
    //trung tam
    if((player.y >= 352 && player.y<1608))
    {

        posy = player.y -352 +50;
    }
    //goc tren ben trai
    if((player.y >= 0 && player.y <= 352))
    {

        posy = 50;
    }
    if((player.y >= 1608 && player.y <= 1920))
    {
        posy= 1306;
    }
    //canh tren
    return posy;
}
window.onbeforeunload = function (e) {
    socket.emit('close',{id: player.id, x: player.x, y : player.y});
};
window.onunload = function (e) {
    socket.emit('close',{id: player.id, x: player.x, y : player.y});
};