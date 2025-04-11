from tatrapayplus import TatrapayPlusClient
from tatrapayplus.models import *

client = TatrapayPlusClient(
    "https://api.tatrabanka.sk/tatrapayplus/sandbox",
    "your-client-id",
    "your-client-secret"
)

appearance_data = AppearanceRequest(
    theme=AppearanceRequestTheme.SYSTEM,
    surface_accent=ColorAttribute(color_dark_mode="#ff0000", color_light_mode="#ff0000"),
    tint_accent=ColorAttribute(color_dark_mode="#00ff00 ", color_light_mode="#00ff00"),
    tint_on_accent=ColorAttribute(color_dark_mode="#0000ff", color_light_mode="#0000ff"),
)
response = client.set_appearance(appearance_data)
