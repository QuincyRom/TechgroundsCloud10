# Counting in Binary and Hex
Het leren omgaan met Binary en Hex nummers

## Key-terms
Binary - de computer taal dat gepresenteerd word door 1 en nullen waarbij 0 geen signaal is en 1 wel een signaal.

## Opdracht
### Gebruikte bronnen
[Binary](https://www.youtube.com/watch?v=2-i5x8KCfII)


### Ervaren problemen
Dit was de eerste opdracht die eindelijk makkelijk was omg. vooral na het kijken van de video

### Resultaat

**- Hoe gaan we van binair naar decimaal en andersom**

Om goed binair te kunnen lezen gebruik ik een soort van cheat sheet om van binar naar decimaal te gaan. om dat de doen moeten we kijken waar het nummer van de binary plaatst in onze chart. laten we het voorbeeld 1010 1010 nemen. 

1 gaat naar 128

0 is 0

1 gaat naar 32

0 is 0

1 gaat naar 8

0 is 0

1 gaat naar 2

0 is 0

Dit tellen we bij elkaar op dus 128+0+32+0+8+0+2+0 = 170

![Binary sheet](/00_includes/binary-sheet.png)


Om dit van decimaal naar binair zetten gebruiken we dezelfde chart. we nemen het voorbeeld 170.

We kijken eerst of 170 - 128 kan. dit kan dus word het een  1 en houden we 42 over.

daarna kijken we 42 - 64 kan. Dit kan niet dus word het een 0 en houden we 42 over.

Daarna kijken we of 42 - 32 kan. Dit kan dus word het een 1 en houden we 10 over.

Daarna kijken we of 10 - 16 kan. Dit kan niet dus word het een 0 en houden we 10 over.

Daarna kijken we of 10 - 8 kan. Dit kan dus word het een 1 en houden we 2 over.

daarna kijken we of 2 - 4 kan. dit kan niet dus word het een 0 en houden we 2 over.

daarna kijken we of 2 - 2 kan. dit kan dus word het een 1 en houden we 0 over.

Daarna kijken we of 0 - 1 kan. Dit kan niet dus word het een 0 en houden we 0 over.

Met dit zien we dat de binary 1010 1010 hebben.

**- Hoe gaan we van Decimaal naar hexadecimaal en andersom**

om van decimaal naar hexadecimaal te gaan moeten we door 16 delen en de waarde van de rest noteren en het getal dat overblijft.

dus laten we 462 nemen als voorbeeld.

we delen 462 door 16 om 28.875 te krijgen. We houden de 28 en we doen 0.875 x 16 om 14 rest te krijgen.

dan delen we 28 door 16 om 1.75 te krijgen. We houden 1 en we doen 0.75 x 16 om 12 als rest te krijgen.

dan delen we 1 door 16 om 0.0625 te krijgen. we houden 0 en we doen 0.0625 x 16 om 1 rest te krijgen. 

We halen de hex code sheet erbij om te kijken waar elk rest hoort.

![hex code](/00_includes/hex-code.png)

Het eerste rest is het meest rechste cijfer van het hexadecimale getal. En de laatste rest is het meest linkse deel.

Dus 1 = 1
en 12 = C
en 14 = E

En dan komen we op het antwoord 462 = 1CE

om van hex naar decimaal te gaan moeten we de index van elk cijfer in het hexadecimaal markeren . de index is de positie van het cijfer in het getal van rechts naar links tellend.

Laten we het voorbeeld `E0` nemen. we verangen eerst de cijfers naar decimalen waardes dus

E = 14 en 0 = 0

Daarma vermedigvuldigen we elk cijfer van het hexidecimale getal met 16 tot de macht van hun index om de plaatswaarde in decimaal te krijgen

dus E = 14 x 16^1 = 224
en  0 =  0 x 16^0 = 0

224 + 0 = 224 

dus E0 = 224

![hex converter](/00_includes/Hex-convert.png)


**Translate the following decimal numbers into binary:**

16 = 10000

128 = 10000000

228 = 11100100

112 = 1110000

73 = 1001001

**Translate the following binary numbers into decimal:**

1010 1010 = 170

1111 0000 = 240

1101 1011 = 219

1010 0000 = 160

0011 1010 = 58

**Translate the following decimal numbers into hexadecimal:**

15 = 49

37 = 25

246 = F6

125 = 7D

209 = D1

**Translate the following hexadecimal numbers into decimal:**

88 = 136

e0 = 224

cb = 203

2f = 47

d8 = 216