// const inputData = document.getElementById("inputSquare")
// const inputDataSecond = document.getElementById("inputSquareSecond")
// const btnSquare = document.getElementById("btn-square")
// const btnPeremitr = document.getElementById("btn-peremitr")
// const btnAll = document.getElementById("btn-all")
// const resSquare = document.getElementById("res-square")
// const resPerimtr = document.getElementById("res-perimtr")


// btnSquare.addEventListener('click', () => {
//     const dataFirst = inputData.value
//     const dataSecond = inputDataSecond.value
//     const res = dataFirst * dataSecond
//     resSquare.textContent = `Результат: ${res}`
// })

// btnPeremitr.addEventListener('click', () => {
//     const dataFirst = inputData.value
//     const dataSecond = inputDataSecond.value
//     const res = inputData.value * 2 + inputDataSecond.value * 2
//     resPerimtr.textContent = `Результат: ${res}`
// })

// btnAll.addEventListener('click', () => {
//     resPerimtr.textContent = `Результат: ${inputData.value * 2 + inputDataSecond.value * 2}`
//     resSquare.textContent = `Результат: ${inputData.value * inputDataSecond.value}`
// })


// btnSquare.addEventListener('click', () => {
//     const squareData = inputData.value // 2 (допустим)
//     const res = squareData * squareData; // на число * число
//     resSquare.textContent = `Результат: ${res}`; // Рузельтат
// })

// btnPeremitr.addEventListener('click', () => {
//     const squareData = inputData.value // 2 (допустим)
//     const res = squareData * 4; // число * 4
//     resPerimtr.textContent = `Результат: ${res}`; // Рузельтат
// })

// btnAll.addEventListener('click', () => {
//     resPerimtr.textContent = `Результат: ${inputData.value * inputData.value}`; // Рузельтат
//     resSquare.textContent = `Результат: ${inputData.value * 4}`; // Рузельтат
// })


const a = document.getElementById('first-ugol')
const b = document.getElementById('second-ugol')
const c = document.getElementById('third-ugol')

const resultBtn = document.getElementById('result')
const resBlock = document.getElementById('resBlock')


resultBtn.addEventListener('click', () => {
    let st1 = +a.value;
    let st2 = +b.value;
    let st3 = +c.value;

    console.log(st1)
    if (st1 + st2 > st3 && st1 + st2 > st3 && st1 + st2 > st3) {
        const s = (st1 + st2 + st3) / 2;
        const area = Math.sqrt(s * (s - st1) * (s - st2) * (s - st3))
        resBlock.textContent = `${area}`
    } else {
        resBlock.textContent = "С такими сторонами нету треугольника.";
    }
})


const firstNum = document.getElementById('first-number')
const secondNum = document.getElementById('second-number')
const randomNumber = document.getElementById('randomNumber')
const resRandomNumBlock = document.getElementById('resRandomNumBlock')

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}


randomNumber.addEventListener('click', () => {
    let a = +firstNum.value
    let b = +secondNum.value
    let c = getRandomArbitrary(a, b)
    resRandomNumBlock.textContent = `${c}`
})



const liText = document.getElementById('li-text')
const addIlText = document.getElementById('add__il-text')
const resLiList = document.getElementById('resLiList')

addIlText.addEventListener('click', () => {
    let newLiEl = document.createElement('li')
    newLiEl.textContent = `${liText.value}`;
    resLiList.append(newLiEl)
})


const imgRedacted = document.getElementById('imgRedacted')
const srcData = document.getElementById('srcData')
const widthData = document.getElementById('widthData')
const altData = document.getElementById('altData')
const srcBtn = document.getElementById('srcBtn')
const widthBtn = document.getElementById('widthBtn')
const altBtn = document.getElementById('altBtn')



srcBtn.addEventListener('click', () => {
    let inputValue = srcData.value
    imgRedacted.src = inputValue;
})

widthBtn.addEventListener('click', () => {
    let inputWidthValue = +widthData.value;
    console.log(inputWidthValue)
    imgRedacted.setAttribute("width", inputWidthValue)
})

altBtn.addEventListener('click', () => {
    let inputAltValue = altData.value;
    imgRedacted.setAttribute('alt', `${inputAltValue}`)
})