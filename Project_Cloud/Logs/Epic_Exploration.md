# Migrate to the cloud, A working MVP

| Task    | How?? |
| ----------- | ----------- |
|Configure vm disk encryption |	EBS block store or KMS
|implementing/Automated Web server installation| EC2 Userdata
|Implementing Admin/Management Server|	EC2 Instance met Windowsserver
|Public IP for Admin/Management Server|Allocating an Elastic IP in AWS
|Restrict acces to admin/management server| Nat gateway
|S3 bucket to store bootstrap/postdeplyment scripts|	S3 bucket script?
|Subnet bescherming door een firewal op subnet niveau|	NetworkACL
|IP ranges van 10.10.10.0/24 & 10.20.20.0./24|	VPC
|SSH of RDP verbindingen met de webserver mogen alleen tot stand komean vanuit de admin server|	VPC
Setup proxy voor webserver | Elastic load balancer
|[Daily] Time logs	
|[Daily] Beslissingen documentatie	