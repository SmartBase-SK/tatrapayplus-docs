const { data, error } = await sdk.createPayment(
  ...paymentData,
  REDIRECT_URI,
  // highlight-start
  "en",
  "BANK_TRANSFER",
  // highlight-end
);
