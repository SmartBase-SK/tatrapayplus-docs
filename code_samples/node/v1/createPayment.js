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
  },
  REDIRECT_URI,
);
