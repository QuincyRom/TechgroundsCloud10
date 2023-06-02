# Simple Storage Service (S3)
Het gebruik maken van een S3 bucket

## Key-terms
S3 *Simple Sotage Service*. Is een opslag ruimte voor het opslaan van verschillende soorten objecten.



## Opdracht
### Gebruikte bronnen
[S3 Bucket guide](https://docs.aws.amazon.com/quickstarts/latest/s3backup/welcome.html)


### Ervaren problemen
Het is blijkbaar mogelijk om block public access aan te houden terwijl je nog steeds public access geeft aan een file in je bucket. Dit kan je doen door de bucket policy aan te passen in het kopje permissions. en dan bucket policy edit. Ik heb dan de volgende strings toegepast.

```
{
    "Version": "2012-10-17",
    "Id": "AllowPublicAccess",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::your-bucket-name/*"
            ],
            "Condition": {
                "IpAddress": {
                    "aws:SourceIp": [
                        "0.0.0.0/0"
                    ]
                }
            }
        },
        {
            "Sid": "BlockPublicAccess",
            "Effect": "Deny",
            "Principal": "*",
            "Action": [
                "s3:GetObject"
            ],
            "Resource": [
                "arn:aws:s3:::your-bucket-name/*"
            ],
            "Condition": {
                "Bool": {
                    "aws:SecureTransport": "false"
                }
            }
        }
    ]
}
```

Dit zorgt ervoor dat de object public word terwijl al het andere geblokkeerd word.

###Resultaat

**Creër een bucket opdracht 1 en deel de object URL**

In AWS gaan we naar S3 een drukken we op create bucket. We geven toegang tot public access door de block all public access uit te zetten.

![Bucket 1](/00_includes/AWS_bucket_Created.png)

Nadat we dit hebben gemaakt. uploaden we de image via de upload knop in onze bucket dashboard.

![Bucket Dashboard](/00_includes/AWS_BucketDashboard.png)

En klikken we op de geuploade file en zoeken we de gegevens (properties) ervan up. hier staat de OObject URL die we kunnen delen met onze peers.

![Image Properties](/00_includes/AWS_image_properties.png)


**Creër een bucket die webhosting heeft en deel dit de website endpoint**

We maken weer een bucket aan en voegen de files toe die we nodig hebben voor de demo website.

![AWS bucket website](/00_includes/AWS_Bucketwebsite.png)

We gaan naar de properties gedeelte en scrollen naar beneden om static website hosting te enablen.

![AWS Bucket Website config](/00_includes/AWS_Bucketwebsiteconfg.png)

![AWS Bucket Website config1](/00_includes/AWS_Bucketwebsite1.png)

Nadat we dit hebben aangezet krijgen we mogelijkheid om de website op te starten.

Maar zodrat we deze website endpoint willen openen krijgen we een 4053 forbidden error. Dit is te fixen door de policies aan te passen van de bucket. hierdoor kunnen we ook de public access weer aanzetten om het te blokkeren.

de policy string alsvolgd.

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::techtestqu2/*"
        }
    ]
}
```