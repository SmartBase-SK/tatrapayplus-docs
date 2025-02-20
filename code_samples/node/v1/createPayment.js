import { TBPlusSDK } from "@tatrabanka/tatrapayplus-node"

const API_KEY = "<REPLACE FROM TB PORTAL>"
const API_SECRET = "<REPLACE FROM TB PORTAL>"
const REDIRECT_URI = "<REPLACE FROM TB PORTAL>"
const sdk = new TBPlusSDK(
  API_KEY,
  API_SECRET,
  "192.0.2.123",
)
const availablePaymentMethods = await sdk.createPayment({
  bankTransfer: {},
  payLater: {
    order: {
      orderNo: "132456",
      orderItems: [
        {
          itemDetail: {
            itemDetailSK: {
              itemName: "Jablko",
            },
          },
          quantity: 1,
          totalItemPrice: 10000,
        },
      ],
    },
  },
  userData: {
    firstName: "Jozko",
    lastName: "Hruska",
    phone: "+421911123456",
  },
  cardDetail: {
    cardHolder: "Jozko Hruska",
  },
  basePayment: {
    endToEnd: "/VS0123456789/SS0123456789/KS123456",
    instructedAmount: {
      amountValue: 10000,
      currency: "EUR",
    },
  },
}, REDIRECT_URI)
console.log(availablePaymentMethods)