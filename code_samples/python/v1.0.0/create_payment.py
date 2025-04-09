from tatrapayplus import TatrapayPlusClient
from tatrapayplus.models import *
from tatrapayplus.models.amount import Amount
from tatrapayplus.models.base_payment import BasePayment
from tatrapayplus.models.initiate_payment_request import InitiatePaymentRequest

client = TatrapayPlusClient(
    "https://api.tatrabanka.sk/tatrapayplus/sandbox",
    "your-client-id",
    "your-client-secret",
    "https://your-redirect-uri.com"
)

payment_data = InitiatePaymentRequest(
    base_payment=BasePayment(
        instructed_amount=Amount(
            amount_value=120.0,
            currency="EUR",
        ),
        end_to_end="ORDER123456",
    ),
    bank_transfer=BankTransfer(),
)

response = client.create_payment(payment_data)
