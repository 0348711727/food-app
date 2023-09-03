// aws-config.js
import AWS from 'aws-sdk';

AWS.config.update({
  accessKeyId: 'voImc8EwAErHah7WCyHrrGg6ZZeAEem7e3MOwUMm',
  secretAccessKey: 'AKIA5E36AOIMW7RQZEDA',
  region: 'ap-southeast-1', // e.g., 'us-east-1'
});

export default AWS;
