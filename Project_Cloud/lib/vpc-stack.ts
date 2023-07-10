import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct} from 'constructs'

export class VpcStack extends cdk.Stack {
    public readonly vpc: ec2.Vpc;
    public readonly publicSubnetIds: string[];
    public readonly privateSubnetIds: string[];
  
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
      
     
 
      
     
      const vpc = new ec2.Vpc(this, 'MyVPC', {
        ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
        natGateways: 2,
        maxAzs: 2,
        subnetConfiguration: [
          {
            cidrMask: 24,
            name: 'Private',
            subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
      
          },
          {
            cidrMask: 24,
            name: 'Public',
            subnetType: ec2.SubnetType.PUBLIC,
        
          },
        ],
        enableDnsHostnames: true,
        enableDnsSupport: true,
      });
  
      this.vpc = vpc;
      this.publicSubnetIds = vpc.selectSubnets({ subnetType: ec2.SubnetType.PUBLIC }).subnetIds;
      this.privateSubnetIds = vpc.selectSubnets({ subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS }).subnetIds;
    }
  }