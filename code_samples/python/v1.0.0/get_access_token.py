from tatrapayplus import TatrapayPlusClient

client = TatrapayPlusClient(
    "your-client-id",
    "your-client-secret",
)

access_token = client.get_access_token()  # Returns TatrapayPlusToken instance

