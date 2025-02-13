# Getting available methods

In this payment gateway, user will select preferred payment option directly in payment gateway and **NOT in eshop**.
Therefor you want to inform customer about available payment methods and show different text or image based on certain conditions like:
- currency
- total amount
- country

For this purpose you can retrieve available payment methods with this helper:
```javascript
const availablePaymentMethods = await sdk.getAvailablePaymentMethods(
  {
    countryCode: "HU", 
    totalAmount: 50,
    currencyCode: "USD",
  },
);
```

If you want to get all payment methods you can call it without restrictions:
```javascript
const availablePaymentMethods = await sdk.getAvailablePaymentMethods();
```

Based on response from these functions you should display info to the user about available methods, 
and then you should create payment and show payment gateway to the user.