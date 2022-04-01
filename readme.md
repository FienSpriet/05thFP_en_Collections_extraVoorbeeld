# Voorbeeld Lokalen: herhaling array functions

In dit voorbeeld zijn onze klanten de roosteraars van HoGent. Zij willen namelijk een applicatie om het voor hen makkelijker te maken om de rooster voor elke klasgroep, lector en lokaal mogelijk te maken.

Ze verwachten:

1. Een oplijsting van de verschillende lokalen en de bijhorende verdieping.
2. De totale capaciteit van de lokalen
3. Een oplijsting van de grote lokalen gescheiden door een komma met daaropvolgend een spatie. Een lokaal wordt gezien als een groot lokaal als de oppervlakte groter is dan 100m².
4. Een zoekfunctie: die alle lokalen geeft die gelegen zijn op de gevraagde verdieping, gesorteerd volgens capaciteit (klein naar groot) en telkens alleen de beschrijving en nummer toont.

**Zorg ervoor dat de pagina deze inhoud krijgt:**

![Lokalen_afgewerkt.png](/images/Lokalen_afgewerkt.png "Resultaat pagina")

**Wanneer gezocht wordt naar verdieping 4 ziet de gebruiker dit resultaat:**

![Lokalen_alert.png](/images/Lokalen_alert.png "Alert verdieping 4")

# Voorbeeld Pasen: herhaling map & set

In dit voorbeeld hebben we als klant een chocolatier. In de aanloop naar de paasperiode wil hij graag bijhouden hoeveel paaseieren van elke soort hij nog heeft en het mogelijk maken voor zijn klanten om deze te bestellen.

Daarnaast wil jij zijn klanten ook de mogelijkheid geven om zich in te schrijven op een nieuwsbrief. Maar omdat hij gebruik maakt van een betalende tool om de mails te versturen, wil hij er zeker van zijn dat elk e-mailadres maar één keer voorkomt in de lijst.

**De volledige pagina zal er uiteindelijk zo uitzien:**
![Pasen_afgewerkt.png](/images/Pasen_afgewerkt.png "Resultaat pagina")

## Paaseitjes bestellen

Schrijf de code voor dit deel in pasen.js onder `/* Code ivm de paaseitjes: */`. Er staat al een deel van de code klaar, vul aan waar nodig.

De klant verwacht:

1. Een mogelijkheid in de code om zijn stock bij te houden. Bij elke benaming van de inhoud van het paaseitje moet het aantal op stock bijgehouden worden. Zorg dat de stock initieel deze waardes bevat:

   - "wit-karamel", 20
   - "melk-praliné", 5
   - "donker-framboos", 30
   - "wit-pistache", 15
   - "melk-hazelnotenpasta", 50

2. De verschillende keuzes die in de stock staan moeten getoond worden op de webpagina gescheiden door puntkomma's.
3. Wanneer een koper een keuze ingeeft en op "Bestel" klikt, moet eerst gecontroleerd worden of deze soort effectief in het aanbod staat. Zo niet wordt een aangepaste tekst getoond.<br/> Wanneer deze soort wel aangeboden wordt, ziet de koper een alert met daarin het huidige aantal eitjes in stock. Hij/zij kan hier dan ingeven hoeveel ze willen bestellen. Zorg er zeker voor dat de stock ook aangepast wordt en toon de koper een bevestiging!<br/> **Hou rekening met keuzes waarin letters in uppercase staan, deze moeten ook werken!**

**Voorbeeld bestelling in lowercase:**

![Pasen_bestaand_lowercase.png](/images/Pasen_bestaand_lowercase.png "Bestelling in lowercase van bestaande keuze")

**Voorbeeld bestelling in uppercase:**

![Pasen_bestaand_uppercase.png](/images/Pasen_bestaand_uppercase.png "Bestelling in uppercase van bestaande keuze")

**Voorbeeld bestelling niet in aanbod:**

![Pasen_onbestaand.png](/images/Pasen_onbestaand.png "Bestelling van niet-bestaande keuze")

## Nieuwsbrief

Schrijf de code voor dit deel in pasen.js onder `/* Code ivm de nieuwsbrief: */`. Er staat al een deel van de code klaar, vul aan waar nodig.

De klant verwacht:

1. Een mogelijkheid in de **unieke** e-mailadressen bij te houden van de personen die inschrijven op de nieuwsbrief. Zorg ervoor dat deze lijst initieel leeg is.
2. Wanneer iemand op "Schrijf in" klikt, moet een alert te zien zijn waarin een email kan ingegeven worden. <br/>Staat deze al in de lijst? Toon dan een correcte melding.<br/> Staat deze nog niet in de lijst? Voeg het e-mailadres dan toe en toon een bevestiging. **Hou ook hier rekening met letters in uppercase!**
3. Wanneer onze klant op "Toon alle ontvangers" klikt, moet hij alle e-mailadressen te zien krijgen in een alert waarin elk adres op een nieuwe lijn staat.

**Voorbeeld nieuw e-mailadres:**

![Pasen_nieuwsbrief_nieuw.png](/images/Pasen_nieuwsbrief_nieuw.png "Nieuw e-mailadres")

**Voorbeeld bestaand e-mailadres (met uppercase):**

![Pasen_nieuwsbrief_bestaand.png](/images/Pasen_nieuwsbrief_bestaand.png "Bestaand e-mailadres met uppercase")

**Voorbeeld bij "Toon alle ontvangers":**

![Pasen_nieuwsbrief_toonAlle.png](/images/Pasen_nieuwsbrief_toonAlle.png "Alle e-mailadressen")
