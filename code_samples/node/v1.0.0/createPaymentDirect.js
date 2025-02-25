const createPaymentDirect = await sdk.createPaymentDirect({
  amount: {
    amountValue: 30,
    currency: "EUR",
  },
  endToEnd: {
    variableSymbol: "123456",
    specificSymbol: "0244763",
    constantSymbol: "389",
  },
  isPreAuthorization: true,
  tdsData: {
    cardHolder: " U5t4K7WgIgzxf9rgxt5@g4E54LhLOf@fJ",
    email: "user@example.com",
    phone: "+20912900552",
    billingAddress: {
      streetName: "Testerská",
      buildingNumber: "35",
      townName: "Bratislava",
      postCode: "85104",
      country: "SK",
    },
    shippingAddress: {
      streetName: "Testerská",
      buildingNumber: "35",
      townName: "Bratislava",
      postCode: "85104",
      country: "SK",
    },
  },
  ipspData: {
    subMerchantId: "5846864684",
    name: "CI1uskknSOUXs4@mJ",
    location: "96A6Mrz",
    country: "SE",
  },
  token: {
    token: {
      header: {
        ephemeralPublicKey:
          "MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAELAfD ie0Ie1TxCcrFt69BzcQ52+F+Fhm5mDw6pMR54AzoFMgdGPRbqoLtFpoSe0FI/m0cqRMOVM2W4Bz9jVZZHA==",
        publicKeyHash: "LjAAyv6vb6jOEkjfG7L1a5OR2uCTHIkB61DaYdEWD",
        transactionId:
          "0c4352c073ad460044517596dbbf8fe503a837138c8c2de18fddb37ca3ec5295",
      },
      data: "M8i9PNK4yXtKO3xmOn6uyYOWmQ+iX9/Oc0EWHJZnPZ/IAEe2UYNCfely3dgq3veEygmQcl0s8lvMeCIZAbbBvbZW...",
      signature: "bNEa18hOrgG/oFk/o0CtYR01vhm+34RbStas1T+tkFLpP0eG5A+...",
      version: "EC_v1",
    },
  },
});
console.log(createPaymentDirect);
