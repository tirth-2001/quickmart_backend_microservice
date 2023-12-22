# Microservices Documentation - 2 (Functional Overview)

## Microservice Strategies

#### Service Definition

- **BFF Service:** Frontend interaction layer with authentication, authorization, and caching.
- **Core Service:** Responsible for database interactions, internal service calls, and business logic.
- **Shared Service:** Common middleware and utility functions deployed as an NPM package.

#### Security

- Authentication and Authorization checks in BFF service.
- Third-party package Doppler for secret management.

#### Logging and Monitoring

- Standard logging practices implemented.
- Kubernetes Dashboard for monitoring.

#### Error Handling

- Shared service provides an error handler middleware.

#### Database Management

- Database interactions handled in Core services.
- MySQL/PostgreSQL used for persistent storage.

#### Caching

- Redis implemented for caching.
- Cache client provided by the shared service.

#### Scalability

- Horizontal and Vertical scaling options available in Kubernetes.

#### Testing

- Unit tests, integration tests, and end-to-end tests included in CI/CD pipelines.

#### Deployment Automation

- CI/CD pipelines set up using GitHub Actions.
- Kubernetes used for deployment automation.

#### Backup and Recovery

- Regular backups handled by Kubernetes.

#### Documentation

- API documentation using Swagger.

#### Secret Management

- Doppler used for secret management.

#### Performance Optimization

- Caching and database indexing implemented for performance optimization.

## Functional Overview

- **Project Name:** QuickMart Ecommerce
- **Modules:** User, Order, Product
- **Services:** BFF and Core services for each module.
- **BFF Service:**
  - Handles frontend interactions.
  - Implements authentication, authorization, and caching.
- **Core Service:**
  - Manages database interactions and business logic.
  - Internal service calls for cross-module communication.
- **Shared Service:**
  - Contains common middleware and utility functions.
  - Deployed as an NPM package and imported as needed.
- **Redis:** Used for caching implementation.
- **Interservice Communication:** RESTful API calls.
- **Secret Management:** Doppler for secure secret management.
- **CI/CD Pipelines:** GitHub Actions for automated deployment.
- **Kubernetes:** Manages service deployment and cluster management.
