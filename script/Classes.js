/**
 * Created by Kuro on 5/29/2016.
 */
class Assassin {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.count = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.sword = null;
        this.spriteUp = new Animation(this.x, this.y, "assassin_up_", 3, 17);
        this.spriteDown = new Animation(this.x, this.y, "assassin_down_", 3, 17);
        this.spriteLeft = new Animation(this.x, this.y, "assassin_left_", 3, 17);
        this.spriteRight = new Animation(this.x, this.y, "assassin_right_", 3, 17);
        this.sprite = this.spriteUp;
        this.direction = 1;//bien luu huong di chuyen hien tai cua tank
    }
    checkCollision(rect1, rect2) {
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
            return true;
        }
        return false;
    }
    draw(context) {
        this.sprite.draw(context);
        if(this.sword != null)
        {
            this.sword.draw(context);
        }
    }
    update() {
        var isMove = true;
        if (isMove == true) {
            this.x += this.speedX;
            this.y += this.speedY;
            this.sprite.x = this.x;
            this.sprite.y = this.y;
        }
        if(this.sword != null)
        {
            var rect1 = {x:this.sword.x, y:this.sword.y,width:32,height:32};
            for(var i = 0; i < arrMons.length;i++)
            {
                var rect2 = {x:arrMons[i].x,y:arrMons[i].y,width:75,height:75};
                if(this.checkCollision(rect1,rect2) == true)
                {
                    this.count++;
                    if(this.count >= 15)
                    {
                        this.count = 0;
                        arrMons[i].hp -= 50;
                        console.log(arrMons[i].hp);
                    }
                    if(arrMons[i].hp <=0)
                    {
                        arrMons.splice(i,1);
                    }
                    break;
                }
            }
        }
        this.sprite.update(this.speedX, this.speedY);
        if(this.sword != null)
        {
            this.sword.update();
            if(this.sword.x >= this.x+32 || this.sword.y >= this.y+32 || this.sword.x <= this.x-32 || this.sword.y <= this.y-32)
            {
                this.sword = null;
            }
        }
    }

    move(direction) {
        switch (direction) {
            case 1://up
                this.speedY = -3;
                this.speedX = 0;
                this.sprite = this.spriteUp;
                this.direction = direction;
                break;
            case 2://down
                this.speedY = 3;
                this.speedX = 0;
                this.sprite = this.spriteDown;
                this.direction = direction;
                break;
            case 3://left
                this.speedX = -3;
                this.speedY = 0;
                this.sprite = this.spriteLeft;
                this.direction = direction;
                break;
            case 4://right
                this.speedX = 3;
                this.speedY = 0;
                this.sprite = this.spriteRight;
                this.direction = direction;
                break;
        }
    }
    strike()
    {
        if(this.sword == null)
        {
            switch(this.direction)
            {
                case 1:
                    this.sword = new Sword(this.x,this.y-16,this.direction);
                    break;
                case 2:
                    this.sword = new Sword(this.x,this.y+16,this.direction);
                    break;
                case 3:
                    this.sword = new Sword(this.x-16,this.y,this.direction);
                    break;
                case 4:
                    this.sword = new Sword(this.x+16,this.y,this.direction);
                    break;
            }

        }
    }
}
/////////////////////////////////////////
////////////////////////////////////////
class Archer {
    constructor(x, y) {
        this.fireball = null;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.spriteUp = new Animation(this.x, this.y, "archer_up_", 3, 17);
        this.spriteDown = new Animation(this.x, this.y, "archer_down_", 3, 17);
        this.spriteLeft = new Animation(this.x, this.y, "archer_left_", 3, 17);
        this.spriteRight = new Animation(this.x, this.y, "archer_right_", 3, 17);
        this.sprite = this.spriteUp;
        // this.id = id;
        this.direction = 1; //Current direction
    }
    checkCollision(rect1, rect2) {
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
            return true;
        }
        return false;
    }
    update() {
        var isMove = true;
        if (this.fireball != null) {
            var rect1 = {x:this.fireball.x, y:this.fireball.y,width:8,height:8};
            for (var i = 0; i < arrBrick.length; i++) {
                var rect2 = {x: arrBrick[i].x, y: arrBrick[i].y, width: 16, height: 16};
                if (this.checkCollision(rect1, rect2) == true) {
                    arrBrick.splice(i, 1);
                    this.fireball = null;
                    break;
                }
            }
            for(var i=0;i<arrTree.length;i++)
            {
                var rect2 = {x:arrTree[i].x, y: arrTree[i].y, width:16,height:16};
                if(this.checkCollision(rect1,rect2)==true)
                {
                    this.fireball = null;
                    break;
                }
            }
        }
        var rect1 = {x: this.x + this.speedX, y: this.y + this.speedY, width: 32, height: 32};
        for (var i = 0; i < arrBrick.length; i++) {
            var rect2 = {x: arrBrick[i].x, y: arrBrick[i].y, width: 16, height: 16};
            if (this.checkCollision(rect1, rect2) == true) {
                isMove = false;
                break;

            }
        }
        for (var i = 0; i < arrWater.length; i++) {
            rect2 = {x: arrWater[i].x, y: arrWater[i].y, width: 32, height: 32};
            if (this.checkCollision(rect1, rect2) == true) {
                isMove = false;
                break;
            }
        }
        if (isMove == true) {
            this.x += this.speedX;
            this.y += this.speedY;
            this.sprite.x = this.x;
            this.sprite.y = this.y;
        }
        this.sprite.update(this.speedX,this.speedY);
        if (this.fireball != null) {
            this.fireball.update();
        }
    }

    draw(context) {
        this.sprite.draw(context);
        if (this.fireball != null) {
            this.fireball.draw(context);
        }
    }

    move(direction) {
        switch (direction) {
            case 1://Move up
                this.speedY = -2;
                this.speedX = 0;
                this.sprite = this.spriteUp;
                this.direction = direction;
                break;
            case 2://Move down
                this.speedY = 2;
                this.speedX = 0;
                this.sprite = this.spriteDown;
                this.direction = direction;
                break;
            case 3://Move left
                this.speedX = -2;
                this.speedY = 0;
                this.sprite = this.spriteLeft;
                this.direction = direction;
                break;
            case 4://Move right
                this.speedX = 2;
                this.speedY = 0;
                this.sprite = this.spriteRight;
                this.direction = direction;
                break;
        }
    }
    shoot() {
        if (this.fireball == null) {
            this.fireball = new FireBall(this.x, this.y, this.direction);
        }
    }
}
/////////////////////////////////////
////////////////////////////////////
class Knight {
    constructor(x,y) {
        this.name="";
        this.id = 0;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.sword = null;
        this.spriteUp = new Animation(this.x, this.y, "knight_up_", 3, 17,32);
        this.spriteDown = new Animation(this.x, this.y, "knight_down_", 3, 17,32);
        this.spriteLeft = new Animation(this.x, this.y, "knight_left_", 3, 17,32);
        this.spriteRight = new Animation(this.x, this.y, "knight_right_", 3, 17,32);
        this.sprite = this.spriteUp;
        this.hit = null;
        this.counthit = 0;
        /////////////
        ///info nhan vat
        this.lv = 1;
        this.maxhp = 500;
        this.currhp = 500;
        this.currexp = 0;
        this.maxexp = 50;
        this.range = 48;
        this.basedame = 50;
        this.damedeal = this.basedame;
        this.buffspeed = 1;
        this.timespeed = 0;
        //////
        /////
        this.direction = 1;//bien luu huong di chuyen hien tai cua tank
    }
    checkCollision(rect1, rect2) {
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
            return true;
        }
        return false;
    }
    draw(context) {
        var hp = ((this.currhp/this.maxhp)*32).toFixed(0);
        if(this.sword != null)
        {
            this.sword.draw(context);
        }
        this.sprite.draw(context);
        if(this.hit != null)
        {
            this.hit.draw(context);
        }
        /////Thanh Mau
        context.beginPath();
        context.strokeStyle="black";
        context.lineWidth="2";
        context.rect(this.x,this.y-5,32,5);
        context.stroke();
        context.beginPath();
        context.fillStyle="red";
        context.rect(this.x,this.y-5,hp,5);
        context.fill();
        context.beginPath();
        context.font="12px Times New Roman";
        context.fillText(this.name,this.x,this.y-10,32);
    }
    update() {
        ///////
        // check buff//
        var rect1 = {x:this.x, y:this.y,width:32,height:32};
        for(var i = 0; i < arrBuff.length;i++)
        {
            var rect2 = {x:arrBuff[i].x,y:arrBuff[i].y,width:50,height:50};
            if(this.checkCollision(rect1,rect2) == true)
            {
                this.timespeed = 0;
                this.buffspeed = 2;
                socket.emit('buffed',{id:arrBuff[i].id});
                arrBuff.splice(i,1);
                break;
            }
        }
        if(this.buffspeed == 2)
        {
            this.timespeed ++;
            if(this.timespeed >= 250)
            {
                this.buffspeed = 1;
            }
        }
        for(var i = 0; i < otherPlayers.length;i++)
        {
            if(otherPlayers[i].sword != null)
            {
                rect2 = {x:otherPlayers[i].sword.x,y:otherPlayers[i].sword.y,width:otherPlayers[i].range,height:otherPlayers[i].range};
                if(this.checkCollision(rect1,rect2)==true)
                {
                    if(otherPlayers[i].sword.id != this.id)
                    {
                        this.hit = new Animation(this.x - 10, this.y-10,"hit_",3,3,50);
                    }
                }
            }
        }
        for(var i = 0; i < otherPlayers.length;i++)
        {
            if(otherPlayers[i].fireball != null)
            {
                rect2 = {x:otherPlayers[i].fireball.x,y:otherPlayers[i].fireball.y,width:50,height:50};
                if(this.checkCollision(rect1,rect2)==true)
                {
                    if(otherPlayers[i].fireball.id != this.id)
                    {
                        this.hit = new Animation(this.x - 10,this.y-10,"explosion_",10,3,50);
                        otherPlayers[i].fireball = null;
                    }
                }
            }
        }
        ///////
        // check move//
        var isMove = true;
        if (isMove == true) {
            this.x += this.speedX;
            this.y += this.speedY;
            this.sprite.x = this.x;
            this.sprite.y = this.y;
        }
        this.sprite.update(this.speedX, this.speedY);
        /////////////
        //check sword////
        if(this.hit != null)
        {
            this.counthit ++;
            if(this.counthit >= 20)
            {
                this.counthit = 0;
                console.log(this.currhp);
                this.hit = null;
            }
        }
        if(this.hit != null)
        {
            this.hit.update();
        }
        if(this.sword != null)
        {
            var rect1 = {x:this.sword.x, y:this.sword.y,width:this.range,height:this.range};
            for(var i = 0; i < arrMons.length;i++)
            {
                var rect2 = {x:arrMons[i].x,y:arrMons[i].y,width:32,height:32};
                if(this.checkCollision(rect1,rect2) == true)
                {
                    
                    this.hit = new Animation(arrMons[i].x-10,arrMons[i].y-10,"hit_",3,3,50);
                    arrMons[i].hp -= this.damedeal;
                    this.damedeal = 0;
                    if(arrMons[i].hp <=0)
                    {
                        this.currexp += 50;
                        arrMons.splice(i,1);
                    }
                    break;
                }
            }
            for(var i = 0;i<otherPlayers.length;i++)
            {
                var rect2 = {x:otherPlayers[i].x,y:otherPlayers[i].y,width:32,height:32};
                if(this.checkCollision(rect1,rect2) == true)
                {
                    if(this.sword.id != otherPlayers[i].id)
                    {
                        console.log(this.sword.id);
                        console.log(otherPlayers[i].id);
                        this.hit = new Animation(otherPlayers[i].x-10,otherPlayers[i].y-10,"hit_",3,3,50);
                        otherPlayers[i].currhp -= this.damedeal;
                        socket.emit('player_hp',{id:otherPlayers[i].id,hp:otherPlayers[i].currhp});
                        this.damedeal = 0;
                        if(otherPlayers[i].currhp <=0)
                        {
                            socket.emit('player_dead',{id:otherPlayers[i].id});
                            otherPlayers.splice(i,1);
                        }
                    }
                }
                break;
            }
        }
        if(this.sword != null)
        {
            this.sword.update();
            if(this.sword.x >= this.x+32 || this.sword.y >= this.y+32 || this.sword.x <= this.x-this.range || this.sword.y <= this.y-this.range)
            {
                this.sword = null;
            }
        }
        /////////////
        //check exp////
        if(this.currexp == this.maxexp)
        {
            this.lv ++;
            this.maxexp+=this.currexp;
            this.basedame += 20;
            this.currexp = 0;
            if(this.lv == 5)
            {
                this.range += 52;
            }
        }
    }

    move(direction) {
        if(this.sword==null)
        {
            switch (direction) {
                case 1://up
                    this.speedY = -2*this.buffspeed;
                    this.speedX = 0;
                    this.sprite = this.spriteUp;
                    this.direction = direction;
                    break;
                case 2://down
                    this.speedY = 2*this.buffspeed;
                    this.speedX = 0;
                    this.sprite = this.spriteDown;
                    this.direction = direction;
                    break;
                case 3://left
                    this.speedX = -2*this.buffspeed;
                    this.speedY = 0;
                    this.sprite = this.spriteLeft;
                    this.direction = direction;
                    break;
                case 4://right
                    this.speedX = 2*this.buffspeed;
                    this.speedY = 0;
                    this.sprite = this.spriteRight;
                    this.direction = direction;
                    break;
            }
        }
    }
    attack()
    {
        this.damedeal = this.basedame;
        if(this.sword == null)
        {
            switch(this.direction){
                case 1:
                    this.speedY = 0;
                    this.sword = new Sword(this.x-(this.range/2 - 16),this.y-((this.range/4)*3),this.direction,this.range);
                    this.sword.id = this.id;
                    break;
                case 2:
                    this.speedY = 0;
                    this.sword = new Sword(this.x-(this.range/2 - 16),this.y+(this.range/4),this.direction,this.range);
                    this.sword.id = this.id;
                    break;
                case 3:
                    this.speedX = 0;
                    this.sword = new Sword(this.x-(this.range/4*3),this.y-(this.range/2-16),this.direction,this.range);
                    this.sword.id = this.id;
                    break;
                case 4:
                    this.speedX = 0;
                    this.sword = new Sword(this.x+(this.range/4),this.y-(this.range/2-16),this.direction,this.range);
                    this.sword.id = this.id;
                    break;
            }
        }
    }
}
//////////////////////////
//////////////////////////
class Mage {
    constructor(x, y) {
        this.id = 0;
        this.maxhp = 500;
        this.currhp = 500;
        this.fireball = null;
        this.lv = 1;
        this.currexp=0;
        this.maxexp=50;
        this.damage = 50;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.spriteUp = new Animation(this.x, this.y, "mage_up_", 3, 17,32);
        this.spriteDown = new Animation(this.x, this.y, "mage_down_", 3, 17,32);
        this.spriteLeft = new Animation(this.x, this.y, "mage_left_", 3, 17,32);
        this.spriteRight = new Animation(this.x, this.y, "mage_right_", 3, 17,32);
        this.sprite = this.spriteUp;
        this.count =0 ;
        this.explosion =null;
        this.buffspeed = 0;
        this.timespeed = 0;
        // this.id = id;
        this.direction = 1; //Current direction
    }
    checkCollision(rect1, rect2) {
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
            return true;
        }
        return false;
    }
    update() {
        /////
        //check buff
        var rect1 = {x:this.x, y:this.y,width:32,height:32};
        for(var i = 0; i < arrBuff.length;i++)
        {
            var rect2 = {x:arrBuff[i].x,y:arrBuff[i].y,width:50,height:50};
            if(this.checkCollision(rect1,rect2) == true)
            {
                this.timespeed = 0;
                this.buffspeed = 5;
                socket.emit('buffed',{id:arrBuff[i].id});
                arrBuff.splice(i,1);
                break;
            }
        }
        for(var i = 0; i < otherPlayers.length;i++)
        {
            if(otherPlayers[i].sword != null)
            {
                rect2 = {x:otherPlayers[i].sword.x,y:otherPlayers[i].sword.y,width:otherPlayers[i].range,height:otherPlayers[i].range};
                if(this.checkCollision(rect1,rect2)==true)
                {
                    if(otherPlayers[i].sword.id != this.id)
                    {
                        this.explosion = new Animation(this.x - 10, this.y-10,"hit_",3,3,50);
                    }
                }
            }
        }
        for(var i = 0; i < otherPlayers.length;i++)
        {
            if(otherPlayers[i].fireball != null)
            {
                rect2 = {x:otherPlayers[i].fireball.x,y:otherPlayers[i].fireball.y,width:50,height:50};
                if(this.checkCollision(rect1,rect2)==true)
                {
                    if(otherPlayers[i].fireball.id != this.id)
                    {
                        this.explosion = new Animation(this.x - 10,this.y-10,"explosion_",10,3,50);
                        otherPlayers[i].fireball = null;
                    }
                }
            }
        }
        if(this.buffspeed > 0)
        {
            this.timespeed ++;
            if(this.timespeed >= 250)
            {
                this.buffspeed = 0;
            }
        }
        ////////////////////
        /////////
        if(this.explosion != null)
        {
            this.count ++;
            if(this.count >= 20)
            {
                this.count = 0;
                console.log(this.currhp);
                this.explosion = null;
            }
        }
        if (this.explosion != null)
        {
            this.explosion.update();
        }
        ///////
        //check fireball
        if (this.fireball != null) {
            var rect1 = {x:this.fireball.x, y:this.fireball.y,width:32,height:32};
            for (var i = 0; i < arrBrick.length; i++) {
                var rect2 = {x: arrBrick[i].x, y: arrBrick[i].y, width: 16, height: 16};
                if (this.checkCollision(rect1, rect2) == true) {
                    arrBrick.splice(i, 1);
                    this.fireball = null;
                    break;
                }
            }
            for(var i=0;i<arrTree.length;i++)
            {
                var rect2 = {x:arrTree[i].x, y: arrTree[i].y, width:16,height:16};
                if(this.checkCollision(rect1,rect2)==true)
                {
                    this.fireball = null;
                    break;
                }
            }
            for(var i = 0; i < arrMons.length;i++)
            {
                var rect2 = {x:arrMons[i].x,y:arrMons[i].y,width:32,height:32};
                if(this.checkCollision(rect1,rect2) == true)
                {
                    this.explosion = new Animation(arrMons[i].x -10,arrMons[i].y-10,"explosion_",10,3,50);
                    arrMons[i].hp -= this.damage;
                    console.log(arrMons[i].hp);
                    this.fireball = null;
                    if(arrMons[i].hp <=0)
                    {
                        this.currexp += 50;
                        socket.emit('monster_dead',{id:arrMons[i].id});
                        arrMons.splice(i,1);
                    }
                    break;
                }
            }
            for(var i = 0;i<otherPlayers.length;i++)
            {
                var rect2 = {x:otherPlayers[i].x,y:otherPlayers[i].y,width:32,height:32};
                if(this.checkCollision(rect1,rect2) == true)
                {
                    if(this.fireball.id != otherPlayers[i].id)
                    {
                        this.explosion = new Animation(otherPlayers[i].x - 10,otherPlayers[i].y-10,"explosion_",10,3,50);
                        otherPlayers[i].currhp -= this.damage;
                        this.fireball = null;
                        socket.emit('player_hp',{id:otherPlayers[i].id,hp:otherPlayers[i].currhp});
                        if(otherPlayers[i].currhp <=0)
                        {
                            socket.emit('player_dead',{id:otherPlayers[i].id});
                            otherPlayers.splice(i,1);
                        }
                    }
                }
                break;
            }
            if(this.fireball.x >= this.x + 192 ||this.fireball.y >= this.y +192 || this.fireball.x <= this.x -192 || this.fireball.y <= this.y -192 )
            {
                this.fireball =null;
            }
        }
        if (this.fireball != null) {
            this.fireball.update();
        }
        /////////////////////
        ////check move
        var isMove = true;
        var rect1 = {x: this.x + this.speedX, y: this.y + this.speedY, width: 32, height: 32};
        for (var i = 0; i < arrBrick.length; i++) {
            var rect2 = {x: arrBrick[i].x, y: arrBrick[i].y, width: 16, height: 16};
            if (this.checkCollision(rect1, rect2) == true) {
                isMove = false;
                break;

            }
        }
        for (var i = 0; i < arrWater.length; i++) {
            rect2 = {x: arrWater[i].x, y: arrWater[i].y, width: 32, height: 32};
            if (this.checkCollision(rect1, rect2) == true) {
                isMove = false;
                break;
            }
        }
        if (isMove == true) {
            this.x += this.speedX;
            this.y += this.speedY;
            this.sprite.x = this.x;
            this.sprite.y = this.y;
        }
        this.sprite.update(this.speedX,this.speedY);
        ////////////////////
        ///level
        if(this.currexp == this.maxexp)
        {
            this.lv += 1;
            console.log("level up "+this.lv);
            this.damage += 10;
            this.maxexp += this.currexp;
            this.currexp = 0;
        }
    }

    draw(context) {
        var hp = ((this.currhp/this.maxhp)*32).toFixed(0);
        this.sprite.draw(context);
        if (this.fireball != null) {
            this.fireball.draw(context);
        }
        if(this.explosion != null)
        {
            this.explosion.draw(context);
        }
        /////Thanh Mau
        context.beginPath();
        context.strokeStyle="black";
        context.lineWidth="2";
        context.rect(this.x,this.y-5,32,5);
        context.stroke();
        context.beginPath();
        context.fillStyle="red";
        context.rect(this.x,this.y-5,hp,5);
        context.fill();
        context.beginPath();
        context.font="12px Times New Roman";
        context.fillText(this.name,this.x,this.y-10,32);
    }

    move(direction) {
        switch (direction) {
            case 1://Move up
                this.speedY = -1-this.buffspeed;
                this.speedX = 0;
                this.sprite = this.spriteUp;
                this.direction = direction;
                break;
            case 2://Move down
                this.speedY = 1+this.buffspeed;
                this.speedX = 0;
                this.sprite = this.spriteDown;
                this.direction = direction;
                break;
            case 3://Move left
                this.speedX = -1-this.buffspeed;
                this.speedY = 0;
                this.sprite = this.spriteLeft;
                this.direction = direction;
                break;
            case 4://Move right
                this.speedX = 1+this.buffspeed;
                this.speedY = 0;
                this.sprite = this.spriteRight;
                this.direction = direction;
                break;
        }
    }
    attack() {
        if (this.fireball == null) {
            this.fireball = new FireBall(this.x, this.y, this.direction);
            this.fireball.id = this.id;
        }
    }
}
class Headstone{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.sprite = new Image();
        this.sprite.src = "animation/headstone.png";
    }
    draw(context)
    {
        context.drawImage(this.sprite,this.x,this.y);
    }
    move(direction)
    {
        
    }
    update()
    {}
}



