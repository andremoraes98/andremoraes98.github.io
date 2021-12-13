// 7 - adiciona a classe selected para a cor que for clicada dentro da paleta
let colorPalette = document.querySelector("#color-palette")
let colorSelected = document.querySelector(".selected")

colorPalette.addEventListener("click", selectColor)

function selectColor (event) { 
    colorSelected = document.querySelector(".selected")
    colorSelected.className ="color"
    event.target.className = "color selected"
}

// 8 - pinta os pixels com a cor da paleta que tem a classe selected
let pixelBoard = document.querySelector("#pixel-board")

pixelBoard.addEventListener("click", pintaPixel)

function pintaPixel (event) {
    colorSelected = document.querySelector(".selected")
    let paleteBackgroundColor = window.getComputedStyle(colorSelected).getPropertyValue('background-color')
    event.target.style.backgroundColor = paleteBackgroundColor
}

// 9 - botão pra limpar os pixels
let buttonClear = document.querySelector("#clear-board")

buttonClear.addEventListener("click", redefine)

function redefine () {
    let pixel = document.querySelectorAll(".pixel")
    for (let index = 0; index < pixel.length; index += 1 ) {
        pixel[index].removeAttribute("style")
    }
}

// 10 - inserir pixels com os valores que aparecem no input
let input = document.querySelector("input")
let buttonCreat = document.querySelector("#generate-board")

buttonCreat.addEventListener("click", alertInput)

function alertInput () {
    if (input.value === "") {
        alert("Board inválido!")
    } else {
        creatPixel(input.value)
    }
}
console.log(window.getComputedStyle(document.querySelector(".line")))
function creatPixel (newBoardSize) {
// 11 - se o numero inserido for menor que 5, o tamanho minimo tem que ser 5. Se for maior que 50, o o numero maior é 50
    if ( newBoardSize > 50 ) {
        newBoardSize = 50
    }
    let newLine = document.createElement('div')
    let sizePixelBoard = document.querySelectorAll(".line").length

    newLine.className = "line"

    for (let index = 0; index < newBoardSize - sizePixelBoard; index += 1 ) {
        const newLine = document.createElement('div')
        newLine.classList.add("line")
        pixelBoard.appendChild(newLine)
    } // criando a quantidade de divs line que colocada no input - 5 (sizePixelBoard)

    let childrenOfPixelBoard = pixelBoard.children
    
    
    for (let linha = newBoardSize-1; linha >= 0; linha -= 1 ) {
        for (let coluna = newBoardSize-1; coluna >= 0; coluna -= 1 ) {
            const newPx = document.createElement('div')
            newPx.classList.add("pixel")
            if (linha >= sizePixelBoard ) {
                childrenOfPixelBoard[linha].appendChild(newPx) // adicionando a quantidade de pixels que foi inserida no input em cada linha que foi criada dinamicamente
            } else if (coluna >= 5) {
                childrenOfPixelBoard[linha].appendChild(newPx) // adicionando pixels a mais para que a quantidade total seja equivalente a quantidade colocada no input
            }
        }
    }
}


// 12 - gerar cores aleatórias
let colors = document.querySelectorAll(".color")

for (let index = 1; index < colors.length; index += 1) {
    colors[index].style.backgroundColor = "rgb(" + (Math.random() * 255)+1+ ", " + (Math.random() * 255)+1 + ", " + (Math.random() * 255)+1 + ")"
}