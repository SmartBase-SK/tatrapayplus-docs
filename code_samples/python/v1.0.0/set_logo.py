from tatrapayplus import TatrapayPlusClient
from tatrapayplus.models import *

client = TatrapayPlusClient(
    "https://api.tatrabanka.sk/tatrapayplus/sandbox",
    "your-client-id",
    "your-client-secret"
)

logo_data = AppearanceLogoRequest(
    logo_image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAIAQMAAAD+wSzIAAAABlBMVEX///+/v7+jQ3Y5AAAADklEQVQI12P4AIX8EAgALgAD/aNpbtEAAAAASUVORK5CYII",
)

response = client.set_appearance_logo(logo_data)
