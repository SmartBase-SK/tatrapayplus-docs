import { TBPlusSDK } from "@tatrabanka/tatrapayplus-node"

const API_KEY = "<REPLACE FROM TB PORTAL>";
const API_SECRET = "<REPLACE FROM TB PORTAL>";
const sdk = new TBPlusSDK(
  API_KEY,
  API_SECRET,
  "192.0.2.123",
);
const availablePaymentMethods = await sdk.getAvailablePaymentMethods();
console.log(availablePaymentMethods);