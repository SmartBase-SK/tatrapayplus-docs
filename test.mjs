const API_KEY = 'l7afa29fd80deb492bacb44c0adecaf3cc';
const API_SECRET = '0fd911e10c7e4702b7446507e88dcae5';
const REDIRECT_URI = 'https://tatrabanka.sk/wc-api/wc_gateway_tatrapayplus/';
const sdk = new TBPlusSDK(
  API_KEY,
  API_SECRET,
  "192.0.2.123"
);
const { data, error } = await sdk.createPayment(
  {
    bankTransfer: {},
    basePayment: {
      endToEnd: "test",
      instructedAmount: {
        amountValue: 10,
        currency: "EUR",
      },
    },
  },
  REDIRECT_URI,
);