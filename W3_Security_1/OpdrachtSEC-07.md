# Passwords
Het uitvogelen van Hashing en de Rainbow Table.

## Key-terms
[Schrijf hier een lijst met belangrijke termen met eventueel een korte uitleg.]

## Opdracht
### Gebruikte bronnen
[Rainbow Table](https://crackstation.net/)

[Hashing vs encrypting](https://www.pingidentity.com/en/resources/blog/post/encryption-vs-hashing-vs-salting.html#:~:text=Encryption%20is%20often%20used%20for,to%20ciphertext%20using%20hash%20algorithms.)
### Ervaren problemen

### Resultaat
**Find out what hashing is and why it is preferred over symmetric encryption for storing passwords.**


Encryptie, of versleuteling, is een manier om gegevens te coderen. Dit zorgt ervoor dat niet iedereen deze gegevens zomaar te zien krijgt. Dit coderen gaat op basis van een algoritme, zodat men de gegevens later weer kan ontsleutelen en lezen. Dit proces van ontsleuteling heet decryptie. Bij encryptie is het de bedoeling dat de gegevens op een later moment weer ontsleuteld worden. Het laat dus tweerichtingsverkeer toe. Bij hashing is dit niet het geval. 

Hashing is dus eigenlijk een eenrichtingsstraat. Hierdoor is hashing erg goed bestand tegen hacken, maar is het ook meer gelimiteerd in zijn mogelijkheden. 2 andere mogelijkheden bij hashing zijn het opslaan van wachtwoord in hash vorm en het bekijken of een file is aangepast door naar de hash van een file te kijken.

**Find out how a Rainbow Table can be used to crack hashed passwords.**

Applicatie slaat jou username en passwoord niet op in textvorm. Maar echter in een hashed vorm. Een rainbow table is een verzameling van al voorgecalculerende hashes van veel gebruikte wachtwoorden. D

eze hashes worden gemaakt door het gebruik van verschillende algoritmes, waarbij een programma word gerunt op een grote data bundle van wachtwoorden. Hier komt dan een bundle van gegenererde hashes die dan worden op geslagen in een data base. Vandaar de naam rainbow table. Dit maakt het makkelijk voor hackers om je wachtwoord te onthullen, want ze krijgen een lijst met al voorgecalculeerde hashes.

**Try to look up both hashes in a Rainbow Table.**

![Rainbow table](/00_includes/rainbow-table.png)

**Create a new user in Linux with the password 12345. Look up the hash in a Rainbow Table.**

Met `sudo adduser hashie` maken we een user aan met de naam hashie. Deze geven we de password: 12345. In de file shadow kunnen we de info van alle users zien en hun password in hashed format. de shadow file kunnen we vinden in de `/etc` directory.

![Shadow Hashie](/00_includes/shadow-hashie.png)

Omdat de linux gebruikt van algoritmes om het wachtwoord te hashen zal het wachtwoord veranderen. Maar voornamelijk omdat ook gebruikt maakt van Salting. Salting is het toevoegen van willekeurige data aan een hashfuncite word. alsof je het zout geeft als het ware.  Dit zorgt er dus voor dat ondanks dat er hetzelfde wachtwoord gebruikt word je een andere hashing krijgt bij je wachtwoord. Dit helpt ook heel erg als mensen dezelfde wachtwoord gebruiken, zodat ze geen identieke hash krijgen.

![Same but not](/00_includes/samepswd-butnot.png)

![Format hashing](/00_includes/linuxhashformat.png)



