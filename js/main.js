
/*  INTRODUÇÃO A JAVASCRIPT

var nome = 'Lucas da Silva Santos';
var idade = 20+10
alert('Bem vindo '+ nome+' sua idade é de '+idade+' anos'); // alerta  do nome com a imagem +10 anos
console.log(nome)
console.log(idade + 10)
var frase = 'Japão é o melhor time do mundo'
console.log (frase)
frase.replace('Japão','Brasil')
*/

/* ARRAY E DICIONÁRIOS 

var lista = ['maça','pêra','Laranja'];
console.log(lista[1]);
lista.push('uva');// add no final da lista
console.log(lista);
lista.pop(lista); //remove o ultimo item da lista
console.log(lista.toString());

var frutas = [{nome:'Maça', cor: 'Vermelha'},
               {nome: 'Uva', cor: 'Roxa'} ];
console.log(frutas)
alert(frutas[1].nome)
*/

/* CONDICIONAL
var idade= prompt('Qual a sua idade?')
if (idade >=18){
alert('maior de idade');}
else{
alert('menor de idade')
}
*/
/* WHILE JAVASCRIPT
var count= 0;
while (count < 5){
console.log(count)
count+=1
}
*/

/* FOR JAVASCRIPT 
var count

for(count=0;count<=5;count++){
    alert(count);
}
*/

/*
var d = new Date();
alert(d.getFullYear())
*/

/* FUNÇÕES 
function soma(n1,n2){
return n1+n2
}

alert(soma(5,5));

function validaIdade(idade){
    var validar= true;
    if (idade >=18){
        validar = true;
    }
    else{
        validar=false;
    }
    return validar
}
var idade = prompt('Digite a sua idade?');
alert(validaIdade(idade));

*/ 

function botao(){
document.getElementById('Agradecimento').innerHTML='Obrigado por clicar';
console.log(document.getElementById('Agradecimento'))


}

function redirecionar(){
//window.open('https://on.fiap.com.br/fiaplogin/index.php') 
window.location.href = 'https://on.fiap.com.br/fiaplogin/index.php'

}

function trocar(elemento){
    elemento.innerHTML='Obrigado por passar o mouse'
    //document.getElementById('Agradecimento').innerHTML='Obrigado por passar o mouse'


}

function voltar(elemento){
    elemento.innerHTML='Passe o mouse'
    //document.getElementById('Agradecimento').innerHTML="Passe o mouse"

}

function load(){
alert('Pagina carregada')

}

function funcaochange(elemento){
    console.log(elemento.value)
}