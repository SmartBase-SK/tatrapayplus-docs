const { response } = await sdk.setAppearances({
  surfaceAccent: {
    colorDarkMode: "#ff0000", //🟥
    colorLightMode: "#ff0000",
  },
  tintAccent: {
    colorDarkMode: "#00ff00 ", //🟩
    colorLightMode: "#00ff00",
  },
  tintOnAccent: {
    colorDarkMode: "#0000ff", //🟦
    colorLightMode: "#0000ff",
  },
});
if (response.status === 201) {
  console.log("Logo was successfully saved.");
}
