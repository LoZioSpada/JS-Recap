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
    if (((a >= 40 && a <= 60) && (b >= 40 && b <= 60)) || ((a >= 70 && a <=100) && (b >= 70 && b <= 100))){
        return true;
    } else{
        return false;
    }
}

// 4. Crea una funzione che accetti un nome di città come parametro e ritorni
// il nome stesso se inizia con "Los" o "New", altrimenti ritorni "false"
