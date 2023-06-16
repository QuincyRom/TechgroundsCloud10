from aws_cdk import (
    # Duration,
    Stack,
    # aws_sqs as sqs,
    aws_ec2 as ec2,
    

)
from constructs import Construct


class Webserver(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

    
         # Define an EC2 instance for the webserver
        instance_type = ec2.InstanceType('t2.micro')
        ami_id = '<AMI_ID>'  # Replace with the desired AMI ID
        webserver = ec2.Instance(self, 'WebServer',
                                 instance_type=instance_type,
                                 machine_image=ec2.MachineImage.generic_linux(ami_id),
                                 vpc=vpc,
                                 security_group=security_group,
                                 vpc_subnets=ec2.SubnetSelection(subnet_type=ec2.SubnetType.PUBLIC))
