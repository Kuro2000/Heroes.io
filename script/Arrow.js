/**
 * Created by Kuro on 6/12/2016.
 */
class arrow{
    constructor(x,y,direction){
        this.id = 0;
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.speedX = 0;
        this.speedY = 0;
        this.spriteUp = new Animation(this.x,this.y,"arrow_up_",2,12,50);
        this.spriteDown = new Animation(this.x,this.y,"arrow_down_",2,12,50);
        this.spriteLeft = new Animation(this.x,this.y,"arrow_left_",2,12,50);
        this.spriteRight = new Animation(this.x,this.y,"arrow_right_",2,12,50);
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