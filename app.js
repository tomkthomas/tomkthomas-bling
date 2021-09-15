/*
--------------------------------------------------------------
Your code goes in this file
--------------------------------------------------------------
*/
//no-change
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
div1.style.position = 'relative'
div1.style.top = '-56vh'
div1.style.width = '250px'
div1.style.height = '360px'
imgBlob.style.position = 'relative'
img.style.position = 'absolute'
imgBlob.src = 'assets/images/blob.png'
imgBlob.style.width = '250px'
imgBlob.style.height = '250px'
imgBlob.style.top = '0'
imgBlob.style.right = '-10px'
imgBlob.style.display = 'none'
img.style.top = '130px'
img.style.right = '30px'
imgH1.innerText = "Stuff"
imgH1.style.paddingRight = '40px'
imgH1.style.fontWeight = 'bolder'
imgH1.style.fontSize = '70px'
imgH1.style.textAlign = 'center'
div1.appendChild(imgH1)
div1.appendChild(imgBlob)
div1.appendChild(img)
div1.style.float = 'right'
div1.style.padding = '5vh 0 0'
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
radioButton.childNodes.forEach(child => child.style.padding = '0 12px')
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

root.appendChild(div1)

let div5 = document.createElement('div')
root.appendChild(div5)
div5.style.display = 'flex'
//div5.style.paddingTop = '40px'
div5.style.flexWrap = 'wrap'
div5.style.justifyContent = 'space-around'
div5.width = '100%'
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


let x = window.matchMedia("(min-width: 401px) and (max-width: 800px)")

x.addListener(ipadFunction)

function ipadFunction(x){
    if(x.matches){
        root.style.padding = '30px 6vw 20px'
        div.style.width = '80%'
        div2.style.width = '700px'
        input.style.width = '35%'
        radioButton.style.width = '30%'
        div1.style.position = 'static'
        div1.style.float = 'none'
        //div1.style.height = '200px'
        div1.style.padding = '40px 30vw'
        imgH1.style.textAlign = 'center'
        imgBlob.style.top = '-5vh'
        imgBlob.style.right = '20px'
        img.style.top = '650px'
        img.style.marginRight = '35vw'
        div5.style.position = 'relative'
        div5.style.top = '100px'
        div5.style.width = '100%'
        div4.style.margin = '100px 20vw'
    }
    
    else {
        root.style.padding = '40px 10vw 20px'
        div.style.width = '45%'
        div2.style.width = '51%'
        input.style.width = 'auto'
        radioButton.style.width = 'auto'
        div1.style.position = 'relative'
        //div1.style.height = '360px'
        div1.style.float = 'right'
        div1.style.padding = '5vh 0 0'
        imgH1.style.textAlign = 'center'
        imgBlob.style.top = '0'
        imgBlob.style.right = '-10px'
        img.style.top = '130px'
        img.style.marginRight = 'auto'
        div5.style.position = 'relative'
        div5.style.top = '-300px'
        div5.style.width = '100%'
        div4.style.margin = '100px 25vw'

        /*
        //from other else
        div.style.width = '80%'
        for(let i = 0; i < 5; i++) {
            buttons[i].style.margin = '0'
        }
        //div1.style.width = '250px'
        //div1.style.height = '360px'
        div1.style.padding = '5vh 0 0'
        div.style.padding = '40px 0 0 0'
        //imgH1.style.paddingLeft = '0'
        imgH1.style.textAlign = 'center'
        div2.style.flexDirection = 'row'
        document.querySelectorAll('.input').forEach(element => element.style.margin = '0')
        div2.style.width = '700px'
        div2.style.flexWrap = 'nowrap'
        input.style.width = '35%'
        bgSelect.style.width = 'auto'
        radioButton.style.width = '30%'
        imgBlob.style.top = '0'
        img.style.top = '650px'
        img.style.right = '30px'
        //div5.style.top = '100px'
        div4.style.margin = '100px 20vw'
        div4.style.flexWrap = 'nowrap'
        links.forEach(link => link.style.padding = '0')
        */
    }
    
}



let y = window.matchMedia("(max-width: 400px)")

y.addListener(iphoneFunction)

function iphoneFunction(y) {
    if(y.matches) {
        root.style.padding = '30px 6vw 20px'
        div.style.width = '70%'
        for(let i = 0; i < 5; i++) {
            buttons[i].style.margin = '15px 10px'
        }
        div2.style.flexDirection = 'column'
        document.querySelectorAll('.input').forEach(element => element.style.margin = '7px')
        div2.style.width = '90%'
        div2.style.flexWrap = 'wrap'
        input.style.width = '80vw'
        bgSelect.style.width = '40vw'
        radioButton.style.width = '60vw'
        div1.style.position = 'static'
        div1.style.paddingRight = '40vw'
        //div1.style.width = '100%'
        //imgH1.style.paddingLeft = '0'
        imgBlob.style.top = '-30px'
        img.style.top = '980px'
        img.style.right = '30vw'
        imgBlob.style.right = '10vw'
        //div1.style.height = '200px'
        div5.style.position = 'relative'
        div5.style.top = '70px'
        div5.style.width = '100%'
        div4.style.margin = '100px 0'
        div4.style.flexWrap = 'wrap'
        links.forEach(link => link.style.padding = '0 10px')
        links[3].style.paddingLeft = '70px'
        links[4].style.paddingRight = '80px'
        
       
        
    }
    else {
        div.style.width = '80%'
        for(let i = 0; i < 5; i++) {
            buttons[i].style.margin = '0'
        }
        //div1.style.width = '250px'
        //div1.style.height = '360px'
        div1.style.padding = '5vh 0 0'
        div.style.padding = '40px 0 0 0'
        //imgH1.style.paddingLeft = '0'
        imgH1.style.textAlign = 'center'
        div2.style.flexDirection = 'row'
        document.querySelectorAll('.input').forEach(element => element.style.margin = '0')
        div2.style.width = '700px'
        div2.style.flexWrap = 'nowrap'
        input.style.width = '35%'
        bgSelect.style.width = 'auto'
        radioButton.style.width = '30%'
        imgBlob.style.top = '0'
        img.style.top = '650px'
        img.style.right = '30px'
        //div5.style.top = '100px'
        div4.style.margin = '100px 20vw'
        div4.style.flexWrap = 'nowrap'
        links.forEach(link => link.style.padding = '0')
        
        //from other-else
        root.style.padding = '40px 10vw 20px'
        div.style.width = '45%'
        div2.style.width = '51%'
        input.style.width = 'auto'
        radioButton.style.width = 'auto'
        div1.style.position = 'relative'
        //div1.style.height = '360px'
        div1.style.float = 'right'
        div1.style.padding = '5vh 0 0'
        imgH1.style.textAlign = 'center'
        imgBlob.style.top = '0'
        imgBlob.style.right = '-10px'
        img.style.top = '130px'
        img.style.marginRight = 'auto'
        div5.style.position = 'relative'
        div5.style.top = '-300px'
        div5.style.width = '100%'
        div4.style.margin = '100px 25vw'
        ipadFunction(x)
    }
} 
ipadFunction(x)
iphoneFunction(y) 
