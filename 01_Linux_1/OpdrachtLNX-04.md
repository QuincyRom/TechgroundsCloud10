# Users and groups
Het toevoegen van users en rechten.

## Key-term
useradd - Het toevoegen van een user

etc/group - Het zien van alle groups en waar de users in zitten

etc/shadow - het zien van de password data van de users

etc/passwd - Het zien van user informatie waar je de ID, login shell en directories kan zien.
## Opdracht
### Gebruikte bronnen
[User info](https://phoenixnap.com/kb/linux-user-create)


[ChatGPT](https://chat.openai.com/)

[Cheat Sheet](https://cheatography.com/davechild/cheat-sheets/linux-command-line/)


### Ervaren problemen
geen ervaren problemen eigenlijk was dit heel makkelijk.

### Resultaat

**Door de command `sudo useradd odessa` te gebruiken heb ik de user met de naam Odessa toegevoegd. Dit kan je checken door `sudo cat etc/passwd` te gebruiken.**
![user added](/00_includes/user-odessa-added.png)


**Door de command `sudo usermod -aG sudo odessa` te gebruiken heb ik de user odessa toegevoegd in de sudo group en daarna de command `sudo usermod -aG admin odessa` om haar in de admin group te zetten. Dit geeft deze user de kracht om sudo te gebruiken. Daarna kan je dit checken door `sudo cat etc/group` in te voeren**
![user in groups](/00_includes/User-added-to-groups.png)

**Met de command `sudo paswd odessa` kan de user een wachtwoord hebben. Deze wachtwoord kan je zien in de shadow file door `sudo cat etc/shadow` in te voeren, maar het is encrypted voor veiligheid.**
![user password shown](/00_includes/user-passwd.png)

