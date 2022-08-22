
let randomNumber = Math.floor(Math.random() * 3e8)

let calculo = () => {
    let sum = 0

    for(let i = 0; i < randomNumber; i++) {
        sum = randomNumber + i

    }
    
    return sum
}

process.send(calculo())