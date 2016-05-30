/**
 * Created by Manh Tuan on 5/29/2016.
 */
class Golem{
    constructor(x,y){
        this.hp = 350;
        this.sx = x;
        this.sy = y;
        this.x=x;
        this.y=y;
        this.move = 0;
        this.count = 0;
        this.spcdirection = 50;
        this.sprite = new GolemAnimation(this.x,this.y);
    }
    draw(context)
    {
        this.sprite.draw(context);
    }
    update()
    {
        this.count ++;
        if(this.count > this.spcdirection)
        {
            this.count = 0;
            this.move = Math.floor((Math.random() * 4) + 1);
        }
        switch(this.move){
            case 1:
                //move right
                if(this.x <= this.sx + 70)
                {
                    this.sprite.update();
                    this.x += 1;
                    this.sprite.x +=1;
                }
                break;
            case 2:
                if(this.x >= this.sx -70)
                {
                    this.sprite.update();
                    this.x -= 1;
                    this.sprite.x -=1;
                }
                break;
            case 3:
                if(this.y <= this.sy + 70)
                {
                    this.sprite.update();
                    this.y += 1;
                    this.sprite.y +=1;
                }
                break;
            case 4:
                if(this.y >= this.sy -70)
                {
                    this.sprite.update();
                    this.y -= 1;
                    this.sprite.y -= 1;
                }
                break;
        }
    }
}