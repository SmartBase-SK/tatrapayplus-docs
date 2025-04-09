from tatrapayplus import TatrapayPlusClient
from tatrapayplus.models import *

payment_data = InitiateDirectTransactionRequest(
    amount=Amount(
        amount_value=30.0,
        currency="EUR",
    ),
    end_to_end=PaymentSymbols(
        variable_symbol="123456",
        specific_symbol="0244763",
        constant_symbol="389",
    ),
    tds_data=DirectTransactionTDSData(
        card_holder="Janko Hruska",
        email="janko.hruska@example.com",
        phone="+421900000000",
        billing_address=Address(
            street_name="Ulica",
            building_number="35",
            town_name="Bratislava",
            post_code="81101",
            country="SK",
        ),
        shipping_address=Address(
            street_name="Ulica",
            building_number="35",
            town_name="Bratislava",
            post_code="81101",
            country="SK",
        ),
    ),
    ipsp_data=DirectTransactionIPSPData(
        sub_merchant_id="5846864684",
        name="Test Predajca",
        location="Bratislava",
        country="SK",
    ),
    token=ApplePayToken(
        token=ApplePayTokenToken(
            header=ApplePayTokenTokenHeader(
                ephemeral_public_key="MFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAELAfD...",
                public_key_hash="LjAAyv6vb6jOEkjfG7L1a5OR2uCTHIkB61DaYdEWD",
                transaction_id="0c4352c073ad460044517596dbbf8fe503a837138c8c2de18fddb37ca3ec5295",
            ),
            data="M8i9PNK4yXtKO3xmOn6uyYOWmQ+iX9...",
            signature="bNEa18hOrgG/oFk/o0CtYR01vhm+34RbStas1T+tkFLpP0eG5A+...",
            version="EC_v1",
        )
    ),
)

client.create_payment_direct(payment_data)