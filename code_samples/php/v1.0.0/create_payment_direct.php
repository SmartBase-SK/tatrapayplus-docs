<?php
use Tatrapayplus\TatrapayplusApiClient\Api\TatraPayPlusAPIApi;

$tatrapayplus_api = new TatraPayPlusAPIApi(
    "your-client-id",
    "your-client-secret",
);

$initiate_transaction_request = new Tatrapayplus\TatrapayplusApiClient\Model\InitiateDirectTransactionRequest([
    "amount" => new Tatrapayplus\TatrapayplusApiClient\Model\Amount([
        "amount_value" => 10,
        "currency" => "EUR",
    ]),
    "is_pre_authorization" => true,
    "end_to_end" => new Tatrapayplus\TatrapayplusApiClient\Model\E2e([
        "variable_symbol" => "123",
    ]),
    "tds_data" => new Tatrapayplus\TatrapayplusApiClient\Model\DirectTransactionTDSData([
        "card_holder" => "Janko Hraško",
        "email" => "janko.hrasko@example.com",
    ]),
    "ipsp_data" => new Tatrapayplus\TatrapayplusApiClient\Model\DirectTransactionIPSPData([
        "sub_merchant_id" => "12345",
        "name" => "Test 123",
        "location" => "Test 123",
        "country" => "SK",
    ]),
    "token" => new Tatrapayplus\TatrapayplusApiClient\Model\Token([
        "google_pay_token" => "ABC12345"
    ]),
]);

$response = $tatrapayplus_api->initiateDirectTransaction(
    "redirect uri",
    $initiate_transaction_request,
);

$response["object"]->getPaymentId(); // newly created payment ID
$response["object"]->getRedirectFormHtml(); // HTML form