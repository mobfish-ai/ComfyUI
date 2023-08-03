import en from "../i18n/en_US.js"
import cn from "../i18n/zh_CN.js"
import tw from "../i18n/zh_TW.js"
import jp from "../i18n/jp.js"

i18next.use(i18nextBrowserLanguageDetector).init({
    resources: {
        "en-US": en,
        "en": en,
        "zh_CN": cn,
        "cn": cn,
        "zh_TW": tw,
        "jp": jp,
    },
})