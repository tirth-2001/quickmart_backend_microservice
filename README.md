# Quickmart Ecommerce Backend with Microservices

## For Creating Doppler secret in Kubernetes

### Replace your_doppler_token with your actual Doppler token.

```
kubectl create secret generic doppler-secret --from-literal=doppler-token=your_doppler_token
```

### Reference this in the deployment.yaml file

```
env:
- name: DOPPLER_TOKEN
  valueFrom:
    secretKeyRef:
      name: doppler-secret
      key: doppler-token
```

### View the token json once added

```
kubectl get secret/doppler-secret -o json
```

### Get actual decoded token

```
kubectl get secret/doppler-secret -o jsonpath="{.data.doppler-token}" | base64 --decode
```
