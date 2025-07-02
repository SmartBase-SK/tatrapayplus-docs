<?php
use Tatrapayplus\TatrapayplusApiClient\Api\TatraPayPlusAPIApi;
use Tatrapayplus\TatrapayplusApiClient\Model\PaymentMethod;
use Tatrapayplus\TatrapayplusApiClient\Model\BasicCalculationRequest;
use Tatrapayplus\TatrapayplusApiClient\Model\CapacityInfo;

$tatrapayplus_api = new TatraPayPlusAPIApi(
    "your-client-id",
    "your-client-secret",
    mode: TatraPayPlusAPIApi::PRODUCTION
);
$request = new BasicCalculationRequest([
    "payment_method" => PaymentMethod::PAY_LATER,
    "loan_amount" => 150.45,
    "capacity_info" => new CapacityInfo([ // not required
        "monthly_income" => 0,
        "monthly_expenses" => 0,
        "number_of_children" => 0
    ])
]);

$response = $tatrapayplus_api->loanPrecalculation($request);

$response["response"]->getStatusCode(); // 200 = success

$response_list = $response['object']; // contains a list of BasicCalculationResponseItem objects
foreach ($response_list as $item) {
    $item->getLoanInterestRate();
    $item->getLoanDuration();
    // ....
}