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

