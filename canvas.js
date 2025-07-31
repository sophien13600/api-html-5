const div = document.getElementById('canvas')
const context = div.getContext('2d')

context.fillStyle = 'blue'
const dimensions = [20, 20, 100, 20]
const initialColor = 'blue'



context.fillRect(...dimensions)

function clearCanvas() {
   
}
function deplacerDroite(){

    console.log(10+ dimensions[0] + dimensions[2], div.width);

    if (10 + dimensions[0] + dimensions[2] <= div.width) {
        context.clearRect(...dimensions)

        dimensions[0] += 10
        context.fillRect(...dimensions)
        console.log(dimensions);
    }
    else {

        changeColor('red')
        setTimeout(
            () => changeColor(),
            2000
        )
    }
}
function changeColor(color = initialColor) {
    context.clearRect(...dimensions)
    context.fillStyle = color
    context.fillRect(...dimensions)
}

function deplacerGauche(){
    console.log(dimensions[0]);
    context.clearRect(...dimensions)
    dimensions[0]-= 10
    context.fillRect(...dimensions)
}

function deplacerBas(){
    context.clearRect(...dimensions)
    dimensions[1]+= 10
    context.fillRect(...dimensions)
}
function deplacerHaut(){
    context.clearRect(...dimensions)
    dimensions[1]-= 10
    context.fillRect(...dimensions)
    
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