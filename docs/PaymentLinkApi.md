# HubToken.PaymentLinkApi

All URIs are relative to *http://localhost:8087*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changeStatusOrExpiry**](PaymentLinkApi.md#changeStatusOrExpiry) | **PUT** /payment-links/{id} | change status and expiry for paymentLink 
[**createPaymentLink**](PaymentLinkApi.md#createPaymentLink) | **POST** /payment-links | Create PaymentLinks
[**getAllPaymentLink**](PaymentLinkApi.md#getAllPaymentLink) | **GET** /payment-links | Get all PaymentLinks
[**getMerchantCustomAttributes**](PaymentLinkApi.md#getMerchantCustomAttributes) | **GET** /payment-links/default-merchant-attributes | Get Custom Attributes
[**getPaymentLinkTransactions**](PaymentLinkApi.md#getPaymentLinkTransactions) | **GET** /payment-links/{id}/txns | Get Transaction details
[**getSinglePaymentLink**](PaymentLinkApi.md#getSinglePaymentLink) | **GET** /payment-links/{id} | Get Single PaymentLink
[**sendPaymentLink**](PaymentLinkApi.md#sendPaymentLink) | **POST** /payment-links/{id}/share | send PaymentLink
[**summary**](PaymentLinkApi.md#summary) | **GET** /payment-links/summary | Details of paymentlinks



## changeStatusOrExpiry

> ResultDTO changeStatusOrExpiry(id, mid, statusOrExpiryDTO)

change status and expiry for paymentLink 

### Example

```javascript
import HubToken from 'hub_token';
let defaultClient = HubToken.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HubToken.PaymentLinkApi();
let id = "id_example"; // String | 
let mid = "mid_example"; // String | merchant identifier
let statusOrExpiryDTO = new HubToken.StatusOrExpiryDTO(); // StatusOrExpiryDTO | 
apiInstance.changeStatusOrExpiry(id, mid, statusOrExpiryDTO, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **mid** | **String**| merchant identifier | 
 **statusOrExpiryDTO** | [**StatusOrExpiryDTO**](StatusOrExpiryDTO.md)|  | 

### Return type

[**ResultDTO**](ResultDTO.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createPaymentLink

> ResultDTO createPaymentLink(mid, paymentLinkRequestDTO)

Create PaymentLinks

create single payment link

### Example

```javascript
import HubToken from 'hub_token';
let defaultClient = HubToken.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HubToken.PaymentLinkApi();
let mid = "mid_example"; // String | merchant identifier
let paymentLinkRequestDTO = new HubToken.PaymentLinkRequestDTO(); // PaymentLinkRequestDTO | 
apiInstance.createPaymentLink(mid, paymentLinkRequestDTO, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| merchant identifier | 
 **paymentLinkRequestDTO** | [**PaymentLinkRequestDTO**](PaymentLinkRequestDTO.md)|  | 

### Return type

[**ResultDTO**](ResultDTO.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getAllPaymentLink

> ResultDTO getAllPaymentLink(dateFrom, dateTo, mid, opts)

Get all PaymentLinks

### Example

```javascript
import HubToken from 'hub_token';
let defaultClient = HubToken.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HubToken.PaymentLinkApi();
let dateFrom = "dateFrom_example"; // String | 
let dateTo = "dateTo_example"; // String | 
let mid = "mid_example"; // String | merchant identifier
let opts = {
  'pageOffset': 0, // Number | 
  'pageSize': 20, // Number | 
  'orderBy': "'addedOn'", // String | 
  'order': "'asc'", // String | 
  'searchText': "searchText_example", // String | 
  'status': ["null"] // [String] | 
};
apiInstance.getAllPaymentLink(dateFrom, dateTo, mid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dateFrom** | **String**|  | 
 **dateTo** | **String**|  | 
 **mid** | **String**| merchant identifier | 
 **pageOffset** | **Number**|  | [optional] [default to 0]
 **pageSize** | **Number**|  | [optional] [default to 20]
 **orderBy** | **String**|  | [optional] [default to &#39;addedOn&#39;]
 **order** | **String**|  | [optional] [default to &#39;asc&#39;]
 **searchText** | **String**|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ResultDTO**](ResultDTO.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getMerchantCustomAttributes

> ResultDTO getMerchantCustomAttributes(mid)

Get Custom Attributes

### Example

```javascript
import HubToken from 'hub_token';
let defaultClient = HubToken.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HubToken.PaymentLinkApi();
let mid = "mid_example"; // String | merchant identifier
apiInstance.getMerchantCustomAttributes(mid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| merchant identifier | 

### Return type

[**ResultDTO**](ResultDTO.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPaymentLinkTransactions

> ResultDTO getPaymentLinkTransactions(dateFrom, dateTo, id, mid, opts)

Get Transaction details

### Example

```javascript
import HubToken from 'hub_token';
let defaultClient = HubToken.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HubToken.PaymentLinkApi();
let dateFrom = "dateFrom_example"; // String | 
let dateTo = "dateTo_example"; // String | 
let id = "id_example"; // String | 
let mid = "mid_example"; // String | merchant identifier
let opts = {
  'pageOffset': 0, // Number | 
  'pageSize': 20, // Number | 
  'orderBy': "'addedOn'", // String | 
  'order': "'asc'", // String | 
  'searchText': "searchText_example", // String | 
  'searchTerm': "searchTerm_example", // String | 
  'status': ["null"] // [String] | 
};
apiInstance.getPaymentLinkTransactions(dateFrom, dateTo, id, mid, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **dateFrom** | **String**|  | 
 **dateTo** | **String**|  | 
 **id** | **String**|  | 
 **mid** | **String**| merchant identifier | 
 **pageOffset** | **Number**|  | [optional] [default to 0]
 **pageSize** | **Number**|  | [optional] [default to 20]
 **orderBy** | **String**|  | [optional] [default to &#39;addedOn&#39;]
 **order** | **String**|  | [optional] [default to &#39;asc&#39;]
 **searchText** | **String**|  | [optional] 
 **searchTerm** | **String**|  | [optional] 
 **status** | [**[String]**](String.md)|  | [optional] 

### Return type

[**ResultDTO**](ResultDTO.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getSinglePaymentLink

> ResultDTO getSinglePaymentLink(id, mid)

Get Single PaymentLink

### Example

```javascript
import HubToken from 'hub_token';
let defaultClient = HubToken.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HubToken.PaymentLinkApi();
let id = "id_example"; // String | 
let mid = "mid_example"; // String | merchant identifier
apiInstance.getSinglePaymentLink(id, mid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **mid** | **String**| merchant identifier | 

### Return type

[**ResultDTO**](ResultDTO.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## sendPaymentLink

> ResultDTO sendPaymentLink(channelList, id, mid)

send PaymentLink

### Example

```javascript
import HubToken from 'hub_token';
let defaultClient = HubToken.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HubToken.PaymentLinkApi();
let channelList = ["null"]; // [String] | 
let id = "id_example"; // String | 
let mid = "mid_example"; // String | merchant identifier
apiInstance.sendPaymentLink(channelList, id, mid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channelList** | [**[String]**](String.md)|  | 
 **id** | **String**|  | 
 **mid** | **String**| merchant identifier | 

### Return type

[**ResultDTO**](ResultDTO.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## summary

> ResultDTO summary(mid)

Details of paymentlinks

### Example

```javascript
import HubToken from 'hub_token';
let defaultClient = HubToken.ApiClient.instance;
// Configure OAuth2 access token for authorization: OAuth2
let OAuth2 = defaultClient.authentications['OAuth2'];
OAuth2.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new HubToken.PaymentLinkApi();
let mid = "mid_example"; // String | merchant identifier
apiInstance.summary(mid, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **mid** | **String**| merchant identifier | 

### Return type

[**ResultDTO**](ResultDTO.md)

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

