const fruits =()=>{
    if(true){
        var fruits1 = 'apple'
        let fruits2 = 'banana'
        const fruits3 = 'kiwi'
    }
    console.log(fruits1)
    console.log(fruits2)
    console.log(fruits3)
}

fruits()
/*OTRO EJEMPLO */
var x = 1;
{
    var x = 2
    console.log(x)
}
console.log(x)


/*3erejjemplo */
let anotherFunction = () =>{
    for(var i = 0; i <10; i++){
        setTimeout(() =>{
            console.log(i)
        },1000)
    }
}
anotherFunction()

/*4to ejemplo*/
function iniciar(){
    let nombre = 'Daniel'
    function mostrarNombre(){
        console.log(nombre)
    }
    return mostrarNombre()
}

iniciar()