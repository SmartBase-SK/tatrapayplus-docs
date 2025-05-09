<?php
use Tatrapayplus\TatrapayplusApiClient\Api\TatraPayPlusAPIApi;
use Tatrapayplus\TatrapayplusApiClient\Model\CardPayUpdateInstruction;

$tatrapayplus_api = new TatraPayPlusAPIApi(
    "your-client-id",
    "your-client-secret",
);
$payment_id = 'b54afd37-5bb9-4080-9416-5ec450779087'; // Retrieved from initiatePayment

$pre_authorization_data = new CardPayUpdateInstruction([
    "operation_type" => CardPayUpdateInstruction::OPERATION_TYPE_CANCEL_PRE_AUTHORIZATION,
]);
$response = $tatrapayplus_api->updatePaymentIntent($payment_id, $pre_authorization_data);

// or

$pre_authorization_data = new CardPayUpdateInstruction([
    "operation_type" => CardPayUpdateInstruction::OPERATION_TYPE_CONFIRM_PRE_AUTHORIZATION,
]);
$response = $tatrapayplus_api->updatePaymentIntent($payment_id, $pre_authorization_data);