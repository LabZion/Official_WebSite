import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import React from "react";
import {Dropdown} from "react-bootstrap";

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    en: {
        translation: {
            "INSIGHT": "INSIGHTS",
            "EVENTS": "EVENTS",
            "BLOGS": "BLOGS",
            "Language": "English",
            "SEARCH": "Type something to search",
            "SOLUTION_SERVICE": "Solutions & Services",
            "CUSTOMER": "Customer Cooperation",
            "RESOURCE":"Resource & Support",
            "ABOUT_US": "About Us",
            "CONTACT_US": "Contact Us",
        }
    },
    zh: {
        translation: {
            "INSIGHT": "洞见",
            "EVENTS": "活动",
            "BLOGS": "博客",
            "Language": "简体中文",
            "SEARCH": "输入内容进行搜索",
            "SOLUTION_SERVICE": "解决方案与服务",
            "CUSTOMER": "客户与合作",
            "RESOURCE":"资源与支持",
            "ABOUT_US": "关于我们",
            "CONTACT_US": "联系我们",
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
