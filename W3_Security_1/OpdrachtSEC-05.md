# Asymmetric encryption
Introductie in het maken van een public en private key en de interactie daar tussen.

## Key-terms
Asymmetrische encryptie -  een verschillende sleutel wordt gebruikt voor encryptie en decryptie. Beiden een eigen sleutelpaar, bestaande uit een private en een publieke sleutel, waarbij de private sleutel geheim dient te blijven en de publieke sleutel openlijk kenbaar wordt gemaakt.

## Opdracht
### Gebruikte bronnen
[RSA key Generator](https://www.devglan.com/online-tools/aes-encryption-decryption/)

### Ervaren problemen
Veel met Youness gespard hierover.Verschillende soorten bits en manier van encrypten maar de website van Devglan heeft het een stuk makkelijker gemaakt om te encrypten en te decrypten.

### Resultaat
We Genereren eerst een RSA Public en private key die we kunnen gebruiken om files te encrypten en te openen.

![Key generator](/00_includes/generate-key.png)


Ik geef mijn public key door aan mijn peers zodat het kunnen gebruiken om mij een bericht te sturen die hieronder zit.

*Public key:* 
```
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCjgzMrgBJBmp+H6IjrGOKVWE8FcMyI7QQj1Uqqu9joqjoa7HGu5iv4ZC4rS+JBQyXy9LmTGaRyNOuRrMEsYDqWOy86cqE/Zl+gJekxC/APD7vS+2BoU45jNhu6+/QvDP+LF+0rlJi4t+Qy7ey25gVbhL+U+n+LL1JL0n5+55UAuwIDAQAB
```

Zij zullen dan een eigen bericht neer zetten en dat dan encrypten onder mijn public key. Daar komt een encrypted message uit die dan naar mij gestuurd kan worden.

![message](/00_includes/RSA-message.png)


Ik kopieër dit bericht en pak een decryptor erbij. gezamelijk met mijn private key hieronder. Mijn private key deel ik dan met niemand zodat ik de enige ben die berichten die encrypted zijn met mijn public key kan zien.

*Private key:*
```
MIICeAIBADANBgkqhkiG9w0BAQEFAASCAmIwggJeAgEAAoGBAKODMyuAEkGan4foiOsY4pVYTwVwzIjtBCPVSqq72OiqOhrsca7mK/hkLitL4kFDJfL0uZMZpHI065GswSxgOpY7LzpyoT9mX6Al6TEL8A8Pu9L7YGhTjmM2G7r79C8M/4sX7SuUmLi35DLt7LbmBVuEv5T6f4svUkvSfn7nlQC7AgMBAAECgYBOfTU75V9eFH4NvEa1K53geKJ+BxZ3h+ab2M/dwwwtK0F3GRa9EQn8UwKCkAuMrlHyHR1TilSQ6exGYjncNlkIbacLVUOjbyVS/HynhtQIhjuHD2RvsYKn/bR9LLoRrnPsMEgQjbN6IjOeXeHYsbqOMIVw3lYNeZF3YJlDrWtRcQJBANhshucKXI4NeNAOaWkA2WW0hKmIW2mK5l6sFaOIrnG17kOhMZd4g9H8nHP9Veh+Hqi4oqNvKWuB7ssoWoHnnwMCQQDBabmncc4+DxD/z5DuhybNhB4hL3KDHohrGtQzJdl7H3iVNlT4AcxAX0EeAM4LowUkEF/6vmv49f3y3YItW23pAkEA0yCENc1w3w8bZXQ5trqiWcpRhIVGD971vzOG5ILJEprVddpBY6+ogOg6xBhGf0jRpeyAlIkz0fHuPvf92y5WewJBAL27m1Y5fBrA6OopkoGLr3L4Yh4nz2v07dozrWqnfJsdmkq1y9Cm4tlbGCP4oigkOYzRS3ZMitrlZcNzrJoWENECQQCFw4neSeyc1SPMs+Vv9Enle0ONkKuTrGKOFLEhktCuEdqIA2RFLChxJs55ON0xi/XztnhXEj/fmSEpmIUkWbcp
```

deze plak ik in de RSA decryptor met de tekst erboven en mijn private key eronder. en zo krijgen we een output die alleen te zien is door mij.

![Response](/00_includes/RSA-response.png)


