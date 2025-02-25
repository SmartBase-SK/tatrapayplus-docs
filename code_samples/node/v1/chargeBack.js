const paymentId = "b54afd37-5bb9-4080-9416-5ec450779087";
// highlight-start
const cancelPaymentResponse = await sdk.cancelPayment(paymentId);
// highlight-end
console.log(cancelPaymentResponse);
