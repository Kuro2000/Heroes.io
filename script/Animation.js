/**
 * Created by Duy_2 on 2016-05-29.
 */

class Animation{
    constructor(x,y,name,number,speed,size) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.size = size;
        this.countFrame = number;
        this.sprites = new Array();
        this.index = 0;
        for (var i = 1; i <= number; i++) {
            var image = new Image();
            var dir = "animation/" + name + i + ".png";
            image.src = dir;
            this.sprites.push(image);
        }
        this.count = 0;
        this.speed = speed;
    }

    update(speedX,speedY){
        if(speedX != 0 || speedY !=0) {
            this.count++;
            if (this.count >= this.speed) {
                this.count = 0;
                this.index++;
                this.index = this.index % this.countFrame;
            }
        }
    }

    draw(context){
        context.drawImage(this.sprites[this.index],this.x,this.y,this.size,this.size);
    }
}
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
        this.sprite.src = "animation/MixedGolem.png";
    }
    update()
    {
        this.count ++;
        if(this.count >= this.speed)
        {
            this.count = 0;
            if(this.ix<=716)
            {
                this.ix +=179;
            }
            if(this.ix>716)
            {
                this.ix = 0;
                this.iy +=159;
            }
            if(this.ix >= 537 && this.iy >=318)
            {
                this.ix = 0;
                this.iy = 0;
            }
        }
    }
    draw(context)
    {
        context.drawImage(this.sprite,this.ix,this.iy,179,159,this.x,this.y,179,159);
    }
}
