// Descrizione:
// Scrivere un programma che chieda all’utente:
// - Il numero di chilometri da percorrere
// - Età del passeggero
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
// - il prezzo del biglietto è definito in base ai km (0.21 € al km)
// - va applicato uno sconto del 20% per i minorenni
// - va applicato uno sconto del 40% per gli over 65.
// MILESTONE 1:
// Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.

//FASE DI INPUT DATI

//utente input km da percorrere
const km = document.getElementById("kminput");
const eta = document.getElementById("etainput");
const submit = document.getElementById("submitinput");

//on-click del mouse
submit.addEventListener ("click" , function() {

    const km1 = parseInt(km.value);
    console.log(km1, typeof(km1));
    const eta1 = parseInt(eta.value);
    console.log(eta1, typeof(eta1));



//FASE ELABORAZIONE DATI

    //init var prezzo base = 0.21*km
    let prz_base = km1 * 0.21;
    console.log("prezzo base è ", prz_base, typeof(prz_base));
    //init var prezzo totale = vuoto
    let prz_tot = 0;
    console.log("prezzo totale è ", prz_tot, typeof(prz_tot));
    //if età < 18 then: prz_tot = prz_base * 0.8
    if (eta1 < 18) {
        prz_tot = prz_base * 0.8;
        console.log("prezzo totale è ", prz_tot, typeof(prz_tot));
    }
    //else-if età > 65 then: prz_tot = prz_base * 0.6
    else if (eta1 > 65) {
        prz_tot = prz_base * 0.6;
        console.log("prezzo totale è ", prz_tot, typeof(prz_tot));
    }
    // else: prz_tot = prz_base
    else {
        prz_tot = prz_base;
        console.log("prezzo totale è ", prz_tot, typeof(prz_tot));
    }


// FASE DI OUTPUT

    alert(`${"il prezzo totale del tuo biglietto è di "}${prz_tot}${" euro"}`);

})