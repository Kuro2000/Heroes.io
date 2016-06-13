/**
 * Created by Manh Tuan on 5/31/2016.
 */
var express = require("express");
var app = express();
app.use(express.static(__dirname));
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.get('/', function(req, res){
    res.sendfile('index.html');
});

http.listen(6002, function(){
    console.log('listening on *:6002');
});
players = [];
monsters = [];
buff = [];
var idbuff = 0;
var id =0;
var idmonster = 0;
io.on('connection', function(socket){
    socket.on('player_created',function(data){
        id++;
        console.log("new player: ",data.x + "-" + data.y);
        socket.emit("info_player",{id:id,players:players});
        socket.broadcast.emit('new_player_connected',{id:id,x:data.x,y:data.y,choice:data.choice,name:data.name});
        players.push({id:id,x:data.x,y:data.y,choice:data.choice,name:data.name});
    });
    socket.on('player_update',function(update){
        for(var i = 0; i<players.length;i++)
        {
            if(players[i].id == update.id)
            {
                players[i].x = update.x;
                players[i].y = update.y;
                players[i].lv = update.lv;
            }
        }
        socket.broadcast.emit('update',{id:update.id,x:update.x,y:update.y,direction:update.direction,spx:update.spx,spy:update.spy,lv:update.lv});
    });
    socket.on('player_hp',function(data){
        socket.broadcast.emit('player_hp',{id:data.id,hp:data.hp});
    });
    socket.on('player_dead',function(data){
        socket.broadcast.emit('player_dead',{id:data.id});
        for(var i=0;i<players.length;i++)
        {
            if(players[i].id == data.id)
            {
                players.splice(i,1);
            }
        }
    });
    socket.on('player_attack',function(data){
        socket.broadcast.emit('player_attack',{id:data.id});
    }); 
    setInterval(function () {
        if(monsters.length <10)
        {
            idmonster ++;
            var x = Math.floor((Math.random() * 700) + 1);
            var y = Math.floor((Math.random() * 700) + 1);
            monsters.push({id:idmonster,x:x,y:y});
            io.sockets.emit('monster_create',{monsters:monsters});
        }
    },7000);
    setInterval(function () {
        if(buff.length <5)
        {
            idbuff ++;
            var x = Math.floor((Math.random() * 700) + 1);
            var y = Math.floor((Math.random() * 700) + 1);
            buff.push({id:idbuff,x:x,y:y});
            io.sockets.emit('buff_create',{buff:buff});
        }
    },10000);
    socket.on('monster_dead',function(data){
        for(var i = 0;i<monsters.length;i++)
        {
            if(monsters[i].id == data.id)
            {
                monsters.splice(i,1);
                socket.broadcast.emit('monster_dead',{id:data.id});
            }
        }
    });
    socket.on('buffed',function(data){
        for(var i = 0;i<buff.length;i++)
        {
            if(buff[i].id == data.id)
            {
                buff.splice(i,1);
                socket.broadcast.emit('buffed',{id:data.id});
            }
        }
    });
   // socket.on('skill_up',function(data){
 //      for(var i =0;i< otherPlayers.length;i++) {
 //          if(otherPlayers[i].id == data.id){
 //              otherPlayers[i].skillUp = 1;
 //          }
 //      }
 //   });
    socket.on('mini_stun',function(data){
        socket.broadcast.emit('mini_stun',{id:data.id});
    });
    socket.on('close', function (data) {
        socket.broadcast.emit('update_tanker_delete_server', data);
    });
    socket.on('disconnect', function () {
        socket.broadcast.emit('update_tanker_delete_server', players);
    });
});
