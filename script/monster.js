/**
 * Created by Manh Tuan on 5/29/2016.
 */
class Chicken{
    constructor(x,y){
        this.id = 0;
        this.hp = 350;
        this.x=x;
        this.y=y;
        this.ix=48;
        this.iy=0;
        this.sprite = new Image();
        this.sprite.src = "animation/chicken.png"
    }
    draw(context)
    {
        context.drawImage(this.sprite,this.ix,this.iy,48,48,this.x,this.y,32,32);
    }
}