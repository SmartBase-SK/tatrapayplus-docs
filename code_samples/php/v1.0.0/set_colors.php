<?php
use Tatrapayplus\TatrapayplusApiClient\Api\TatraPayPlusAPIApi;
use Tatrapayplus\TatrapayplusApiClient\Model\AppearanceRequest;
use Tatrapayplus\TatrapayplusApiClient\Model\ColorAttribute;

$tatrapayplus_api = new TatraPayPlusAPIApi(
    "your-client-id",
    "your-client-secret",
);
$appearance_request = new AppearanceRequest([
    "theme" => AppearanceRequest::THEME_SYSTEM,
    "tint_on_accent" => new ColorAttribute([
        "color_dark_mode" => "#fff",
        "color_light_mode" => "#fff",
    ]),
    "tint_accent" => new ColorAttribute([
        "color_dark_mode" => "#fff",
        "color_light_mode" => "#fff",
    ]),
    "surface_accent" => new ColorAttribute([
        "color_dark_mode" => "#fff",
        "color_light_mode" => "#fff",
    ]),
]);

$response = $tatrapayplus_api->setAppearance($appearance_request);