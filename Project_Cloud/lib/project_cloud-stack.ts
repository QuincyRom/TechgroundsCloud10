import * as cdk from 'aws-cdk-lib';
import { VpcStack } from './vpc-stack';
import { SecurityGroupStack } from './security-group-stack';
import { WebServerStack } from './web-server-stack';
//import { LoadBalancerStack } from './load-balancer-stack';
import { AdminServerStack } from './admin-server-stack';
//import { ScriptBucketStack } from './script-bucket-stack';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct} from 'constructs'

export class ProjectCloudStack extends cdk.Stack {
  private readonly scriptBucket: s3.Bucket;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    // De VPC stack
   const vpcStack = new VpcStack(this, 'VpcStack');

    // de security group stack
    const securityGroupStack = new SecurityGroupStack(this, 'SecurityGroupStack', vpcStack.vpc);
    
    // de webserver stack
   const webServerStack = new WebServerStack(this, 'WebServerStack', vpcStack.vpc, securityGroupStack.webServerSecurityGroup, this.scriptBucket);
   
    // de loadbalancer 
  //  const loadBalancerStack = new LoadBalancerStack(this, 'LoadBalancerStack', vpcStack.vpc, securityGroupStack.webServerSecurityGroup, webServerStack.targetGroup);
    
    // de adminserver
    const adminServerStack = new AdminServerStack(this, 'AdminServerStack', vpcStack.vpc, vpcStack.privateSubnetIds);

    // de bucket 
   // const scriptBucketStack = new ScriptBucketStack(this, 'ScriptBucketStack');

  }
}

