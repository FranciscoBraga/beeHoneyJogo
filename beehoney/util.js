class Obj{
     
    frame = 1
    timer = 0

    constructor(x,y,width,height,color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    Draw(){
        let img = new Image()
        img.src = this.color
        canvas.drawImage(img,this.x, this.y,this.width,this.height)
        /*Desenhando 
         canvas.fillStyle = this.color
         canvas.fillRect(this.x, this.y, this.width,this.height)
        */
    }

    Animation(name,limit){
        this.timer +=1
        if(this.timer > 10){
            this.timer = 0
            this.frame +=1
        }
        if(this.frame > limit){
            this.frame  = 1
        }
        this.color  = "assets/"+name+this.frame+".png"
    }
}
class Bee extends Obj{
    dir = 0
    Move(){
        this.x +=  this.dir
    }
}

class Spider extends Obj{
    Move(){
        this.y +=2
        if(this.y > 720){
            this.y = -10
            this.x = Math.random()*(320-0)
        }
    }

}

class Bg extends Obj{
    Move(speed,limit,pos){
        this.y += speed
        if(this.y > limit){
            this.y = pos 
        }
    }
 }

class Florwer extends Spider{
 }
