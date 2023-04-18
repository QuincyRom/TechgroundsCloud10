# Network detection
Het analyseren van je netwerk verkeer.

## Key-terms
Nmap - *Network Mapper* Een tool dat een netwerk scant om er informatie over te vinden. bijvoorbeeld om te kijken welke ports open zijn in je host netwerk.

Wireshark - een software om protocollen te analyseren en de info van je netwerk verkeer.

QUIC - *Quick UDP Internet Connections*
## Opdracht
### Gebruikte bronnen
[Nmap Video](https://www.youtube.com/watch?v=5tzp9QzwnUQ&t=391s)

### Ervaren problemen
Het vinden van een website in wireshark was wel een probleem. uiteindelijk kwam ik erachter dat het een soort van begint met DNS.

### Resultaat

**Scan the network of your linux machine using Nmap. What did you find?**

We begonnen in Ubuntu om Nmap te installeren met de command `sudo get apt nmap`. Daarna moest ik een manier vinden om men netwerk ip te vinden. dat kon ik op 2 manieren doen na een beetje googlen. Door de comand `ip addr` of de command `hostname -i`. 

![Installeren van Nmap](/00_includes/install-nmap.png)

Nadat ik men ip adress had gevonden begon ik mijn ip te scannen met de `nmap 10.171.154.55` command. Dit geeft me een hele scan report van verschillende punten:
 - de latency
 - Closed ports
 - en de lijst van de ports waarin de port nummer, protocol, of het open of dicht is en de service.

![Nmap scanning](/00_includes/nmap-scan.png)

**Open Wireshark in Windows/MacOS Machine. Analyse what happens when you open an internet browser.**

In wireshark krijg je veel protocollen te zien. en een grote influx aan protocollen als je een webbrowser opent. door te spitten in de logs. zie ik dat er een domain query is naar de website (in dit geval 9anime.pl).

Daar daarna is het opzoeken van de ip van de website heel handig voor het filteren van het netwerk verkeer. In de bijlage zien we 2 protocollen QUIC en TCP. 

In de vorige week heb ik geleerd dat TCP een transport protocol is dat data levert op een 3 way handshake. waarbij de data verstuurd word door de computer. een bevestiging terug komt. en weer een bevestiging daarvan terug stuurt. 

Met QUIC is ook een transport protocol. Alleen is deze gemaakt door google. google wilde een paar problemen met de andere protocollen oplossen door zijn eigen protocol te maken. Het verschil tegenover TCP is dat QUIC de server UDP port 443 gebruikt, dat het standaard volledig encrypted is. en is het overal sneller.

![Whireshark website](/00_includes/wiresharkSec1.png)

