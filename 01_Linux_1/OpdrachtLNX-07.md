# Bash scripting
Het gebruiken met bash scripts

## Key-terms
BASH - **Bourne Again Shell**  commmand line in linux 

$PATH variable - de $PATH is een omgeving dat een lijst van paths heeft zodat linux kan zoeken voor exe's als je een command wilt runnen. hierdoor hoeven we geen absolute path in typen om een command te runnen

apt command - **Advanced Packaging Tool** is een package managements tool dat gebruikt word voor het installeren, updaten, verwijderen en managen van software.


## Opdracht
### Gebruikte bronnen
https://www.baeldung.com/linux/path-variable

### Ervaren problemen
ik wist eerst helemaal niet hoe ik een script moest maken. Dus door even op te zoeken weet ik nu dat om een script te kunnen beginnen maken we een textfile in dit geval himom.sh kunnen maken.
we nano himom.sh om in de editor te komen. we beginnen met #!/bin/bash we willen de bash laten weten wat voor script taal we willen gebruiken. daar is #! voor dat bash scripting is. daarna kunnen we de script maken

### Resultaat

- **Door de command `export PATH=/home/techgrounds/scripts:$PATH` te gebruiken. Zorgen we ervoor dat de directory scripts in de lijst van de PATH variable komt.**

![adding to path list](/00_includes/Add-PATH-list.png)

- **Om een script aan te maken die een beetje tekst maakt en dan naar een nieuwe text file te sturen. maken we een nieuwe file aan. In dit geval is het hallomake.sh
daarna doen we `nano hallomake.sh` om te beginnen met editen. Hier voeren we de script in die we in de eerste screenshot zien.**

![scriptp1](/00_includes/newtextfile-script.png)


- **Na het opslaan van de file in de editor. moeten we het een executable maken. of we gebruiken het command bash om het uit te voeren. In mijn geval maakte ik de file eerst executable door de command `chmod +x hallomake.sh` uit te voeren.**

    **Omdat de file nu executable is kunnen we het runnen door. `./hallomake.sh` in te typen. dit runt de script en zorgt ervoor dat er een nieuwe textfile word aangemaakt met de naam Newfile.TXT**

![scriptp2](/00_includes/newtextfile-scriptp2.png)

- **Dit is de script om de httpd package te installeren, activeren en enablen zodat het aan word gezet bij het opstarten. Ook zal deze script de status uitprinten van de httpd**

De script
![Script httpd](/00_includes/install-httpd.png)

Resultaat
![Resultaat script httpd](/00_includes/install-httpdp2.png)










