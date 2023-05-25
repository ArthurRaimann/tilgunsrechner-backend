# tilgungsrechner-backend

## Description

This is the backend part of the **_Tilgunsrechner_**
This backend api will calculate a payment plan if being provided with the correct request body:

```
Route(relative) --> /payment-plan
```

```
HTTP method: POST
```

```
Request body:
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
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

One e2e Test was created to test the business logic of the provided route.

```bash
# e2e tests
$ npm run test:e2e

```
