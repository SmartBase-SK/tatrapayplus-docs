const {data: availablePaymentMethods} = await sdk.getAvailablePaymentMethods(
  {
    countryCode: "HU",
    totalAmount: 50,
    currencyCode: "USD",
  },
);

// If you want to get all payment methods you can call it without restrictions:
const {data: availablePaymentMethods} = await sdk.getAvailablePaymentMethods();