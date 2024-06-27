// estas son las variables
let numeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaximo) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 3;
console.log(numeroSecreto);

//console.log (numeroSecreto);

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un numero entre 1 y ${numeroMaximo} por favor`));
    console.log(typeof(numeroUsuario));
    
    /*
    este codigo realiza la comparación
    */
    if ( numeroUsuario == numeroSecreto) { 
        // acertaste es la condición verdadera
        alert(`Acertaste, el numero es: ${numeroUsuario}. lo hiciste en; ${intentos} ${intentos == 1 ? "Vez" : "Veces" }`); 
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert("lo siento, El numero es menor");
        } else {
            alert("Lo siento, El numero es mayor");
        }
        // incrementamos el contador cuando no se acierta 
        //intentos = intentos + 1;
        intentos++;
        //palabraVeces = "Veces" ;
        if (intentos>maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos`);
            break;
        }
    }
}
