var dolarTexto = prompt("valor em dolar que você quer converter")
var dolarNumero = parseFloat(dolarTexto)

var valorReal = dolarNumero * 5.60
var valorDecimal = valorReal.toFixed(2)

document.write("<h2>" + " Resultado: " + "$" + valorDecimal + "</h2>")
