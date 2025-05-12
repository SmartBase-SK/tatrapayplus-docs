<?php
use Tatrapayplus\TatrapayplusApiClient\Api\TatraPayPlusAPIApi;

$tatrapayplus_api = new TatraPayPlusAPIApi(
    "your-client-id",
    "your-client-secret",
);

$initiate_payment_request = new Tatrapayplus\TatrapayplusApiClient\Model\InitiatePaymentRequest([
    "base_payment" => new Tatrapayplus\TatrapayplusApiClient\Model\BasePayment([
        "instructed_amount" => new Tatrapayplus\TatrapayplusApiClient\Model\Amount([
            "amount_value" => 10.0,
            "currency" => "EUR",
        ]),
        "end_to_end" => new Tatrapayplus\TatrapayplusApiClient\Model\E2e([
            "variable_symbol" => "1",
            "specific_symbol" => "2",
            "constant_symbol" => "3",
        ]),
    ]),
    "bank_transfer" => new Tatrapayplus\TatrapayplusApiClient\Model\BankTransfer(),
    "card_detail" => new Tatrapayplus\TatrapayplusApiClient\Model\CardDetail([
        "card_holder" => "Janko Hrasko",
        "is_pre_authorization" => true,
    ]),
]);

$response = $tatrapayplus_api->initiatePayment(
    "redirect uri",
    $initiate_payment_request,
);
$response["object"]->getPaymentId();