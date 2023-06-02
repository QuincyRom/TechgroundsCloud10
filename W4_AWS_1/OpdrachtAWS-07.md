# Elastic Block Store (EBS)
Het maken en attachen van een Elastic block store

## Key-terms
EBS - Elastic blcok store. Een virtuele hard drive voor de cloud. waar je root volumes (interne hard disk) of aparte volumes zoals een externe hard disk

Snapshot - Het maken van een soort foto van de laatste gegevens in de hardisk. 
## Opdracht
### Gebruikte bronnen
[EBS Guide](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-volumes.html?icmpid=docs_ec2_console)


### Ervaren problemen
Met het mounten gaf het mij de error: *mount: /mnt/myebs: wrong fs type, bad option, bad superblock on /dev/xvdf, missing codepage or helper program, or other error.* 

Om dit op te lossen gebruikte ik de command: `sudo mkfs -t ext4 /dev/xvdf` wat ervoor zorgte dat de volume een filesysteem heeft gemaakt. in ext4


### Resultaat
**Opdracht 1**

Allereerst creëren we een niewe EC2 instance met de basis instellingen. Dit hebben we in de vorige opdracht geleerd.

Hierna gaan we naar het kopje volumes. hier maken we een nieuwe volume aan met de volgende eisen:
Volume type: General Purpose SSD (gp3)
Size: 1 GiB
Availability Zone: same as your EC2

![EBS](/00_includes/AWS_EBS.png)


Dit voegen we toe aan de instance door rechter muisknop en attach volume te gebruiken.

**opdracht 2**
hierna kunnen we de instance openen in een ssh connectie in powershell. met de command `ssh -i "EBStestqu.pem" ec2-user@ec2-54-164-196-7.compute-1.amazonaws.com`

In de linux omgeving gebruiken we de command `lsblk` om alle disk te zien. we zien dat onze disk die we willen hebben de naam /dev/x Daarna maken we een directory aan zodat we een plaats hebben waar we de disk in kunnen zetten. in mijn geval heb ik `sudo mkdir /mnt/myebs` aangemaakt.

Als volgt mounten we deze disk in de directory met de command `sudo mount /dev/xvdf /mnt/myebs` 

nu de volume in onze instance is gemount kunnen we een tekst file aanmaken met de `touch` command

![EBS mounting](/00_includes/AWS_EBS_Mounting.png)


**opdracht 3**

we maken een snapshot van de volume door te terug te gaan naar de EC2 managent console in AWS. dan gaan we naar volumes. rechtermuis knop op de volume waar we een snapshot van willen maken. en klikken we create snapshot.

![AWS Snapshot](/00_includes/AWS_EBS_Snapshot.png)

Daarna halen we de txt file uit de volume die we eerder gemaakt hebben en maken we een nieuwe volume aan met de snapshot die we zojuist hebben gemaakt. we detachen de 1ste volume en attachen de nieuwe volume met de snapshot. Hierna kunnen we in de instance de txt file weer terug zien.

![EBS Detach](/00_includes/AWS_EBS_DetachandAttach.png)



