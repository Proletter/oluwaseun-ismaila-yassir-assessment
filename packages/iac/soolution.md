# HashiCups Demo Infrastructure Assessment Solution

This project demonstrates an advanced implementation of the HashiCups provider using CDK for Terraform (CDKTF) with TypeScript. It showcases best practices, custom constructs, and comprehensive testing.

## Features

- **Custom Constructs**: Modular and reusable components for:
  - Provider configuration
  - Coffee menu management
  - Order creation
- **Custom Provider**: Hashicups provider was deprecated and replaced with a custom provider I hosted at tf registry [Proletter/hashicup](https://registry.terraform.io/providers/Proletter/hashicup/latest/docs)
- **Multiple Orders**: Implementation includes 3 different order scenarios
- **Comprehensive Testing**: Full test suite with synthesis validation and resource verification
- **Local Development Environment**: Docker Compose setup for HashiCups API

## Prerequisites

- Node.js 18.0 or higher
- CDKTF CLI
- Docker and Docker Compose
- pnpm (recommended package manager)

## Getting Started

1. Install dependencies:
```bash
pnpm install
```

2. Start the HashiCups API locally:
```bash
docker-compose up -d
```
3. Generate provier bindings:
```bash
cdktf get
```

4. Run tests:
```bash
pnpm test
```
5. Synthesize infrastructure:
```bash
cdktf synth
```

6. Deploy the infrastructure:
```bash
pnpm run deploy
```

7. Destroy infrastructure:
```bash
cdktf destroy
```


### Best Practices

1. **Modular Design**: Custom constructs for better code organization and reusability
2. **Type Safety**: Comprehensive TypeScript interfaces and types
3. **Testing**: Extensive test coverage including synthesis and resource validation
4. **Infrastructure as Code**: Following CDKTF best practices
5. **Documentation**: Detailed README and code comments
6. **Local Development**: Easy-to-use Docker Compose setup

## Pending Issues

Infrastructure deployment fails due to cdktf still trying to pull the deprecated provider from the registry when you run cdktf deploy. 
I have been a quite occupied this week and haven't had the time to look into this. 
The problem is most likely dependencies in the custom provider pointing to the deprecated provider. 


