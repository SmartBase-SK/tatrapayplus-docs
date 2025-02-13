import { TBPlusSDK } from "tatrapayplus-node"

const API_KEY = "<REPLACE FROM TB PORTAL>";
const API_SECRET = "<REPLACE FROM TB PORTAL>";
const sdk = new TBPlusSDK(
  API_KEY,
  API_SECRET,
);
const availablePaymentMethods = await sdk.getAvailablePaymentMethods();
console.log(availablePaymentMethods);