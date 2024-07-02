var numero: number = ((prompt() as unknown) as number);
var quantidadeDeDivisores: number = 0;

for(let i: number = 1; i <= numero; i++){
    if((numero % i) == 0)
        quantidadeDeDivisores++;
}

if(quantidadeDeDivisores == 3)
    console.log("sim");
else
    console.log("nao");