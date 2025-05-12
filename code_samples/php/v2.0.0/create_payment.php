<?php
use Tatrapayplus\TatrapayplusApiClient\Api\TatraPayPlusAPIApi;

$tatrapayplus_api = new TatraPayPlusAPIApi(
    "your-client-id",
    "your-client-secret",
);

$address = new Tatrapayplus\TatrapayplusApiClient\Model\Address([
    "street_name" => "TestStreet",
    "building_number" => "12",
    "town_name" => "Town",
    "post_code" => "97405",
    "country" => "SK",
]);
$initiate_payment_request = new Tatrapayplus\TatrapayplusApiClient\Model\InitiatePaymentRequest([
    "base_payment" => new Tatrapayplus\TatrapayplusApiClient\Model\BasePayment([
        "instructed_amount" => new Tatrapayplus\TatrapayplusApiClient\Model\Amount([
            "amount_value" => 10.0,
            "currency" => "EUR",
        ]),
        "end_to_end" => "ORDER123456",
    ]),
    "bank_transfer" => new Tatrapayplus\TatrapayplusApiClient\Model\BankTransfer(),
    "user_data" => new Tatrapayplus\TatrapayplusApiClient\Model\UserData([
        "first_name" => "Janko",
        "last_name" => "Hrasko",
        "email" => "janko.hrasko@example.com",
    ]),
    "card_detail" => new Tatrapayplus\TatrapayplusApiClient\Model\CardDetail([
        "card_holder" => "Janko Hrasko",
        "billing_address" => $address,
        "shipping_address" => $address,
    ]),
    "pay_later" => new Tatrapayplus\TatrapayplusApiClient\Model\PayLater([
        "order" => new Tatrapayplus\TatrapayplusApiClient\Model\Order([
            "order_no" => "ORDER123456",
            "order_items" => [
                new Tatrapayplus\TatrapayplusApiClient\Model\OrderItem([
                    "quantity" => 1.0,
                    "total_item_price" => 10.0,
                    "item_detail" => new Tatrapayplus\TatrapayplusApiClient\Model\ItemDetail([
                        "item_detail_en" => new Tatrapayplus\TatrapayplusApiClient\Model\ItemDetailLangUnit([
                            "item_name" => "Product 1",
                        ]),
                        "item_detail_sk" => new Tatrapayplus\TatrapayplusApiClient\Model\ItemDetailLangUnit([
                            "item_name" => "Produkt 1",
                        ]),
                    ]),
                ]),
            ],
        ]),
    ]),
]);

$response = $tatrapayplus_api->initiatePayment(
    "redirect uri",
    $initiate_payment_request,
);
$response["object"]->getPaymentId(); // newly created payment ID