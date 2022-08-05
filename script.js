// Your code here

// const tr = document.querySelector('tr')
// const td = document.querySelector('td')

// const newTr = document.createElement('tr')
// const newTd = document.createElement('td')
// tr.appendChild(td)

const select = document.querySelector('select')
const table = document.getElementsByTagName('table')[0]
const button = document.getElementById('add-row')
let curColor = 'red'
let mouseDown = false

function makeRow() {
    const row = document.createElement('tr')
    for (let i = 0; i < 20; i++) {
        const td = document.createElement('td')
        row.appendChild(td)
    }
    table.appendChild(row)
}

function colorize(event) {
   console.log(event)
    if (event.target.tagName === 'TD' && mouseDown) {
     
        if (event.target.className.length) {
        
            event.target.className = ''
        }   else {
            event.target.className = curColor
        }
    }
}

function colorize2(event) {
     if (event.target.tagName === 'TD') {
     
        if (event.target.className.length) {
        
            event.target.className = ''
        }   else {
            event.target.className = curColor
        }
    }
}


function checkMouseDown() {
    mouseDown = true
}

function checkMouseUp() {
    mouseDown = false
}

function changeColor(event) {
    curColor = event.target.value.toString()
}

button.addEventListener('click', makeRow)
document.addEventListener('mousedown', checkMouseDown)
document.addEventListener('mouseup', checkMouseUp)
table.addEventListener('mouseover', colorize)
table.addEventListener('click', colorize2)

select.addEventListener('change', changeColor)

