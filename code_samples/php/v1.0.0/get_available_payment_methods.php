<?php
use Tatrapayplus\TatrapayplusApiClient\Api\TatraPayPlusAPIApi;

$tatrapayplus_api = new TatraPayPlusAPIApi(
    "your-client-id",
    "your-client-secret",
);

$available_methods = $tatrapayplus_api->getAvailableMethods(
    total_amount: 100,
    currency: "EUR",
    country: "SK"
);