# Bash scripting
Het gebruiken met bash scripts

## Key-terms
BASH - **Bourne Again Shell**  commmand line in linux 

$PATH variable - de $PATH is een omgeving dat een lijst van paths heeft zodat linux kan zoeken voor exe's als je een command wilt runnen. hierdoor hoeven we geen absolute path in typen om een command te runnen

apt command - **Advanced Packaging Tool** is een package managements tool dat gebruikt word voor het installeren, updaten, verwijderen en managen van software.

$RANDOM - met de random variable kunnen we een willekeurige nummer uitkiezen.

Statements - Statements zijn waardes zoals if, else, elif, fi en then. woorden gebruikt om codes uit te voeren op als ze aan bepaalde condities doen

## Opdracht
### Gebruikte bronnen
[PATH Veriable](https://www.baeldung.com/linux/path-variable)

[aplication install script](https://askubuntu.com/questions/519/how-do-i-write-a-shell-script-to-install-a-list-of-applications)

[Bash scripting](https://www.youtube.com/watch?v=19nN9vgcgmU)

[Statements/Random](https://linuxize.com/post/bash-if-else-statement/)




### Ervaren problemen
ik wist eerst helemaal niet hoe ik een script moest maken. Dus door even op te zoeken weet ik nu dat om een script te kunnen beginnen maken we een textfile in dit geval himom.sh kunnen maken.
we nano himom.sh om in de editor te komen. we beginnen met #!/bin/bash we willen de bash laten weten wat voor script taal we willen gebruiken. daar is #! voor dat bash scripting is. daarna kunnen we de script maken.

### Resultaat

- **Door de command `export PATH=/home/techgrounds/scripts:$PATH` te gebruiken. Zorgen we ervoor dat de directory scripts in de lijst van de PATH variable komt.**

![adding to path list](/00_includes/Add-PATH-list.png)

- **Om een script aan te maken die een beetje tekst maakt en dan naar een nieuwe text file te sturen. maken we een nieuwe file aan. In dit geval is het hallomake.sh daarna doen we `nano hallomake.sh` om te beginnen met editen. Hier voeren we de script in die we in de eerste screenshot zien.**

![scriptp1](/00_includes/newtextfile-script.png)


- **Na het opslaan van de file in de editor. moeten we het een executable maken. of we gebruiken het command bash om het uit te voeren. In mijn geval maakte ik de file eerst executable door de command `chmod +x hallomake.sh` uit te voeren.**

    **Omdat de file nu executable is kunnen we het runnen door. `./hallomake.sh` in te typen. dit runt de script en zorgt ervoor dat er een nieuwe textfile word aangemaakt met de naam Newfile.TXT**

![scriptp2](/00_includes/newtextfile-scriptp2.png)

- **Dit is de script om de httpd package te installeren, activeren en enablen zodat het aan word gezet bij het opstarten. Ook zal deze script de status uitprinten van de httpd**

De script

![Script httpd](/00_includes/install-httpd.png)

Resultaat

![Resultaat script httpd](/00_includes/install-httpdp2.png)


- **Met de variable RANDOM kunnen we een willekeurige variable uitkiezen. dus we gaan dit in onze script gebruiken. We maken eerste de variable random_number dat we een betekenis geven `$((1 + RANDOM % 10))`. De 1 zorgt ervoor dat we niet onder de 0 komen, het "%" zorgt ervoor dat we een modulair getal hebben. en de 10 zorgt ervoor dat we niet niet boven de 10 uitkomen.**

    **Dan sturen we het uitkomst naar een nieuwe file dat random_numbers.txt heet. En laten we voor het gemak het uitprinten op de terminal zodat we de file niet open hoeven te doen om het antwoord te zien.**

![random](/00_includes/randomgen.png)

En dan krijgen we het resultaat
![resultaat random](/00_includes/random-resultaat.png)

- **Met Statements kunnen we voorwaarden toevoegen aan onze code dat laten we ook met deze script zien.**
    
    Allereerst voegen we dezelfde variable met random die kan je bovenaan de script zien. Hierna voegen we de variable toe aan onze statement. we maken onze eerste statement met `if`, waarbij we aangeven dat we een random nummer willen genereren en we willen aan geven dat dit groter dan 5 moet zijn. Dit doen we moet de `-gt 5`. dan maken we een resultaat als dit wel het geval is met `then`.
    
    nadat we dat gedaan hebben maken we een statement als het wel 5 of onder is. hier gebruiken we `else` voor. dus we geven aan dat het een lap tekst moet schrijven in de folder casino.txt

    Voor het gemakt laten we deze 2 uitkomst ook uitprinten naar de terminal.

De script

![Random Deluxe](/00_includes/Random-deluxe.png)

En nu het resultaat (in dit geval lukte het niet)

![Resultaat random deluxe](/00_includes/Resultaat-random-deluxe.png)










