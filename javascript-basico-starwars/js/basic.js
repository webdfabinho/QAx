console.log('Olá, Javascript!')

var username = 'Fabio Neri'

document.getElementById('user-name').innerHTML = username

//VARIAVEIS //

// var nome = 'Mestre Yoda'
// var idade = 100
// var jedi = true

//console.log(typeof nome)
//console.log(typeof idade)
//console.log(typeof jedi)

//OPERADORES MATEMÁTICOS //

//var n1 = 8
//var n2 = 2.5

//console.log(typeof n1)
//console.log(typeof n2)

//var total = n1 / n2
//console.log(total)

// OPERADORES DE COMPARAÇÃO //

//var v1 = 5
//var v2 = 5

//var resultado = v1 === v2
//console.log(resultado)

//FUNÇÕES //

//function soma (n1, n2) {
//    console.log(n1 + n2)
//}

//soma(5, 115)

//function boasVindas (nome) {
//    alert(nome + ', Seja Bem-Vindo!')
//}

//boasVindas ('Fabio')

// function soma (n1, n2) {
//     return n1 + n2
// }

// var resultado = soma(5, 5)
// console.log(resultado)

// CONTROLE DE FLUXOS // BDD Desenvolvimento Guiado por comportamento

// Sendo um cliente correntista do banco
// Posso sacar dinheiro em caixas eletronicos
// Para poder comprar em lugares que não aceitam o cartão de débito ou crédito

// var saldo = 1000

// function saque (valor) {

//     if (valor > saldo) {
//         console.log('Valor do Saque superiro que o Saldo!')
//     } else if (valor > 700) {
//         console.log('Valor do saque é superior ao permitido por operação.')
//     } else {
//         saldo = saldo - valor
//     } 
// }

// saque (701)
// console.log(saldo)

// cenário 1: Saque com sucesso
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 500 reais
// Então o valor do saque deve ser deduzido do meu saldo

// cenário 2: Saque com valor superior ao saldo
// Dado que meu saldo é de 1000 reais
// Quando faço um saque de 1001 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao saldo

// cenário 3: Saque com valor máximo
// Dado que meu saldo é de 1000 reais
// E o valor máximo de operação é de 700
// Quando faço um saque de 701 reais
// Então não deve deduzir do meu saldo
// E deve mostrar uma mensagem de alerta informando que o valor é superior ao máximo permitido por operação


//ARRAYS //

// var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

// console.log(gaveteiro[0])

// var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader']

// personagens.push('C3pO')
// personagens.push('R2D2')


// personagens.pop()

// personagens = personagens.filter(function(p) {
//     return p !== 'Darth Vader'
// })

// personagens = personagens.filter(function(p) {
//     return p === 'Mestre Yoda'
// })

// console.log(personagens)

// CONTROLES DE REPETIÇÃO (LOOPS) //

//var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa Leia', 'Darth Vader', 'R2D2']

// personagens.forEach(function(p){
//     console.log(p)
// })

// for (var i in personagens) {
//     console.log(personagens[i])
// }

// for (var i = 0; i <= 10; i++) {
//     console.log(i)
//     // codigo vai ser executado até a consição retornar false
// }

//OBJETOS //

// var yoda = {
//     nome: 'Mestre Yoda',
//     idade: 100,
//     jedi: true,
//     mostraIdade: function() {
//         console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
//     }
// }

// console.log(yoda)
// yoda.mostraIdade()

//CONSTANTES //

const nome = 'Darth Vader'
console.log(nome)

nome = 'Mestre Yoda'
console.log(nome)
