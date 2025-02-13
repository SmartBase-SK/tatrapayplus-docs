# Create payment

```javascript
const sdk = new TBPlusSDK(
  process.env.API_KEY as string,
  process.env.API_SECRET as string,
);
const { data, error } = await sdk.createPayment(
  {
    bankTransfer: {},
    payLater: {
      order: {
        orderNo: "132456",
        orderItems: [
          {
            itemDetail: {
              itemDetailSK: {
                itemName: "test",
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
      endToEnd: "test",
      instructedAmount: {
        amountValue: 10000,
        currency: "EUR",
      },
    },
  },
  REDIRECT_URI,
);
```