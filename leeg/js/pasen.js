/* Code ivm de paaseitjes: */
// Zorg ervoor dat de variabele stock van elke optie het aanwezige aantal opslaat.
const stock = undefined;

let keuzes = "";
//Pas de for of lus aan en overloop de juiste waardes van stock
for (const optie of undefined) {
  keuzes += `${optie}; `;
}

const bestel = () => {
  // Pas deze variabele aan zodat de keuze in lowercase wordt opgeslagen.
  const keuzeKlant = document.getElementById("inputKeuze").value;

  // Pas deze voorwaarde aan. De eerste alert mag alleen getoond worden wanneer de keuze niet in de stock staat.
  if (undefined) {
    alert("Sorry, deze soort hebben we niet in stock");
  } else {
    // Vervang deze undefined door op te halen hoeveel eitjes in stock zijn van deze keuze.
    const inStock = undefined;
    const aantal = prompt(
      `Hoeveel wil je er bestellen? We hebben er ${inStock} op stock`
    );
    if (aantal > 0) {
      //Bereken de nieuwe stock. Hoeveel zijn er nog aanwezig na deze bestelling?
      const nieuweStock = undefined;
      // Gebruik variabele nieuweStock om het nieuwe aantal effectief op te slaan in stock.
      stock;

      alert("Bedankt voor je bestelling!");
      console.log(stock);
    }
  }
};

/* Code ivm de nieuwsbrief: */
// Zorg ervoor dat de variabele ontvangersNieuwsbrief een unieke lijst van e-mailadressen zal bevatten.
const ontvangersNieuwsbrief = undefined;

const schrijfInOpNieuwsbrief = () => {
  // Pas deze variabele aan zodat de keuze in lowercase wordt opgeslagen.
  const email = prompt("Geef je mailadres:");

  // Pas deze voorwaarde aan. De eerste alert mag alleen getoond worden wanneer dit e-mailadres AL in de lijst staat.
  if (undefined) {
    alert("Je bent al ingeschreven");
  } else {
    //Pas ontvangersNieuwsbrief aan en voeg de nieuwe e-mail toe.

    alert("Bedankt om je in te schrijven op de nieuwsbrief!");
  }
};

const toonOntvangers = () => {
  //Pas de tekst in de alert aan zodat alle e-mailadressen hier getoond worden (telkens op een nieuwe regel)
  alert("");
};

/* Algemeen: eventlisteners en window.onload */
const init = () => {
  document.getElementById("keuzes").innerHTML = keuzes;

  document.getElementById("bestel").onclick = bestel;
  document.getElementById("nieuwsbrief").onclick = schrijfInOpNieuwsbrief;
  document.getElementById("toonOntvangers").onclick = toonOntvangers;
};

window.onload = init;
