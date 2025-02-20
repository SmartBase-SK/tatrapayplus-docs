import { TBPlusSDK } from "@tatrabanka/tatrapayplus-node";

const API_KEY = "REPLACE FROM TB PORTAL";
const API_SECRET = "REPLACE FROM TB PORTAL";
const sdk = new TBPlusSDK(
  API_KEY,
  API_SECRET,
  "192.0.2.123",
)
// highlight-start
const {response} = await sdk.setAppearancesLogo({
  logoImage: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII'
})
// highlight-end
if(response.status === 201){
  console.log('Logo was successfully saved.')
}