# Elastic Compute Cloud (EC2)
Hoe je VM in AWS can runnen.

## Key-terms
EC2 - Elastic Compute Cloud. Het runnen van VM's in AWS

AMI - *Amazon Machine Image*. de gegevens van je VM.

## Opdracht
### Gebruikte bronnen
[EC2 getting started](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html?icmpid=docs_ec2_console)


### Ervaren problemen

Heel even vergeten hoe ik ook alweer in een instance moest komen via een SSH connectie. oops

### Resultaat
In de EC2 dashboard kan je een nieuwe instance launchen. in de instellingen kiezen we de volgende settings:
AMI: Amazon Linux 2 AMI (HVM), SSD Volume Type
Instance type: t2.micro
Default network, no preference for subnet
Termination protection: enabled
User data:
```
#!/bin/bash
yum -y install httpd
systemctl enable httpd
systemctl start httpd
echo '<html><h1>Hello From Your Web Server!</h1></html>' >   /var/www/html/index.html
```
Root volume: general purpose SSD, Size: 8 GiB
New Security Group:
Name: Web server SG
Rules: Allow SSH, HTTP and HTTPS from anywhere

![AWS EC2](/00_includes/AWS_EC2_1.png)

![AWS EC2 network](/00_includes/AWS_EC2_Network.png)

![AWS EC2 Storage](/00_includes/AWS_EC2_Storage.png)

![AWS EC2 UserData](/00_includes/AWS_EC2_UserData.png)



Na dit allemaal geïnstalleerd te hebben zetten we de instance aan. En wachten we totdat de status checks zijn gedaan.

![AWS EC2 Status](/00_includes/AWS_EC2_Status.png)

Je kan deze instance op meerdere manieren runnen. Via AWS zelf. Of via een ssh connectie. Dit doe je door in powershell naar je keyfile te gaan en de command 
`ssh -i techtestqu1.pem ec2-user@ec2-44-205-243-230.compute-1.amazonaws.com`

De techtestqu1.pem is de keypair login dat we nodig hebben om in de instance te komen. deze sla je op in een locatie op je computer. en de ec2-user@ec2-44-205-243-230.compute-1.amazonaws.com is de user gemaand ec2-user met de public ipv4 DNS ec2-44-205-243-230.compute-1.amazonaws.com

![AWS EC2 SSH](/00_includes/AWS_EC2_SSH.png)

hierdoor kunnen we deze instance in via een SSH connectie!
