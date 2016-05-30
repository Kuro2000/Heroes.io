/**
 * Created by Do Dinh Tu on 5/29/2016.
 */
class Knight {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.speedx = 0;
        this.speedy = 0;
        this.sword = null;
        this.spriteUp = new Animation(this.x, this.y, "knight_up_", 3, 17);
        this.spriteDown = new Animation(this.x, this.y, "knight_down_", 3, 17);
        this.spriteLeft = new Animation(this.x, this.y, "knight_left_", 3, 17);
        this.spriteRight = new Animation(this.x, this.y, "knight_right_", 3, 17);
        this.sprite = this.spriteUp;
        this.direction = 1;//bien luu huong di chuyen hien tai cua tank
    }

    draw(context) {
        this.sprite.draw(context);
        if(this.sword != null)
        {
            this.sword.draw(context);
        }
    }

    update() {
        var isMove = true;
        if (isMove == true) {
            this.x += this.speedx;
            this.y += this.speedy;
            this.sprite.x = this.x;
            this.sprite.y = this.y;
        }
        this.sprite.update(this.speedx, this.speedy);
        if(this.sword != null)
        {
            this.sword.update();
            if(this.sword.x >= this.x+32 || this.sword.y >= this.y+32 || this.sword.x <= this.x-32 || this.sword.y <= this.y-32)
            {
                this.sword = null;
            }
        }
    }

    move(direction) {
        switch (direction) {
            case 1://up
                this.speedy = -2;
                this.speedx = 0;
                this.sprite = this.spriteUp;
                this.direction = direction;
                break;
            case 2://down
                this.speedy = 2;
                this.speedX = 0;
                this.sprite = this.spriteDown;
                this.direction = direction;
                break;
            case 3://left
                this.speedx = -2;
                this.speedy = 0;
                this.sprite = this.spriteLeft;
                this.direction = direction;
                break;
            case 4://right
                this.speedx = 2;
                this.speedy = 0;
                this.sprite = this.spriteRight;
                this.direction = direction;
                break;
        }
    }
    strike()
    {
        if(this.sword == null)
        {
            switch(this.direction)
            {
                case 1:
                    this.sword = new Sword(this.x,this.y-16,this.direction);
                    break;
                case 2:
                    this.sword = new Sword(this.x,this.y+16,this.direction);
                    break;
                case 3:
                    this.sword = new Sword(this.x-16,this.y,this.direction);
                    break;
                case 4:
                    this.sword = new Sword(this.x+16,this.y,this.direction);
                    break;
            }
            
        }
    }
}