//---------------------------------------CAPITALIZE FIRST LETTER---------------------------------------------------
//Funzione per rendere maiuscola solo la prima lettera di una serie di stringhe dentro un array
function primaMaiuscola(array) {
    let nuovoArray = []
    for (i=0; i<array.length; i++) {
        let minuscolo = array[i].toLowerCase(); //rendo ogni elemento minuscolo
        let capitalized = minuscolo.charAt(0).toUpperCase() + minuscolo.slice(1); //prendo il primo elemento e lo metto maiuscolo, poi riprendo i restanti caratteri della stringa a partire dalla seconda posizione e li aggiungo
        nuovoArray.push(capitalized);
    }
    return nuovoArray;
}

//--------------------------------------RITORNA VALORI INTERMEZZO--------------------------------------------------
//Funzione per ritornare i valori di un array compresi tra due numeri definiti dall'utente (numeri non compresi)
function valoriIntermezzo(num1, num2, array) {

    let nuovoArray = [];

    if (num1 < num2) {

        for (let i=num1; i<num2; i++) {
            nuovoArray.push(array[i]);
        }

    } else {
        alert("Il valore del primo numero deve essere più piccolo del secondo");
    }

    return nuovoArray;
}

//--------------------------------------GIRA STRINGA AL CONTRARIO--------------------------------------------------
//Funzione per vedere delle strighe al contrario, come allo specchio
function capovolgiStringa(stringa) {

    let array = stringa.split("");
    let inverti = array.reverse();
    return inverti.join("");

}

//-------------------------------------5 NUMERI NON RIPETIBILI IN UN ARRAY--------------------------------------------------
//Inserisci 5 numeri casuali non ripetibili in un array
function fiveUniqueNumbers(arrayVuoto) {

    for (i=0; i<5; i++) {

        let numeroCasuale = randomNumber(0, 100);       //Serve la function RandomNumber
    
        //verifico che il numero non sia già presente tra i numeri random creati
        while (arrayVuoto.includes(numeroCasuale)) {
            numeroCasuale = randomNumber(0, 100);
        } 
        arrayVuoto.push(numeroCasuale);
    } 
    console.log(`I numeri dell'array sono ${arrayVuoto}`);
}

//-------------------------------------------TROVA MATCH TRA 2 ARRAY--------------------------------------------------------
//Funzione per trovare coincidenze tra 2 array
function trovaMatch(array1, array2) {

    let matches = [];

    for (let i=0; i<array1.length; i++) {

        for (let j=0; j<array2.length; j++) {

            if (array1[i] === array2[j]) matches.push(array1[i]);
        }
    }

    return matches;
}

//------------------------------------OPZIONI DINAMICHE DENTRO TAG SELECT DEL DOM---------------------------------------------
//Creo una funzione per creare le opzioni nei tag Select
function creaOpzioniSelectTag(arrayDiOggetti, selectTag) {

    let contenuto = "";

    //per ogni oggetto dell'array creo un contenuto che aggiungo alla sua variabile vuota definita sopra
    arrayDiOggetti.forEach(elemento => {
    
        contenuto += `<option value="${elemento.value}">${elemento.frase}</option>`

    });

    //aggiungo tutti i contenuti creati dentro select
    selectTag.innerHTML = contenuto;
}

/* RICHIEDE UN ARRAY DI OGGETTI DI QUESTO TIPO CON ALMENO QUESTI 2 VALORI */
const opzioniSelect = [
    {value: "all", frase: "Tutti"},
    {value: "animal", frase: "Animali"},
    {value: "vegetable", frase: "Verdure"},
    {value: "user", frase: "Utenti"}    
];

//-----------------------------------------------HEX RANDOM COLORS-------------------------------------------------------------
//Creo una funzione per creare colori casuali 
function randomColor() {

    //separo i caratteri scritti per formare un array
    let caratteri = '0123456789ABCDEF'.split('');

    //setto la variabile sul primo carattere che serve per definire tutti i colori
    let color = "#";

    //Ciclo per 6 volte (perchè ogni colore ha 6 caratteri)
    for (i = 0; i < 6; i++) {

        //aggiungo ogni volta il carattere prendendo il suo indice nell'array, definito da un numero casuale tra 0 e 15
        color = color + caratteri[Math.floor(Math.random() * 16)];

    }

    return color;
}

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
// Funzione per verificare se una parola o una frase sono palindrome
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
    let togliSpazi = minuscolo.replace(/ /g, ''); //se avessi messo una "i" dopo "g" avrei reso la ricerca case-insensitive in caso di parole, ovvero .replace(/Ciao/gi, 'hola')
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