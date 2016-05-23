## Setup

Install nodejs 4.2 and then serverless system-wide:
`npm install -g serverless@0.5.5`

Install the project dependencies with `npm install`. Then cd up to the
form-handlers component and `npm install` there in order to grab the
component's dependencies.

Back in the `lambda` folder, run `sls project init` to create the environment
in AWS. You'll need IAM creds with the AdministratorAccess role in order to do
this.

Set required inputs with sls variables set. Set TRAVIS_TOKEN.

Run any function you want locally to see what it does with the example
event.json using `sls function run path/to/function`. Be careful, it will
really run given whatever parameters are in your environment.

## Deployment

Create the prod stage with `sls stage create` and optionally remove the dev
stage if you don't need it. Then use `sls env set` to set the required
environment variables in production.

To deploy run `sls dash deploy` and follow the interactive prompt.
