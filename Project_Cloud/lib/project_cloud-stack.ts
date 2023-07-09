import * as cdk from 'aws-cdk-lib/core';
import { VpcStack } from './vpc-stack';
import { SecurityGroupStack } from './security-group-stack';
import { Construct} from 'constructs'

export class MyProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // De VPC stack
    const vpcStack = new VpcStack(this, 'VpcStack');

    // de security group stack
    const securityGroupStack = new SecurityGroupStack(this, 'SecurityGroupStack', vpcStack.vpc);


  }
}

//   new s3.Bucket(this, 'MyFirstBucket', {
//    versioned: true,
//    removalPolicy: cdk.RemovalPolicy.DESTROY,
//    autoDeleteObjects: true,
//   });

