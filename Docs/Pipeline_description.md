## Pipeline

From the root of the project:
- `npm run frontend:install`    - To install frontend dependencies.
- `npm run api:install`     - To install backend dependencies.
- `npm run frontend:lint`  - To run frontend lint
- `npm run frontend:build`      - To build the Angular/Frontend.
- `npm run api:build`       - To build the Typescript/Backend.
- `npm run deploy`     - To deploy both project frontend and backend `

## CircleCi

The order of the run jobs:
### Build
- Spin up environment
- Preparing enviroment variables
- Install Node.js 14.15
- Checkout code
- Install Frontend Dependencies
- Install API Dependencies
- Frontend Lint
- Frontend Build
- API Build
### Deploy
- Spin up environment
- Preparing enviroment variables
- Install Node.js 14.15
- Checkout code
- Setting up EB CLI
- Install AWS CLI - lastest
- Configure AWS Access Key ID
- Deploy App