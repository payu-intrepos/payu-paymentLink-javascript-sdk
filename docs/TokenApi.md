# HubToken.TokenApi

All URIs are relative to *http://localhost:8087*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getToken**](TokenApi.md#getToken) | **POST** /token | get Token



## getToken

> String getToken(mid, clientTokenDTO)

get Token

Get token

### Example

```javascript
import HubToken from 'hub_token';
let defaultClient = HubToken.ApiClient.instance;
let apiInstance = new HubToken.TokenApi();
let mid = "mid_example"; // String | merchant identifier
let clientTokenDTO = new HubToken.ClientTokenDTO(); // ClientTokenDTO | 
apiInstance.getToken(mid, clientTokenDTO, (error, data, response) => {
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
 **clientTokenDTO** | [**ClientTokenDTO**](ClientTokenDTO.md)|  | 

### Return type

**String**

### Authorization

[OAuth2](../README.md#OAuth2)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

