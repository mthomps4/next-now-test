# Up and Running with Next Now TypeORM

## What’s this for?!

This repo is a working example of Now/Next with multiple environments. Using CI/CD see how to configure Now/Next to create your teams workflow with the following environments:

- Local Development
- Local Testing
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

Run `yarn db:setup`

This will create two databases for local development.

`next_now_dev` and `next_now_test`

Migrations and Seeds:
source your `.env` file and run `yarn db:migrate:local`
then run `yarn db:seeds:up`

## Environments
### Local
root `.env`: This ENV file is for your local development
Running with `yarn dev` or `now dev` will run locally pointed to `next_now_dev`

### Testing
root `.env.test`: This ENV file is for your local test environment
Running `yarn test` will run jest pointing to db_name `next_now_test`
