# AWS Pricing
Hoe de AWS prijs format werkt.

## Key-terms
TCO - Total Cost of Ownership. meting om te kijken hoeveel een complete infrastructuur kost als het op de traditionele manier gehost word.


## Opdracht
### Gebruikte bronnen
[S3 en EC2](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html)

### Ervaren problemen
Dit was echt leuk om te leren!  ga dit wat dieper doornemen.

### Resultaat

**De 4 voordelen van het AWS pricing model**

Pay-as-you-go: Je betaalt alleen voor wat je gebruikt en er zijn geen minimale kosten. Je kunt AWS-diensten inschakelen en uitschakelen wanneer je wilt, en je betaalt alleen voor de tijd dat je ze gebruikt.

Schaalbaarheid: AWS kan zich aanpassen aan de behoeften van je bedrijf. Als je meer bronnen nodig hebt, kun je deze eenvoudig toevoegen en als je minder nodig hebt, kun je ze verminderen of uitschakelen. Dit betekent dat je alleen betaalt voor wat je gebruikt, terwijl je toch flexibel blijft.

Kostenbesparingen: AWS biedt veel opties om kosten te besparen, zoals het gebruik van gereserveerde instanties of spot-instances. Dit kan helpen om je kosten te verlagen en efficiënter te werken.

Gratis laag (Free Tier): AWS biedt een gratis laag voor sommige van zijn meest populaire services, waaronder S3 (opslag), EC2 (virtuele machines) en enkele altijd gratis services. Dit betekent dat je deze diensten gratis kunt uitproberen of kleine applicaties kunt bouwen zonder kosten.

Kortom, AWS biedt een pay-as-you-go prijsmodel dat schaalbaarheid en kostenbesparingen mogelijk maakt, en een gratis laag biedt om gebruikers kennis te laten maken met de diensten en kleine applicaties te bouwen zonder kosten.

**S3, EC2 en Always free services**

AWS Free Tier is een gratis laag die beschikbaar is voor nieuwe AWS-gebruikers. Het biedt gratis toegang tot sommige AWS-services voor een beperkte periode of met beperkt gebruik. Dit kan helpen om kennis te maken met de AWS-services en om kleine applicaties te bouwen zonder extra kosten te maken.

Hier zijn enkele details over de gratis laag voor de volgende AWS-services:

Amazon S3: Amazon S3 (Simple Storage Service) is een objectopslagservice die onbeperkte opslagruimte biedt voor gegevens van elke grootte. Met de gratis laag van Amazon S3 kun je 5 GB aan opslagruimte gebruiken, 20.000 GET-verzoeken en 2.000 PUT, COPY, POST of LIST-verzoeken per maand uitvoeren. Dit is een goede manier om te beginnen met het opslaan van bestanden in de cloud.

Amazon EC2: Amazon EC2 (Elastic Compute Cloud) is een webdienst die schaalbare computerresources in de cloud biedt. Met de gratis laag van Amazon EC2 kun je één t2.micro-instantie per maand gedurende 12 maanden gratis gebruiken. Dit is een virtuele machine die je kunt gebruiken om je applicaties uit te voeren of om een website te hosten.

Always Free Services: AWS biedt ook een aantal Always Free Services, waaronder Amazon DynamoDB (NoSQL-database), AWS Lambda (serverloze computing), Amazon CloudFront (Content Delivery Network), en Amazon SNS (Simple Notification Service). Deze diensten zijn gratis voor altijd, tot bepaalde limieten. Dit kan bijvoorbeeld betekenen dat je tot 1 miljoen gratis verzoeken per maand kunt uitvoeren met AWS Lambda, of tot 50 GB aan data-overdracht per maand kunt uitvoeren met Amazon CloudFront.

**CapEx en OpEx**

CapEx (Capital Expenditures) en OpEx (Operational Expenditures) zijn beide termen die worden gebruikt om te verwijzen naar de manier waarop bedrijven kosten maken. In AWS verwijzen ze naar de manier waarop bedrijven betalen voor hun IT-infrastructuur.

CapEx is een initiële investering die bedrijven doen om activa te kopen, zoals hardware, software en andere IT-apparatuur. Deze kosten worden vaak gespreid over meerdere jaren afgeschreven en kunnen aanzienlijk zijn. Bijvoorbeeld, als een bedrijf een eigen datacenter bouwt, dan moet het bedrijf alle kosten vooraf betalen om de apparatuur te kopen, de infrastructuur te bouwen en het datacenter te onderhouden.

OpEx daarentegen zijn doorlopende operationele kosten, zoals elektriciteit, onderhoud, upgrades en licenties. Deze kosten worden maandelijks, jaarlijks of per gebruiker in rekening gebracht en zijn vaak variabel afhankelijk van het gebruik. Bijvoorbeeld, als een bedrijf ervoor kiest om in plaats van het bouwen van een eigen datacenter gebruik te maken van AWS, dan worden de kosten per maand berekend op basis van het gebruik van de IT-infrastructuur, zoals de opslag, rekenkracht en databankgebruik.

In AWS kan CapEx verwijzen naar de kosten die worden gemaakt om EC2-instanties, RDS-databases of andere AWS-services te kopen en te implementeren. OpEx in AWS verwijst naar de doorlopende operationele kosten voor het gebruik van de AWS-services. Het gebruik van AWS-services biedt een pay-as-you-go model, waarmee bedrijven betalen voor wat ze daadwerkelijk gebruiken en op basis van het gebruik worden de kosten maandelijks in rekening gebracht. Dit betekent dat bedrijven kunnen profiteren van de voordelen van OpEx in plaats van CapEx, omdat ze alleen betalen voor wat ze gebruiken, zonder de initiële investeringskosten van een eigen datacenter of infrastructuur te hoeven maken.

**Maak een alarm dat je kan gebruiken om je cloud kosten te monitoren**

We gebruiken hier de budgetten optie om een alarm te zetten.

We gaan naar de AWS billing > budgets en dan create budget.

![Alarm](/00_includes/AWS_Alarm.png)

De alert hier zorgt ervoor dat het moment dat we over de free tier limit gaan. We een notificatie daarvan krijgen. er zijn meerdere opties om je gebruik 
