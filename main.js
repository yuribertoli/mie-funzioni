//-------------------------------------------ALERT NUMERI NON CORRETTI---------------------------------------------------------

//Funzione per avvertire se dei numeri inseriti non sono corretti
function erroreNumeri() {
    return alert("Il numero inserito non è corretto / I numeri inseriti non sono corretti");
}

//------------------------------------------NUMERO RANDOM TRA DUE VALORI-------------------------------------------------------

//Funzione per mostrare un numero random compreso tra 2 numeri definiti in precedenza
function randomNumber(min, max) {

    let numero;

    numero = parseInt(Math.floor(Math.random() * (max - min + 1) + min));

    if (min >= max) {
        
        numero = alert("Il primo numero deve essere minore del secondo");

    } else if (isNaN(min) || isNaN(max)) {

        numero = alert("Il numero inserito non è corretto / I numeri inseriti non sono corretti");

    }

    return numero;

}

//-----------------------------------------------SOMMA DI 2 NUMERI---------------------------------------------------------------

//Funzione per sommare 2 numeri 
function sommaDueNumeri(primo, secondo) {

    somma = parseInt(primo) + parseInt(secondo);

    if (isNaN(primo) || isNaN(secondo)) {

        numero = alert("Il numero inserito non è corretto / I numeri inseriti non sono corretti");

    }

    return somma;

}

//-------------------------------------------------PARI O DISPARI---------------------------------------------------------------

//Funzione per vedere se un numero è pari, in questo caso darà true come risultato, altrimenti sarà false
function pari(numero) {

    let risultato;

    if (parseInt(numero) % 2 == 0) {

        risultato = true;

    } else {

        risultato = false;

    }

    if (isNaN(numero)) {

        risultato = alert("Il numero inserito non è corretto / I numeri inseriti non sono corretti");

    }

    return risultato;

}

// --------------------------------------------------PALINDROMO----------------------------------------------------------------

/* Funzione per verificare se una parola o una frase sono palindrome */
function parolaPalindroma(parola) {

    let frase;

    //Rendo tutto minuscolo per confrontare tutti i caratteri correttamente
    let minuscolo = parola.toLowerCase();
    console.log(minuscolo);

    //Utilizzo .replace per rimuovere gli eventuali spazi tra le frasi
    /*  
        /   serve per inizializzare l'espressione, lo spazio vuoto successivo è il valore da cercare e sostituire
        /g  serve per chiudere l'espressione e "g" per prendere tutti i valori trovati nella frase (senza prenderebbe solo il primo valore) 
        ,   serve per separare i valori scelti da quelli da sostituire
        ''  serve per non inserire niente al posto dei valori selezionati
    */
    let togliSpazi = minuscolo.replace(/ /g, '');
    console.log(togliSpazi);

    //Utilizzo .split per dividere le lettere della parola e creare un array dove ad ogni carattere corrisponde un indice, partendo da 0.
    //Utilizzato senza spazi tra gli apici divide ogni carattere dal successivo
    let dividiParola = togliSpazi.split("");
    console.log(dividiParola);

    //Inverto la parola con .reverse, in questo modo inverto l'ordine dei caratteri nell'array
    let invertiParola = dividiParola.reverse();
    console.log(invertiParola);

    //Riunisco i caratteri invertiti in una stringa con .join, lascio gli apici senza spazi per non avere distanza tra i caratteri uniti
    let unisciParola = invertiParola.join("");
    console.log(unisciParola);

    //Confronto la sequenza di caratteri invertita con la sequenza di caratteri iniziale impostata dall'utente, se combaciano allora la frase/parola è palindroma
    //Calcolo se è una parola o una frase impostando la funzione di conteggio parole a = 1 o > 1
    if (togliSpazi == unisciParola && contaParole(domanda) == 1) { 

        frase = "La parola è palindroma";

    } else if (togliSpazi == unisciParola && contaParole(domanda) > 1) {   //!!!!!contaParole è un'altra funzione!!!!!!

        frase = "La frase è palindroma";

    } else if (togliSpazi != unisciParola && contaParole(domanda) == 1) {

        frase = "La parola non è palindroma";

    } else if (togliSpazi != unisciParola && contaParole(domanda) > 1) {

        frase = "La frase non è palindroma";

    }

    return frase;

}

//-------------------------------------------CONTEGGIO PAROLE IN UNA FRASE-------------------------------------------------------

//Creo una funzione per contare il numero di parole in una frase (non funziona con doppi spazi). 
//mi servirà per sapere se l'utente sta scrivendo una parola o una frase
function contaParole(parola) {

    return parola.split(" ").length;

}

console.log(contaParole(/* inserire variabile */) + " parole/a");