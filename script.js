// ESERCIZI DI RECAP JAVASCRIPT

// 1. Crea una funzione che controlli due numeri.
// Ritorna "True" se uno dei due numeri è 50 o se la somma dei due è 50.
const sum = (a, b) => {

    if (a === 50 || b === 50 || a + b === 50) {
        return true;
    }
    else {
        return false;
    }
}

// Esempio per vedere se funziona
const a = 10;
const b = 30;
const c = sum(a, b)
console.log(`1. Uno dei due numeri o la loro somma è 50? Risposta: ${c}`);


// 2. Crea una funzione che rimuova il carattere ad una specifica posizione da una stringa.
// Passa la stringa e la posizione come parametri e ritorna la stringa modificata
const removeCharacter = (string, position) => {
    let array = string.split("");
    array.splice(position, 1);
    return array.join("");
}

// Esempio per vedere se funziona
const stringa = "Daje Roma Daje";
const rimozione = 6;
const rimosso = removeCharacter(stringa, rimozione);
console.log("2. " + rimosso);


// 3. Crea una funzione che controlli se due numeri siano compresi tra 40 e 60 o tra 70 e 100.
// Ritorna 'true' se rispecchiano queste condizioni, altrimenti ritorna 'false'
const between = (a, b) => {
    if (((a >= 40 && a <= 60) && (b >= 40 && b <= 60)) || ((a >= 70 && a <= 100) && (b >= 70 && b <= 100))) {
        return true;
    } else {
        return false;
    }
}

// Esempio per vedere se funziona
const num1 = 70;
const num2 = 100;
const controllo = between(num1, num2);
console.log(`3. I due numeri sono compresi tra 40 e 60 o tra 70 e 100? Risposta: ${controllo}`)


// 4. Crea una funzione che accetti un nome di città come parametro e ritorni
// il nome stesso se inizia con "Los" o "New", altrimenti ritorni "false"
const cityReview = (cityName) => {
    if (cityName.startsWith("Los") || cityName.startsWith("New")) {
        return cityName;
    } else {
        return false;
    }
}

// Esempio per vedere se funziona
const nomeCitta = "Latina"
const verificaCitta = cityReview(nomeCitta);
console.log(`4. La città inizia con "Los" o con "New"? Risposta: ${verificaCitta}`);


// 5. Crea una funzione che calcoli e ritorni la somma di tutti gli elementi di un array.
// L'array deve essere passato come parametro
const sumElements = (array) => {
    let par = 0;
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        par += element
    }
    return par;
}

// Esempio per vedere se funziona
const array = [1, 38, 58, 36, 69, 14]
const sommaArray = sumElements(array)
console.log(`5. La somma dell'array inserito è: ${sommaArray}`)


// 6. Crea una funzione che controlli che un array NON contenga i numeri 1 o 3.
// Se NON li contiene, ritorna "true", altrimenti ritorna "false"
const no1or3 = (array) => {
    if (!array.includes(1) && !array.includes(3)) {
        return true;
    } else {
        return false;
    }
}

// Esempio per vedere se funziona
const array1 = [5, 2, 6]    //Testato con 1 o 3 e il risultato è false
const contr = no1or3(array1)
console.log(`6. L'array NON contiene 1 o 3? Risposta: ${contr}`)


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

// Esempio per vedere se funziona
const angolo = 180;     // testato per ogni tipo di angolo richiesto dalla consegna
const verificaAngolo = angles(angolo);
console.log(`7. L'angolo di ${angolo} gradi è un angolo ${verificaAngolo}`);


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

// Esempio per vedere se funziona
const array2 = "senatus popolus quirities romani"   // funziona sia tutto minuscolo, sia tutto maiuscolo, sia con la prima lettera di ogni parola mauiscola/minuscola
const acronimoArray = acronimo(array2)
console.log(`8. L'acronimo di ${array2} è: ${acronimoArray}`)



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
console.log(`EXTRA 1. Il carattere più utilizzato é: ${mostUsed}`);


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

console.log(`EXTRA 2. Le parole sono anagrammi? ${anagramma}`);


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

    const anagrammiGiusti = listaAnagrammi.filter(anagramma => verificaAnagrammi(parola, anagramma));

    return anagrammiGiusti;
}

// Esempio per vedere se funziona
const parolaCercata = "cartine"
const possibiliAnagrammi = ["carenti", "incerta", "espatrio"];
const anagrammiTrovati = trovaAnagrammi(parolaCercata, possibiliAnagrammi);
console.log(`EXTRA 3. Gli anagrammi corretti di ${parolaCercata} sono: ${anagrammiTrovati}`);


// 4. Partendo da una stringa passata come parametro, ritorna `true` se la stringa è palindroma o `false` se non lo è.
function parolaPalindroma(string) {
    return string.split("").reverse().join("") === string
}

// Esempio per vedere se funziona
const str = "yamamay"   // testato con parole non palindrome e risulta false
const palindroma = parolaPalindroma(str)
console.log(`EXTRA 4. La parola ${str} è palindroma? Risposta: ${palindroma}`)


// 5. Partendo da un numero intero (dai parametri) ritorna un numero che contenga le stesse cifre, ma in ordine contrario.
function numeroInverso (numero) {
    return Number(String(numero).split("").reverse().join(""));
}

// Esempio per vedere se funziona
const numero = 1015;
const inverso = numeroInverso(numero);
console.log(`EXTRA 5. Il numero ${numero} all'inverso diventa: ${ inverso}`);


// 6. Scrivi una funzione che accetti un numero positivo X come parametro.
// La funzione dovrebbe stampare a console una “scala” creata con il carattere “#” e avente X scalini.
function scaletta (x) {
    if (x < 0){
        return false;
    }

    console.log("EXTRA 6.");

    for (let i = 0; i <= x; i++){
        console.log("#".repeat(i));
    }
}

// Esempio per vedere se funziona
const d = 5;
const scala = scaletta(d);


// 7. Crea una funzione che, data una stringa come parametro, ritorni la stessa stringa, ma al contrario.