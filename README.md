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
1. Cd to packages/iac dependencies:
```bash
cd packages/iac
```

2. Start the HashiCups API locally:
```bash
pnpm compose:up
```
3. Create test user:
```bash
pnpm run create:user
```

4. Generate provier bindings:
```bash
cdktf get
```

5. Run tests:
```bash
pnpm test
```
6. Synthesize infrastructure:
```bash
cdktf synth
```

7. Deploy the infrastructure:
```bash
pnpm run deploy
```

8. Destroy infrastructure:
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





# Yassir Platform Engineering Take Home Challenge

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/YAtechnologies/platform-challenge)

**Note**: Do not **fork** this repository. Instead:
- Clone it locally.
- Create a new **private** repository on Github and invite your interviewers (Github usernames will be provided to you).
- We do not accept pull requests.

This repository acts as a boilerplate to get you started tackling Yassir's platform engineering challenge.

The stack used here is close to what we use for Infrastructure As Code. Mainly:

- [Terraform](https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli).
- [CDK for Terraform](https://developer.hashicorp.com/terraform/tutorials/cdktf/cdktf-install).
- Typescript as the IaC language of choice.
- A [monorepo](https://monorepo.tools/) managed with [pnpm](https://pnpm.io/).

Once you have the above-mentioned tools installed you can run `pnpm install` to install the npm/Typescript dependencies.

For your convenience, we also provided a `.gitpod.yml` file so you can have an already setup environment on GitPod. Simply click "Open in Gitpod" button above.

## About the challenge
The challenge is about showcasing your ability to implement and manage infrastructure using code. You'll need to use Hashicups.

[Hashicups](https://registry.terraform.io/providers/hashicorp/hashicups/latest/docs) is a fictional Terraform provider. It does not provision real infrastructure (like AWS or GCP), but instead resources are represented as coffee
orders in a coffee-shop. The idea is to mimic cloud-providers with a simple, fun API, without having to deal with cloud providers registrations, accounts or billing for our candidates.

The gist of the work is mostly translating the [CRUD operations](https://developer.hashicorp.com/terraform/tutorials/providers/provider-use) from plain Terraform to CDKTF.


## The deliverable
The final output should be this repository updated with your code, configs and setup. We should be able to:
- Run `pnpm install` for all required/new dependencies.
- A way or a command to run Hashicups APIs locally. We recommend using docker compose for that. The GitPod environment already has docker compose installed for you.
- `README.md` file updated, or a `help` file included on how to provision the infrastructure using Hashicups.
- Be able to provision the CRUD operation for the coffee-shop. The Infrastructure as Code should go under `packages/iac`.
- Have at least two different coffee types, [with different ingredients, price and description](https://registry.terraform.io/providers/hashicorp/hashicups/latest/docs/data-sources/coffee). They should be treated as two completely different products for our orders.
- A way to destroy/cleanup the infrastructure.
- All using cdktf, not plain terraform (no HCL).
- Bonus points for using [Constructs](https://developer.hashicorp.com/terraform/cdktf/concepts/constructs) and [CDKTF best practices](https://developer.hashicorp.com/terraform/cdktf/create-and-deploy/best-practices).
- A simple testing suite that makes sure CDKTF synthesizes the infrastructure correctly.

### Having troubles?
If you're encountering any troubles, feel free to send an email to `platform@yassir.com`.
