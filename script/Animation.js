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
