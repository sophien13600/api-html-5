const div = document.getElementById('canvas')
const context = div.getContext('2d')

context.fillStyle = 'blue'
const dimensions = [20, 20, 100, 20]


context.fillRect(...dimensions)

function clearCanvas() {
   
}
function deplacerDroite(){


    
    
    context.clearRect(...dimensions)
   
    
    dimensions[0]+=10
    context.fillRect(...dimensions)
}
function deplacerGauche(){


    
    console.log(dimensions[0]);
    
   
   
    
    dimensions[0]-= 10
    
    context.fillRect(...dimensions)
}

function deplacerHaut(){

    dimensions[1]-= 10
}