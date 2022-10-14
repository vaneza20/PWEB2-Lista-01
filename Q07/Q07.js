let base = parseInt(prompt("Insira o valor da base:"))
let altura = parseInt(prompt("Insira o valor da altura:"))

 
let area
let perimetro
    area = base * altura
    perimetro= 2* (base+altura)
    alert(`${'Area ' +  area +' e perimetro do retangulo: ' +  perimetro}`)