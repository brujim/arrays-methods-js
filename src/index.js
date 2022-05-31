const colors = ['Red', 'Green', 'Blue']
const getMethodMessage = document.getElementById('response')
const data = [
    {
        id: "1",
        title: "<span style='color:#d4445c; font-size:40px; font-weight:bold'>array.pop()</span><br><br>",
        description: "Este método é utilizado para <strong style='color: #d4445c'>remover</strong> o último elemento do array.<br><br>",
        example: "Considere o array: colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>]<br><br>",
        resolution: "Ao fazer uso do método 'colors.pop()' o array ficará: <br><br> colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>]"
    },
    {
        id: "2",
        title: "<span style='color:#d4445c; font-size:40px; font-weight:bold'>array.push()</span><br><br>",
        description: "Este método é usado para <strong style='color: #d4445c'>adicionar</strong> um elemento no final do array.<br>",
        example: "Considere o array: colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>]<br><br>",
        resolution: "Ao fazer uso do método 'colors.push(`Orange`)' o array ficará: <br><br> colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>, <span style='color: orange'>Orange</span>]"
    }   
]



function insertMethods(id) {
    toggleResponse()
    getMethodMessage.innerHTML = `
    ${data[id - 1].title}
    ${data[id - 1].description}
    ${data[id - 1].example}
    ${data[id - 1].resolution}
    `
}


/*
function arrayUnshift() {
    colors.unshift('Orange')
    getMethodMessage.innerHTML = `
    Considere o array: colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>]<br><br>
    Este método é usado para <strong style='color: #d4445c'>adicionar</strong> um elemento ao seu array, em seu primeiro indíce, criando um novo array.<br>
    Vamos adicionar 'Orange' ao array:
    <br> <i>colors.unshift('Orange')</i>
    <br>Agora o array é: 
    ${
        "<span style='color: orange'>" + colors[0] + "</span>, " +
        "<span style='color: red'>" + colors[1] + "</span>, " +
        "<span style='color: green'>" + colors[2] + "</span>, " +
        "<span style='color: blue'>" + colors[3] + "</span>"
    } 
    ` 
    typeWriter(getMethodMessage)
    colors.shift()
}

function arrayShift() {
    getMethodMessage.innerHTML = `
    Considere o array: colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>]<br><br>
    Este método é utilizado para <strong style='color: #d4445c'>remover</strong> o primeiro elemento do array:
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

function arrayJoin() {
    getMethodMessage.innerHTML = `
    Considere o array: colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>]<br><br>
    Este método é usado para <strong style='color: #d4445c'>transformar</strong> o seu array em uma string, podendo acrescentar carácteres aos arrays.<br>
    Vamos adicionar '*' em cada elemento no array:
    <br> <i>colors.join('*')</i>
    <br>Agora o array é: 
    ${
        "<span style='color: red'>" + colors[0] + "</span> * " +
        "<span style='color: green'>" + colors[1] + "</span> * " +
        "<span style='color: blue'>" + colors[2] + "</span> * "
    } 
    ` 
    console.log(colors.join('*'))
}*/

