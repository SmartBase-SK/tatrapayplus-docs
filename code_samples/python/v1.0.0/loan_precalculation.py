from tatrapayplus.client import TBPlusSDK
from tatrapayplus.models import *

tatrapay_client = TBPlusSDK(
    client_id="your-client-id",
    client_secret="your-client-secret",
    mode=Mode.PRODUCTION,
)

loan_data = BasicCalculationRequest(
    loan_amount=250.45,
    payment_method=BasicCalculationRequestPaymentMethod.PAY_LATER,
    capacity_info=CapacityInfo(  # not required
        monthly_income=2000.0,
        monthly_expenses=800.0,
        number_of_children=1,
    )
)

loan_offers = tatrapay_client.precalculate_loan(
    request=loan_data,
    ip_address="127.0.0.1",
)

for loan_offer in loan_offers:
    # loan_offer = BasicCalculationResponseItem object
    print(loan_offer.loan_duration)
    print(loan_offer.loan_interest_rate)
    # ...