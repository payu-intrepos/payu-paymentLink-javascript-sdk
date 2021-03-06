# Payment Link SDK for JavaScript

The Payment Link SDK for JavaScript enables you to easily work with Payment Link API of PayU by easily integrating this SDK within your base system.
With our SDK, you do not need to worry about low level details for doing API integration and with few lines of code and a function calling, it can be done within few minutes.

## Features Supported
Following features are supported in the Payment link JavaScript SDK:
 - Create Payment Link
 - Get Details of all Payment Links
 - Get Details of Specific Payment Link
 - Get Summary of all Payment Links Created by a Particular Merchant
 - Share Payment Link with end Customer via email or sms
 - Get list of all Transactions done against a particular Payment Link
 - Change Status or Expiry of a Payment Link

To get started with Payment Link, visit our [Developer Guide](https://devguide.payu.in/payment-links/payu-payment-links-api-integration)

# Table of Contents
 1. [Getting Started](#getting-started)
 2. [Installation](#installation)
 3. [Documentation for API Endpoints](#documentation-for-api-endpoints)
 4. [Documentation for Models](#documentation-for-models)
 5. [Documentation for Authorization](#documentation-for-authorization)

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var HubToken = require('hub_token');

var defaultClient = HubToken.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
var OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = "YOUR ACCESS TOKEN"

var api = new HubToken.PaymentLinkApi()
var id = "id_example"; // {String} 
var mid = "mid_example"; // {String} merchant identifier
var statusOrExpiryDTO = new HubToken.StatusOrExpiryDTO(); // {StatusOrExpiryDTO} 
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.changeStatusOrExpiry(id, mid, statusOrExpiryDTO, callback);

```
## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install hub_token --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your hub_token from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```
## Documentation for API Endpoints

All URIs are relative to *http://localhost:8087*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*HubToken.PaymentLinkApi* | [**changeStatusOrExpiry**](docs/PaymentLinkApi.md#changeStatusOrExpiry) | **PUT** /payment-links/{id} | change status and expiry for paymentLink 
*HubToken.PaymentLinkApi* | [**createPaymentLink**](docs/PaymentLinkApi.md#createPaymentLink) | **POST** /payment-links | Create PaymentLinks
*HubToken.PaymentLinkApi* | [**getAllPaymentLink**](docs/PaymentLinkApi.md#getAllPaymentLink) | **GET** /payment-links | Get all PaymentLinks
*HubToken.PaymentLinkApi* | [**getMerchantCustomAttributes**](docs/PaymentLinkApi.md#getMerchantCustomAttributes) | **GET** /payment-links/default-merchant-attributes | Get Custom Attributes
*HubToken.PaymentLinkApi* | [**getPaymentLinkTransactions**](docs/PaymentLinkApi.md#getPaymentLinkTransactions) | **GET** /payment-links/{id}/txns | Get Transaction details
*HubToken.PaymentLinkApi* | [**getSinglePaymentLink**](docs/PaymentLinkApi.md#getSinglePaymentLink) | **GET** /payment-links/{id} | Get Single PaymentLink
*HubToken.PaymentLinkApi* | [**sendPaymentLink**](docs/PaymentLinkApi.md#sendPaymentLink) | **POST** /payment-links/{id}/share | send PaymentLink
*HubToken.PaymentLinkApi* | [**summary**](docs/PaymentLinkApi.md#summary) | **GET** /payment-links/summary | Details of paymentlinks
*HubToken.TokenApi* | [**getToken**](docs/TokenApi.md#getToken) | **POST** /token | get Token


## Documentation for Models

 - [HubToken.AddressDTO](docs/AddressDTO.md)
 - [HubToken.ClientTokenDTO](docs/ClientTokenDTO.md)
 - [HubToken.CustomAttributeDTO](docs/CustomAttributeDTO.md)
 - [HubToken.CustomerDTO](docs/CustomerDTO.md)
 - [HubToken.PaymentLinkRequestDTO](docs/PaymentLinkRequestDTO.md)
 - [HubToken.ReminderDTO](docs/ReminderDTO.md)
 - [HubToken.ResultDTO](docs/ResultDTO.md)
 - [HubToken.StaticFieldDTO](docs/StaticFieldDTO.md)
 - [HubToken.StatusOrExpiryDTO](docs/StatusOrExpiryDTO.md)
 - [HubToken.UdfDTO](docs/UdfDTO.md)


## Documentation for Authorization



### OAuth2


- **Type**: OAuth
- **Flow**: application
- **Scopes**: 
  - read_payment_links: Grants read access
  - create_payment_links: Grants write access
  - update_payment_links: Grants update access

