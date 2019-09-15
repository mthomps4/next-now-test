# Up and Running with Next Now TypeORM 

## What’s this for?!

This repo is a working example of Now/Next at scale. Using GitLab (soon GitHub Actions) see how to configure Now/Next to create your teams workflow with the following environments: 

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

**ts-node and typescript:

Used in yarn scripts to run various commands with dotenv and TypeORM. Installing globally simplifies our yarn scripts, avoiding he need to dive into node_modules for each tool. 

Example: `ts-node -r dotenv/config` VS `node_modules/ts-node/dist/bin.js -r dotenv/config`

In the above example you would still need typescript installed globally. It’s easier IMO to install both. If you prefer not to install ts-node globally to manage versions feel free to update the yarn scripts accordingly. 

**Dependencies:** 

Run `yarn`

**Setup**: 

Run `yarn setup` or `ts-node setup/index.ts`

This will create two databases for local development. 

`next_now_dev` and `next_now_test`

Migrations and Seeds:

TODO 

## Environments

All ENVs are kept within `.env/`

There is an example file for each with a readme describing more in depth (TODO LINK HERE) 

<details>
<summary>
Local Development 
</summary>
    Local DB: `now_next_dev`

    ENV: `.env/.env.local`

    Ran with `now dev`(TODO) or `yarn start` this environment is setup to look at `.env/.env.local`. This connects to your machines local Postgres using your personal credentials. 

    yarn scripts are also also set to point at this env for TypeORM helpers. 

    Example: `yarn db:migrate`
</details>

<details>
<summary>
Local Testing 
</summary>

    Local DB: `next_now_test`

    ENV: `.env/.env.test.local`

    Ran with `yarn test` this will connect to your local DB. Jest is setup to run a setup test first to ensure you are connected to the right DB. Jest is also setup to run migrations and reset between each test file and run. 
</details>

Deployed Environments: 

<details>
<summary>
Testing
</summary>

    DB: AWS RDS (testing)

    ENV: `.env/.env.test`

    A test DB is setup for CI to interact with.

    I feel this helps troubleshoot and test remote connection issues while running your normal testing suite. I’m still open here: I may re-opt for a CI Postgres image instead. 

    Similar to .test.local These ENVs are set to sync the DB by running migrations in between each test run.

    The env file itself allows for a quick reset should something land in a weird state with CI by running `yarn db:reset:testing`
</details>

<details>
<summary>
Development 
</summary>

    DB: AWS RDS (development) 

    ENV: `.env/.env.development`

    NOW: `now.json`

    ENVs are setup within `now.json`and `now secret`. Now will create a uniq deploy per branch using the Dev DB credentials. 

    The Development environment gives your developers a chance to see their code live and deployed with “real data”. This also lends a DB environment To test DB migrations and relations as your data models change and expand. 

    ** Note: while Now deploys your branch to a uniq url. All branches are still pointed to the same DB. The Dev DB will always be in a state of transition while your team continues to build and test. As with anything communication is key. I’ve included yarn scripts specifically for dev to help, reset, migrate, and re-seed.

    Example: 

    `yarn db:migrate:dev`

    `yarn db:reset:dev`

    > “Hey, anyone using Dev? I need to test out this migration?”
</details>

<details>
<summary>
Staging
</summary>

    DB: AWS RDS (staging) 

    ENV: `.env/.env.staging`

    NOW: `staging.now.json`

    `staging.now.json`: When changes are merged into `staging` Now will use this env file to deploy and alias a uniq staging URL.

    Example: `staging-next-now-test.now.sh`

    *Note:* due to the way Now deploys branch updates `...git-staging.now.sh` will actually point to `Development`

    Staging is a stable release environment to use for Demoing new features to clients for further feedback. It is also set for QA to test and further approve before a production release.

    This Environment should be treated like a production environment -- reset only if something went horribly wrong.
    This will help catch any "Gotchas" before releasing in a similar fashion to Prod.
</details>

<details>
<summary>
Production
</summary>

    DB: AWS RDS (prod) 

    ENV: `.env/.env.prod`

    NOW: `prod.now.json`

    `prod.now.json`: When changes are merged into `master` Now will use this file to deploy and alias a uniq Production URL.

    Example: `production-next-now-test.now.sh`

    *Note:* due to the way Now deploys branch updates `...git-master.now.sh` will still point to `Development`

    Prod is PROD! 
    If something is wrong here... You're probably reading the wrong document. Go put out some fires and squash some bugs...
</details>
