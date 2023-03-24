const textElement = document.getElementById('text')
const speedElement = document.getElementById('speed')
const text = "We Love Milfs"
let idx = 1
let speed = 300

writeText()

function writeText() {
    textElement.innerText = text.slice(0,1)
}