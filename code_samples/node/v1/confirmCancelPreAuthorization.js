const paymentId = "b54afd37-5bb9-4080-9416-5ec450779087";
// highlight-start
const cancelPreAuthorization = await sdk.updatePayment(paymentId, {
  operationType: "CANCEL_PRE_AUTHORIZATION",
});
// highlight-end
// or
// highlight-start
const confirmPreAuthorization = await sdk.updatePayment(paymentId, {
  operationType: "CONFIRM_PRE_AUTHORIZATION",
});
// highlight-end
