/**
 * Created by Duy_2 on 2016-05-29.
 */

class Grass{
    constructor(i,j){
        this.x = j*32;
        this.y = i*32;
        this.sprite = new Image();
        this.sprite.src = "environment/grass.png"
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y)
    }
}

class Tree{
    constructor(i,j){
        this.x = j*32;
        this.y = i*32;
        this.sprite = new Image();
        this.sprite.src = "environment/trees.png"
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y)
    }
}

class Brick{
    constructor(i,j){
        this.x = j*32;
        this.y = i*32;
        this.sprite = new Image();
        this.sprite.src = "environment/brick.png"
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y)
    }
}

class GoldBrick{
    constructor(i,j){
        this.x = j*32;
        this.y = i*32;
        this.sprite = new Image();
        this.sprite.src = "environment/gold_brick.png"
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y)
    }
}

class Water{
    constructor(i,j){
        this.x = j*32;
        this.y = i*32;
        this.sprite = new Animation(this.x,this.y,"water_",2,8);
    }
    update(){
        this.sprite.update();
    }
    draw(context) {
        this.sprite.draw(context);
    }
}

class Stone{
    constructor(i,j){
        this.x = j*32;
        this.y = i*32;
        this.sprite = new Image();
        this.sprite.src = "environment/stone.png"
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y)
    }
}

class CobbleStone{
    constructor(i,j){
        this.x = j*32;
        this.y = i*32;
        this.sprite = new Image();
        this.sprite.src = "environment/cobblestone.png"
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y)
    }
}

class Dirt{
    constructor(i,j){
        this.x = j*32;
        this.y = i*32;
        this.sprite = new Image();
        this.sprite.src = "environment/dirt.png"
    }
    draw(context) {
        context.drawImage(this.sprite, this.x, this.y)
    }
}





