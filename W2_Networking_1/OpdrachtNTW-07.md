# Networking case study
Het opstellen van een internet architectuur in een bedrijf.

## Key-terms
AD Server - Een Active Directory (AD) (ook bekend als Active Directory Domain Service, AD DS) is een 'directory service' voor Windows-netwerken. Hiermee beheer je bijvoorbeeld wie er toegang hebben tot bepaalde bronnen binnen het domein van een Windows-netwerk, zoals gedeelde mappen of Remote Desktop servers.

Web Server - Een webserver of web server is een systeem dat bestaat uit één of meerdere computers met software die communicatie met internet via het HTTP protocol mogelijk maakt. Zo kunnen bezoekers informatie opvragen en aanbieders content beschikbaar stellen.

NAT Gateway - *Network Adress Translation* is een networking device dat communicatie maakt tussen apparaten in een lan naar en WAN waardoor ze allemaal in 1 publieke adress komen.

Proxy Server - een server dat als gateway gedraagd voor networking en requests

DMZ - *Demilitarised Zone*  is een netwerk zone dat gisoleerd is van het internet en je interne netwerk. Het is een soort van tussen middel dat nog een laag voor beveiliging zorgt. 

## Opdracht
### Gebruikte bronnen
[Subnet Calculator](https://www.subnet-calculator.com/subnet.php?net_class=C)

[ChatGPT Vraag over of een NAT gateway ze'n eigen IP heeft](https://chat.openai.com/c/629d3f68-c8d4-43bb-b798-994be41544f6)

Network topologie voorbeelden

### Ervaren problemen
Het Subnetten blijft een uitdaging. Maar het gaat wat beter en beter. Ik denk dat ik wat meer in moet lezen in wat hoe Binary precies werkt.

### Resultaat
Allereerst Heb ik alles een plekje gegeven door naar meerdere voorbeelden te kijken op het internet. En daarna ben ik van rechts begonnen. 

Ik begon met het internet wolk, gevolgd naar de router om internet te 'routeren' naar alle andere devices. Daarna heb ik een firewall neergezet om een blokkade te vormen tussen de router en de servers/Workstations. Ik heb ook een webserver naast de firewall gezet zodat Geisoleerd is van de main branch.

Daarna zetten we een switch dat naar de proxy server en de andere servers leid. De proxy server zorgt ervoor dat er een extra buffer is voor beveiliging, anonimiteit en het filteren van bepaalde content zodat iedereen gefocussed blijft op werk. Daarna zijn er meerdere servers neergezet die van de opdracht komen.

![Network architecture](/00_includes/NetworkTOPO.png)

