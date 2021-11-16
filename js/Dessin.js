var score = 1;
class Dessin{
    constructor(canvas){
        this.draw = false
        this.prevX = 0
        this.prevY = 0

        this.canvas = document.querySelector(canvas)
        this.ctx = this.canvas.getContext("2d")
        this.ctx.strokeStyles = "black"
        this.ctx.lineWidth = 2

        this.canvas.addEventListener("mousedown", (e) =>{
            //je dessine
            this.draw=true

            //je stock mes coordonenr de depart
            this.prevX = (e.clientX-this.canvas.offsetLeft)*400 / this.canvas.clientWidth;
            this.prevY = (e.clientY-this.canvas.offsetTop)*400 / this.canvas.clientHeight;
        })

        this.canvas.addEventListener("mousemove", (e) => {
            if(this.draw){
                //recuperation de la valeur de la ou la sourit ce trouve actuellement
                let currX = (e.clientX-this.canvas.offsetLeft)*400 / this.canvas.clientWidth;
                //calcule coordonner
                let currY = (e.clientY-this.canvas.offsetTop)*400 / this.canvas.clientHeight;
                //on dessine
                this.dessine(this.prevX, this.prevY, currX, currY)

                //on stock les nvll coordonner
                this.prevX = currX
                this.prevY = currY
            }
        })

        this.canvas.addEventListener("mouseup", ()=>{
            this.draw = false
        })

        this.canvas.addEventListener("mouseout", ()=>{
            this.draw = false
        })
    }

    dessine(depX, depY, destX, destY){
        this.ctx.beginPath()
        this.ctx.moveTo(depX, depY)
        this.ctx.lineTo(destX, destY)
        this.ctx.closePath()
        this.ctx.stroke()
    }

    setColor(color){
        this.ctx.strokeStyle = color
        let divi= document.getElementById("lol")
        divi.innerHTML = "<h1>Couleur choisi "+ color+"</h1>"
        // divi.createElement("h2")
    }
    
    biggerStroke(){
        this.ctx.lineWidth++;
        let divi= document.getElementById("h2")
        score++;
        divi.innerHTML = "<h2>Taille actuel du pinceaux "+ score+" px</h2>"
    }

    smallerStroke(){
        this.ctx.lineWidth = (this.ctx.lineWidth > 1)? this.ctx.lineWidth -1 : 1
        let divi= document.getElementById("h2")
        if(score > 1){
        score--;
        }
        divi.innerHTML = "<h2>Taille actuel du pinceaux "+ score+" px</h2>"
    }

    erase(){
        //Eface absolument tout
        confirm("vous aller tout effacer ete vous sure de vous")
        if(confirm==true){
            erase()
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    }
}