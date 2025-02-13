# Getting started

To be able to use and test payment gateway you need to have **Client ID** and **Client secret** from [TB developer portal](https://developer.tatrabanka.sk/).

# Installation

To install API client you need to install `tatrapayplus-node` package.
```npm
npm install tatrapayplus-node
```

# Test installation

You can test your installation with this minimal working setup.

1. If you haven’t already, create an Account and Application in [TB developer portal](https://developer.tatrabanka.sk/).
2. Copy the following code into a new file `test_tb.mjs`. Replace API_KEY, API_SECRET and REDIRECT_URI with values from your account.
    ```javascript
    import { TBPlusSDK } from "tatrapayplus-node";
   
    const API_KEY = "<REPLACE FROM TB PORTAL>";
    const API_SECRET = "<REPLACE FROM TB PORTAL>";
    const REDIRECT_URI = "<REPLACE FROM TB PORTAL>";
    const sdk = new TBPlusSDK(
      API_KEY,
      API_SECRET,
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
    console.log(JSON.stringify(data))
    ```
3. Run: `node test_tb.mjs`
4. If the command is successful, you’ll see the API response in JSON format like this:
    ```json
    {
        "paymentId": "fcdab2d3-f471-4434-8834-df3cebdab03d",
        "tatraPayPlusUrl": "https://api.tatrabanka.sk/tatrapayplus/sandbox/v1/auth?paymentId=xxxx&client_id=xxxx&hmac=xxxx",
        "availablePaymentMethods": [
            {
                "isAvailable": true,
                "paymentMethod": "CARD_PAY"
            },
            {
                "isAvailable": true,
                "paymentMethod": "PAY_LATER"
            },
            {
                "isAvailable": true,
                "paymentMethod": "BANK_TRANSFER"
            },
            {
                "isAvailable": true,
                "paymentMethod": "QR_PAY"
            }
        ]
    }
    ```
5. You can copy and paste `tatraPayPlusUrl` to you preferred browser, and you should see Tatrapay+ payment gateway. 🎉


