var regex_temNumeros: RegExp = /[0-9]/;
var regex_temLetrasMaiusculas: RegExp = /[A-Z]/;
var regex_temLetrasMinusculas: RegExp = /[a-z]/;

var placa: string = prompt() as string;

if(regex_temLetrasMinusculas.test(placa))
    console.log("Placa inválida");

else if(regex_temNumeros.test(placa) && !regex_temLetrasMaiusculas.test(placa) && placa.length == 5)
    console.log("Placa numerica");

else if(!regex_temNumeros.test(placa.substring(0, 1)) && !regex_temLetrasMaiusculas.test(placa.substring(1, 5)) && placa.length == 5)
    console.log("Placa muito antiga");

else if(!regex_temNumeros.test(placa.substring(0, 2)) && !regex_temLetrasMaiusculas.test(placa.substring(2, 6)) && placa.length == 6)
    console.log("Placa AA-9999");

else if(!regex_temNumeros.test(placa.substring(0, 3)) && !regex_temLetrasMaiusculas.test(placa.substring(3, 7)) && placa.length == 7)
    console.log("Placa AAA-99999");

else if(!regex_temNumeros.test(placa.substring(0, 3)) &&
        !regex_temLetrasMaiusculas.test(placa.substring(3, 4)) &&
        !regex_temNumeros.test(placa.substring(4, 5)) &&
        !regex_temLetrasMaiusculas.test(placa.substring(6, 7)) &&
        placa.length == 7)
    console.log("Placa Mercosul");

else
    console.log("Placa inválida");