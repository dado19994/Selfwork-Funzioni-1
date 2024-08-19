// SELFWORK DATI STRUTTURALI

// Dati gli array
// let array_1 = [
//     ['un', 'per', 'incatenarli.'],
//     ['Anello', 'trovarli,'],
//     ['ghermirli', 'e'],
//     ['gondor', 'mark'],
//   ];
  
//   let array_2 = [
//     [['trovarli,']],
//     ['tu,', 'sciocchi'],
//     ['tu,', 'sciocchi', ['padron', 'Sauron']],
//     ['nel', ['fuggite', 'gandalf']],
//     [['domarli,', 'passare'], 'buio']
//   ];
  
 
//   let frase = array_1[0][0].charAt(0).toUpperCase() + array_1[0][0].slice(1) + " " + // "Un"
            //  array_1[1][0] + " " +  // "Anello"
            //  array_1[0][1] + " " +  // "per"
            //  array_2[4][0][0] + " " + // "domarli,"
            //  array_1[0][0] + " " + // "un"
            //  array_1[1][0] + " " +  // "Anello"
            //  array_1[0][1] + " " +  // "per"
            //  array_1[1][1] + " " +  // "trovarli,"
            //  array_1[0][0] + " " + // "un"
            //  array_1[1][0] + " " +  // "Anello"
            //  array_1[0][1] + " " +  // "per"
            //  array_1[2][0] + " " +  // "ghermirli"
            //  array_1[2][1] + " " +  // "e"
            //  array_2[3][0] + " " +  // "nel"
            //  array_2[4][1] + " " +  // "buio"
            //  array_1[0][2];         // "incatenarli."
  
  // Stampa la frase risultante
//   console.log(frase);


  // SELFWORK FUNZIONI 1

  // Funzione che simula il gioco di dadi
function giocoDiDadi() {
    // Chiede quanti tiri effettuare
    let numeroTiri = parseInt(prompt("Quanti tiri vuoi effettuare?"));

    // Variabili per i punteggi dei giocatori
    let punteggioGiocatore1 = 0;
    let punteggioGiocatore2 = 0;

    // Funzione per simulare un tiro di dado
    function tiraDado() {
        return Math.floor(Math.random() * (6 - 1 + 1) + 1); // Numero random tra 1 e 6
    }

    // Simulazione dei tiri per entrambi i giocatori
    for (let i = 0; i < numeroTiri; i++) {
        punteggioGiocatore1 += tiraDado();
        punteggioGiocatore2 += tiraDado();
    }

    // Stampa i risultati
    console.log(`Punteggio Giocatore 1: ${punteggioGiocatore1}`);
    console.log(`Punteggio Giocatore 2: ${punteggioGiocatore2}`);

    // Determina e stampa il vincitore
    if (punteggioGiocatore1 > punteggioGiocatore2) {
        console.log("Il Giocatore 1 ha vinto!");
    } else if (punteggioGiocatore1 < punteggioGiocatore2) {
        console.log("Il Giocatore 2 ha vinto!");
    } else {
        console.log("È un pareggio!");
    }
}

// Chiamata della funzione per eseguire il gioco
giocoDiDadi();

  