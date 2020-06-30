import i18n from "i18next";
import {initReactI18next} from "react-i18next";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "INSIGHT": "INSIGHTS",
            "EVENTS": "EVENTS",
            "BLOGS": "BLOGS",
            "Language": "English",
            "SEARCH": "Type something to search"
        }
    },
    zh: {
        translation: {
            "INSIGHT": "洞见",
            "EVENTS": "活动",
            "BLOGS": "博客",
            "Language": "简体中文",
            "SEARCH": "输入内容进行搜索"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "en",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
