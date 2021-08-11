var hello = 'Hello'
var hello = "Hello +"
let world = "hello world"
let world = "hello daniel +"
const helloworld = "hello world!"

const anotherFunction  = () =>{
    console.log(hello)
    console.log(world)
    console.log(helloworld)
}

anotherFunction()

const helloWorl = () => {
    globalVar = 'im global'
}

helloWorl()
console.log(globalVar)

const anotherFunction = () => {
    var localVar = globalVar = 'im global'
}