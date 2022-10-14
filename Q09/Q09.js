let numero1 = parseInt(prompt("Insira um número:"))
let divisores = 0;

for(var count=1 ; count<=numero1 ; count++)
 if(numero1 % count == 0)
     divisores++;

if(divisores==2){
    alert(`${'O numero  ' +  numero1 +' é primo'}`)
}else{
    alert(`${'O numero  ' +  numero1 +' não é primo'}`)
}
