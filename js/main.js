var numbers = []

for(;true;){
    let numberEl = prompt("Raqam kiriting:", 0);

    if(!numberEl || isNaN(numberEl-0))break;
    numbers.push(numberEl-0)
}
let sum =0 
for(let i=0; i< numbers.length; i++)sum+=numbers[i];
alert(sum)



var salaries = {
    Ahmad:1200,
    Salim:5200,
    Karima:1800
}
function sumSalaries(obj){
    let sum = 0
    for (key in obj)
        sum+=obj[key]
    return sum
}

console.log(sumSalaries(salaries))




// Pokemon js 


var pokemonEL = document.querySelector('.pokemon')

for (i = 0; i < pokemons.length; i++){
    var filmEL = document.createElement('div')
    filmEL.setAttribute("class", "film bg-white text-center")

    pokemonEL.appendChild(filmEL)

    var idPEl = document.createElement('h4')

    var nameDivEl = document.createElement('h3')

    var imgImgEl = document.createElement('img')

    var typeSpanEl = document.createElement('span')

    var heightPEl = document.createElement('p')

    var weightPEl = document.createElement('p')

    imgImgEl.src = pokemons[i].img
    filmEL.appendChild(imgImgEl)
    imgImgEl.setAttribute("class", "mb-5")

    idPEl.textContent = pokemons[i].id
    filmEL.appendChild(idPEl)

    nameDivEl.textContent = pokemons[i].name
    filmEL.appendChild(nameDivEl)


    typeSpanEl.textContent = pokemons[i].type
    filmEL.appendChild(typeSpanEl)

    heightPEl.textContent = pokemons[i].height
    filmEL.appendChild(heightPEl)

    weightPEl.textContent = pokemons[i].weight
    filmEL.appendChild(weightPEl)
}



