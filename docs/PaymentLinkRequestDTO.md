# HubToken.PaymentLinkRequestDTO

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoiceNumber** | **String** | It is used for identifying a payment link. This must be alphanumeric. | [optional] 
**isAmountFilledByCustomer** | **Boolean** | This parameter contains any of the following values to specify whether it is an open invoices (when customer fills amount) or fixed amount  true-It is an open invoice where the customer can fill the amount. The subamount parameter must be null in this case  false-It is closed invoice and amount is fixed | [optional] 
**subAmount** | **Number** | Payment Amount.The value must be greater than or equal to 1 | [optional] 
**tax** | **Number** |  tax amount for the payment transaction. This value must be greater than zero. | [optional] 
**shippingCharge** | **Number** |  shipping charges for delivering the goods. This value must be greater than zero. | [optional] 
**minAmountForCustomer** | **Number** |  minimum amount a customer needs to pay in case of partial payment. | [optional] 
**discount** | **Number** |  | [optional] 
**adjustment** | **Number** |  | [optional] 
**smsConfirm** | **String** |  | [optional] 
**description** | **String** | description or purpose of creating the.payment link. | 
**source** | **String** | source of payment generation. | 
**isPartialPaymentAllowed** | **Boolean** |  | [optional] 
**currency** | **String** | currency details | [optional] 
**maxPaymentsAllowed** | **Number** |  | [optional] 
**batchId** | **String** |  | [optional] 
**expiryDate** | **String** | expiry date of the payment link (will be 365 days in all other cases). | [optional] 
**scheduledFor** | **String** |  | [optional] 
**viaEmail** | **Boolean** | specify whether to directly send an email to customer upon payment link generation or late | [optional] 
**viaSms** | **Boolean** | specify whether to directly send as SMS to customer upon payment link generation or later | [optional] 
**customer** | [**CustomerDTO**](CustomerDTO.md) |  | [optional] 
**udf** | [**UdfDTO**](UdfDTO.md) |  | [optional] 
**address** | [**AddressDTO**](AddressDTO.md) |  | [optional] 
**emailTemplateName** | **String** |  | [optional] 
**smsTemplateName** | **String** |  | [optional] 
**validationPeriod** | **String** |  | [optional] 
**timeUnit** | **String** |  | [optional] 
**notes** | **String** |  | [optional] 
**successURL** | **String** |  | [optional] 
**failureURL** | **String** |  | [optional] 
**reminder** | [**ReminderDTO**](ReminderDTO.md) |  | [optional] 
**customAttributes** | [**[CustomAttributeDTO]**](CustomAttributeDTO.md) |  | [optional] 
**dropCategory** | **String** |  | [optional] 
**enforcePayMethod** | **String** |  | [optional] 


