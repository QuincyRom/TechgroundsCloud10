import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct} from 'constructs'
import { WebServerStack } from './web-server-stack';


export class LoadBalancerStack extends cdk.Stack {
  constructor(scope: Construct, id: string, vpc: ec2.IVpc, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create the Application Load Balancer (ALB)
    const loadBalancer = new elbv2.ApplicationLoadBalancer(this, 'WebserverLB', {
      vpc,
      internetFacing: true, // Set to 'true' if the ALB should be internet-facing
    });
    
      // Add the target group to the ALB listener on port 80
      const httplistener = loadBalancer.addListener('MyHttpListener', {
        port: 80,
      
      });

    // Enable HTTP to HTTPS redirection for the ALB
    loadBalancer.addRedirect({
      sourceProtocol: elbv2.ApplicationProtocol.HTTP,
      sourcePort: 80,
      targetProtocol: elbv2.ApplicationProtocol.HTTPS,
      targetPort: 443,
    });

    // Create the target group for the ALB with a health check
    const targetGroup = new elbv2.ApplicationTargetGroup(this, 'MyTargetGroup', {
      vpc,
      port: 80, // Port on which your web server is listening
      targetType: elbv2.TargetType.INSTANCE,
      healthCheck: {
        path: '/', // The path that the ALB will use for health checks
        port: '80',
        protocol: elbv2.Protocol.HTTP,
        healthyThresholdCount: 2,
        unhealthyThresholdCount: 2,
        interval: cdk.Duration.seconds(30),
        timeout: cdk.Duration.seconds(5),
      },
    });

     // Step 4: Add the Target Group to the HTTP listener
     httplistener.addTargetGroups('HttpTargetGroup', {
      targetGroups: [targetGroup],
    });

    // Step 7: Output the Load Balancer DNS Name
    new cdk.CfnOutput(this, 'LoadBalancerDNSName', {
      value: loadBalancer.loadBalancerDnsName,
    });
  }
}
