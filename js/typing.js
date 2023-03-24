const textElement = document.getElementById('text')
const speedElement = document.getElementById('speed')
const text = "We Love Milfs"
let idx = 1
let speed = 300 / speedElement.value

speedElement.addEventListener('input', (element) => {
    speed = 300 / element.target.value
})

writeText()

function writeText() {
    textElement.innerText = text.slice(0,idx)
    idx++
    if (idx > text.length) {
        idx = 1
    }
    setTimeout(writeText, speed)
}

