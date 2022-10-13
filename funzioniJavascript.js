//-----------------------------------------------------------------LUNGHEZZA ARRAY----------------------------------------------------------------------------
//ritorna la lunghezza dell'array, contando gli elementi presenti
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numero = text.length; 
/* numero = 26 */


//-------------------------------------------------------------------ESTRARRE STRINGA-------------------------------------------------------------------------
//estrae una parte di una stringa e ritorna la parte estratta in un'altra stringa. Ha due parametri, la posizione iniziale e quella finale (fine non inclusa) 
let str = "Apple, Banana, Kiwi";
let stringa = str.slice(7,13);
/* stringa = 'Banana' */


//-----------------------------------------------------------------RIMPIAZZARE STRINGA------------------------------------------------------------------------
//sostituisce uno specifico valore con un altro in una stringa
//è Case-Sensitive (per renderlo Case-Insensitive usare una regex mettendo il primo parametro con una /i flag [esempio: /MICROSOFT/i])
//per rimpiazzare tutti i match che trovi usare invece la /g flag [esempio: /Microsoft/g]
let testo = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");
/* newText = "Please visit W3Schools" */


//----------------------------------------------------------------MAIUSCOLO O MINUSCOLO-----------------------------------------------------------------------
//scrive tutto in maiuscolo o tutto in minuscolo
let text1 = "Hello World!";
let text2 = text1.toUpperCase(); //"HELLO WORLD"
let text3 = text1.toLowerCase(); //"hello world"


//----------------------------------------------------------------CONCATENARE STRINGHE------------------------------------------------------------------------
//concatena due stringhe alla stessa maniera che farebbe l'operatore +, con il primo parametro definisci cosa mettere tra le due stringhe
let testo1 = "Hello";
let testo2 = "World";
let testo3 = testo1.concat(" ", text2);
//testo3 = "Hello World"


//--------------------------------------------------------------RIMUOVERE SPAZI BIANCHI-----------------------------------------------------------------------
//rimuove gli spazi bianchi da entrambi i lati di una stringa. Utile per i form, quando bisogna prelevare solo il contenuto togliendo eventuali errori
//di battitura da parte degli utenti
let text4 = "      Hello World!      ";
let text5 = text4.trim();
//text5 = "Hello World!"


//--------------------------------------------------------RICAVARE CARATTERE DA INDICE NELLA STRINGA----------------------------------------------------------
//in base all'indice fornito, la funzione ricava il carattere alla stessa posizione nella stringa
let text6 = "HELLO WORLD";
let char = text6.charAt(0);
//char = "H"


//-----------------------------------------------------------------DA STRINGA AD ARRAY------------------------------------------------------------------------
//converte una stringa in un array, tra le parentesi bisogna specificare il separatore. Se non si specifica l'array conterrà l'intera stringa con indice 0
//se il separatore è "" allora l'array che ritorna sarà un array dei singoli caratteri
let text7 = "a,b,c,d,e,f";
const myArray = text7.split(",");
//text7 = ["a", "b", "c", "d", "e", "f"]


//-------------------------------------------------------------INDICE PRIMA OCCORRENZA TROVATA----------------------------------------------------------------
//ritorna l'indice (la posizione) della prima occorrenza che trova di uno specifico testo dentro una stringa. Il conteggio parte da 0.
//se NON trova niente ritorna -1
let str1 = "Please locate where 'locate' occurs!";
str1.indexOf("locate");
//str1 = 7

//se aggiungi un secondo parametro ti trova l'indice dell'occorrenza partendo pero' dalla posizione che hai indicato. Il risultato sarà comunque relativo 
//all'inizio della stringa e non contando dal numero che hai passato.
let str2 = "Please locate where 'locate' occurs!";
str2.indexOf("locate", 15);
//str1 = 21

//lastIndexOf fa la stessa cosa solo che cerca l'ultima occorrenza che trova
//per cercare tra le regex al posto della indexOf() va usata la search()


//-------------------------------------------------------------------MATCH CON REGEX--------------------------------------------------------------------------
//cerca un match di una stringa utilizzando le regex, ritorna poi il match sotto forma di Array (/g in questo caso serve a prendere tutti i match)
let text8 = "The rain in SPAIN stays mainly in the plain";
let text9 = text8.match(/ain/g); 
//text9 = ["ain","ain","ain"]


//---------------------------------------------------------VERIFICA DI MATCH CON STRINGHE--------------------------------------------------------------------
//ritorna TRUE se trova un match tra parametro e stringa
let text10 = "Hello world, welcome to the universe.";
let text11 = text10.includes("world");
//text11 = true

//è case sensitive. Puoi aggiungere un secondo parametro per dirgli da che indice partire con la ricerca
let text12 = "Hello world, welcome to the universe.";
let text13 = text12.includes("world", 12);    /* oppure */   let text14 = text12.includes("World"); 
//text13 = false


//--------------------------------------------------------------VERIFICA INIZIO STRINGA------------------------------------------------------------------------
//ritorna TRUE se una stringa inizia con un valore specifico. Anche lui è case sensitive e accetta un secondo parametro per l'indice dove iniziare la ricerca
let text15 = "Hello world, welcome to the universe.";
let testo4 = text15.startsWith("Hello");
//testo4 = true

//endsWith() fa la stessa cosa solo che controlla se la stringa finisce con quel valore specifico


//-----------------------------------------------------------CONVERSIONE NUMERO A STRINGA----------------------------------------------------------------------
//converte un numero in stringa
let x = 123;
let y = x.toString();
//y = "123"


//-------------------------------------------------------------------TAGLIO DECIMALI----------------------------------------------------------------------------
//ritorna una stringa, con il numero scritto con uno specifico numero di decimali (2 è perfetto per definire i valori monetari)
let n = 9.656;
m = n.toFixed(0);  // m = 10
m = n.toFixed(2);  // m = 9.66
m = n.toFixed(4);  // m = 9.6560
m = n.toFixed(6);  // m = 9.656000


//-----------------------------------------------------------CONVERSIONE VARIABILE IN NUMERO-------------------------------------------------------------------
//la funzione Number() converte le variabili fornite in numeri, se non puo' essere convertito fornisce NaN (not a number)
Number(true);       // 1
Number(false);      // 0
Number("10");       // 10
Number("  10");     // 10
Number("10.33");    // 10.33
Number("10,33");    // NaN
Number("10 33");    // NaN
Number("John");     // NaN

//puo' convertire anche delle date in un numero, la data di partenza è il 1970/01/01 
//(utile questa funzione per capire se una data è più recente o datata di un'altra)
let pippo = new Date("1970-01-01");     /* Esempio: "2020-05-05" equivale a 1588636800000 mentre "1900-03-03" equivale a -2203718400000 */
let pluto = Number(pippo);
//pluto = 0


//---------------------------------------------------------------CONVERSIONE STRINGA IN NUMERO----------------------------------------------------------------
//per i numeri interi si utilizza questa funzione in cui gli spazi sono concessi e viene preso solo il primo numero trovato 
parseInt("-10");        // -10
parseInt("-10.33");     // -10
parseInt("10");         // 10
parseInt("10.33");      // 10
parseInt("10 20 30");   // 10
parseInt("10 years");   // 10
parseInt("years 10");   // NaN

//per i numeri con decimali invece si usa questa funzione
parseFloat("-10");      // -10
parseFloat("10.33");    // 10.33
parseFloat("10 20 30"); // 10
parseFloat("10 years"); // 10
parseFloat("years 10"); // NaN
