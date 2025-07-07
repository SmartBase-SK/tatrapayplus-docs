from tatrapayplus.client import TBPlusSDK
from tatrapayplus.models import *

client = TBPlusSDK(
    "your-client-id",
    "your-client-secret"
)

appearance_data = AppearanceRequest(
    theme=AppearanceRequestTheme.SYSTEM,
    surface_accent=ColorAttribute(color_dark_mode="#fff", color_light_mode="#fff"),
    tint_accent=ColorAttribute(color_dark_mode="#fff", color_light_mode="#fff"),
    tint_on_accent=ColorAttribute(color_dark_mode="#fff", color_light_mode="#fff"),
)
response = client.set_appearance(appearance_data)
