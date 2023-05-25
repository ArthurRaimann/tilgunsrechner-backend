# tilgungsrechner-backend

## Description

This is the backend part of the **_Tilgunsrechner_**
This backend api will calculate a payment plan if being provided with the correct request body.

```
Route(relative) --> /payment-plan
```

```
HTTP method: POST
```

Request body example:
```
{
  "loanAmount": 250000,
  "interestRate": 2,
  "initialRepayment": 3,
  "fixedInterestPeriod": 10
}
```

## Installation

```bash
$ npm install
```

## Running the app

```bash
# dev mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
Locally the PORT will be 3003 --> [localhost:3003
](http://localhost:3003)
## Test

One e2e Test was created to test the business logic of the provided route.

```bash
# e2e tests
$ npm run test:e2e

```
