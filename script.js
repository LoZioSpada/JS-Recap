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
    if(deg < 90){
        return "acuto"
    }
    if (deg > 90 && deg < 180){
        return "ottuso"
    }
    if(deg === 90){
        return "retto"
    }
    if(deg === 180){
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

