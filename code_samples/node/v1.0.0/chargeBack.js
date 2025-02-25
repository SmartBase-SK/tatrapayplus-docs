const paymentId = "b54afd37-5bb9-4080-9416-5ec450779087";
// highlight-start
const chargeBackResponse = await sdk.updatePayment(paymentId, {
  operationType: "CHARGEBACK",
  amount: 100,
});
// highlight-end
console.log(chargeBackResponse);
