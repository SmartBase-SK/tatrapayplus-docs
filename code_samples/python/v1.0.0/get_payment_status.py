from tatrapayplus import TatrapayPlusClient

client = TatrapayPlusClient(
    "https://api.tatrabanka.sk/tatrapayplus/sandbox",
    "your-client-id",
    "your-client-secret",
    "https://your-return-url.com",
)
payment_status = tatrapay_client.get_payment_status(payment_id)