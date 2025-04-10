from tatrapayplus import TatrapayPlusClient
from tatrapayplus.models import *

client = TatrapayPlusClient(
    "https://api.tatrabanka.sk/tatrapayplus/sandbox",
    "your-client-id",
    "your-client-secret",
    "https://your-return-url.com",
)
payment_id= "b54afd37-5bb9-4080-9416-5ec450779087"
update_data = CardPayUpdateInstruction(
        operation_type=CardPayUpdateInstructionOperationType.CHARGEBACK,
        amount=120,
    )
update_response = client.update_payment(payment_id, update_data)

