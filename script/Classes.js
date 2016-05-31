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
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.sword = null;
        this.countsword=0;
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
        this.currexp = 0;
        this.maxexp = 50;
        this.range = 48;
        this.damage = 50;
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
        if(this.sword != null)
        {
            this.sword.draw(context);
        }
        if(this.hit != null)
        {
            this.hit.draw(context);
        }
        this.sprite.draw(context);
    }
    update() {
        if(this.hit != null)
        {
            this.counthit ++;
            if(this.counthit >= 20)
            {
                this.counthit = 0;
                this.hit = null;
            }
        }
        var isMove = true;
        if(this.hit != null)
        {
            this.hit.update();
        }
        if (isMove == true) {
            this.x += this.speedX;
            this.y += this.speedY;
            this.sprite.x = this.x;
            this.sprite.y = this.y;
        }
        if(this.sword != null)
        {
            var rect1 = {x:this.sword.x, y:this.sword.y,width:this.range,height:this.range};
            for(var i = 0; i < arrMons.length;i++)
            {
                var rect2 = {x:arrMons[i].x,y:arrMons[i].y,width:179,height:159};
                if(this.checkCollision(rect1,rect2) == true)
                {
                    this.countsword++;
                    if(this.countsword >= 8)
                    {
                        this.hit = new Animation(arrMons[i].x+50,arrMons[i].y+50,"hit_",3,8,70);
                        this.countsword = 0;
                        arrMons[i].hp -= this.damage;
                        console.log(arrMons[i].hp);
                    }
                    if(arrMons[i].hp <=0)
                    {
                        this.currexp += 50;
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
            if(this.sword.x >= this.x+32 || this.sword.y >= this.y+32 || this.sword.x <= this.x-this.range || this.sword.y <= this.y-this.range)
            {
                this.sword = null;
            }
        }
        if(this.currexp == this.maxexp)
        {
            this.lv ++;
            this.maxexp+=this.currexp;
            this.damage += 20;
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
                    this.speedY = -2;
                    this.speedX = 0;
                    this.sprite = this.spriteUp;
                    this.direction = direction;
                    break;
                case 2://down
                    this.speedY = 2;
                    this.speedX = 0;
                    this.sprite = this.spriteDown;
                    this.direction = direction;
                    break;
                case 3://left
                    this.speedX = -2;
                    this.speedY = 0;
                    this.sprite = this.spriteLeft;
                    this.direction = direction;
                    break;
                case 4://right
                    this.speedX = 2;
                    this.speedY = 0;
                    this.sprite = this.spriteRight;
                    this.direction = direction;
                    break;
            }
        }
    }
    attack()
    {
        if(this.sword == null)
        {
            switch(this.direction){
                case 1:
                    this.speedY = 0;
                    this.sword = new Sword(this.x-(this.range/2 - 16),this.y-((this.range/4)*3),this.direction,this.range);
                    break;
                case 2:
                    this.speedY = 0;
                    this.sword = new Sword(this.x-(this.range/2 - 16),this.y+(this.range/4),this.direction,this.range);
                    break;
                case 3:
                    this.speedX = 0;
                    this.sword = new Sword(this.x-(this.range/4*3),this.y-(this.range/2-16),this.direction,this.range);
                    break;
                case 4:
                    this.speedX = 0;
                    this.sword = new Sword(this.x+(this.range/4),this.y-(this.range/2-16),this.direction,this.range);
                    break;
            }
        }
    }
}
//////////////////////////
//////////////////////////
class Mage {
    constructor(x, y) {
        this.fireball = null;
        this.lv = 1;
        this.currexp=0;
        this.maxexp=50;
        this.damage = 50;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.spriteUp = new Animation(this.x, this.y, "mage_up_", 3, 17);
        this.spriteDown = new Animation(this.x, this.y, "mage_down_", 3, 17);
        this.spriteLeft = new Animation(this.x, this.y, "mage_left_", 3, 17);
        this.spriteRight = new Animation(this.x, this.y, "mage_right_", 3, 17);
        this.sprite = this.spriteUp;
        this.count =0 ;
        this.explosion =null;
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
        if(this.explosion != null)
        {
            this.count ++;
            if(this.count >= 20)
            {
                this.count = 0;
                this.explosion = null;
            }
        }
        var isMove = true;
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
                var rect2 = {x:arrMons[i].x,y:arrMons[i].y,width:179,height:159};
                if(this.checkCollision(rect1,rect2) == true)
                {
                    this.explosion = new Animation(arrMons[i].x + 50,arrMons[i].y+50,"explosion_",10,3);
                    arrMons[i].hp -= this.damage;
                    console.log(arrMons[i].hp);
                    this.fireball = null;
                    if(arrMons[i].hp <=0)
                    {
                        this.currexp += 50;
                        arrMons.splice(i,1);
                    }
                    break;
                }
            }

            if(this.fireball.x >= this.x + 192 ||this.fireball.y >= this.y +192 || this.fireball.x <= this.x -192 || this.fireball.y <= this.y -192 )
            {
                this.fireball =null;
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
        if (this.explosion != null)
        {
            this.explosion.update();
        }
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
        this.sprite.draw(context);
        if (this.fireball != null) {
            this.fireball.draw(context);
        }
        if(this.explosion != null)
        {
            this.explosion.draw(context);
        }
    }

    move(direction) {
        switch (direction) {
            case 1://Move up
                this.speedY = -1;
                this.speedX = 0;
                this.sprite = this.spriteUp;
                this.direction = direction;
                break;
            case 2://Move down
                this.speedY = 1;
                this.speedX = 0;
                this.sprite = this.spriteDown;
                this.direction = direction;
                break;
            case 3://Move left
                this.speedX = -1;
                this.speedY = 0;
                this.sprite = this.spriteLeft;
                this.direction = direction;
                break;
            case 4://Move right
                this.speedX = 1;
                this.speedY = 0;
                this.sprite = this.spriteRight;
                this.direction = direction;
                break;
        }
    }
    attack() {
        if (this.fireball == null) {
            this.fireball = new FireBall(this.x, this.y, this.direction);
        }
    }
}




