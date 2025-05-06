<?php
use Tatrapayplus\TatrapayplusApiClient\Api\TatraPayPlusAPIApi;
use Tatrapayplus\TatrapayplusApiClient\Model\CardPayUpdateInstruction;

$tatrapayplus_api = new TatraPayPlusAPIApi(
    "your-client-id",
    "your-client-secret",
);
$payment_id = 'b54afd37-5bb9-4080-9416-5ec450779087'; // Retrieved from initiatePayment
$chargeback_data = new CardPayUpdateInstruction([
    "operation_type" => CardPayUpdateInstruction::OPERATION_TYPE_CHARGEBACK,
    "amount" => 3.0,
]);

$response = $tatrapayplus_api->updatePaymentIntent($payment_id, $chargeback_data);