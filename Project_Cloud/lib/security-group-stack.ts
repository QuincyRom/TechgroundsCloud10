import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct} from 'constructs'

export class SecurityGroupStack extends cdk.Stack {
    public readonly webServerSecurityGroup: ec2.SecurityGroup;

  constructor(scope: Construct, id: string, vpc: ec2.Vpc, props?: cdk.StackProps) {
    super(scope, id, props);

    const webServerSecurityGroup = new ec2.SecurityGroup(this, 'WebServerSecurityGroup', {
      vpc,
      allowAllOutbound: true,
    });

    // Add inbound rules to the security group as per your requirements
  }
}