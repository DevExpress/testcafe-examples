# Authenticate a user with Kerberos
## How to run this example
If your current working directory is `testcafe-examples`, execute the following command:
```
npm run kerberos-auth
```
If your current working directory is `testcafe-examples/detached-examples/kerberos-auth`, execute the following command:

```
npm start
```

## Example contents
The example demonstrates how to implement Kerberos user authentication in a TestCafe test. It utilizes two Docker containers:

1. The [testcafe/testcafe-examples_kerberos-server](https://hub.docker.com/r/testcafe/testcafe-examples_kerberos-server) container hosts the application server. It is based on the Ubuntu image and includes the following packages:
    -  A Kerberos token generator (`krb5-kdc`).
    -  A Kerberos database server that stores user credentials (`krb5-admin-server`).
    -  A set of common CLI tools (`curl`, `nvm`, `nodejs`, `npm`).

  The Kerberos server comes pre-configured. The database contains a single principal:
  **principal**: `testcafe-user`
  **password**: `testcafe-pass`

2. The [testcafe/testcafe-examples_kerberos-client](https://hub.docker.com/r/testcafe/testcafe-examples_kerberos-client) container hosts the Kerberos client. It is based on the Ubuntu image and includes the following packages:
    - A utility that retrieves the Kerberos token from the token generator (`krb5-user`)
    - A set of common CLI tools (`curl`, `nvm`, `nodejs`, `npm`).

  ## Launch script overview
  
  This is what happens when you run the `npm start` command: 
  
  1. The script launches the `server` container and populates it with files from the `server` folder.
  2. The script launches the `client` container and populates it with files from the `server` folder.
  3. The `server` container launches a simple Express.js application, as well as a server that validates Kerberos tokens.
  4. The `client` container launches an application that obtains Kerberos tokens from the server on behalf of TestCafe.
  5. The script creates a new TestCafe instance and launches the `test.js` test.

