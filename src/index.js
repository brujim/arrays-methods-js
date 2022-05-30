const colors = ['Red', 'Green', 'Blue']
const getVerifyArray = document.querySelector('.verify-message')
const getArrayPop = document.querySelector('.pop-message')

function verifyIsArrayOld() {

    getVerifyArray.innerHTML = `
        Get a validation if a variable is an Array
    with this old method:<br> <i>Object.prototype.toString.call(colors) === "[object Array]"</i>
    <br>Is array: <strong style='color: #9133FF'>true</strong>
    <br>The Array is:
    ${
        "<span style='color: red'>" + colors[0] + "</span>, " +
        "<span style='color: green'>" + colors[1] + "</span>, " +
        "<span style='color: blue'>" + colors[2] + "</span>"
    } 
    `
    const arrayTest = Object.prototype.toString.call(colors) === "[object Array]"
}

function verifyIsArrayNew() {
    getVerifyArray.innerHTML = `
    Get a validation if a variable is an Array
    with this new method:<br> <i>Array.isArray(colors)</i>
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
    getArrayPop.innerHTML = `
    This method is used to <strong>remove</strong> the last element from array:
    <br> <i>colors.pop()</i>
    <br>Removed element is: <strong style='color: blue'>${colors.pop()}</strong>
    <br>The Array is: 
    ${
        "<span style='color: red'>" + colors[0] + "</span>, " +
        "<span style='color: green'>" + colors[1] + "</span>"
    } 
    `   
    colors.push('Blue')
}

function arrayShift() {
    getArrayPop.innerHTML = `
    This method is used to <strong>remove</strong> the first element from array:
    <br> <i>colors.shift()</i>
    <br>Removed element is: <strong style='color: red'>${colors.shift()}</strong>
    <br>The Array is: 
    ${
        "<span style='color: green'>" + colors[0] + "</span>, " +
        "<span style='color: blue'>" + colors[1] + "</span>"
    } 
    ` 
    colors.unshift("Red")  
}

function arrayPush() {
    colors.push("Orange")
    getArrayPop.innerHTML = `
    This method is used to <strong>add</strong> on element at end of an array.<br>
    Consider we adding the orange color to own array:
    <br> <i>colors.push('Orange')</i>
    <br>Added color: <strong style='color: orange'>Orange</strong>
    <br>The Array is: 
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


