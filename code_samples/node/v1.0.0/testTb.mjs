import { TBPlusSDK } from "@tatrabanka/tatrapayplus-node";

const API_KEY = "REPLACE FROM TB PORTAL";
const API_SECRET = "REPLACE FROM TB PORTAL";
const REDIRECT_URI = "REPLACE FROM TB PORTAL";
const sdk = new TBPlusSDK(API_KEY, API_SECRET, "192.0.2.123");
const { data } = await sdk.createPayment(
  {
    bankTransfer: {},
    basePayment: {
      endToEnd: "/VS0123456789/SS0123456789/KS123456",
      instructedAmount: {
        amountValue: 10,
        currency: "EUR",
      },
    },
  },
  REDIRECT_URI,
);
console.log(JSON.stringify(data));
