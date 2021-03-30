class Brick{
    constructor(x,y,strength){
        this.body=createSprite(x,y,25,90);
        this.color=strength;
        this.body.shapeColor=this.color;
    }
    display(){
        
        drawSprites();
    }
    destroy(){
        this.body.destroy();
    }

}