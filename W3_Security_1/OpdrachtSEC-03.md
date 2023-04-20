# Identity and Access Management
De 2 stappen in security. Authhentication en Authorization. 


## Key-terms
MFA - *Multi Factor Authentication.

Authenticatie - Het bevestigen dat gebruikers daadwerkelijk zijn wie ze echt zijn.

Autorisatie - Geeft de gebruiker toegang tot een bepaalde resource.

PoLP - *Principle of Least Privilege*

## Opdracht
### Gebruikte bronnen
[Authenticatie vs Autorisatie](https://www.okta.com/nl/identity-101/authentication-vs-authorization/#:~:text=Wat%20is%20authenticatie%20en%20wat,gebruikers%20toegang%20tot%20een%20resource.)

[MFA en 3FA](https://rublon.com/blog/what-is-3fa-three-factor-authentication/#:~:text=Three%2DFactor%20Authentication%20(3FA),have%2C%20and%20something%20you%20are.)

### Ervaren problemen
Eigenlijk was dit een best simpel concept om te begrijpen 
### Resultaat
**Verschil tussen authenticatie en authorisatie. En de MFA**

Het Authenticeren van een gebruiker is een heel process. Er moet gecontroleerd worde of gebruikers daadwerkelijk zijn wie ze beweren te zijn. Zo kan er bepaalde rechten verleend worden zoals het downloaden van een file, beheerrechten voor een applicatie of andere eindgebruikers beheren.

 er zijn verschillende processen om de authenticatie van een gebruiker te controleren waaronder:

- Wachtwoorden. *gebruikersnaam met een wachtwoord is het meest gebruikt. een wachtwoord met vele criteria gemaakt worden. Alleen het kraken van een password is makkelijk als je regelmatig hetzelfde wachtwoord gebruikt.*

- Pincodes. *Een pincode kan je vast of eenmalig hebben. een eenmalige pincode geeft toegang tot slechts 1 sessie of transactie. een vaste pincode kan je naast je wachtwoord hebben als nog een laag. of het kan zelf functioneren als wachtwoord.*

- Autenthicatie-apps. *Een gebruiker kan een app op een ander apparaat hebben dat een code genereerd. Met die code heb je nog een beveiligings laag omdat je een externe partij nodig hebt om toegang te hebben. Dit word ook wel twee-stap verificatie genoemd.*

- Biometrie. *Een gebruiker krijgt met een vingerafdruk, gezichtscan of irisscan toegang tot het systeem.

Het is ook mogelijk om meerdere factoren tegelijk gebruiken voordat er toegang word gegeven. Dit heet dan een Multi-factor authenticatie. Hierdoor heb je meerdere lagen aan beveiliging in je systeem. Deze factoren kan je onder 3 punten sorteren.
 - Knowlegde factor. Iets dat je weet (wachtwoord, pincode, Beveiligingsvraag)

 - Possession factor. Iets in je bezit (telefoon met authenticatie app, SIM card, Security key)

- Inherence factor. Iets dat je bent (vingerafdruk scan, Gezichtsherkenning, Stem herkenning)

Dit maakt samen een 3FA -*3 factor authenticatie*

Autorisatie is meer gefocust op het geven van toestemming on een bepaalde file of functie te kunnen gebruiken. In beveilgde omgevingen word wel eerst bevestigd of de authenticatie goed is en dan pas de autorisatie. gebruikers moeten dus bewijzen dat ze zijn we ze beweren te zijn voordat de beheerders ze toegang kunnen geven tot de gevraagde resource.

**What the principle of least privilege is and how it improves security.**

De principle of least privilege is een concept dat met een mooie zin al goed te omscrhijven is. Het is dat 'mensen alleen toegang moeten krijgen op data wat ze nodig hebben om hun werkt te doen en niet meer. 

Je geeft dus alleen de rechten die nodig zijn aan een programma, proces, of extra rechten aan een gebruiker van een systeem voor de kortste mogelijke tijd en in een zo klein mogelijk domein om een taak ongehinderd te voltooien. zonder deze principe krijg je bedrijven waarbij gebruikers onnodige hoge rechten krijgen, en dat maakt de kans op indringers hoger en mogelijk verkeerd gebruik van een gebruiker die niet weet wat hij/zij doet. 

Hierdoor creër ook een soort van hiërarchie. Een Marketing manager hoeft geen toegang te hebben tot de data van een software development team. andersom ook. een software development hoeft geen toegang te hebben tot de salaris data.

