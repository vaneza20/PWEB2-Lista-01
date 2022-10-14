let numero1 = parseInt(prompt("Insira um número:"))
let numero2 = parseInt(prompt("Insira um número:"))
let numero3 = parseInt(prompt("Insira um número:"))
let numeros = [numero1,numero2, numero3]
numeroOrdenado = numeros.sort((a,b)=> b-a)

soma = numeroOrdenado[0] + numeroOrdenado[1]
    alert(`${'A soma dos 2 maiores numeros é ' +  soma }`)
