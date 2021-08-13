const person = () =>{
    let saveName = "name"
    return {
        getName: () =>{
            return saveName
        },
        setName: (name) => {
            saveName = name
        }
    }
}

newPerson = person()
console.log(newPerson.getName())
newPerson.setName('Daniel')
console.log(newPerson.getName())

/*ejm2 */
const mascota = ()=>{
    let nombre = 'chimu'
    return{
        getName: ()=>{
            return nombre
        },
        setName: (name)=>{
            nombre = name
        }
    }
}
let newName = mascota()
console.log(newName.getName())
newName.setName('manchas')
console.log(newName.getName())

/*ejm3 */

let actitud = () =>{
    let pasado = 'En el pasado era pesimista'
    return {
        getName: ()=>{
            return pasado
        },
        setName:(x)=>{
            pasado = x
        }
    }
}

newPersona = actitud()
console.log(newPersona.getName())
newPersona.setName('En la actualidad soy optimista')
console.log(newPersona.getName())