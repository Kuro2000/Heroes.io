/**
 * Created by Manh Tuan on 5/31/2016.
 */
class Speed{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.sprite = new Animation(this.x,this.y,"speed_up_",5,10,50);
    }
    update(){
        this.sprite.update();
    }
    draw(context)
    {
        this.sprite.draw(context);
    }
}