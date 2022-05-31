const colors = ['Red', 'Green', 'Blue']
const getMethodMessage = document.getElementById('response')

function verifyIsArrayNew() {
    getMethodMessage.innerHTML = `
    Faz uam verificação em determinada váriavel para
    determinar se é um array:<br> <i>Array.isArray(colors)</i>
    <br>Is array: <strong style='color: #9133FF'>true</strong>
    <br>The Array is: 
    ${
        "<span style='color: red'>" + colors[0] + "</span>, " +
        "<span style='color: green'>" + colors[1] + "</span>, " +
        "<span style='color: blue'>" + colors[2] + "</span>"
    } 
    `

}

function arrayPop() {
    getMethodMessage.innerHTML = `
    Considere o array: colors = [Red, Green, Blue]<br><br>
    Este método é usado para <strong>remover</strong> o último elemento do array:
    <br> <i>colors.pop()</i>
    <br>O elemento removido foi: <strong style='color: blue'>${colors.pop()}</strong>
    <br>Agora o array é: 
    ${
        "<span style='color: red'>" + colors[0] + "</span>, " +
        "<span style='color: green'>" + colors[1] + "</span>"
    } 
    `   
    colors.push('Blue')
}

function arrayShift() {
    getMethodMessage.innerHTML = `
    Considere o array: colors = [Red, Green, Blue]<br><br>
    Este método é utilizado para <strong>remover</strong> o primeiro elemento do array:
    <br> <i>colors.shift()</i>
    <br>Elemento removido: <strong style='color: red'>${colors.shift()}</strong>
    <br>Agora o array é: 
    ${
        "<span style='color: green'>" + colors[0] + "</span>, " +
        "<span style='color: blue'>" + colors[1] + "</span>"
    } 
    ` 
    colors.unshift("Red")  
}

function arrayPush() {
    colors.push("Orange")
    getMethodMessage.innerHTML = `
    Considere o array: colors = [Red, Green, Blue]<br><br>
    Este método é usado para <strong>adicionar</strong> um elemento no final do array.<br>
    Vamos adicionar 'Orange' no array:
    <br> <i>colors.push('Orange')</i>
    <br>Cor adicionada: <strong style='color: orange'>Orange</strong>
    <br>Agora o array é: 
    ${
        "<span style='color: red'>" + colors[0] + "</span>, " +
        "<span style='color: green'>" + colors[1] + "</span>, " +
        "<span style='color: blue'>" + colors[2] + "</span>, " +
        "<span style='color: orange'>" + colors[3] + "</span>, "
    } 
    ` 
    colors.pop()
}

console.log(colors)


