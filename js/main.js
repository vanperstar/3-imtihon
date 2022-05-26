function sumInput() {

    var numbers = [];
  
    while (true) {
  
      let value = prompt("Sonni kiriting: ", );

      let layut = prompt("Miqdorni kiriting")

      if (value === " " || value === layut || !isFinite(value)) break;
      numbers.push(value);
    }
  
    let sum = 0;
    for (let i=0 ; i<numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  
  alert( sumInput() );




// const salaries = [1200, 5200, 1800]
        
// var sum = 0
// for (var i = 0; i < salaries.length; i++) {
//     sum += salaries[i]
// }
// // alert(sum += " Akmal Salim Karima")
// console.log(sum += " Akmal Salim Karima")

function sumSalaries(salaries) {
    var sum = 0;
    for (var i = 0; i < salaries.length; i++){
        sum += salaries[i]
    }
    return sum 
}

console.log(sumSalaries([1200, 5200, 1800]))





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



