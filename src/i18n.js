import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import React from "react";

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
            "RESOURCE": "Resource & Support",
            "ABOUT_US": "About Us",
            "CONTACT_US": "Contact Us",
            "INDUSTRY": "Industry",
            "CAR": "Car",
            "FINANCIAL": "Finance & Insurance",
            "CLOUD": "Communication & Cloud",
            "SALES": "Retail & Internet",
            "LOGISTICS": "Logistics",
            "SCOPE": "Scope",
            "DATA": "Data Security",
            "IDENTIFY": "Identity Security",
            "EMBED": "Embedded System And Kernel Security",
            "TRUST": "Trusted Computing",
            "BUILDIN": "Buildin Security",
            "COMPANY": "Company",
            "HOPE": "Hope",
            "CHINA": "China",
            "GLOBAL": "Global",
            "OPENSOURCE": "OpenSource",
            "TEAM": "Team",
            "MEMBER": "Member",
            "XIAN": "Xi'An",
            "BEIJING": "BeiJing",
            "CHENGDOU": "ChengDou",
            "WUHAN": "WuHan",
            "SHENZHEN": "ShenZhen",
            "DAIMLER": "Daimler",
            "HUAWEI": "Huawei",
            "STARBUCKS": "StarBucks",
            "OOCL": "OOCL",
            "SAIC": "SAIC",
            "GAC": "Guangzhou Automobile",
            "PORSCHE": "Porsche",
            "CMB": "China Merchants Bank",
            "BOC": "Bank of China",
            "ZYBANK": "ZhongYuan Bank",
            "LU": "LU.com",
            "CM": "China Forex Trading System",
            "HUMANA": "Humana",
            "LANDPORTGROUP": "LandPortGroup",
            "HOOKFRAMEWORK": "Linux kernel hook framework",
            "SYNESTIA": "Synestia OS",
            "PATH": "Developing Path",
            "INVESTOR": "Investor Relations",
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
            "RESOURCE": "资源与支持",
            "ABOUT_US": "关于我们",
            "CONTACT_US": "联系我们",
            "INDUSTRY": "行业",
            "CAR": "汽车",
            "FINANCIAL": "金融与保险",
            "CLOUD": "通信与云计算",
            "SALES": "零售与互联网",
            "LOGISTICS": "物流",
            "SCOPE": "领域",
            "DATA": "数据安全",
            "IDENTIFY": "身份安全",
            "EMBED": "嵌入式系统与内核安全",
            "TRUST": "可信计算",
            "BUILDIN": "内建安全",
            "COMPANY": "公司",
            "HOPE": "景愿",
            "CHINA": "中国区",
            "GLOBAL": "全球",
            "OPENSOURCE": "开源",
            "TEAM": "团队",
            "MEMBER": "成员",
            "XIAN": "西安",
            "BEIJING": "北京",
            "CHENGDOU": "成都",
            "WUHAN": "武汉",
            "SHENZHEN": "深圳",
            "DAIMLER": "戴姆勒",
            "HUAWEI": "华为",
            "STARBUCKS": "星巴克",
            "OOCL": "东方海外",
            "SAIC": "上汽",
            "GAC": "广汽",
            "PORSCHE": "保时捷",
            "CMB": "招商银行",
            "BOC": "中国银行",
            "ZYBANK": "中原银行",
            "LU": "陆金所",
            "CM": "外汇交易中心",
            "HUMANA": "哈门那",
            "LANDPORTGROUP": "陆路港",
            "HOOKFRAMEWORK": "Linux内核hook框架",
            "SYNESTIA": "Synestia内核",
            "PATH": "发展历程",
            "INVESTOR": "投资者关系",
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "zh",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;
