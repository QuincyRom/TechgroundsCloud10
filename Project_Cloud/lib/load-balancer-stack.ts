import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct} from 'constructs'

export class LoadBalancerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, vpc: ec2.Vpc, webServerSecurityGroup: ec2.SecurityGroup, webServerTargetGroup: elbv2.ApplicationTargetGroup, props?: cdk.StackProps) {
    super(scope, id, props);

    const loadBalancer = new elbv2.ApplicationLoadBalancer(this, 'LoadBalancer', {
      vpc,
      internetFacing: true,
      securityGroup: webServerSecurityGroup, 
    });

    const listener = loadBalancer.addListener('Listener', {
      port: 80, // http traffic 
      open: true,
      defaultTargetGroups: [webServerTargetGroup], //de webserver instance
    });

    // Output the load balancer DNS name
    new cdk.CfnOutput(this, 'LoadBalancerDnsName', {
      value: loadBalancer.loadBalancerDnsName,
    });
  }
}
