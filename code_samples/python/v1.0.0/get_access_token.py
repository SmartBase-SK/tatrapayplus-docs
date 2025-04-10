from tatrapayplus import TatrapayPlusClient

client = TatrapayPlusClient(
    "https://api.tatrabanka.sk/tatrapayplus/sandbox",
    "your-client-id",
    "your-client-secret",
    "https://your-return-url.com",
)

access_token = client.get_access_token() # Returns TatrapayPlusToken instance

