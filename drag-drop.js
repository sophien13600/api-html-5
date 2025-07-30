const draggable = document.querySelector('#draggable')
const dropper = document.querySelector('#dropper')

const sendData = (e) => {
    console.log('sendData');
    e.dataTransfer.setData('text/plain', draggable.textContent)
}

const receiveData = (e) => {
    const data = e.dataTransfer.getData('text/plain')
    if (!dropper.textContent.includes(data)) {
        dropper.textContent = `${data} ${dropper.textContent}`
    }
    dropper.removeEventListener('dragover',makeDropper)
}
const makeDropper = (e) => {
    e.preventDefault()
}


dropper.addEventListener('dragover',makeDropper)


dropper.addEventListener('dragenter', () => {
    dropper.style['background-color'] = 'pink'
})
dropper.addEventListener('dragleave', () => {
    dropper.style['background-color'] = 'goldenrod'
})

draggable.addEventListener('dragstart', sendData)

dropper.addEventListener('drop', receiveData)

