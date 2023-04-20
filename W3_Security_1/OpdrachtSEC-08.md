# Detection, response and analysis
Het detecteren, reageren en analyseren van aanvallen.

## Key-terms
RPO - *The Recovery Point Objective* is een meeting van hoeveel data verlies een bedrijf kan hebben in geval van een hack aanval. het geeft een indicatie van de maximale data dat gemist kan worden tussen de laatste backup en de aanval

RTO - *The Recovery Time Objective* is het maximaal aantal tijd dat een bedrijf zijn systemen en services kan herstellen. Voordat er gevolgen onstaan binnen een bedrijf. Dit geeft een indicatie waarin een aanval gerepareerd zou moeten zijn.

IDS - Een IDS is een systeem dat voortdurend het netwerkverkeer bewaakt en analyseert om verdachte activiteiten of inbraakpogingen te detecteren. Het werkt door netwerkverkeer te vergelijken met bekende patronen en regels van wat als normaal of toegestaan wordt beschouwd. Wanneer het systeem verdacht verkeer detecteert, kan het een waarschuwing genereren en een melding sturen naar beheerders om verdere actie te ondernemen.

IPS - Een IPS gaat een stap verder dan een IDS en probeert actief inbraakpogingen te voorkomen door verdacht verkeer te blokkeren voordat het het netwerk binnenkomt. Het werkt op dezelfde manier als een IDS, maar het heeft de mogelijkheid om automatisch in te grijpen en verdachte activiteiten te stoppen voordat deze schade kunnen aanrichten.

## Opdracht
### Gebruikte bronnen
[RPO en RTO](https://www.datto.com/nl/blog/het-belang-van-rpo-en-rto)

[IDS en IPS](https://www.juniper.net/nl/nl/research-topics/what-is-ids-ips.html)

### Ervaren problemen
Nope...

### Resultaat

**What is the RPO of the database?**

Omdat het bedrijf een dagelijkse backup maakt van hun datatbase. is dus het maximale aantal data dat mogelijk verloren kan worden een dag waard aan data. Daarom is de RPO 1 dag. Dit betekend dat als een storing onstaant het bedrijf het fixen met de backup van die er is en die backup is 1 dag oud.

**What is the RTO of the website?**

een RTO is verschillend per bedrijf het kan zijn dat een bedrijf ervoor kiest om 30 min voor een herstel te doen, en een ander bedrijf maar 5. het gaat er om hoeveel downtime een bedrijf kan veroorloven, de bugdet voor het herstellen van applicaties, sytemen en bestanden. En wat je nodig hebt voor een volledige systeem- en gegevensherstel.

In dit geval omdat de failover process 8 min duurt. betekend dat in dit geval de RTO van de website 8 minuten is. dit betekend ook dat de website neer mag zijn voor maximaal 8 minuten voordat het impact heeft op het bedrijf zelf.





