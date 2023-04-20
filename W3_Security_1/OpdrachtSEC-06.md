# Public Key infrastructure
Het gebruik en maken van certificaten.

## Key-terms
PKI - *Public Key Infrastructure* is een systeem van processen, technologieën en beleidsregels waarmee u gegevens kunt versleutelen en ondertekenen. U kunt het gebruiken voor het uitgeven van digitale certificaten voor het authenticeren van gebruikers, apparaten en services.

TLS - SSL is kort voor Secure Sockets Layer. Een nieuwe versie, Transport Layer Security (TLS), is ondertussen ontwikkeld, maar over het algemeen noemen we dit protocol nog steeds SSL. Het SSL-protocol bestaat sinds 1995 en zorgt voor een beveiligde verbinding tussen de bezoeker van een website en de server van die website.

Self signed certificate - Zijn public key certificates die niet gegeven worden door de CA (certificate authority) deze zijn makkelijk te maken en kosten geen geld. Maar ze hebben geen vertrouwensfactor.

CA - *Certification Authority* een organisatie/bedrijft dat zich bezig h oud met het verifriëren, opslaan en geven van digitale certificaten.

## Opdracht
### Gebruikte bronnen
[PKI (public key infrastructure)](https://www.digicert.com/nl/what-is-pki#:~:text=PKI%20(public%20key%20infrastructure)%20is,van%20gebruikers%2C%20apparaten%20en%20services.)

[How To Create a Self-Signed SSL Certificate for Apache in Ubuntu 22.04](serhttps://www.digitalocean.com/community/tutorials/how-to-create-a-self-signed-ssl-certificate-for-apache-in-ubuntu-22-04)_

[Chain of trust](https://letsencrypt.org/certificates/)

### Ervaren problemen

Ik heb weer het gevoel dat niet volledig begrijp wat de stof is ondanks ik weet van mezelf dat ik de opdracht op een juiste manier heb uitgevoerd. Ik moet er meer indept op gaan lezen.

### Resultaat
**Create a self-signed certificate on your VM**

Zoals de vorige keren updaten we eerst het systeem zodat we met een frisse start kunnen beginnen met `sudo apt update && sudo apt upgrade -y`. Deze command heb ik gister gevonden. wat het doet is het zoeken naar nieuwe updates en het gelijk upgraden naar de nieuwste versie. de -y is eigenlijk gewoon yes omdat ik te lui ben om dat erna in te typen.

Zodra ik dat heb gedaan en apache geïnstalleerd heb wat in mijn geval al gedaan is door voorgaande opdrachten. enablen we de `mod_ssl`. Dit is een apache module dat ondersteuning bied voor SSL encryptie. We restart apache om de module de activeren.

![mod_SSl](/00_includes/mod_ssl.png)

Nu kan ik de TLS certificate generen dooor een lange command. `sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout /etc/ssl/private/apache-selfsigned.key -out /etc/ssl/certs/apache-selfsigned.crt` wat dit precies breek ik in stukken. 

`openssl`: This is the command line tool for creating and managing OpenSSL certificates, keys, and other files.

`req -x509`: This specifies that we want to use X.509 certificate signing request (CSR) management. X.509 is a public key 
infrastructure standard that TLS adheres to for key and certificate management.

`-nodes`: This tells OpenSSL to skip the option to secure our certificate with a passphrase. We need Apache to be able to read the file, without user intervention, when the server starts up. A passphrase would prevent this from happening, since we would have to enter it after every restart.

`-days 365`: This option sets the length of time that the certificate will be considered valid. We set it for one year here. Many modern browsers will reject any certificates that are valid for longer than one year.

`-newkey rsa:2048`: This specifies that we want to generate a new certificate and a new key at the same time. We did not create the key that is required to sign the certificate in a previous step, so we need to create it along with the certificate. The rsa:2048 portion tells it to make an RSA key that is 2048 bits long.

`-keyout`: This line tells OpenSSL where to place the generated private key file that we are creating.

`-out`: This tells OpenSSL where to place the certificate that we are creating.

We vullen de vragen in die het systeem vraagt en zo hebben we onze self-assigned certificate en de key die erbij hoort.

![Certificate created](/00_includes/certificate-created.png)


**Analyze some certification paths of known websites (ex. techgrounds.nl / google.com / ing.nl).**

hieronder de verschillende structuren van bedrijven.
![Techgrounrds path](/00_includes/Techgrounds-certificate.png)

![InG path](/00_includes/ing-certificate.png)

![Google path](/00_includes/Google-certificate.png)

![9anime path](/00_includes/9anime-certificate.png)

![twitch path](/00_includes/twitch-certificate.png)

Ook in je systeem heb je vertrouwde certificaten die goed bekend zijn. Door `Windows toets + R` de drukken en `certmgr.msc` in te voeren krijg je een venster met de certificates op de current user. en dan heb je een directory met Trusted Root Certification Authorities.

![system certificates](/00_includes/System-certificates.png)


Hetzelfde geld voor je VM. door in de directory van /etc/ssl/certs te kijken zie je een lijst van trusted certificate authorities. Je kan deze ook openmaken met de nano editor.

![Ubuntu certificates](/00_includes/Ubuntu-certificates.png)



