//Ejercicio 8
// 1
////function verdad () {
    //return true
//}
//console.log (verdad ())
//2
//function saludos (){
//    console.log ("Hola soy una promesa");
//}
//setTimeout (saludos, 5000)
//3
function* pares () {
    let i = 0
    while (true) {
        yield 2*i + 2
        i++
    }

}

const pars = pares ();

console.log (pars.next (). value)
console.log (pars.next (). value)
console.log (pars.next (). value)
console.log (pars.next (). value)
console.log (pars.next (). value)
