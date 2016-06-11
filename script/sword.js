/**
 * Created by Manh Tuan on 5/30/2016.
 */
class Sword{
    constructor(x,y,direction,range){
        this.id = 0;
        this.x = x;
        this.y = y;
        this.range = range;
        this.direction = direction;
        this.speedX = 0;
        this.speedY = 0;
        this.spriteUp = new Animation(this.x,this.y,"sword_up_",2,5,range);
        this.spriteDown = new Animation(this.x,this.y,"sword_down_",2,5,range);
        this.spriteLeft = new Animation(this.x,this.y,"sword_left_",2,5,range);
        this.spriteRight = new Animation(this.x,this.y,"sword_right_",2,5,range);
        this.sprite = this.spriteUp;
        switch(direction){
            case 1://up
                this.speedY = -1;
                this.sprite = this.spriteUp;
                break;
            case 2://down
                this.speedY = 1;
                this.sprite = this.spriteDown;
                break;
            case 3://left
                this.speedX = -1;
                this.sprite = this.spriteLeft;
                break;
            case 4://right
                this.speedX = 1;
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