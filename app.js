/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
let root = document.querySelector("#root");
root.style.background = 'gold'
root.style.padding = '40px 10vw 20px'
root.style.width = '100%'
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
let imgBlob = document.createElement('img')
imgBlob.style.position = 'relative'
img.style.position = 'absolute'
imgBlob.src = 'assets/images/blob.png'
imgBlob.style.width = '250px'
imgBlob.style.height = '250px'
imgBlob.style.top = '0'
imgBlob.style.right = '-10px'
imgBlob.style.display = 'none'
img.style.top = '190px'
img.style.right = '175px'
imgH1.innerText = "Stuff"
imgH1.style.paddingRight = '40px'
imgH1.style.fontWeight = 'bolder'
imgH1.style.fontSize = '70px'
div1.appendChild(imgH1)
div1.appendChild(imgBlob)
div1.appendChild(img)
root.appendChild(div1)
div1.style.float = 'right'
div1.style.padding = '5vh 0 20px'
div1.style.display = 'none'

let div0 = document.createElement('div')
let line1 = document.createElement('p')
let line2 = document.createElement('h2')
line1.innerText = "Sizzle your Life"
line2.innerText = "Make a Card"
div0.appendChild(line1)
div0.appendChild(line2)
root.appendChild(div0)
line1.style.padding = '15vh 0 20px'
line1.style.fontSize = '30px'
line1.style.fontWeight = '100'
line2.style.fontSize = '50px'
line2.style.fontWeight = 'bolder'

let div = document.createElement('div')
div.classList.add('buttons')
root.appendChild(div)
let buttons = []
let flag = [false, false, false, false, false]
let names=['Polaroid', "TV", "Traitor", "Fall Guy", "Radio"]
for(let i=0; i < 5; i++){
    buttons[i] = document.createElement('button');
    buttons[i].innerText = names[i]
    buttons[i].style.background = 'inherit'
    buttons[i].style.height = '50px'
    buttons[i].style.padding = '0 10px'
    buttons[i].style.border = '2px solid black'
    buttons[i].style.borderRadius = '10px'
    buttons[i].style.boxShadow = '3px 2px black'
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
input.placeholder = 'Name Your Bling!'
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

let div5 = document.createElement('div')
root.appendChild(div5)
div5.style.display = 'flex'
div5.style.paddingTop = '40px'
div5.style.flexWrap = 'wrap'
div5.style.justifyContent = 'space-around'
cam.onclick = () => {
    let cardDiv = document.createElement('div')
    let deleteButton = document.createElement('button')
    cardDiv.classList.add('card')
    cardDiv.innerHTML = div1.innerHTML
    cardDiv.style.background = bgSelect.options[bgSelect.selectedIndex].value
    cardDiv.style.position = 'relative'
    cardDiv.style.border = '2px solid black'
    cardDiv.style.boxShadow = '3px 2px black'
    cardDiv.appendChild(deleteButton);
    deleteButton.style.background = `url('assets/images/icon_delete.png') no-repeat`
    deleteButton.style.backgroundSize = '100%'
    deleteButton.style.backgroundPosition = 'center'
    deleteButton.style.border = 'none'
    deleteButton.style.height = '40px'
    deleteButton.style.width = '40px'
    deleteButton.style.position = 'absolute'
    deleteButton.style.top = '-15px'
    deleteButton.style.left = '93%'
    deleteButton.addEventListener('click', deleteClick)
    let cardItems = cardDiv.childNodes
    cardItems[0].style.textAlign = 'center'
    cardItems[1].style.height = '250px'
    cardItems[1].style.width = '250px'
    cardItems[1].style.top = '-20px'
    cardItems[1].style.left = '30px'
    cardItems[2].style.height = '170px'
    cardItems[2].style.width = '170px'
    cardItems[2].style.position = 'absolute'
    cardItems[2].style.top = '75px'
    cardItems[2].style.left = '67px'
    cardDiv.style.height = '330px'
    cardDiv.style.width = '300px'
    cardDiv.style.margin = '20px'
    div5.appendChild(cardDiv)
}



let footer = document.createElement('footer')
footer.style.paddingTop = '15px'
let div4 = document.createElement('div')
footer.appendChild(div4)
root.appendChild(footer)
let footLabel = document.createElement('label')
footLabel.innerText = '🖤  Credits:'
div4.appendChild(footLabel)
let links = []
let srclink = ['https://www.figma.com/community/file/999755209064837558', 'https://www.figma.com/community/file/991742181111571735', 'https://www.figma.com/community/file/938411730253984196', 'https://www.figma.com/community/file/894115916957785363', 'https://www.figma.com/community/file/883250469660505749']
for(let i = 0; i < 5; i++) {
    links[i] = document.createElement('a')
    links[i].innerText = names[i]
    links[i].href = srclink[i]
    links[i].target = '_blank'
    links[i].style.color = 'black'
    links[i].style.textDecoration = 'none'
    links[i].onmouseover = ()=> {
        links[i].style.textDecoration = 'underline'
        links[i].style.textDecorationThickness = '3px'
        links[i].style.textUnderlineOffset = '5px'
    }
    links[i].onmouseout = () => {links[i].style.textDecoration = 'none'}
    div4.appendChild(links[i])
}
div4.style.margin = '100px 25vw'
div4.style.textAlign = 'center'
div4.style.display = 'flex'
div4.style.justifyContent = 'space-between'

bgSelect.onchange = changeBg
function changeBg() {
    root.style.background = bgSelect.options[bgSelect.selectedIndex].value
}

input.onkeyup = changeText
function changeText() {
    div1.style.display = 'block'
    imgH1.innerText = input.value
}

for(let i = 0; i < 5; i++) {
    buttons[i].addEventListener('click', function() {
        if(!flag[i]) {
            img.src = `assets/images/${buttons[i].innerText}.png`
            img.style.width = '170px'
            img.style.height = '170px'
            img.style.paddingTop = '40px'
            div1.style.display = 'block' 
            img.style.display = 'block'
            let j = 0
            buttons.forEach(button => {
                flag[j] = false
                j++
                button.style.background = 'inherit' 
                button.style.color = 'inherit'
            })
            buttons[i].style.background = 'rgb(25,25,25)'
            buttons[i].style.color = 'white'
            flag[i] = true
        }

        else {
            flag[i] = false
            img.style.display = 'none'
            buttons.forEach((button) => {
                button.style.background = 'inherit'
                button.style.color = 'inherit'
            })
            
        }
       
    })
}

radioButton.onclick = changeBlob
function changeBlob() {
    if(blob.checked) {
        div1.style.display = 'block'
        imgBlob.style.display = 'block'
        imgH1.style.paddingRight = '0px'
        imgH1.style.textAlign = 'center'
    }
    else{
        imgBlob.style.display = 'none'
        imgH1.style.paddingRight = '40px'
    }
}

function deleteClick(event) {
    event.target.parentElement.remove()
}