import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct} from 'constructs'

export class ScriptBucketStack extends cdk.Stack {
  public readonly scriptBucket: s3.Bucket;

  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    this.scriptBucket = new s3.Bucket(this, 'ScriptBucket', {
      encryption: s3.BucketEncryption.S3_MANAGED,
    });
  }
}
