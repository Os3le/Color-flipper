// const colours = [
//     'green',
//     'red',
//     'rgba(133,122,200)',
//     '#f15025'

// ]


const colours = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"

]
const bod = document.getElementsByTagName('body')
const btn = document.getElementById('btn');
const h2 = document.getElementById('h2')
const change = document.getElementById('change')

// btn.onclick = function randomNumber() {
//     const randomNum = Math.floor((Math.random() * 4))
//     console.log('color changed', colours[randomNum]);

//     h2.style.background = colours[randomNum]

//     change.innerHTML = colours[randomNum];
// }


btn.onclick = function loopRand() {
    let hexColor = '#'

    for (let i = 0; i < 6; i++) {
        const randomNum = Math.floor((Math.random() * colours.length))
        hexColor += colours[randomNum]
        hexColor.toString()
        console.log(hexColor);
        document.body.style.backgroundColor = hexColor
        btn.style.backgroundColor = hexColor
        change.innerHTML = hexColor;
    }
}