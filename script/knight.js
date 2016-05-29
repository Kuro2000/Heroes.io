/**
 * Created by Do Dinh Tu on 5/29/2016.
 */
class Knight {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.speedx = 0;
        this.speedy = 0;
        this.spriteUp = new Animation(this.x, this.y, "knight_up_", 3, 17);
        this.spriteDown = new Animation(this.x, this.y, "knight_down_", 3, 17);
        this.spriteLeft = new Animation(this.x, this.y, "knight_left_", 3, 17);
        this.spriteRight = new Animation(this.x, this.y, "knight_right_", 3, 17);
        this.sprite = this.spriteUp;
        this.direction = 1;//bien luu huong di chuyen hien tai cua tank
    }

    draw(context) {
        this.sprite.draw(context);
    }

    update() {
        var isMove = true;
        if (isMove == true) {
            this.x += this.speedX;
            this.y += this.speedY;
        }
        this.sprite.update(this.x, this.y);
    }

    move(direction) {
        switch (direction) {
            case 1://up
                this.speedY = -4;
                this.speedX = 0;
                this.sprite = this.spriteUp;
                this.direction = direction;
                break;
            case 2://down
                this.speedY = 4;
                this.speedX = 0;
                this.sprite = this.spriteDown;
                this.direction = direction;
                break;
            case 3://left
                this.speedX = -4;
                this.speedY = 0;
                this.sprite = this.spriteLeft;
                this.direction = direction;
                break;
            case 4://right
                this.speedX = 4;
                this.speedY = 0;
                this.sprite = this.spriteRight;
                this.direction = direction;
                break;
        }
    }
}