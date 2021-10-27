# Coding challenge: Roman Numeral Addition

This demonstrates how to use the Rest API for adding two integers between 1 till 199 in Roman Numeral notation,
returning the result as a Roman Numeral as well.
## Usage

### Deployment

```
$ cd src
$ serverless offline
```

After deploying, you should see output similar to:

```bash
Serverless: Configuration warning at 'service.name': should match pattern "^[a-zA-Z][0-9a-zA-Z-]+$"
Serverless:  
Serverless: Learn more about configuration validation here: http://slss.io/configuration-validation
Serverless:  
offline: Starting Offline: dev/us-east-1.
offline: Offline [http for lambda] listening on http://localhost:3002
offline: Function names exposed for local invocation by aws-sdk:
           * rest_api: rest_api-dev-rest_api

   ┌────────────────────────────────────────────────────────────────────────────┐
   │                                                                            │
   │   GET | http://localhost:3000/dev/add/{str1}/{str2}                        │
   │   POST | http://localhost:3000/2015-03-31/functions/rest_api/invocations   │
   │                                                                            │
   └────────────────────────────────────────────────────────────────────────────┘

offline: [HTTP] server ready: http://localhost:3000 🚀
offline:
offline: Enter "rp" to replay the last request

```

_Note_:This is an offline deployment.

### Invocation

After successful deployment, you can call the created application via HTTP:

```bash
http://localhost:3000/dev/add/number1/number2
```
In place of number1 and number2 , add your own Roman numerals ranging between 1 to 199.
This should display the result as following.


```json
{"message":"Answer"}
 ```

### Additional Plugins

Since, this an offline deployment you may install an additional plugin of
by using `serverless-offline` plugin. In order to do that, execute the following command:

```bash
serverless plugin install -n serverless-offline
```

It will add the `serverless-offline` plugin to `devDependencies` in `package.json` file as well as will add it to `plugins` in `serverless.yml`.