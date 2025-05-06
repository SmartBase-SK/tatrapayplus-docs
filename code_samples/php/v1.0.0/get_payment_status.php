<?php
use Tatrapayplus\TatrapayplusApiClient\Api\TatraPayPlusAPIApi;

$tatrapayplus_api = new TatraPayPlusAPIApi(
    "your-client-id",
    "your-client-secret",
);
$payment_id = 'b54afd37-5bb9-4080-9416-5ec450779087'; // Retrieved from initiatePayment

$response = $tatrapayplus_api->getPaymentIntentStatus($payment_id);

$response_obj = $response['object'];
$simple_status = $response_obj->getSimpleStatus();
$status = $response_obj->getStatus();
$payment_method = $response_obj->getSelectedPaymentMethod();
$authorization_status = $response_obj->getAuthorizationStatus();