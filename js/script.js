/******************************************************************
 ********************   JSNACKS RECAP  ****************************
 ******************************************************************/

/********************
 ****** DAY 1 *******
 ********************/

/*******************************************
 * SNACK 1
 *  Crea un array composto da 10 brand famosi (Sony, Gucci, Apple, Samsung, Dolce&Gabbana). 
 *  - Partendo da questo array creare un nuovo array dove tutti i brand dovranno essere "normalizzati" (le lettere maiuscole saranno convertite in minuscolo quindi Gucci diventerà gucci) e aggiungere, sempre in questo contesto di "clonazione", una nuova proprietà denominata "foundationYear". Quest'ultima proprietà conterrà l'anno (mettete un valore voi, non è necessario inserire valore reale) in cui l'azienda è stata fondata. 
 *******************************************/

// Brand's Array
// const brands = [
//     {
//         name: 'Sony',
//     },
//     {
//         name: 'Gucci',
//     },
//     {
//         name: 'Dolce&Gabbana',
//     },
//     {
//         name: 'Samsung',
//     },
//     {
//         name: 'Philips',
//     },
//     {
//         name: 'Apple',
//     },
//     {
//         name: 'Asus',
//     },
//     {
//         name: 'Nike',
//     },
//     {
//         name: 'Adidas',
//     },
//     {
//         name: 'Puma',
//     },
// ];

// // Create new array with lowercase and foundation year
// const min = brands.map(brand => {
//     return {
//         name: brand.name.toLocaleLowerCase(),
//         foundationYear: randomNum(1900, 2020),
//     };
// });
// // Print in cosole
// console.log(brands);
// console.log(min);

// // FUNCTIONS
// /**
//  * Return random number between min and max
//  * @param {number} min 
//  * @param {number} max 
//  * @returns 
//  */
// function randomNum(min, max){
//     return Math.floor(Math.random() * (max - min + 1 ) + min);
// }


/*******************************************
 * SNACK 2
 * Crea un array composto da 10 automobili. 
 * Ogni oggetto automobile avrà le seguenti proprietà: marca, modello, alimentazione (benzina, diesel, gpl, elettrico, metano).
 * Dividi in 3 array separati. Inserire nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo e ultimo il resto delle auto. 
 * Infine stampa separatamente i 3 array.
 *******************************************/


//  const auto = [
//     {
//         marca: 'Renault',
//         modello: 'Twingo',
//         alimentazione: 'Benzina',
//     },
//     {
//         marca: 'Fiat',
//         modello: 'Marea',
//         alimentazione: 'Benzina',
//     },
//     {
//         marca: 'Volkswagen',
//         modello: 'Polo',
//         alimentazione: 'Diesel',
//     },
//     {
//         marca: 'Tesla',
//         modello: 'Model X',
//         alimentazione: 'Elettrica',
//     },
//     {
//         marca: 'Renault',
//         modello: 'Clio',
//         alimentazione: 'Metano',
//     },
//     {
//         marca: 'Fiat',
//         modello: 'Punto',
//         alimentazione: 'Diesel',
//     },
//     {
//         marca: 'Merceds',
//         modello: 'Classe A',
//         alimentazione: 'Benzina',
//     },
//     {
//         marca: 'Fiat',
//         modello: 'Fiorino',
//         alimentazione: 'Gpl',
//     },
//     {
//         marca: 'BMW',
//         modello: 'Z4',
//         alimentazione: 'Benzina',
//     },
//     {
//         marca: 'Tesla',
//         modello: 'Model S',
//         alimentazione: 'Elettrica',
//     },
// ];

// const benzina = auto.filter(item => item.alimentazione === 'Benzina');
// const diesel = auto.filter(item => item.alimentazione === 'Diesel');
// const altro = auto.filter(item => (!benzina.includes(item) && !diesel.includes(item)));

// console.table(benzina);
// console.table(diesel);
// console.table(altro);

// const benzina = [];
// const diesel = [];
// const altro = [];

// auto.forEach(item => {
//     if(item.alimentazione === 'Benzina'){
//         benzina.push(item);
//     } else if(item.alimentazione === 'Diesel'){
//         diesel.push(item);
//     } else {
//         altro.push(item);
//     }
// });

// console.table(benzina);
// console.table(diesel);
// console.table(altro);

/********************************************************************************/

/********************
 ****** DAY 2 *******
 ********************/

/*******************************************
 * SNACK 1
 * Crea un array di oggetti che rappresentano degli animali: ogni animale ha un nome, una famiglia e una classe.
 * Crea un nuovo array con la lista dei mammiferi.
 *******************************************/

// const animals = [
//     {
//         nome: 'leone',
//         famiglia: 'felidi',
//         classe: 'mammiferi'
//     },
//     { 
//         nome: 'cane',
//         famiglia: 'canidi', 
//         classe: 'mammiferi' 
//     },
//     { 
//         nome: 'gallina', 
//         famiglia: 'fasianidi', 
//         classe: 'uccelli' 
//     },
//     { 
//         nome: 'squalo bianco', 
//         famiglia: 'lamnidi', 
//         classe: 'condritti' 
//     },
//     { 
//         nome: 'cobra', 
//         famiglia: 'elapidi', 
//         classe: 'rettili' 
//     },
//     { 
//         nome: 'mucca', 
//         famiglia: 'bovidi', 
//         classe: 'mammiferi' 
//     },
// ];
// const mammiferi = animals.filter(element => element.classe === 'mammiferi');
// console.log(mammiferi);

/*******************************************
 * SNACK 2
 * Crea un array di 8 oggetti che rappresentano delle persone: ogni persona ha un nome, un cognome e un'età.
 * Crea un nuovo array inserendo per ogni persona una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 *******************************************/
// const persone = [
//     {
//         name: 'Marco',
//         cognome: 'Bagnasco',
//         eta: 33,
//     },
//     {
//         name: 'Egle',
//         cognome: 'Solari',
//         eta: 9,
//     },
//     {
//         name: 'Sivia',
//         cognome: 'Renzi',
//         eta: 41,
//     },
//     {
//         name: 'Andrea',
//         cognome: 'Rossi',
//         eta: 17,
//     },
//     {
//         name: 'Laura',
//         cognome: 'Bianchi',
//         eta: 14,
//     },
//     {
//         name: 'Luca',
//         cognome: 'Giurato',
//         eta: 81,
//     },
//     {
//         name: 'Michele',
//         cognome: 'Rezzano',
//         eta: 28,
//     },
//     {
//         name: 'Giovanni',
//         cognome: 'Devoto',
//         eta: 12,
//     },
// ];

// const guida = persone.map(element => {
//     if(element.eta >= 18 && element.cognome != 'Giurato'){
//         return `${element.name} ${element.cognome} può guidare`;
//     }
//     return `${element.name} ${element.cognome} non può guidare`;
// });
// console.log(guida);

/*******************************************
 * SNACK 3
 * Crea un array di 8 oggetti che rappresenti i pc in vendita nel nostro negozio: ogni pc ha un nome, una marca, un booleano che indica se esce con Windows come OS di fabbrica (hasWindows: true oppure hasWindows: false), il prezzo originale ed un prezzo scontato
 * Creiamo un nuovo array che indichi i pc che hanno Windows e di questi andiamo a tirar fuori la differenza tra prezzo originale e scontato.
 *******************************************/
// const pc = [
//     {
//         nome: 'Susan',
//         marca: 'Asus',
//         hasWindows: true,
//         prezzo: 1400,
//         prezzoScontato: 1000,
//     },
//     {
//         nome: 'Qwerty',
//         marca: 'HP',
//         hasWindows: false,
//         prezzo: 899,
//         prezzoScontato: 599,
//     },
//     {
//         nome: 'MacBook',
//         marca: 'Apple',
//         hasWindows: false,
//         prezzo: 1200,
//         prezzoScontato: 799,
//     },
//     {
//         nome: 'Bau',
//         marca: 'Asus',
//         hasWindows: true,
//         prezzo: 400,
//         prezzoScontato: 150,
//     },
//     {
//         nome: 'ZXCV',
//         marca: 'Lenovo',
//         hasWindows: true,
//         prezzo: 900,
//         prezzoScontato: 450,
//     },
// ];

// const windows = pc.filter(item => item.hasWindows).map(item => {
//    item.diffPrice = item.prezzo - item.prezzoScontato;
//    return item;
// });
// console.log(windows);

/********************************************************************************/

/********************
 ****** WEEKEND *******
 ********************/

/*******************************************
 * SNACK 1
 * A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
//  *******************************************/
// const words = ['pippo', 'PLUTO', 'Paperino', 'tOPOLinO'];

// const capitalized = words.map(word => word.charAt(0).toUpperCase() + word.toLocaleLowerCase().slice(1));
// console.log(words);
// console.log(capitalized);


/*******************************************
 * SNACK 2
 * Un oggetto rappresenta una finestra di un browser e contiene due campi: 
 un array di tab aperte
 un numero che indica l'indice della tab aperta nell'array:
 * Il software deve guardare se c'è un social aperto ed eliminarlo dalle tab.
 * Nel caso la tab fosse attiva, deve attivare la successiva.
 *******************************************/
// const browser = {
//     tab: ['Facebook', 'GitHub', 'Gmail', 'Twitter', 'Instagram', 'Wikipedia', 'Stackoverflow'],
//     activeTab: 0,
// }

// const social = ['Facebook', 'Twitter', 'Instagram', 'YouTube', 'Snapchat', 'Tik Tok']

// console.table(browser);

// browser.tab = browser.tab.filter(item => !social.includes(item));

// console.table(browser);


/*******************************************
 * SNACK 3  -> si potrebbe ottimizzare con una funzione separata per il capitalize
 * A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.
 *******************************************/
// const words2 = ['pippo', 'PLUTO', 'Paperino', 'tOPOLinO'];

// const capitalized2 = toCapital(words2);

// console.log(words2);
// console.log(capitalized2);

// // FUNCTIONS
// function toCapital(arrString){
//     const capArr = arrString.map(arrString => arrString.charAt(0).toUpperCase().concat(arrString.toLocaleLowerCase().slice(1)));
//     return capArr;
// }




/*******************************************
 * SNACK 4 -> VUE
 * Partendo da un array di oggetti con i contatti di una rubrica con nome, cognome, numero, attivo (true,false) andiamo a stampare nome cognome e numero dentro una lista.
 * Fare in modo poi che i contatti non attivi (attivo: false) siano stampati di colore rosso mentre gli altri normalmente di nero. 
 * Cliccando sul numero della persona fate in modo che appaia in console il cognome della persona di cui è stato cliccato il numero
 *******************************************/

const app = new Vue({
    el: '#root',
    data: {
        contacts: [
            {
                firstName: 'John',
                lastName: 'Cena',
                number: 3931800525,
                active: false,
            },
            {
                firstName: 'Zlatan',
                lastName: 'Ibrahimovic',
                number: 3458978261,
                active: true,
            },
            {
                firstName: 'Bruce',
                lastName: 'Willis',
                number: 3404742558,
                active: true,
            },
            {
                firstName: 'Natalie',
                lastName: 'Portman',
                number: 3336665400,
                active: false,
            },
            {
                firstName: 'Flavia',
                lastName: 'Pennetta',
                number: 3471526489,
                active: false,
            },
            {
                firstName: 'Bill',
                lastName: 'Gates',
                number: 3381237894,
                active: true,
            },
            {
                firstName: 'Angela',
                lastName: 'Merkel',
                number: 3471515002,
                active: false,
            },
        ],
    },
    methods: {
        getLastName(index){
            console.log(this.contacts[index].lastName);
        }
    },
});

