<?php
use Tatrapayplus\TatrapayplusApiClient\Api\TatraPayPlusAPIApi;
use Tatrapayplus\TatrapayplusApiClient\Model\AppearanceLogoRequest;

$tatrapayplus_api = new TatraPayPlusAPIApi(
    "your-client-id",
    "your-client-secret",
);
$logo_request = new AppearanceLogoRequest([
    "logo_image" => "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
]);

$response = $tatrapayplus_api->setLogo($logo_request);