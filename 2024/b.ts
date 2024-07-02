var quantidadeDeEntradas: number = (prompt() as unknown) as number;
var entrada: string = "";
var acumulador: string = "";

for(let i: number = 0; i < quantidadeDeEntradas; i++){
    entrada = (prompt() as string).toUpperCase();

    for(let j: number = 0; j < entrada.length; j++){
        switch(entrada[j]){
            case "A":
            case "B":
            case "C":
                acumulador += "2";
                break;

            case "D":
            case "E":
            case "F":
                acumulador += "3";
                break;

            case "G":
            case "H":
            case "I":
                acumulador += "4";
                break;

            case "J":
            case "K":
            case "L":
                acumulador += "5";
                break;

            case "M":
            case "N":
            case "O":
                acumulador += "6";
                break;

            case "P":
            case "Q":
            case "R":
            case "S":
                acumulador += "7";
                break;

            case "T":
            case "U":
            case "V":
                acumulador += "8";
                break;

            case "W":
            case "X":
            case "Y":
            case "Z":
                acumulador += "9":
                break;

            default:
                console.log("Dado incorreto");
        }
    }

    console.log(acumulador);
    acumulador = "";
}