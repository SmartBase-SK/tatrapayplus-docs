from tatrapayplus import TBPlusSDK

client = TBPlusSDK(
    "your-client-id",
    "your-client-secret"
)
payment_id = "b54afd37-5bb9-4080-9416-5ec450779087"  # Retrieved from create payment intent
cancel_payment_response = client.cancel_payment(payment_id)


