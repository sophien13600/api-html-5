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
/**
 * 
 * 
 * const div = document.getElementById('canvas')
const context = div.getContext("2d")

const step = 10


const dimensions = [20, 20, 100, 20]

context.fillStyle = 'blue'

context.fillRect(...dimensions)

function clearCanvas() {
    context.clearRect(...dimensions)
}
function right() {
    console.log(step + dimensions[0] + dimensions[2], div.width);

    if (step + dimensions[0] + dimensions[2] <= div.width) {
        context.clearRect(...dimensions)

        dimensions[0] += step
        context.fillRect(...dimensions)
        console.log(dimensions);
    } else {
        context.fillStyle = 'red'
        setTimeout(
            () => context.fillStyle = 'blue', 
            2000
        )
    }


}

 */