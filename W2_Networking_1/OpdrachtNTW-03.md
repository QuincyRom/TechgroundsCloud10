# Protocols
Netwerk protocollen.

## Key-terms
Netwerk protocol - *Een computervoorschrift waarin staat hoe informatie van de ene computer naar de andere moet worden verstuurd.*

UDP - *User Datagram Protocol*

TCP - *Transmission Control protocol* 

## Opdracht
### Gebruikte bronnen

[Osi & TCP/IP protocollen](https://www.guru99.com/layers-of-osi-model.html)

[Chat AI vragen](https://chat.openai.com/chat/a1b619b1-5220-4139-b3ac-58c45b2f25d8)

[TCP & UDP video](https://www.youtube.com/watch?v=uwoD5YsGACg)

### Ervaren problemen
Ik denk dat ik begrijp wat voor protocollen er zijn. Maar ik heb het gevoel dat ik iets mis. Een naar gevoel dat de info die ik heb geleerd niet compleet is waardoor ik denk dat ik het ook weer niet begrijp.

### Resultaat

**Identifiseer andere protocollen en bij welke OSI laag ze horen.**

![Protocollen OSI](/00_includes/protocollen-OSI.png)

**Wie beslist er wlke protocollen er gebruikt worden. En wat is er nodig om er 1 te maken**

De mensen die dat voornamelijk beslissen zijn Network architects, system admins, IT managers en directors, Organisaties in de IT, Verkopers van netwerk apparaten en Eindgebruikers. zij zijn degene die deze protocollen gebruiken in hun werkomgeving van het maken van een network dat zen eigenprotocollen heeft. dit geeft directies naar een goede infrastructuur voor een bedrijf.

Om zelf een protocol te kunnen moet je een groot begrip hebben van het model zelf. er komt heel veel bij spelen bij het maken van je eigen protocollen. Het ligt er in ieder geval aan welke laag je wilt betrekken in jouw protocol en wat je wilt bereiken met het desbetreffende protocol.

**Sla je netwerk data op in wireshark. Kijk naar een protocol dat je herkent en begrijp hoe het werkt.**

De 2 protocollen die ik voornamelijk tegenkom zijn UDP en TCP. TCP is een connectie gebasseerde protocol is. Dit betekent dat het eerst een sessie moet bevestigen tussen de 2 computers. Het doet dit doormiddel van een 3 way handsake. Waarbij de 1ste computer een bericht stuur, de 2de computer een bevestigings bericht terug stuurt. En de 1st computer een bevestiging daarvan weer terug stuurt. TCP zorgt ervoor dat alle data goed aankomt en op de juiste manier is aangelegd.  

UDP is Hetzelfde een connectieloze gebasseerde protocol. wat betekent dat het geen sessie nodig heeft om elkaar berichten te sturen. hierbij is de data die aankomt niet bevestigd en niet op de juist manier aangelegd. Het zorgt er wel voor dat UDP vele malen sneller is dan TCP.


![Wireshark](/00_includes/wireshark.png) 


