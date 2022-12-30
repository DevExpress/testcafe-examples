This example demonstrates the ability to authenticate using client certificates.

A simple server rises in it, which at the address `https://localhost:3000` will give a page with a link to the authentication page: `https://localhost:3000/authenticate`.

Having received a request to issue an authentication page, the server will check for the presence of a certificate in the request. Further, there are three possibilities: there is no certificate, the certificate is invalid, and the certificate is valid. In each of these cases, the user will receive a message about the result of the certificate verification.

The `./auth.js` file defines the `Auth` class, which inherits from `[RequestHook](https://testcafe.io/documentation/402669/reference/test-api/requesthook)`. It adds a certificate from the `./certs` folder to the request.

In the tests, we hook up `Auth` instances with the `t.addRequestHooks` function.
