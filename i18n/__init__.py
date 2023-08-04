from aiohttp.web import Request

import i18n.en_us as en
import i18n.zh_cn as cn
import i18n.zh_tw as tw

_locale_display_name_map = {
    "en": en.NODE_DISPLAY_NAME_MAPPINGS,
    "en-us": en.NODE_DISPLAY_NAME_MAPPINGS,
    "zh-cn": cn.NODE_DISPLAY_NAME_MAPPINGS,
    "zh-tw": tw.NODE_DISPLAY_NAME_MAPPINGS,
    "cn": cn.NODE_DISPLAY_NAME_MAPPINGS,
    "zh": cn.NODE_DISPLAY_NAME_MAPPINGS,
    "tw": tw.NODE_DISPLAY_NAME_MAPPINGS,
}


def get_locale(request: Request):
    return request.headers.get("accept-language", "en").split(",")[0].lower()


def get_locale_node_display_name_mapping(locale: str = "en"):
    if locale not in _locale_display_name_map:
        locale = "en"

    return _locale_display_name_map[locale]
