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

class Statue1{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 256;
        this.iy = 224;
        this.sprite = new Image();
        this.sprite.src = "environment/Dungeon_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,64,this.x,this.y,32,64);
    }
}

class Statue2{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 288;
        this.iy = 224;
        this.sprite = new Image();
        this.sprite.src = "environment/Dungeon_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,64,this.x,this.y,32,64);
    }
}

class Statue3{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 320;
        this.iy = 224;
        this.sprite = new Image();
        this.sprite.src = "environment/Dungeon_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,64,this.x,this.y,32,64);
    }
}

class Tower{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 256;
        this.iy = 192;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_C1.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 64,160,this.x,this.y,64,160);
    }
}

class Snow{
    constructor(x,y) {
        this.x = x*32;
        this.y = y*32;
        this.ix = 0;
        this.iy = 192;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_A5.png";
    }
    draw(context) {
        context.drawImage(this.sprite, this.ix, this.iy, 32, 32, this.x, this.y, 32, 32);
    }
}

class Dirt{
    constructor(x,y) {
        this.x = x*32;
        this.y = y*32;
        this.ix = 96;
        this.iy = 0;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_A2.png";
    }
    draw(context) {
        context.drawImage(this.sprite, this.ix, this.iy, 32, 32, this.x, this.y, 32, 32);
    }
}

class Well{
    constructor(x,y) {
        this.x = x*32;
        this.y = y*32;
        this.ix = 96;
        this.iy = 288;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B.png";
    }
    draw(context) {
        context.drawImage(this.sprite, this.ix, this.iy, 32, 32, this.x, this.y, 32, 32);
    }
}

class DragStatue{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 352;
        this.iy = 320;
        this.sprite = new Image();
        this.sprite.src = "environment/Inside_C.png"
    }
    draw(context) {
        context.drawImage(this.sprite, this.ix, this.iy, 64, 64, this.x, this.y, 64, 64)
    }
}

class BigTree{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 0;
        this.iy = 448;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 64,64,this.x,this.y,64,64);
    }
}

class Bush{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 192;
        this.iy = 384;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}

class Tent{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 256;
        this.iy = 320;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 96,96,this.x,this.y,96,96);
    }
}

class Bonfire_1{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 128;
        this.iy = 320;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}

class Bonfire_2{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 96;
        this.iy = 320;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}

class Trunk{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 128;
        this.iy = 352;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}

class Flower_1{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 32;
        this.iy = 352;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}

class Flower_2{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 96;
        this.iy = 384;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}

class StoneStep{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 128;
        this.iy = 288;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}

class Flower_4{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 320;
        this.iy = 160;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}


class Rock_1{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 224;
        this.iy = 352;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}


class Rock_2{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 224;
        this.iy = 384;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B1.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}

class WoodPile{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 64;
        this.iy = 416;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}

class RoadSign{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 32;
        this.iy = 288;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}

class WoodenTombstone{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 192;
        this.iy = 288;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B1.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}


class FuckedUpTree{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 256;
        this.iy = 160;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_B1.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,64,this.x,this.y,32,64);
    }
}

class Dirt1{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 0;
        this.iy = 96;
        this.sprite = new Image();
        this.sprite.src = "environment/Outside_A2.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}

class Table1{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 0;
        this.iy = 480;
        this.sprite = new Image();
        this.sprite.src = "environment/Inside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}

class Table2{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 32;
        this.iy = 480;
        this.sprite = new Image();
        this.sprite.src = "environment/Inside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}

class Table3{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 64;
        this.iy = 480;
        this.sprite = new Image();
        this.sprite.src = "environment/Inside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}

class Table4{
    constructor(x,y){
        this.x = x*32;
        this.y = y*32;
        this.ix = 96;
        this.iy = 480;
        this.sprite = new Image();
        this.sprite.src = "environment/Inside_B.png"
    }
    draw(context){
        context.drawImage(this.sprite,this.ix,this.iy, 32,32,this.x,this.y,32,32);
    }
}








