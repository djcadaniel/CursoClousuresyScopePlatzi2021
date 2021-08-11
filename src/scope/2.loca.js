const helloWorld = () => {
    const hello = 'hello world'
    console.log(hello)
}

helloWorld()

/*2do ejemplo */

var scope = 'i am global'

const functionScope = () =>{
    var scope = "i am just a local"
    const func = () =>{
        return scope
    }
    console.log(func())
}

functionScope()