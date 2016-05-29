class Animation {
    constructor(x,y,name,number,speed) {
        this.count = 0;
        this.speed = speed;
        this.countframe = number;
        this.x = x;
        this.y = y;
        this.sprites = new Array();
        this.index = 0;
        for(var i = 1; i <= number; i++) {
            var image = new Image();
            var dir = "animation/" + name + i + ".png";
            image.src = dir;
            this.sprites.push(image);
        }
    }
    update(x,y) {
        this.count++;
        this.x = x;
        this.y = y;
        if (this.count >= this. speed) {
            this.index++;
            this.count = 0;

            this.index = this.index % this.countframe;
        }
    }
    draw(context) {
        context.drawImage(this.sprites[this.index],this.x,this.y);
    }
}
