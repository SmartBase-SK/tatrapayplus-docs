const paymentId = "b54afd37-5bb9-4080-9416-5ec450779087";
const cancelPreAuthorization = await sdk.updatePayment(paymentId, {
  operationType: "CANCEL_PRE_AUTHORIZATION",
});
// or
const confirmPreAuthorization = await sdk.updatePayment(paymentId, {
  operationType: "CONFIRM_PRE_AUTHORIZATION",
});
// or
const chargeBackResponse = await sdk.updatePayment(paymentId, {
  operationType: "CHARGEBACK",
  amount: 100,
});
