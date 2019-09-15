# Deployed Environments
These ENV files are used by Yarn/TypeORM to reset/migrate/seed the related DB.
now.json files are set for each environment to pull in a simlar fashion for Aliased Deploys noted below.


## Development (Devs)
`now.json`: This ENV setup is used by Now for all uniq git-branch deploys.

The Dev Environment is where developers can check their changes in a deployed scenario outside of Staging/Prod
This DB is known to be hacked on, need resets, seeds, etc. depending on features and migration being ran and developed.
- "Hey, does anyone mind if I reset the DEV DB and test this migration?"
- "I was able to log in as X user and see my changes."

## Staing (Demo/QA)
`staging.now.json`: When changes are merged into `staging` Now will use this env file to deploy and alias a uniq staging URL.
Example: `staging-next-now-test.now.sh`

_Note:_ due to the way Now deploys branch updates `...git-staging.now.sh` will actually point to `Development`

Staging is a stable release environment to use for Demoing new features to clients for further feedback.
It is also set for QA to test and further approve before a production release.

This Environment should be treated like a production environment -- reset only if something went horribly wrong.
This will help catch any "Gotchas" when trying to release in a similar fashion to Prod.


## Prod
`prod.now.json`: When changes are merged into `master` Now will use this file to deploy and alias a uniq Production URL.
Example: `production-next-now-test.now.sh`

_Note:_ due to the way Now deploys branch updates `...git-master.now.sh` will still point to `Development`

Prod is PROD
If something is wrong here... You're probably reading the wrong document.