var numeros: number[] = [];

for(let i: number = 0; i < 3; i++)
    numeros[i] = ((prompt() as unknown) as number);

numeros.sort();
console.log(numeros[1]);