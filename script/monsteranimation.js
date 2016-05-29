/**
 * Created by Manh Tuan on 5/29/2016.
 */
class GolemAnimation{
    constructor(x,y)
    {
        this.count = 0;
        this.speed = 10;
        this.x = x;
        this.y = y;
        this.ix =0;
        this.iy =0;
        this.sprite = new Image();
        this.sprite.src = "images/MixedGolem.png";
    }
    update()
    {
        this.count ++;
        console.log(this.count);
        if(this.count >= this.speed)
        {
            this.count = 0;
            if(this.ix<716)
            {
                this.ix +=179;
            }
            if(this.ix==716)
            {
                this.ix = 0;
            }
        }
    }
    draw(context)
    {
        context.drawImage(this.sprite,this.ix,this.iy,179,159,this.x,this.y,179,159);
    }
}