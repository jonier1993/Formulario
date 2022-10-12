let vector = "jOnIer"
let vectorMin = vector.toLowerCase()
let vectorMayus = vector.toUpperCase()
document.write(vector + "<br>" + vectorMin + "<br>" + vectorMayus + "<br>")

let letras = ["j", "H", "p", "N"]
let letrasMin = []
let letrasMayus = []
for(let i=0; i<letras.length; i++){
    letrasMin[i] = letras[i].toLowerCase()   
    letrasMayus[i] = letras[i].toUpperCase() 
}
document.write(letrasMin + "<br>" + letrasMayus + "<br>")

var matriz = [[1,5,2,7],[3,1,4,6],[0,1,5,2]];


for(let i=0; i<3; i++){

    for(let j=0; j<4; j++){
        document.write(" " + matriz[i][j]);
    }
}