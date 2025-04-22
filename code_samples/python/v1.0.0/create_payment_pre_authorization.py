from tatrapayplus import TatrapayPlusClient
from tatrapayplus.models import *

client = TatrapayPlusClient(
    "your-client-id",
    "your-client-secret",
)

payment_data = InitiatePaymentRequest(
    base_payment=BasePayment(
        instructed_amount=Amount(
            amount_value=120.0,
            currency="EUR",
        ),
        end_to_end="ORDER123456",
    ),
    card_detail=CardDetail(
        is_pre_authorization=True,
        card_holder="Janko Hruska",
    ),
    bank_transfer=BankTransfer(),
)

response = client.create_payment(payment_data, "https://your-redirect-uri.com", "127.0.0.1")
