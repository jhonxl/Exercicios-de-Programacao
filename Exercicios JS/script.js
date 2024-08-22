//Questão 1:
//Escreva um código que receba duas notas de um aluno e calcule a média. Se a média for maior ou igual a 7, exiba "Aprovado". Se for maior ou igual a 5, mas menor que 7, exiba "Recuperação". Caso contrário, exiba "Reprovado".


n1 =  Number(prompt('Digite a primeira nota: '))
n2 =  Number(prompt('Digite a segunda nota: '))

media = n1+n2/2

if(media >=7){
    document.write(`Parabéns, sua nota foi: ${media}. Aprovado!`)
}else if(media>=5 || media<7){
    document.write(`Recuperação. Sua nota foi: ${media}`)
} else{
    document.write(`Reprovado! Sua nota foi: ${media}`)
}
//------------------------------------------------------------------------

//Questão 2:
//Crie um programa que receba um ano e verifique se ele é bissexto. Um ano é bissexto se for divisível por 4, mas não por 100, exceto se for divisível por 400.

ano = Number(prompt(' Digite um ano: '))
if (ano % 400 == 0) {
    document.write(`<br>O ano ${ano} é bissexto`);
} else if (ano % 100 == 0) {
    document.write(`<br>O ano ${ano} não é bissexto`);
} else if (ano % 4 == 0) {
    document.write(`<br>O ano ${ano} é bissexto`);
} else {
    document.write(`<br>O ano ${ano} não é bissexto`);
}
//---------------------------------------------------------------------------------

//Questão 3:
//Escreva um código que receba o saldo de uma conta bancária e um valor de saque. Verifique se o saque pode ser realizado (se o saldo for suficiente) e exiba uma mensagem informando se o saque foi realizado ou se o saldo é insuficiente.

saldo = parseFloat(prompt('Digite o seu saldo: '))
saque = parseFloat(prompt('Digite o quanto você quer sacar: '))

if(saque<saldo){
    document.write('<br>Saque realizado..')
}else{
    document.write(`<br>Saldo insuficiente para saque. seu saldo é ${saldo}`)
}

//-----------------------------------------------------------------------------------------

//Questão 4:
//Crie um programa que receba a altura e o peso de uma pessoa e calcule seu Índice de Massa Corporal (IMC). Com base no IMC, exiba uma mensagem indicando a classificação da pessoa:
// IMC = peso/(altura x altura)

altura = Number(prompt('Digite a sua altura: '))
peso = Number(prompt('Digite o seu peso: '))
imc = peso/(altura*altura)

if(imc<18.5){
    document.write("<br>Voce esta abaixo do peso")
}else if(imc >= 18.5 && imc<=24.9){
    document.write('<br>O seu peso esta normal')
}else if(imc >=25 && imc<=29.9){
    document.write('<br>Voce esta sobrepeso')
}else if(imc>=30){
    document.write('<br>Voce esta obeso')
}

//---------------------------------------------------------------------

//Questão 5:
//Escreva um código em JavaScript que receba o valor de uma compra e um código de desconto (de 0 a 100). Verifique se o código de desconto é válido (entre 0 e 100). Caso seja, aplique o desconto ao valor da compra e exiba o valor final. Caso contrário, exiba uma mensagem de erro.

compra = Number(prompt("Digite o valor da compra: "))
codigo = Number(prompt("Digite o código: "))
desconto = compra - (compra*(cod/100))
if (codigo >= 0 && codigo <=100){
    document.write(`<br>O valor da compra foi de ${compra}. O valor da compra com o desconto é ${desconto}`)
} else{
    document.write('Código inválido. O código deve estar entre 0 e 100')
}
//----------------------------------------------------------------------------------------------------------------------------------------------------------

//Questão 6:
//Crie um programa que receba a quantidade de horas trabalhadas por um funcionário e o valor da sua hora de trabalho. Calcule o salário semanal com base nessas informações. Se o funcionário trabalhou mais de 40 horas, pague 1,5 vez o valor da hora extra para as horas trabalhadas além de 40.

HorasTrabalhadas = Number(prompt('Digite sua quantidade de horas trabalhadas: '))
ValorHora = Number(prompt('Digite o valor da sua hora: '))

salario = HorasTrabalhadas*ValorHora
extra = salario*1.5

if (HorasTrabalhadas = 40){
    document.write(`O seu salário é: ${salario}`)
}else if(HorasTrabalhadas > 40){
    document.write(`Você trabalhou mais de 40 horas e receberá um extra. O seu salário com o extra é ${extra}`)
} else{
    document.write('Erro no cálculo')
}


//----------------------------------------------------------------------------

//Questão 7:
//Escreva um código que receba três números e determine qual deles é o maior. Exiba uma mensagem indicando o maior número.

n1 = Number(prompt('Digite um numero: '))
n2 = Number(prompt('Digite um numero: '))
n3 = Number(prompt('Digite um numero: '))
c = [n1,n2,n3]
d = Math.max(...c)
document.write(`<br> o maior valor digitado foi: ${d}`)

//----------------------------------------------------------------------------

//Questão 8:
//Crie um programa que simule um sistema de login. Peça ao usuário para inserir um nome de usuário e uma senha. Verifique se os valores correspondem aos dados previamente armazenados (por exemplo, usuario: "admin" e senha: "1234"). Se os dados estiverem corretos, exiba "Login bem-sucedido". Caso contrário, exiba "Usuário ou senha incorretos".
login1=prompt("Digite o seu login: ")
senha1=prompt("Digite a sua senha: ")

login = 'adm'
senha = 1234

if (login1==login && senha1==senha){
    document.write("Login bem sucedido")
}else{
    document.write("Usuário ou senha incorretos")
}

//----------------------------------------------------------------------------


 distancia = Number(prompt('Digite a distância em quilômetros:'))
 transporte = prompt('Digite o modo de transporte (carro, ônibus, avião):')


 velocidades = {
    carro: 80,   
    onibus: 60,  
    aviao: 800   
 }
if (transporte == 'carro') {
    tempoEstimado = distancia / velocidade
    document.write(`<br> O tempo estimado de viagem de carro é ${distancia/80})} horas.`)
} else if(transporte == 'onibus'){
    document.write(`<br> O tempo estimado de viagem de onibus é ${distancia/60})} horas.`)
} else if(transporte == 'aviao'){
    document.write(`<br> O tempo estimado de viagem de aviao é ${distancia/800})} horas.`)
}

