class Lokaal {
  nummer;
  capaciteit;
  beschrijving;
  oppervlakte;

  constructor(nummer, capaciteit, beschrijving, oppervlakte) {
    this.nummer = nummer;
    this.capaciteit = capaciteit;
    this.beschrijving = beschrijving;
    this.oppervlakte = oppervlakte;
  }
}

const lokalen = [
  new Lokaal("B3.036", 66, "Laptoplokaal", 129),
  new Lokaal("B3.029", 60, "Hybridelokaal", 90),
  new Lokaal("B4.012", 40, "Laptoplokaal", 98),
  new Lokaal("B4.027", 54, "Taallabo", 106),
  new Lokaal("B4.032", 64, "Laptoplokaal", 167),
  new Lokaal("B4.037", 60, "Serverlab", 146),
];

// Toon van elk lokaal het nummer en de verdieping:
const nummerEnVerdieping = lokalen.map(
  ({ nummer }) => `${nummer} op verdieping: ${nummer.substring(1, 2)}`
);

// Bereken de totale capaciteit van alle lokalen
const totaleCapaciteit = lokalen.reduce(
  (pv, { capaciteit }) => pv + capaciteit,
  0
);

// Toon de nummers van de lokalen die groter zijn dan 100m² gescheiden door komma's.
const groteLokalen = lokalen
  .filter(({ oppervlakte }) => oppervlakte >= 100)
  .map(({ nummer }) => nummer)
  .join(", ");

const zoekLokalen = () => {
  const verdieping = document.getElementById("input").value;

  /* 
    Zoek de lokalen die gelegen zijn op de gevraagde verdieping en sorteer volgens capaciteit (klein naar groot).
    Bouw het resultaat op zoals in onderstaand voorbeeld en toon in een alert. 

    De lokalen op verdieping 3 zijn:
    Laptoplokaal B3.036
    Hybridelokaal B3.029
  */
  const lokalenOpVerdieping = lokalen
    .map((lokaal) => {
      /* Kijk goed in de console naar de OORSPRONKELIJKE lijst met lokalen.
      Door een side effect is deze ook gewijzigd. Met behulp van de spread operator kunnen we dit oplossen! */
      const lokaalMetVerdieping = lokaal;
      lokaalMetVerdieping.verdieping = lokaalMetVerdieping.nummer.substring(
        1,
        2
      );
      return lokaalMetVerdieping;
    })
    .filter(
      ({ verdieping: verdiepingLokaal }) => verdiepingLokaal === verdieping
    )
    .sort((a, b) => a.capaciteit - b.capaciteit)
    .reduce(
      (pv, { nummer, beschrijving }) => pv + `${beschrijving} ${nummer}\n`,
      `De lokalen op verdieping ${verdieping} zijn: \n`
    );
  console.log(lokalen);
  alert(lokalenOpVerdieping);
};

const init = () => {
  document.getElementById("groteLokalen").innerHTML = groteLokalen;
  document.getElementById("verdieping").innerHTML = nummerEnVerdieping;
  document.getElementById("capaciteit").innerHTML = totaleCapaciteit;

  document.getElementById("find").onclick = zoekLokalen;
};

window.onload = init;
