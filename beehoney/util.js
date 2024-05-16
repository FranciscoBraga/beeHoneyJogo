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
    lifes = 3 
    pts = 0
    Move(){
        this.x +=  this.dir
    }

    Collider(Obj){
        if(this.x < Obj.x + Obj.width && this.x +this.width > Obj.x ){
           if (this.y < Obj.y + Obj.height && this.y + this.height > Obj.y ){
             return true
           }else{
            return false
           }  
        }
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

    respaw(){
        this.y = -50
        this.x = Math.random()*(320-0)
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
    
    respaw(){
        this.y = -50
        this.x = Math.random()*(320-0)
    }
}

class Text {
   Draw(text,x,y){
    canvas.font ="40px Arial"
    canvas.fillStyle = "white"
    canvas.fillText(text,x,y)
   } 
}





