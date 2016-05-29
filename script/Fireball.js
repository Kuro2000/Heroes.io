/**
 * Created by Kuro on 5/29/2016.
 */
class Fireball{
    constructor(x,y,direction){
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speedX = 0;
        this.speedY = 0;
        this.spriteUp = new Image();
        this.spriteDown = new Image();
        this.spriteLeft = new Image();
        this.spriteRight = new Image();
        this.sprite = new Image();
        this.spriteUp.src="images/fireball_up_1.png";
        this.spriteDown.src="images/fireball_down_1.png";
        this.spriteLeft.src="images/fireball_left_1.png";
        this.spriteRight.src="images/fireball_right_1.png";
        this.sprite = this.spriteUp;
        switch(direction){
            case 1://up
                this.speedY = -6;
                this.sprite = this.spriteUp;
                break;
            case 2://down
                this.speedY = 6;
                this.sprite = this.spriteDown;
                break;
            case 3://left
                this.speedX = -6;
                this.sprite = this.spriteLeft;
                break;
            case 4://right
                this.speedX = 6;
                this.sprite = this.spriteRight;
                break;
        }
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
    draw(context){
        context.drawImage(this.sprite, this.x, this.y);
    }
}
