# OSI Stack
De OSI model en de TCP/IP Model

## Key-terms
OSI - *Open Systems Interconection*

TCP/IP - *Transmission Control Protocol/Internet Protocol*
## Opdracht
### Gebruikte bronnen
[Osi Model info](https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/)


### Ervaren problemen
Het sneller zoeken van info had beter kunnen zijn. Het begrijpen hiervan is wel een probleem ik heb moeite om de stof te beheersen en men eigen te maken

### Resultaat

 **Wat is het OSI model precies?**
 
Het OSI model is een veelgebruikte term in de netwerkwereld en staat voor Open Systems Interconnection. Het OSI model bestaat uit 7 lagen die ieder staan voor een bepaalde functie in het netwerk. Alle netwerkcomponenten of clients die verbinding kunnen maken met het netwerk wisselen communicatie uit via de regels van het OSI model.

![Osi-layer](/00_includes/OSI-layer.png)

*1: De fysieke laag*

De fysieke laag omvat alle fysieke bekabeling die tussen de netwerkcomponenten hangt.

*2: De datalinklaag*

De datalinklaag verzorgt de communicatie tussen verschillende hardware binnen een netwerk. Alle hardware apparatuur heeft een MAC of hardware adres die over de datalinklaag kunnen communiceren. Bijvoorbeeld switches werken op deze laag door middel van de ethernet techniek. De data die verstuurd worden over laag 2, worden ook wel frames genoemd.

*3: De netwerklaag*

De netwerklaag maakt het mogelijk om data te verzenden tussen verschillende netwerken. Daarnaast zorgt de netwerk laag ervoor dat er gerouteerd kan worden binnen een netwerk. Het protocol dat draait op deze laag is het Internet Protocol, ook wel bekend als (IP). Routers werken op de netwerklaag en kunnen dus IP adressen maken. Deze virtuele adressen kunnen pakketjes ontvangen en verzenden. De data die verstuurd wordt over laag 3, worden ook wel pakketjes genoemd.

*4: De transportlaag*

De transportlaag houdt zich bezig met de transmissie van data tussen twee eindgebruikers met behulp van foutcontrole, hertransmissie en timing. Laag 4 draagt zorg voor de juiste timing en de correctheid van de datatransmissie zodat de 'upper layers' 5, 6 en 7 hier geen rekening mee hoeven te houden. De belangrijkste protocollen waar de transportlaag gebruik van maakt zijn TCP en UDP.

*5: De sessielaag*

De sessielaag verzorgt de sessies van netwerkprogramma's.
Deze laag crëert, onderhoudt en verbreekt sessies tussen twee programma's.

*6: De presentatielaag*

Laag 6 van het OSI model is de presentatielaag. De presentatielaag zorgt voor de encryptie en compressie van dataverkeer. De presentatielaag is daarnaast ook een vertaallaag en die communicatie vertaalt tussen bijvoorbeeld besturingssystemen en programma's. Omdat sommige programma's dezelfde taal spreken en geen vertaling nodig hebben, wordt laag 6 niet altijd gebruikt.

*7: De applicatielaag*

De applicatielaag wordt gebruikt door netwerk-applicaties zoals FTP clients, e-mail programma's en interne systemen. Deze systemen werken op de applicatielaag omdat ze gebruik maken van protocollen die draaien die ook compatible zijn met deze laag. Denk bijvoorbeeld aan FTP, HTTP, SMTP.
 
**Wat is het TCP/IP Model?**

Het TCP/IP-model is een verzamelnaam voor een reeks netwerkprotocollen die gebruikt worden voor het grootste deel van de netwerkcommunicatie tussen computers. Het internet is het grootste en bekendste TCP/IP-netwerk. Het TCP/IP-model wordt officieel onderverdeeld in vijf lagen, met elk een eigen functionaliteit. De onderste laag, de fysieke laag, wordt vaak onderverdeeld in een eigenlijke fysieke laag en een datalinklaag.

![TCP/IP Layer](/00_includes/TCP-IP-Layer.png)

Apllicatielaag

In de applicatielaag bevinden zich de internettoepassingen als e-mail POP3, SMTP en FTP. Deze toepassingen hebben meestal een client-server structuur.

Transportlaag

De transportlaag zorgt voor de communicatie tussen processen die zich op de hosts bevinden. Elke internetapplicatie is voor wat betreft de transportlaag gebouwd op ofwel TCP- ofwel UDP-protocol. Als volledig foutvrije transmissie is vereist wordt TCP gebruikt, als snelheid of het minimaliseren van overhead belangrijker is wordt UDP gebruikt.

Netwerklaag

De bedoeling van deze laag is om de aangeboden data van bron naar doel te versturen ongeacht het protocol of type data, enkel ervoor zorgen dat alles netjes toekomt op de plaats van bestemming. Via de netwerklaag wisselen clients en servers tijdens TCP-handshakes onderling TCP/IP-pakketten uit om netwerkverbindingen tot stand te brengen of te verbreken. deze TCP-handshakes worden de clients en serves gedaan op basis van het IP-adres. Er wordt gezocht naar de meest geschikte weg om de data te versturen. Ook wel Internetprotocol genoemd.

Datalinklaag

De datalinklaag is de tweede laag uit het OSI-model. Deze laag zorgt voor transport van de data over een verbinding. Men moet bijvoorbeeld denken aan de verbinding tussen de netwerkkaarten van een computer en een router. Dus niet het fysieke medium, de kabel zelf (deze is ingedeeld in de fysieke laag), maar de signalen die over deze kabel heen gaan.

Fysieke laag

eze laag maakt de fysieke connectie tussen de netwerken mogelijk, zij bevat alle gegevens van een LAN- en WAN-netwerk die nodig zijn om een connectie te verwezenlijken.