/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
let root = document.querySelector("#root");
root.style.background = 'gold'
root.style.padding = '20px 10vw'
root.style.width = '100vw'
root.style.height = '100vh'
root.style.fontFamily = 'Arial, Helvetica, sans-serif'

let title = document.createElement('h1');
title.innerText = "BLING!";
root.appendChild(title);
title.style.textAlign = 'center'
title.style.fontSize = '20px'
title.style.fontWeight = 'bolder'
title.style.textShadow = '3px 2px 2px rgba(236, 147, 29, 0.671)'

let div1 = document.createElement('div')
let imgH1 = document.createElement('h1')
let img = document.createElement('img')
imgH1.innerText = "Stuff"
imgH1.style.fontWeight = 'bolder'
imgH1.style.fontSize = '70px'
div1.appendChild(imgH1)
div1.appendChild(img)
root.appendChild(div1)
div1.style.float = 'right'
div1.style.padding = '5vh 0 20px'
div1.style.display = 'none'


let line1 = document.createElement('p')
let line2 = document.createElement('h2')
line1.innerText = "Sizzle your Life"
line2.innerText = "Make a Card"
root.appendChild(line1)
root.appendChild(line2)
line1.style.padding = '10vh 0 20px'
line1.style.fontSize = '30px'
line1.style.fontWeight = '100'
line2.style.fontSize = '50px'
line2.style.fontWeight = 'bolder'

let div = document.createElement('div')
div.classList.add('buttons')
root.appendChild(div)
let buttons = []
let names=['Polaroid', "TV", "Traitor", "Fall Guy", "Radio"]
for(let i=0; i < 5; i++){
    buttons[i] = document.createElement('button');
    buttons[i].innerText = names[i]
    buttons[i].style.background = 'inherit'
    buttons[i].style.height = '50px'
    buttons[i].style.padding = '0 10px'
    buttons[i].style.border = '2px solid black'
    buttons[i].style.borderRadius = '10px'
    buttons[i].style.boxShadow = '3px 2px'
    buttons[i].style.fontSize = '15px'
    div.appendChild(buttons[i])    
}
div.style.display = 'flex'  
div.style.width = '45%'
div.style.paddingTop = '50px'
div.style.justifyContent = 'space-between'
div.style.flexWrap = 'wrap'

let div2 = document.createElement('div')
let input = document.createElement('input')
input.classList.add('input')
let bgSelect = document.createElement('select')
bgSelect.classList.add('input')
let radioButton = document.createElement('button')
radioButton.classList.add('input')
let label1 = document.createElement('label')
let label2 = document.createElement('label')
let blob = document.createElement('input')
let nope = document.createElement('input')
div2.appendChild(input)
div2.appendChild(bgSelect)
div2.appendChild(radioButton)
radioButton.appendChild(blob)
radioButton.appendChild(label1)
radioButton.appendChild(nope)
radioButton.appendChild(label2)
root.appendChild(div2)
input.placeholder = 'Name Your Bing!'
let bgColors = ['Gold','Snow','DodgerBlue','LightSalmon','LightCoral','LightPink','OrangeRed','Tomato','DarkOrchid','SpringGreen','Thistle']
for(let i=0; i < 11; i++) {
    let option = document.createElement('option')
    option.value = bgColors[i]
    option.innerText = bgColors[i]
    bgSelect.appendChild(option)
}
blob.type = 'radio'
blob.value = 'blob'
blob.name = 'vote'
nope.type = 'radio'
nope.value = 'nope'
nope.name = 'vote'
label1.innerText = 'Blob'
label2.innerText = 'Nope'
div2.style.display = 'flex'
div2.style.justifyContent = 'space-between'
div2.style.width = '51%'
div2.style.paddingTop = '30px'
document.querySelectorAll('.input').forEach(element => {
    element.style.height = '50px'
    element.style.padding = '0 10px'
    element.style.border = '2px solid black'
    element.style.borderRadius = '10px'
    element.style.boxShadow = '3px 2px black'
    element.style.color = 'white'
    element.style.background = 'rgb(25, 25, 25)'
    element.style.fontSize = '15px'
})

let div3 = document.createElement('div')
let cam = document.createElement('button')
cam.style.width = '50px'
cam.style.height = '50px'
div3.appendChild(cam)
root.appendChild(div3)
div3.style.paddingTop = '30px'
cam.style.backgroundColor = 'inherit'
cam.style.border = '2px solid black'
cam.style.borderRadius = '10px'
cam.style.fontSize = '15px'
cam.style.boxShadow = '3px 2px black'
cam.style.background = `url('assets/images/camera.png') no-repeat`
cam.style.backgroundSize = '50%'
cam.style.backgroundPosition = 'center'

let footer = document.createElement('footer')
let div4 = document.createElement('div')
footer.appendChild(div4)
root.appendChild(footer)
let footLabel = document.createElement('label')
footLabel.innerText = '🖤  Credits:'
div4.appendChild(footLabel)
let links = []
for(let i = 0; i < 5; i++) {
    links[i] = document.createElement('a')
    links[i].innerText = names[i]
    div4.appendChild(links[i])
}
div4.style.margin = '100px 25vw'
div4.style.textAlign = 'center'
div4.style.display = 'flex'
div4.style.justifyContent = 'space-between'

bgSelect.onchange = changeBg
function changeBg() {
    root.style.background = bgSelect.options[bgSelect.selectedIndex].value
    console.log(bgSelect.options[bgSelect.selectedIndex]);
}

input.onkeyup = changeText
function changeText() {
    div1.style.display = 'block'
    imgH1.innerText = input.value
}

for(let i = 0; i < 5; i++) {
    buttons[i].addEventListener('click', function() {
        img.src = `assets/images/${buttons[i].innerText}.png`
        img.style.width = '150px'
        img.style.height = '150px'
        img.style.paddingTop = '40px'
        div1.style.display = 'block' 
        
    })
}