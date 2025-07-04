<?php
use Tatrapayplus\TatrapayplusApiClient\Api\TatraPayPlusAPIApi;

$tatrapayplus_api = new TatraPayPlusAPIApi(
    "your-client-id",
    "your-client-secret",
);

$response = $tatrapayplus_api->token('client_credentials', "your-client-id", "your-client-id", 'TATRAPAYPLUS');