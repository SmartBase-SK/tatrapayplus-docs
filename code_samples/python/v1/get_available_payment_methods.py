from tatrapayplus.client import TBPlusSDK

client = TBPlusSDK(
    "your-client-id",
    "your-client-secret",
)

# Get all available payment methods for this transaction
methods = client.get_available_payment_methods(currency_code="EUR", country_code="SK", total_amount=10)
