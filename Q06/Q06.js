let quantidade = parseInt(prompt("Insira a quantidade de números ser digtado:"))

 
let numeros = []
let resultado
    for(let i = 0; i < 3; i++){
        let numero = parseInt(prompt("Insira o numero " + (i + 1)))
        numeros.push(numero)
    }
    for(let i = 0; i < 3; i++){
        resultado = numeros.sort((a,b)=> a-b)
    }
    alert(`${'Numeros recebidos ' +  numeros +' e ordenado em orden crescente: ' +  resultado}`)