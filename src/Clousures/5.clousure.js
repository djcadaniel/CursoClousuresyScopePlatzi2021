const moneyBox = (coins)=>{
    var saveCoins = 0
    saveCoins += coins
    console.log(`Moneybox: ${saveCoins}`)
}

moneyBox(5)
moneyBox(10)
/*====CLOUSURE====*/
const moneyBox = () =>{
    let saveCoins = 0
    const countCoins = (coins)=>{
        saveCoins += coins
        console.log(`Savecoins: ${saveCoins}`)
    }
    return countCoins
}

let mymoney = moneyBox()
mymoney(4)
mymoney(6)
mymoney(10)

/*mas ejemplos de clousures */

const ahorroIngresos = () =>{
    let ahorro = 0
    const contador = (i) =>{
        ahorro += i
        console.log(`El ahorro es: ${ahorro}`)
    }
    return contador
}
let miahorro = ahorroIngresos()

miahorro(5)
miahorro(10)
miahorro(7)

/*otro ejemplo */

let edad = () =>{
    let contador = 0
    let sumarEdad = (e) =>{
        contador += e
        console.log(`La edad es: ${contador}`)
    }
    return sumarEdad
}
let miEdad = edad()
miEdad(5)
miEdad(10)
miEdad(13)