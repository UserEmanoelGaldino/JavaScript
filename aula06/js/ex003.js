// Coleta de informações:
var nome = prompt('Qual o seu nome?') // Coleta do nome
var n1 = prompt('Informe o primeiro número!') // Coleta do primeiro número
var n2 = prompt('Informe o segundo número!') // Coleta do segundo número

// tratamento do dado:
var s = Number.parseFloat(n1) + Number.parseFloat(n2) // s de soma

var len_nome = nome.length

var upper_nome = nome.toUpperCase()
var lower_nome = nome.toLowerCase()

// Resposta ao cliente:
window.alert(`A soma de ${n1} e ${n2}, será ${s}. Já o seu nome, possui ${len_nome} caracteres, ele em letras Maiúsculas ficaria assim: ${upper_nome} e em letras minúsculas ficaria assim: ${lower_nome}.`)



/*
Conversão de String para Number:

Números Inteiros:  Number.parseInt(n) Ou  parseInt(n)
Números Flutuantes/Reais: Number.parseFloat(n) Ou parseFloat(n)

    OU

Number(n) "Dessa maneira o JS irá interpretar os valores e entender se é float ou inteiro."

----------------------------------------------------------------------------------------------- 
Conversão de Number para String:

String(n)
    OU
n.toString()
*/