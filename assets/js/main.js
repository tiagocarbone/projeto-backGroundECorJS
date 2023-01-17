const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p') 

const estilosBody = getComputedStyle(document.body)
const backGroundColorBody = estilosBody.backgroundColor


// rgb(17, 86, 102)

for (let parag of ps){
    parag.style.backgroundColor = /*'rgb(17, 86, 102) '  ou */  backGroundColorBody
    parag.style.color = "white"
}

