import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct} from 'constructs'

export class WebServerStack extends cdk.Stack {
    public readonly instance: ec2.Instance;
    public readonly targetGroup: elbv2.ApplicationTargetGroup;
    private readonly scriptBucket: s3.Bucket;


    constructor(scope: Construct, id: string, vpc: ec2.Vpc, securityGroup: ec2.SecurityGroup, scriptBucket: s3.Bucket, props?: cdk.StackProps) {
        super(scope, id, props);
      
    this.scriptBucket = scriptBucket;

    // Dit gedeelte uload naar de bucket.
//const scriptAsset = new s3.Asset(this, 'ScriptAsset', {
  //  path: '/path/to/bootstrap-script.sh', // Adjust the path to your script file
 // });
 // const scriptObject = this.scriptBucket.grantRead(instance.role!).upload(scriptAsset);
  


  
    
  
    // Webserver create
    const userData = ec2.UserData.forLinux();
    userData.addCommands(
      // userdata voor het automatiseren
      'sudo yum update',
      'apt-get install -y nginx',
      'systemctl start nginx'

        // Dit gaat in de userdata om de file t halen.
 // userData.addCommands(
 //   'aws s3 cp s3://' + this.scriptBucket.bucketName + '/' + scriptObject.key + ' /path/on/instance/bootstrap-script.sh',
  //  'chmod +x /path/on/instance/bootstrap-script.sh',
  //  '/path/on/instance/bootstrap-script.sh'

    );

    const instance = new ec2.Instance(this, 'WebServerInstance', {
      vpc,
      instanceType: new ec2.InstanceType('t2.micro'),
      machineImage: ec2.MachineImage.latestAmazonLinux2(),
      securityGroup,
      userData,
    });

    
  }
}