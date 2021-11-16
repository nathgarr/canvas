score=1
window.onload=()=>{
    //on craft la palette
    document.querySelectorAll("#palette div").forEach(element =>{
        //on met les couleurs
        element.style.backgroundColor = element.dataset.color
        //On écoute le click
        element.addEventListener("click", () => {
            canvas.setColor(element.dataset.color)
        })
    })
    // on charge le canvas
    let canvas = new Dessin("#feuille");

    //click sur le +
    document.querySelector("#plus").addEventListener("click", () => {
        canvas.biggerStroke()
    })
    //click sur le moin
    document.querySelector("#moins").addEventListener("click", () => {
        canvas.smallerStroke()
    })
    //click sur la gomme
    document.querySelector("#gomme").addEventListener("click", () => {
        canvas.setColor("white")
        let divi= document.getElementById("h2")
        divi.innerHTML = "<h2>Taille actuel de la gomme "+ score+" px</h2>"
    })
    //click sur la croix
    document.querySelector("#effacer").addEventListener("click", () => {
        canvas.erase()
    })
}
