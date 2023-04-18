# Firewalls
Introductie in firewalls

## Key-terms
Firewall - een software dat netwerkverkeer filtert. en gevaren blokkeerd.

Ufw - *Uncomplicated Firewall* De standaard firewall configuratie

## Opdracht
### Gebruikte bronnen
[Plaats hier de bronnen die je hebt gebruikt.]

### Ervaren problemen
Het zoeken van mijn website na het installeren van apache was voor mij heel moeilijk. uiteindelijk heeft Roan het voor mij verklapt.

Het zoeken van de manier waarop je de firewall zodanig zet dat je het verkeer blokkeerd was niet bepaald makkelijk voor mij. Mijn website was namelijk al niet toegestaan dus moest eerst de porten toestaan in ufw.

Ik denk dat ik het begrip verkeerd interperteerde waardoor ik er langer bezig mee was dan geplanned.

### Resultaat
[Omschrijf hoe je weet dat je opdracht gelukt is (gebruik screenshots waar nodig).]

install de webserver apache2 met `sudo apt install apache2`

![apache2 instal](/00_includes/apache2-install.png)

Nadat apache webserver is geïnstalleerd bekijken we onze eerste website door de ip van de server `18.157.179.30` en de port `58008` in te voeren in de url: `18.157.179.30:58008`. hierdoor kunnen we de standaard pagina zien.

![Apache webpagina](/00_includes/Apache-page.png)

om dit weer opnieuw te blokkeren zorgen we ervoor dat de firewall van ubuntu de poorten niet toestaat die apache gebruikt om data te sturen. Dit doen we met de commands
```
sudo ufw deny 80    # blokkeerd http port 80
sudo ufw deny 443   # blokkeerd https port 443
```

Hierdoor is de website niet meer te bereiken.