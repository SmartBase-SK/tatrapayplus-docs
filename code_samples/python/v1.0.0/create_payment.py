from tatrapayplus import TBPlusSDK
from tatrapayplus.models import *

client = TBPlusSDK(
    "your-client-id",
    "your-client-secret",
)

payment_data = InitiatePaymentRequest(
    base_payment=BasePayment(
        instructed_amount=Amount(
            amount_value=10.0,
            currency="EUR",
        ),
        end_to_end="ORDER123456",
    ),
    bank_transfer=BankTransfer(),
    pay_later=PayLater(
        order=Order(
            order_no="ORDER123456",
            order_items=[
                OrderItem(
                    quantity=1,
                    total_item_price=10.0,
                    item_detail=ItemDetail(
                        item_detail_sk=ItemDetailLangUnit(
                            item_name="Testovací produkt",
                            item_description="Popis produktu",
                        ),
                        item_detail_en=ItemDetailLangUnit(
                            item_name="Test Product",
                            item_description="Product description",
                        ),
                    ),
                )
            ],
        ),
    ),
    card_detail=CardDetail(
        card_holder="Janko Hruška",
    ),
    user_data=UserData(
        first_name="Janko",
        last_name="Hruska",
        email="janko.hruska@example.com",
    ),
)

response = client.create_payment(payment_data, "https://your-redirect-uri.com", "127.0.0.1")
