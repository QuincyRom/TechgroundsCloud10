# Processes
Het runnen van processes in linux

## Key-terms
Daemon - Iets dat in de achtergrond draait en niet interactief is.

Services - Iets dat reageerd op requests van programma's. Kan interactief zijn

Programs - een programma word gedraait door users en gebruikt door users.

Telnet - **Teletype Network** net als een ssh connectie. log je in een remote computer connectie. echter is de telnet connectie niet encrypted. dus het is niet veilig.

ps -aux - een lijst van alle processen die er zijn.

systeem ctl - start,stop,restart is voor het besturen van die processen. disable en enable kan je gebruiken om te kiezen of het er mee opstart of niet.

inetd - is een super-server daemon. dat voor internet services zorgt
## Opdracht
### Gebruikte bronnen
https://www.prajwaldesai.com/enable-telnet-on-windows-11-disable-telnet/#:~:text=Install%20Telnet%20on%20Windows%2011%20using%20PowerShell&text=Right%2Dclick%20Windows%20PowerShell%20and,Telnet%20client%20on%20Windows%2011.

### Ervaren problemen
Het was relatief moeilijk om deze opdracht te begrijpen. Maar we moesten het van een ander perspectief bekijken en ik dacht verder dan nodig was. Hierdoor hoefte ik eigenlijk maar 2 dingen te doen en was ik zo klaar.

### Resultaat
- **Door het runnen van de `sudo apt-get install xinetd telnetd` command. Zorgt dit ervoor dat ik tellnet aan kan zetten. dit kunnen we zien door de command `systemctl status inetd` te gebruiken, om status van inetd dat de voor de internet service zorgt te zien.**

![telnet aan](/00_includes/enable-telnet.png)

- **De command `ps -aux` laat ons een lijst zien van alle processes die bezig zijn. Dit zijn er echter heel veel. Dus we filteren het door 'grep' te gebruiken. hier hebben we de command. `ps -aux | grep telnetd`. Hier kunnnen we zien dat de PID nummer van deze process 13165 is. en de memory dat het process gebruikt. dat 0.0 is.**

![PID telnet](/00_includes/PID-telnetd.png)

- **En door de command `systemctl stop inetd` in te voeren. Stoppen we het process van inetd en de telnetd. Dit kunnen we dan checken door de status uit te printen door `systemctl status inetd` in te voeren.**

![stop inetd](/00_includes/stop-inetd.png)


