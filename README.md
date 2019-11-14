# Up and Running with Next Now TypeORM

## What’s this for?!

This repo is a working example of Now/Next with multiple enviornments. Using GitLab (soon GitHub Actions) see how to configure Now/Next to create your teams workflow with the following environments:

- Local Development
- Testing (CI/CD)
- Development
- Staging
- Production

## The Stack

- Next 9
- Zeit/Now
- TypeORM
- AWS RDS Postgres (could be any DB host)
- TypeScript

## Running Locally

**Pre Req**:

- Node v10.x
- Yarn
- Postgres (as of this writing 11.5)

**Global Installs**:

- `yarn add —global ts-node typescript now`

**Now:

This installs Nows cli tools. We will use these to login, add secrets (envs), and deploy our application manually if needed.

**Dependencies:**

Run `yarn`

**Setup**:
- Copy the .env.example
- source the .env file
- then run `yarn now:dev`
