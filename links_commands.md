# IMP Links

### ChatGPT conversations:

- Code and Implementations : https://chat.openai.com/share/56687728-6c11-4d77-a114-bdea99ec3ab3
- Init to Deploy POC : https://chat.openai.com/share/12c8b5b5-cba8-4225-b85b-9ded4c76140c

### Commands

- `kubectl get services`
- `kubectl get pods`
- `kubectl logs <pod_name>`
- `kubectl apply -f deployment.yaml/service.yaml/ingress.yaml`
- `kubectl config current_config`
- `kubectl create token dashboard-admin -n kubernetes-dashboard --duration=360h --output json`
- Trigger new deployment when no changes in the deployment.yaml file : `kubectl rollout restart deployment user-bff-service-deployment`
- `docker build -t gcr.io/micro-services-406818/quickmart-user-bff-service-v2:amd64 .`
- `docker push gcr.io/micro-services-406818/quickmart-user-bff-service-v2:amd64`
