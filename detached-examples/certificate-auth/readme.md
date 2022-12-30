This example demonstrates the process of certificate-based authentication with TestCafe.

First, we launch a simple web server available at `https://localhost:3000`. The index page contains a link to the authentication page: `https://localhost:3000/authenticate`.

When you open the log-in page, the server checks the request for the presence of a valid authentication certificate. When the check is complete, the server displays a message with the verification result. There are three possible outcomes:

1. The request does not include a certificate.
2. The certificate is present, but invalid.
3. The certificate is both present and valid. 

The `./auth.js` file defines `Auth` — an extension of the [RequestHook](https://testcafe.io/documentation/402669/reference/test-api/requesthook) class. An `Auth` hook scans the `./certs` folder for certificates, and adds them to the request.

Tests in the example use the `t.addRequestHooks` method to create `Auth` instances.
