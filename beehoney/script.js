let canvas = document.getElementById("canvas").getContext("2d")

let bg = new Bg(0,0,400,620,"assets/bg.png")
let bg2 = new Bg(0,-620,400,620,"assets/bg.png")
let florwer = new Florwer(0,-620,50,60,"assets/bg.png")
let bee = new Bee(100,300,80,80,"assets/bee1.png")
let spider = new Spider(100,100,80,80,"assets/spider1.png")

document.addEventListener("keydown",function(e){
    if(e.key === "a"){
        bee.dir = -1
    }else if(e.key === "d"){
        bee.dir = 1
    }
})
document.addEventListener("keyup",function(e){
    if(e.key === "a"){
        bee.dir = 0
    }else if(e.key === "d"){
        bee.dir = 0
    }
})

function Draw(){
    bg.Draw()
    bg2.Draw()
    bee.Draw()
    spider.Draw()
    florwer.Draw()
}

function Update(){
    bg.Move(3,620,0)
    bg2.Move(3,0,-620)
    bee.Move()
    bee.Animation("bee",4)
    spider.Move()
    spider.Animation("spider",4)
    florwer.Move()
    florwer.Animation("florwer",2)
}

function Main(){
    canvas.clearRect(0,0,1280,720);
    Update();
    Draw();
}

setInterval(Main, 10)