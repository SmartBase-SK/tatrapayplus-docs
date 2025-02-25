// highlight-start
const { response } = await sdk.setAppearancesLogo({
  logoImage:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
});
// highlight-end
if (response.status === 201) {
  console.log("Logo was successfully saved.");
}
