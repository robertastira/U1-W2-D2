/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const num1 = 15
const num2 = 22
if (num1 > num2)
console.log('il numero maggiore è il primo')
else 
console.log('il numero maggiore è il secondo')

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const num3 = 6
if (num3 !== 5)
console.log('not equal')

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const num4 = 15
if (num4 % 5 === 0)
console.log('divisibile per 5')

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const num5 = 3
const num6 = 5
const num7 = 8

console.log(num5 + num6 === 8 || num5 === 8 || num6 === 8)

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

let totalShoppingCart = 80
if (totalShoppingCart < 50)
console.log('il totale del conto è ',totalShoppingCart)
else 
console.log('il totale del conto è ',totalShoppingCart + 10)


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* MODIFICA ESERCZIO 5
let totalShoppingCart = 80
totalShoppingCart = (80/100) * 20
if (totalShoppingCart < 50)
console.log('il totale del conto è ',totalShoppingCart)
else 
console.log('il totale del conto è ',totalShoppingCart + 10)

*/

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

let variabile1 = 10
let variabile2 = 30
let variabile3 = 60

if (variabile1 > variabile2 && variabile1 > variabile3 && variabile2 > variabile3) { /*123*/
console.log(variabile1, variabile2, variabile3)
}
else if (variabile1 < variabile2 && variabile2 > variabile3 && variabile3 < variabile1) { /*213*/
console.log(variabile2, variabile1, variabile3) 
}
else if (variabile1 > variabile2 && variabile3 > variabile2 && variabile1 >variabile3) { /*132*/
console.log(variabile1, variabile3, variabile2)
}
else if (variabile3 > variabile2 && variabile1 > variabile2 && variabile3 >variabile1) { /*312*/
console.log(variabile3, variabile1, variabile2)
}
else if (variabile3 > variabile2 && variabile2 > variabile1 && variabile3 >variabile1) { /*321*/
console.log(variabile3, variabile2, variabile1)
}
else if (variabile2 > variabile3 && variabile2 > variabile1 && variabile3 >variabile1) { /*231*/
console.log(variabile2, variabile3, variabile1)
}

  

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

const valore1 = 5
console.log('il valore1 è un',typeof valore1)  

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const pari = 10
if (pari % 2 === 0)
console.log('Il numero è pari')
else (pari % 2 === 0) 
console.log('Il numero è dispari')

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/
let val = 7
if (val < 10) 
console.log("Meno di 10") 
else if (val < 5) 
console.log("Meno di 5")
else if (val >= 10)
console.log("Uguale a 10 o maggiore");
  


/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = "Toronto"
console.log(me['city'])

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete(me['lastName'])
console.log(me['lastName'])

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

me.skills.pop()
console.log(me['skills']) 


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const array = []
array.push(1,2,3,4,5,6,7,8,9,10)
console.log(array)

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

array.pop()
array.push(100)
console.log(array[9])

