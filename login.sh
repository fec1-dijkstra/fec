aws autoscaling create-launch-configuration \
  --launch-configuration-name CodeDeployDemo-AS-Configuration \
  --image-id i-03d52d1e0e9bb9bb8 \
  --key-name FEC.pem \
  --iam-instance-profile CodeDeployDemo-EC2-Instance-Profile \
  --instance-type t1.micro