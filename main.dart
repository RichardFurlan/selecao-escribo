import 'dart:io';

String sumAll(value){
    value= int.parse(value);
    int sum = 0;

    for (int i = 0; i < value; i++) {
        if((i % 3) == 0 || (i % 5) == 0){
            sum += i;
        }
    }

    return "A soma de todos os numeros multiplos por 5 e 3 menores que " + 
    value.toString() +
    " é " +
    sum.toString() +
    ".";
}

void main() {
    stdout.write("Digite um numero inteiro: ");
    var value = stdin.readLineSync();

    stdout.write(sumAll(value));
}