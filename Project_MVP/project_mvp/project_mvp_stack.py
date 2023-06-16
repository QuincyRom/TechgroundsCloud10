from aws_cdk import (
    # Duration,
    Stack,
    # aws_sqs as sqs,
    aws_ec2 as ec2,

)
from constructs import Construct

class ProjectMvpStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # Define a VPC
        vpc = ec2.Vpc(self, 'MyVPC', cidr='10.0.0.0/16')
        
        # Define subnets
        subnet1 = ec2.Subnet(self, 'Subnet1', vpc=vpc, cidr_block='10.0.0.0/24')
        subnet2 = ec2.Subnet(self, 'Subnet2', vpc=vpc, cidr_block='10.0.1.0/24')
        
        # Define a security group
        security_group = ec2.SecurityGroup(self, 'MySecurityGroup', vpc=vpc)
        security_group.add_ingress_rule(ec2.Peer.ipv4('0.0.0.0/0'), ec2.Port.tcp(80))
        
        # Define an EC2 instance for the webserver
        instance_type = ec2.InstanceType('t2.micro')
        ami_id = '<AMI_ID>'  # Replace with the desired AMI ID
        webserver = ec2.Instance(self, 'WebServer',
                                 instance_type=instance_type,
                                 machine_image=ec2.MachineImage.generic_linux(ami_id),
                                 vpc=vpc,
                                 security_group=security_group,
                                 vpc_subnets=ec2.SubnetSelection(subnet_type=ec2.SubnetType.PUBLIC))
        
        # Define an EC2 instance for the admin/management server
        admin_server = ec2.Instance(self, 'AdminServer',
                                    instance_type=instance_type,
                                    machine_image=ec2.MachineImage.generic_linux(ami_id),
                                    vpc=vpc,
                                    security_group=security_group,
                                    vpc_subnets=ec2.SubnetSelection(subnet_type=ec2.SubnetType.PUBLIC),
                                    key_name='my-keypair')  # Replace 'my-keypair' with your own key pair name
     