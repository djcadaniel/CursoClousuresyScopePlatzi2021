// CASO1
a = 2
var a //El hoisting eleva las declaraciones
console.log(a)

// CASO2
console.log(a)
var a = 2

// CASO3
nameOfDog('manchas')

function nameOfDog(name){
    console.log(name)
}
