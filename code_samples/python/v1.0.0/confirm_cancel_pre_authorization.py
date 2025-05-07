from tatrapayplus import TBPlusSDK
from tatrapayplus.models import *

client = TBPlusSDK(
    "your-client-id",
    "your-client-secret"
)
payment_id = "b54afd37-5bb9-4080-9416-5ec450779087"
cancel_pre_authorization_data = CardPayUpdateInstruction(
    operation_type=CardPayUpdateInstructionOperationType.CANCEL_PRE_AUTHORIZATION,
)
chargeback_response = client.update_payment(payment_id, cancel_pre_authorization_data)

# or

cancel_pre_authorization_data = CardPayUpdateInstruction(
    operation_type=CardPayUpdateInstructionOperationType.CONFIRM_PRE_AUTHORIZATION,
)
chargeback_response = client.update_payment(payment_id, cancel_pre_authorization_data)
