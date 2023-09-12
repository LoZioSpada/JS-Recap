// ESERCIZI DI RECAP JAVASCRIPT

// 1. Crea una funzione che controlli due numeri.
// Ritorna "True" se unno dei due numeri è 50 o se la somma dei due è 50.

const sum = (a, b) => {

    if (a === 50 || b === 50 || a + b === 50) {
        return true;
    }
    else {
        return false;
    }
}

// 2. Crea una funizione che rimuova il carattere ad una specifica posizione da una stringa.
// Passa la stringa e la posizione come parametri e ritorna la stringa modificata

const removeCharacter = (string, position) => {
    let array = string.split("");
    array.splice(position, 1);
    return array.join("");
}

// 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100.
// Ritorna 'true' se rispecchiano queste condizioni, altrimenti ritorna 'false'

const between = (a, b) => {
    if (((a >= 40 && a <= 60) && (b >= 40 && b <= 60)) || ((a >= 70 && a <= 100) && (b >= 70 && b <= 100))) {
        return true;
    } else {
        return false;
    }
}

// 4. Crea una funzione che accetti un nome di città come parametro e ritorni
// il nome stesso se inizia con "Los" o "New", altrimenti ritorni "false"

const cityReview = (cityName) => {
    if (city.startsWith("Los") || city.startsWith("New")) {
        return cityName;
    } else {
        return false;
    }
}

// 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
// L'array deve essere passato come parametro

const sumElements = (array) => {
    let par = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        par += element
    }
    return temp;
}

// 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3.
// Se NON li contiene, ritorna "true", altrimenti ritorna "false"

const no1or3 = (array) => {
    if (!array.includes(1) && !array.includes(3)) {
        return true;
    } else {
        return false;
    }
}

// 7. Crea una funzione per trovare il tipo di un angolo i cui gradi sono passati come parametro.
// Angolo acuto: meno di 90° => ritorna "acuto"
// Angolo ottuso: tra i 90° e i 180° => ritorna "ottuso"
// Angolo retto: 90° => ritorna "retto"
// Angolo piatto: 180° => ritorna "piatto"

const angles = (deg) => {
    if (deg < 90) {
        return "acuto"
    }
    if (deg > 90 && deg < 180) {
        return "ottuso"
    }
    if (deg === 90) {
        return "retto"
    }
    if (deg === 180) {
        return "piatto"
    }
}

// 8. Crea una funzione che crei un acronimo a partire da una frase.
// Es. "Fabbrica Italiana Automobili Torino" deve ritornare "FIAT"

const acronimo = (frase) => {
    let array = frase.split(' ');
    let x = "";
    for (let i = 0; i < array.length; i++) {
        const parola = array[i]
        x += parola.charAt(0)
    }
    return x.toUpperCase()
}



// ESERCIZI EXTRA DI RECAP JAVASCRIPT

// 1. Partendo da una stringa (passata come parametro), ritorna il carattere più usato nella stringa stessa.

function piuUsato(string) {
    const frequency = {};

    for (let character of string) {
        if (frequency[character]) {
            frequency[character]++;
        } else {
            frequency[character] = 1
        }
    }
    let maxCharacter = '';
    let maxFrequency = 0;

    for (let character in frequency) {
        if (frequency[character] > maxFrequency) {
            maxCharacter = character;
            maxFrequency = frequency[character];
        }
    }
    return maxCharacter;
}

// Esempio per vedere se funziona
const string = "aaoaaoaaaaajjjdrwc";
const mostUsed = piuUsato(string);
console.log(`Il carattere più utilizzato é: ${mostUsed}`);


// 2. Controlla che due stringhe passate come parametri siano gli anagrammi l’una dell’altra.
// Ignora punteggiatura e spazi e ricordate di rendere la stringa tutta in minuscolo.
// Se le due parole sono anagrammi, ritorna true , altrimenti ritorna `false`.

function anagrammi(string1, string2) {
    const stringaPulita1 = string1.replace(/[^\w]/g, '').toLowerCase();
    const stringaPulita2 = string2.replace(/[^\w]/g, '').toLowerCase();

    if (stringaPulita1.length !== stringaPulita2.length) {
        return false;
    }

    const arrayPulita1 = stringaPulita1.split('').sort().join('');
    const arrayPulita2 = stringaPulita2.split('').sort().join('');

    return arrayPulita1 === arrayPulita2;
}

// Esempio per vedere se funziona
const parola1 = "enacoid"
const parola2 = "dioporco"
const anagramma = anagrammi(parola1, parola2);

console.log(`Le parole sono anagrammi? ${anagramma}`);


// 3. Partendo da una lista di possibili anagrammi e da una parola (entrambi passati come parametri),
// ritorna un nuovo array contenente tutti gli anagrammi corretti della parola data.

function trovaAnagrammi(parola, listaAnagrammi) {
    function stringaPulita(string) { // funzione per togliere punteggiatura e spazi
        return string.replace(/[^\w]/g, '').toLowerCase();
    }

    function verificaAnagrammi(string1, string2) {
        const stringaPulita1 = stringaPulita(string1)
        const stringaPulita2 = stringaPulita(string2)

        if (stringaPulita1.length !== stringaPulita2.length) {
            return false;
        }

        const arrayPulita1 = stringaPulita1.split('').sort().join('');
        const arrayPulita2 = stringaPulita2.split('').sort().join('');

        return arrayPulita1 === arrayPulita2;
    }

    const anagrammiGiusti = listaAnagrammi.filter  (anagramma => verificaAnagrammi(parola, anagramma));

    return anagrammiGiusti;
}

// Esempio per vedere se funziona
const parolaCercata ="Aldo" // funziona anche con "vogianni"
const possibiliAnagrammi = ["olda", "dola", "adlo", "lado", "giovanni", "giacomo"];
const anagrammiTrovati = trovaAnagrammi(parolaCercata, possibiliAnagrammi);
console.log(`Gli anagrammi corretti di ${parolaCercata} sono: ${anagrammiTrovati}`);