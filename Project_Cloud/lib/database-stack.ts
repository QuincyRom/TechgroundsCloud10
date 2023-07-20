import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

export interface MyDbStackProps extends cdk.StackProps {
  vpc: ec2.IVpc;
}

export class DatabaseStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: MyDbStackProps) {
    super(scope, id, props);

    const { vpc } = props;

    // Create a security group for our database
    const dbSecurityGroup = new ec2.SecurityGroup(this, 'dbSecurityGroup', {
      vpc,
      description: 'Security group for Aurora database',
      allowAllOutbound: true
    });

    // Make sure to replace the CIDR block below with your admin server's IP address or CIDR block.
    dbSecurityGroup.addIngressRule(ec2.Peer.ipv4('ADMIN-SERVER-IP/32'), ec2.Port.tcp(3306));

    // Create a database secret for storing the master username and password
    const dbSecret = new secretsmanager.Secret(this, 'DBSecret', {
      description: 'Password for Aurora database'
    });

    const dbCluster = new rds.DatabaseCluster(this, 'Database', {
      engine: rds.DatabaseClusterEngine.auroraMysql({ version: rds.AuroraMysqlEngineVersion.VER_2_09_1 }),
      instanceProps: {
        vpc,
        vpcSubnets: {
          subnetType: ec2.SubnetType.PRIVATE_ISOLATED
        },
        securityGroups: [dbSecurityGroup]
      },
      credentials: {
        username: 'adminuser',
        password: dbSecret.secretValue,
      },
      backup: ({
        retention: cdk.Duration.days(7)
      })
    });

    new cdk.CfnOutput(this, 'DBSecretArn', { value: dbSecret.secretArn });
    new cdk.CfnOutput(this, 'DBClusterEndpoint', { value: dbCluster.clusterEndpoint.hostname });
  }
}