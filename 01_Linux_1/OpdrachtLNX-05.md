# File permissions
Het geven van permissions en overzicht.

## Key-terms
RWX - **Reading, Writing, Executing** dit zijn de mogelijkheden die je met files hebt.

Entities - organismes in een systeem die kunnen zijn alsvolgd: de owner van de file, een group en ieder ander.

chmod - **change moderation** het veranderen van de permissies die alle entities hebben.

chown - **change ownership** het veranderen van de owner van de file.

chgrp - **change group** het veranderen van de group die toegang heeft tot de file.

groupadd - Zorgt ervoor dat we een nieuwe group aan het systeem toe te kunnen voegen.
## Opdracht
### Gebruikte bronnen
[alle permissie commands](https://phoenixnap.com/kb/linux-file-permissions)

### Ervaren problemen


### Resultaat
- **door de command `ls -l <file naam>` waarbij ik de perms.txt file heb gebruikt, kan je de volgende dingen zien:**

    - de file permission
    - wie de owner is
    - de group waar de owner in zit
    - wanneer de file aangemaakt is

![file perm](/00_includes/Viewing-perms.png)

de file permissie structuur werkt is in deze bijlage goed te zien. 

![file permissions structure](/00_includes/File-perm-structure.png)

**Door de command `sudo chmod u=rwx perms.txt` te gebruiken. Veranderen we de permissies van de u (dat User/owner is) zodat het de RWX permissions heeft. door het geven van de X permission. zorgt het ervoor dat de file een exe word.**

![Turned into exe](/00_includes/EXEnow.png)

**Door alle permissies van de group en ieder ander kan alleen de owner de file zien/schrijven. Omdat de owner root is, kan dus alleen de root de file perms.txt zien**

![owner only perms](/00_includes/owner-only-perms.png)

**Door de command `sudo chown quincy perms.txt` te gebruiken kan je zien dat de owner van de file perms.txt veranderd is naar de user quincy.**

![Ownership change](/00_includes/changing-owner.png)

**Door de command `sudo addgroup werknemers` in te voeren, maken we een group aan in het systeem met de naam werknemers. Hierna gebruiken we de command `sudo chgrp werknemers perms.txt`. Zo kunnen we de group die we net aangemaakt hebben de group owner maken van de file perms.txt**

![group ownership change](/00_includes/changing-group.png)





