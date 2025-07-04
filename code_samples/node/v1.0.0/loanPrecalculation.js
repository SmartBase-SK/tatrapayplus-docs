import { TBPlusSDK, GatewayMode, PaymentMethod } from "@tatrabanka/tatrapayplus-node";

const sdk = new TBPlusSDK(
  "API_KEY",
  "API_SECRET",
  {mode: GatewayMode.PRODUCTION},
);

const { data, error } = await sdk.precalculateLoan(
  {
    paymentMethod: PaymentMethod.PAY_LATER,
    loanAmount: 250.45,
    capacityInfo: {
      monthlyIncome: 2000,
      monthlyExpenses: 800,
      numberOfChildren: 0,
    },
  },
  "127.0.0.1",
);

// handle response
for (const item of data) {
  // item.mainPreference
  // item.loanInterestRate
  // ...
}