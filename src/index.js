const data = [
    {
        id: "1",
        title: "<span style='color:#d4445c; font-size:40px; font-weight:bold'>array.pop()</span><br><br>",
        description: "Este método é utilizado para <strong style='color: #d4445c'>remover</strong> o último elemento do array.<br><br>",
        example: "Considere o array: colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>]<br>",
        resolution: "Ao fazer uso do método 'colors.pop()' o array ficará: <br><br> colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>]"
    },
    {
        id: "2",
        title: "<span style='color:#d4445c; font-size:40px; font-weight:bold'>array.push(param)</span><br><br>",
        description: "Este método é usado para <strong style='color: #d4445c'>adicionar</strong> um elemento no final do array.<br><br>",
        example: "Considere o array: colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>]<br>",
        resolution: "Ao fazer uso do método 'colors.push(`Orange`)' o array ficará: <br><br> colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>, <span style='color: orange'>Orange</span>]"
    },
    {
        id: "3",
        title: "<span style='color:#d4445c; font-size:40px; font-weight:bold'>array.shift()</span><br><br>",
        description: "Este método é usado para <strong style='color: #d4445c'>remover</strong> um elemento no início do array.<br><br>",
        example: "Considere o array: colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>]<br>",
        resolution: "Ao fazer uso do método 'colors.shift()' o array ficará: <br><br> colors = [<span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>]"
    },
    {
        id: "4",
        title: "<span style='color:#d4445c; font-size:40px; font-weight:bold'>array.unshift(param)</span><br><br>",
        description: "Este método é usado para <strong style='color: #d4445c'>adicionar</strong> um elemento no início do array.<br><br>",
        example: "Considere o array: colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>]<br>",
        resolution: "Ao fazer uso do método 'colors.unshift(`Orange`)' o array ficará: <br><br> colors = [<span style='color: orange'>Orange</span>, <span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>]"
    },
    {
        id: "5",
        title: "<span style='color:#d4445c; font-size:40px; font-weight:bold'>array.concat(param)</span><br><br>",
        description: "Este método é usado para <strong style='color: #d4445c'>concatenar</strong> dois ou mais arrays distintos.<br><br>",
        example: "Considere os arrays: colorsA = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>]<br> e colorsB = [<span style='color:orange'>Orange</span>, <span style='color:purple'>Purple</span>]<br>",
        resolution: "Ao fazer uso do método const 'newColors = colorsA.concat(colorsB)' o array ficará: <br><br> newColors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>, <span style='color: orange'>Orange</span>, <span style='color: purple'>Purple</span>]"
    },
    {
        id: "6",
        title: "<span style='color:#d4445c; font-size:40px; font-weight:bold'>array.splice(param¹, param², param³...)</span><br><br>",
        description: "Este método é usado para <strong style='color: #d4445c'>adicionar</strong> elementos ao array.<br><br>O <span style='color:#d4445c'>param¹</span> representa a posição no array, aonde o(s) item(s) serão inserido(s).<br>O <span style='color:#d4445c'>param²</span> representa quantos elementos serão removidos do array, a partir da nova inserção.<br>O <span style='color:#d4445c'>param³</span> representa o(s) item(s) a inserir no array.<br><br>",
        example: "Considere o array: colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>]<br>",
        resolution: "Ao fazer uso do método 'colors.splice(2, 0, 'Orange', 'Purple')' o array ficará: <br><br> colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: orange'>Orange</span>, <span style='color: purple'>Purple</span>, <span style='color: blue'>Blue</span>]<br><br> <span style='font-size:20px; color:#d4445c'>``Lembrando que você poderá usar este método para remover elemtos de indíce específicos, basta por exemplo<br> fazer um 'array.splice(1, 2)' - Irá remover 2 elementos apartir do index 1.´´</span>"
    },
    {
        id: "7",
        title: "<span style='color:#d4445c; font-size:40px; font-weight:bold'>array.slice(param)</span><br><br>",
        description: "Este método é usado para <strong style='color: #d4445c'>criar</strong> um novo array, apartir do index indicado.<br><br>",
        example: "Considere o array: colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>]<br>",
        resolution: "Ao fazer uso do método 'newColors = colors.slice(1)' o array ficará: <br><br> newColors = [<span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>]<br>"
    },
    {
        id: "8",
        title: "<span style='color:#d4445c; font-size:40px; font-weight:bold'>array.toString()</span><br><br>",
        description: "Este método é usado para <strong style='color: #d4445c'>transformar</strong> o array em uma string, separada por virgulas.<br><br>",
        example: "Considere o array: colors = [<span style='color: red'>Red</span>, <span style='color: green'>Green</span>, <span style='color: blue'>Blue</span>]<br>",
        resolution: "Ao fazer uso do método 'colors.toString()' o array ficará: <br><br> Red,Green,Blue<br>"
    },
]

const getMethodMessage = document.getElementById('response')

function insertMethods(id) {
    toggleResponse()    
    getMethodMessage.innerHTML = `
    ${data[id - 1].title}
    ${data[id - 1].description}
    ${data[id - 1].example}
    ${data[id - 1].resolution}
    `
}

