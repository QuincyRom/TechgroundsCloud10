# AWS Global Infrastructure
Introductie in AWS

## Key-terms
Regions 
Availability

## Opdracht
### Gebruikte bronnen
[Website van AWS](https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/RegionsAndAZs.html)


### Ervaren problemen
Best simpel om te begrijpen. Super leuk om te beginnen.

### Resultaat

**Wat is een AWS Availability Zone?**

Een AWS Availability Zone is een geïsoleerde locatie binnen een AWS-regio die een of meer datacenters bevat. Elke zone is ontworpen om onafhankelijk te werken van andere zones in dezelfde regio, met eigen stroom-, koeling- en netwerkconnectiviteit. Het idee achter Availability Zones is om een ​​hoog niveau van beschikbaarheid en veerkracht te bieden voor de cloudservices die u in AWS uitvoert.

**Wat is een AWS Region?**

Een AWS-regio is een fysieke locatie waar AWS zijn infrastructuur beheert. Elke regio bestaat uit meerdere Availability Zones die geografisch verspreid zijn en verbonden zijn door een zeer betrouwbaar netwerk. Als u bijvoorbeeld een AWS-regio in de VS selecteert, kunt u services implementeren in een of meer van de verschillende Availability Zones binnen die regio.

**Wat is een Edge-Locatie?**

Een AWS Edge-locatie is een geografisch verspreide locatie waar AWS zijn content delivery network (CDN) beheert. Deze locaties bieden een snelle en betrouwbare verbinding tussen gebruikers en cloudservices, en helpen de latency en bandbreedtekosten te verminderen door de inhoud dichter bij de eindgebruiker te plaatsen. Edge-locaties worden vaak gebruikt voor het leveren van inhoud, zoals video's en afbeeldingen, aan eindgebruikers over de hele wereld.

**Waarom zou je 1 regio over een andere kiezen?**

Je zou de ene AWS-regio boven de andere kunnen kiezen op basis van verschillende factoren. Hier zijn enkele overwegingen:

Locatie van je gebruikers: Als je gebruikers zich in Europa bevinden, is het logisch om te kiezen voor een regio die dichter bij hen in de buurt ligt, zoals de EU (Frankfurt) regio. Dit kan helpen om de latentie, of de vertraging, bij het gebruik van je AWS-diensten te verminderen.

Compliance-vereisten: Afhankelijk van de aard van je werkzaamheden, kunnen bepaalde AWS-regio's voldoen aan specifieke regelgeving. Als je bijvoorbeeld werkt met persoonsgegevens van EU-burgers, moet je AWS-diensten gebruiken die voldoen aan de GDPR, en de EU (Frankfurt) regio voldoet hieraan.

Prijs: De prijs van AWS-diensten kan verschillen per regio. Als je bijvoorbeeld goedkopere services zoekt, kun je kijken naar regio's waar de prijzen lager zijn. Maar houd er rekening mee dat er ook kosten kunnen zijn voor het overzetten van data tussen regio's.

Beschikbaarheid en betrouwbaarheid: AWS-regio's en Availability Zones hebben verschillende niveaus van beschikbaarheid en betrouwbaarheid. Sommige regio's hebben bijvoorbeeld meer Availability Zones dan andere, wat kan helpen om de veerkracht van je systeem te vergroten. Het is belangrijk om te kijken naar de beschikbaarheids- en betrouwbaarheidsstatistieken voor elke regio en Availability Zone om een weloverwogen beslissing te nemen.

Kortom, bij het kiezen van een AWS-regio is het belangrijk om rekening te houden met de locatie van je gebruikers, compliance-vereisten, prijs, beschikbaarheid en betrouwbaarheid van de regio.
