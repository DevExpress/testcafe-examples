### To run this example, use:
```
npm run kerberos-auth
```
if you are in `testcafe-examples`
or
```
npm start
```
if you are in `testcafe-examples/detached-examples/kerberos-auth`.

### This example demonstrates the ability to authenticate to a site using Kerberos.
It uses two docker containers. One hosts the application server. In the other, there is a kerberos client and a small server with which TestCafe can get a kerberos token.

The [testcafe/testcafe-examples_kerberos-server](https://hub.docker.com/r/testcafe/testcafe-examples_kerberos-server) container is based on the Ubuntu image and includes the following packages:
  - `krb5-kdc` - server issuing kerberos tokens;
  - `krb5-admin-server` - a server that stores a database of users (principals);
  - `curl`, `nvm`, `nodejs` and `npm`.

The server is already configured and a single principal has been added to its database:
**principal**: `testcafe-user`
**password**: `testcafe-pass`

The [testcafe/testcafe-examples_kerberos-client](https://hub.docker.com/r/testcafe/testcafe-examples_kerberos-client) container is based on Ubuntu and includes the following packages:
  - `krb5-user` - a utility that can access the kdc server to get a token;
  - `curl`, `nvm`, `nodejs` and `npm`.

After running `npm start` the containers will be launched. And the script will copy files from `client` and `server` to them, respectively.

In `server` there is an `express` based server that should serve the page and then validate the kerberos token received from the user.

The `client` contains a small server that TestCafe calls to get a kerberos token. It is separated into a separate container in order to avoid the problems of configuring the Kerberos client on different operating systems.

