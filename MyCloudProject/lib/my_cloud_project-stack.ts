import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as autoscaling from 'aws-cdk-lib/aws-autoscaling';

import { Construct } from 'constructs';


export class MyCloudProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    /////////////////////////////////
    //////////VPC////////////////////
    /////////////////////////////////
    
    const vpc = new ec2.Vpc(this, 'MyVpc', {
      maxAzs: 2,  // Maximum number of availability zones
      subnetConfiguration: [  // Configuration for public and private subnets
        {
          cidrMask: 24,  // The CIDR notation for a subnet (optional)
          name: 'PublicSubnet',  // The name of the subnet
          subnetType: ec2.SubnetType.PUBLIC,  // Indicates this is a public subnet
        },
        {
          cidrMask: 24,  // The CIDR notation for a subnet (optional)
          name: 'PrivateSubnet',  // The name of the subnet
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,  // Indicates this is a private subnet
        },
      ],
    });
    
    

    /////////////////////////////////
    //////////Database///////////////
    /////////////////////////////////

    const securityGroup = new ec2.SecurityGroup(this, 'AuroraSG', {
      vpc: vpc,
      description: 'Security group for Aurora DB',
      allowAllOutbound: true,  // Change this as per your requirements
    });

    // Add an ingress rule to allow traffic from the admin/management server
    // Replace `adminServerIp` with the IP address of your admin server
    const adminServerIp = '10.0.2.143/32';  // CIDR notation
    securityGroup.addIngressRule(ec2.Peer.ipv4(adminServerIp), ec2.Port.tcp(3306));

    const cluster = new rds.DatabaseCluster(this, 'Database', {
      engine: rds.DatabaseClusterEngine.auroraMysql({
        version: rds.AuroraMysqlEngineVersion.VER_2_07_1,
      }),
      instanceProps: {
        vpc: vpc,
        vpcSubnets: {
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED,  // Place in private subnet
        },
        securityGroups: [securityGroup],  // Assign the security group
      },
      removalPolicy: cdk.RemovalPolicy.SNAPSHOT,  // Snapshot the cluster before removing it
      backup: ({
        retention: cdk.Duration.days(7),  // Keep backups for 7 days
      }),
    });

    /////////////////////////////////
    /////Admin/managementserver//////
    /////////////////////////////////

    // Define a new security group for the EC2 instance
    const ec2SecurityGroup = new ec2.SecurityGroup(this, 'EC2SG', {
      vpc,
      description: 'Security group for EC2 Admin Server',
      allowAllOutbound: true
    });

    ec2SecurityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22));

    // Define EC2 instance
    const adminServer = new ec2.Instance(this, 'AdminServer', {
      vpc,
      vpcSubnets: {
        subnetType: ec2.SubnetType.PRIVATE_ISOLATED
      },
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
      machineImage: ec2.MachineImage.latestWindows(ec2.WindowsVersion.WINDOWS_SERVER_2019_ENGLISH_FULL_BASE),
      securityGroup: ec2SecurityGroup,
      keyName: 'NewAdminServerKeyPair',
    });

    // Assigning an elastic IP to the admin server
    new ec2.CfnEIP(this, 'AdminServerEIP', {
      domain: 'vpc',
      instanceId: adminServer.instanceId,
    });


    /////////////////////////////////
    //////////Webserver//////////////
    /////////////////////////////////

  const webserverUserData = ec2.UserData.forLinux();
webserverUserData.addCommands(
  "sudo apt update -y",
  "sudo apt install -y apache2",
);



 /////////////////////////////////
 //////////Autoscaler/////////////
 /////////////////////////////////


// Define the auto-scaling group
const asg = new autoscaling.AutoScalingGroup(this, 'ASG', {
  vpc,
  keyName: 'NewWebserverKeyPair',
  vpcSubnets: {
    subnetType: ec2.SubnetType.PUBLIC,
  },
  associatePublicIpAddress: true,
  instanceType: ec2.InstanceType.of(ec2.InstanceClass.T2, ec2.InstanceSize.MICRO),
  machineImage: new ec2.AmazonLinuxImage(),
  securityGroup: ec2SecurityGroup,
  
  userData: webserverUserData,
  desiredCapacity: 1,
  maxCapacity: 3,
  minCapacity: 1,
});

asg.scaleOnCpuUtilization('CpuScaling', {
  targetUtilizationPercent: 80,
});


 /////////////////////////////////
 //////////Loadbalancer///////////
 /////////////////////////////////

// Define the load balancer
const lb = new elbv2.ApplicationLoadBalancer(this, 'LB', {
  vpc,
  internetFacing: true
});

const listener = lb.addListener('Listener', {
  port: 80,
  open: true,
});

// Define the target group
const targetGroup = listener.addTargets('TargetGroup', {
  port: 80,
  targets: [asg],
  healthCheck: {
    path: "/",
    interval: cdk.Duration.seconds(30),
  },
});

// Attach the auto-scaling group to the target group
//asg.attachToApplicationTargetGroup(targetGroup);
    
    /////////////////////////////////
    //////////NACL///////////////////
    /////////////////////////////////




  }
}


