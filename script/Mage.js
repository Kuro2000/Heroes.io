/**
 * Created by Kuro on 5/29/2016.
 */
class Mage {
    constructor(x,y,id){
        this.fireball = null;
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.spriteUp = new Animation(this.x,this.y,"mage_up_",2,17);
        this.spriteDown = new Animation(this.x,this.y,"mage_down",2,17);
        this.spriteLeft =new Animation(this.x,this.y,"mage_left",2,17);
        this.spriteRight =new Animation(this.x,this.y,"mage_right",2,17);
        this.sprite = this.spriteUp;
        this.id = id;
        this.direction = 1; //Current direction
}

    update() {
        var isMove = true;
        /* if (this.fireball != null) {
         var rect1 = {x:this.fireball.x, y:this.fireball.y,width:8,height:8};
         for (var i = 0; i < arrBrick.length; i++) {
         var rect2 = {x: arrBrick[i].x, y: arrBrick[i].y, width: 16, height: 16};
         if (this.checkCollision(rect1, rect2) == true) {
         arrBrick.splice(i, 1);
         this.fireball = null;
         break;
         }
         }
         for(var i=0;i<arrSteel.length;i++)
         {
         var rect2 = {x:arrSteel[i].x, y: arrSteel[i].y, width:16,height:16};
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
         for (var i = 0; i < arrSteel.length; i++) {
         rect2 = {x: arrSteel[i].x, y: arrSteel[i].y, width: 16, height: 16};
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
         }*/
        if (isMove == true) {
            this.x += this.speedX;
            this.y += this.speedY;
        }
        this.sprite.update(this.x,this.y);
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
                this.speedY = -4;
                this.speedX = 0;
                this.sprite = this.spriteUp;
                this.direction = direction;
                break;
            case 2://Move down
                this.speedY = 4;
                this.speedX = 0;
                this.sprite = this.spriteDown;
                this.direction = direction;
                break;
            case 3://Move left
                this.speedX = -4;
                this.speedY = 0;
                this.sprite = this.spriteLeft;
                this.direction = direction;
                break;
            case 4://Move right
                this.speedX = 4;
                this.speedY = 0;
                this.sprite = this.spriteRight;
                this.direction = direction;
                break;
        }
    }
    shoot() {
        if (this.fireball == null) {
            this.fireball = new fireball(this.x + 13, this.y + 13, this.direction);
        }
    }
}
