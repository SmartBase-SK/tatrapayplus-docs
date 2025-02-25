const availablePaymentMethods = await sdk.createPayment(
  {
    userData: {
      firstName: "Jozko",
      lastName: "Hruska",
      phone: "+421911123456",
    },
    cardDetail: {
      cardHolder: "Jozko Hruska",
      // highlight-start
      isPreAuthorization: true,
      // highlight-end
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
