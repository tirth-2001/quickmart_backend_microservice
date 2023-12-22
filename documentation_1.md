# Microservices Documentation - 1 (PILE)

This documentation covers various topics, concepts, and applications used in the Microservices Proof of Concept (POC) for a Node-based backend deployed and managed on Google Cloud.

## Technologies and Tools

- Node
- Docker, Dockerfiles, Docker Compose
- Kubernetes: Service, Deployment
- Kubernetes Dashboard
- Google Cloud Platform (GCP) Setup
- Artifact Registry
- Kubernetes Clusters
- Services & Ingress
- LoadBalancer, ClusterIP, NodePort
- Deployment and Service YAML
- Replicas and Scaling (Horizontal & Vertical)
- Platform-Specific Docker Build
- Kubernetes Secrets
- External Secret Management: DOPPLER
- Database Integration
- BFF (Backend For Frontend) and CORE Services
- Folder Structure
- Common Services Shared as an NPM Package
- Service Discovery
- Ingress Connectivity
- BFF to CORE Connection: RESTful Calls, GraphQL, RabbitMQ/Kafka
- CORE to CORE Connection: Direct API Calls, Event-Driven (RabbitMQ), Service Mesh
- CI/CD Pipelines: GitHub Actions
- RabbitMQ Setup, Connection, and Configuration
- Cache: Redis Client Shared Service
- Redis Shared Service: ClusterIP
- Firewall and VPC Rule for IP & Port Whitelisting
- Service-to-Service Connection Using ClusterIP
- Documentation: Swagger
- Deployment Process: Docker Build -> Test -> Push -> Modify deployment.yaml -> kubectl apply
- "kubectl" CLI for Kubernetes Utilities
