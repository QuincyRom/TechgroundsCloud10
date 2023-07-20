import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct} from 'constructs'

export class VpcStack extends cdk.Stack {
    public readonly vpc: ec2.Vpc;
    public readonly publicSubnetIds: string[];
    public readonly privateSubnetIds: string[];
  static vpc: any;
  
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
      
     //Vpc create, 2 AZ's, 2 public subnets, 2 private
      const vpc = new ec2.Vpc(this, 'MyVPC', {
        vpcName:'Proj_VPC',
        ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/24'),
        natGateways: 0,
        maxAzs: 2,
        subnetConfiguration: [
          {
            
            name:'ProjVpcPrivate',
            subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      
          },
          {
            
            name: 'ProjVpcPublic',
            subnetType: ec2.SubnetType.PUBLIC,
        
          },
        ],
        enableDnsHostnames: true,
        enableDnsSupport: true,
      });
      //private subnet NACL
      const privatenacl = new ec2.NetworkAcl(this, 'PrivateNetworkAcl', {
        vpc,
        subnetSelection: {subnetType: ec2.SubnetType.PRIVATE_ISOLATED}

      });
    
      // Add inbound and outbound rules to the Network ACL
      // (Replace the rule properties with your desired configurations)
      privatenacl.addEntry('AllowHTTPInbound', {
        ruleNumber: 100,
        cidr: ec2.AclCidr.anyIpv4(),
        traffic: ec2.AclTraffic.tcpPort(80),
        direction: ec2.TrafficDirection.INGRESS,
        ruleAction: ec2.Action.ALLOW,
      });
    
      privatenacl.addEntry('AllowHTTPsOutbound', {
        ruleNumber: 100,
        cidr: ec2.AclCidr.anyIpv4(),
        traffic: ec2.AclTraffic.tcpPort(443),
        direction: ec2.TrafficDirection.EGRESS,
        ruleAction: ec2.Action.ALLOW,
      });
      //Public nacl
      const publicnacl = new ec2.NetworkAcl(this, 'PublicNetworkAcl', {
        vpc,
        subnetSelection: {subnetType: ec2.SubnetType.PUBLIC}

      });
    
      // Add inbound and outbound rules to the Network ACL
      // (Replace the rule properties with your desired configurations)
      publicnacl.addEntry('AllowHTTPInbound', {
        ruleNumber: 100,
        cidr: ec2.AclCidr.anyIpv4(),
        traffic: ec2.AclTraffic.tcpPort(80),
        direction: ec2.TrafficDirection.INGRESS,
        ruleAction: ec2.Action.ALLOW,
      });
    
      publicnacl.addEntry('AllowHTTPsOutbound', {
        ruleNumber: 100,
        cidr: ec2.AclCidr.anyIpv4(),
        traffic: ec2.AclTraffic.tcpPort(443),
        direction: ec2.TrafficDirection.EGRESS,
        ruleAction: ec2.Action.ALLOW,
      });
    
    
      
   

    }
  }