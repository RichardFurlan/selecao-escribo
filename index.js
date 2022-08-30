const readline = require('readline');
const cmd = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function sumAll(value) {
    const parseValue = parseInt(value)
    let sum = 0

    for(let i = 0; i < parseValue; i++) {
        if((i % 3) == 0 || (i % 5) == 0) {
            sum += i
        }
    }

    return sum
}

cmd.question("Digite um numero inteiro:", (val) => {

    const res = sumAll(val)

    console.log(
        "A soma de todos os números múltiplos por 5 e 3 menores que " + val + " é " + res + "."
    )

    cmd.close()
})