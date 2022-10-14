let numero = parseInt(prompt("Insira um número:"))

if(numero == 0){
    alert(`${'Numero ' +  numero +' é neutro'}`)
}
else if(numero > 0 ){
    alert(`${'Numero ' +  numero +' é positivo'}`)
} else {
    alert(`${'Numero ' +  numero +' é negativo'}`)
}
