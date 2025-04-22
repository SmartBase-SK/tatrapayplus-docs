from tatrapayplus import TatrapayPlusClient

client = TatrapayPlusClient(
    "your-client-id",
    "your-client-secret",
)
payment_id = "b54afd37-5bb9-4080-9416-5ec450779087"  # Retrieved from create payment intent
payment_status = client.get_payment_status(payment_id)
