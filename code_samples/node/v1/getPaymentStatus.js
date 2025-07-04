const paymentId = req.query.paymentId; // based on your server
const { simpleStatus, data, error } = await sdk.getPaymentStatus(paymentId);
