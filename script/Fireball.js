/**
 * Created by Duy_2 on 2016-05-29.
 */

class FireBall{
    constructor(x,y,direction){
        this.id = 0;
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speedX = 0;
        this.speedY = 0;
        this.spriteUp = new Animation(this.x,this.y,"fireball_up_",4,12,50);
        this.spriteDown = new Animation(this.x,this.y,"fireball_down_",4,12,50);
        this.spriteLeft = new Animation(this.x,this.y,"fireball_left_",4,12,50);
        this.spriteRight = new Animation(this.x,this.y,"fireball_right_",4,12,50);
        this.sprite = this.spriteUp;
        switch(direction){
            case 1://up
                this.speedY = -3;
                this.sprite = this.spriteUp;
                break;
            case 2://down
                this.speedY = 3;
                this.sprite = this.spriteDown;
                break;
            case 3://left
                this.speedX = -3;
                this.sprite = this.spriteLeft;
                break;
            case 4://right
                this.speedX = 3;
                this.sprite = this.spriteRight;
                break;
        }
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        this.sprite.update(this.speedX,this.speedY);
        this.sprite.x = this.x;
        this.sprite.y = this.y;

    }
    draw(context){
        this.sprite.draw(context);
    }
}