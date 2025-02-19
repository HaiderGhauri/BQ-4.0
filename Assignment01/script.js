// alert("Welcome to my website")

const inputField = document.getElementById("input-pass")
const subBtn = document.getElementById("sub-btn")

subBtn.addEventListener('click', () => {
    if (inputField.value.length < 6) {
        alert("please enter a valid password")
    }
    inputField.value = ""
})

// alert("Hello")
// alert("Welcome")
// alert("How are you doing")

// const username = "username"

// const myName = "Haider Ghauri"

// const message = "Hello World"
// alert(message)

// const name = "Ali"
// const age = 18
// const education = "Inter"
// alert(`Name: ${name}`)
// alert(`Age: ${age}`)
// alert(`Education: ${education}`)

// const email = "haiderghauri@gmail.com"
// alert(email + " this is my email")

//    -----------------------

const message = document.getElementById("message")
const name = "John Doe"
const title = "T-shirt(s)"
const quantity = "5"
const store = "XYZ Clothing Store"
message.innerText = name + " ordered " + quantity + title + " on " + store
// console.log(name + " ordered " + quantity + title + " on " + store);

// let a = 1, b = 2, c = 3


//    -----------------------

const result = document.getElementById("result")
let total = ""
function calculation(method) {
    const val1 = document.getElementById("val1")
    const val2 = document.getElementById("val2")
    const input1Value = +val1.value
    const input2Value = +val2.value

    if (val1.value === "" || val2.value === "") {
        alert("please provide a valid value")
    } else {
        switch (method) {
            case "add":
                total = input1Value + input2Value
                break;
            case "substract":
                total = input1Value - input2Value
                break;
            case "multiply":
                total = input1Value * input2Value
                break;
            case "divide":
                total = input2Value !== 0 ? input1Value / input2Value : "Can not divide by 0"
                break;
            case "divide":
                total = input2Value !== 0 ? input1Value % input2Value : "Can not modulus by 0"
                break;
        }
    }
    result.innerText = "Result: " + total
    val1.value = ""
    val2.value = ""
}

//    -----------------------

const initialValueEle = document.getElementById("initialValue")
const incrementValueEle = document.getElementById("incrementValue")
const additionValueEle = document.getElementById("additionValue")
const decremntValueEle = document.getElementById("decremntValue")
const remainerValueEle = document.getElementById("remainerValue")

const initialValue = 5
initialValueEle.innerText = "Initial Value: " + initialValue

const incrementValue = 5 + 1
incrementValueEle.innerText = "Value after increment is: " + incrementValue 

const additionValue = incrementValue + 7 
additionValueEle.innerText = "Value after addition is: " + additionValue

const decremntValue = additionValue - 1
decremntValueEle.innerText = "Value after decrement is: " + decremntValue

const remainerValue = decremntValue % 3
remainerValueEle.innerText = "Remainder is: " + remainerValue


//    -----------------------

const totalPrice = document.getElementById("ticketPrice")
const ticketPrice = 600
totalPrice.innerText = "Total price is: " + ticketPrice * 5


//    -----------------------

const tableEle = document.getElementById("table")
const num = 2
for(let index = 1; index <= 10; index++) {
    tableEle.innerHTML += `${num} x ${index} = ${num * index} <br />`
}


