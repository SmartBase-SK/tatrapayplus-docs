import { TBPlusSDK } from "@tatrabanka/tatrapayplus-node";

const API_KEY = "REPLACE FROM TB PORTAL";
const API_SECRET = "REPLACE FROM TB PORTAL";
const sdk = new TBPlusSDK(
  API_KEY,
  API_SECRET,
  "192.0.2.123",
)
// highlight-start
const {response} = await sdk.setAppearances({
  surfaceAccent: {
    colorDarkMode: '#fff', //🟥
    colorLightMode: '#fff',
  },
  tintAccent: {
    colorDarkMode: '#fff',
    colorLightMode: '#fff',
  },
  tintOnAccent: {
    colorDarkMode: '#fff',
    colorLightMode: '#fff',
  }
})
// highlight-end
if(response.status === 201){
  console.log('Logo was successfully saved.')
}