//trunc() - exibe a parte inteira do numero
var a = Number(prompt('Digite o numero decimal: '))
b = Math.trunc(a)
document.write(`A parte inteira do numero ${a} = ${b}`) 
//se nao quiser fazer variavel, pode fazer tudo dentro do documento
//document.write(`A parte inteira do numero ${a} = ${Math.trunc(a)}`)
//--------------------------------------------------------------------------

//max() - busca o maior valor da lista
// min() -  busca o menor valor da lista 
c = [4,5,8,9,0,88,10,25]
d = Math.max(...c)
e = Math.min(...c)
document.write(`<br>O maior valor da lista é ${d}`)
document.write(`<br>O menor valor da lista é ${e}`)
//---------------------------------------------

//if/else/else if 
idade = prompt('digite a sua idade: ')
if(idade>=18){
    document.write(`<br> A pessoa tem ${idade} anos e ja é maior de idade.`)
} else{
    document.write(`<br>A pessoa é menor de idade.`)
}
//-------------------------------------------------------

nota = prompt('Digite a nota do aluno: ')
if(nota>=9){
    document.write(`<br> Parabéns! A nota foi ${nota}, conceito A`)
}else if(nota>=8){
    document.write(`<br> Parabéns! A nota foi ${nota}, conceito B`)
}
else if(nota>=7){
    document.write(`<br> Bom trabalho! A nota foi ${nota}, conceito C`)
}
else if(nota>=6){
    document.write(`<br> Cuidado! A nota foi ${nota}, conceito D`)
}
else{
    document.write(`<br> Reprovado! A nota foi ${nota}, conceito E`)
}

//--------------------------------------------------

num = prompt('Digite um numero: ')
if (num>0){
    document.write(`<br> O numero ${num} é positivo`)
} else if(num<0){
    document.write(`<br> o numero ${num} é negativo`)
}else{
    document.write(`<br> o numero ${num}é zero`)
}

idade = prompt('Digite a sua idade: ')
if (idade<12){
    document.write(`<br> A idade ${idade}, você tem desconto infantil`)
} else if(idade >=60){
    document.write(`<br> A idade ${idade}, você te, desconto idoso`)
}else{
    document.write('VocÊ nao recebe desconto')
}