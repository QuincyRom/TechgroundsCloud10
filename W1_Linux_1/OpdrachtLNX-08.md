# Cron Jobs
Het creëren van processen perodiek terugkomen

## Key-terms
Crontab - is de plek waar je alle cronjobs in zet deze kan je editen met `crontab -e`

Cronjob - een cronjob is een taak die regelmatig opgeroepen kan worden. dit kan dagelijks, wekelijks en maandelijks 

## Opdracht
### Gebruikte bronnen
[Cronjobs](https://www.digitalocean.com/community/tutorials/how-to-use-cron-to-automate-tasks-ubuntu-1804)

[Cronjobs2](https://www.cyberciti.biz/faq/how-do-i-add-jobs-to-cron-under-linux-or-unix-oses/)



### Ervaren problemen
Cron bleekt niet geinstalleerd te zijn dus dat heb ik even snel geïnstalleerd met de command `sudo apt install cron` en daarna `sudo systemctl enable cron` zodat cron altijd met de boot opstart.
### Resultaat

- **allereerst maken we de script om ervoor te zorgen dat er een nieuwe file word gemaakt en ingevuld word met de datum en tijd. die is hier onder in de screenshot te zien.**

![date cron script](/00_includes/datecron-script.png)

 - **dan maken we in de crontab een cronjob zodat het onze script om de minuut runt. Dit doen we met de command `crontab -e` in te voeren zodat we in de tekst editor van de crontab kunnen komen.**

    **Hier typen we de regelmaat van onze script. In dit geval is dat om de minuut, dus we typen `* * * * *` sterretjes in om dit aan te geven en dan de path naar de script die we willen runnen die in dit voorbeeld in `/home/quincy/techgrounds/scripts/cronnie.sh` zit.**
 
 ![crontab](/00_includes/crontab-edit.png)

 **Nu dit is opgezet, slaan we het op en zal de cron gelijk aan het werk gaan en nogmaals wanneer de aangegeven tijd weer komt.**

- **We maken nog een extra cronjob waarbij we weekelijks de disk informatie in een log file zetten.**

De script

![logger script](/00_includes/loggerscript.png)

De crontab om ervoor te zorgen dat het elke week op maandag 9 uur s'ochtends begint.

![crontab logger](/00_includes/crontab-logger.png)

Resultaat

![logger resultaat](/00_includes/logger-resultaat.png)

