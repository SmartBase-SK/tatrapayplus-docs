from tatrapayplus import TatrapayPlusClient, PaymentMethod

client = TatrapayPlusClient(
    "https://api.tatrabanka.sk/tatrapayplus/sandbox",
    "your-client-id",
    "your-client-secret",
    "https://your-return-url.com",
)

# Get all available payment methods for this transaction
methods = client.get_available_payment_methods(currency_code="EUR", country_code="SK", total_amount=10)
