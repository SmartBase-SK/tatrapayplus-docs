from tatrapayplus import TatrapayPlusClient
from tatrapayplus.models import *

client = TatrapayPlusClient(
    "https://api.tatrabanka.sk/tatrapayplus/sandbox",
    "your-client-id",
    "your-client-secret",
    "https://your-return-url.com",
)
payment_id= "b54afd37-5bb9-4080-9416-5ec450779087"
cancel_pre_authorization_data = CardPayUpdateInstruction(
        operation_type=CardPayUpdateInstructionOperationType.CANCEL_PRE_AUTHORIZATION,
    )
chargeback_response = client.update_payment(payment_id, cancel_pre_authorization_data)

# or

cancel_pre_authorization_data = CardPayUpdateInstruction(
        operation_type=CardPayUpdateInstructionOperationType.CONFIRM_PRE_AUTHORIZATION,
    )
chargeback_response = client.update_payment(payment_id, cancel_pre_authorization_data)
