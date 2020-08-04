import React, {Component} from 'react';
import './Privacy.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

const markdown = require("markdown").markdown;
const privacyContent = {
    content:'# 隐私政策\n' +
        '\n' +
        '本隐私政策介绍了我们将如何收集、使用和保护您的个人数据，以下为政策文本。\n' +
        '\n' +
        '[![TRUSTe Privacy Certification](https://privacy-policy.truste.com/privacy-seal/seal?rid=aa46f780-9b81-4ea8-ab1d-1cffb90a1cef)](https://privacy.truste.com/privacy-seal/validation?rid=aa46f780-9b81-4ea8-ab1d-1cffb90a1cef&lang=zh-tw)\n' +
        '\n' +
        '**更新 13 January 2020**\n' +
        '\n' +
        '## \n' +
        '\n' +
        '## **ThoughtWorks 隐私政策**\n' +
        '\n' +
        ' 本隐私政策披露ThoughtWorks收集、使用和保护您个人资料的方式和流程。\n' +
        '\n' +
        '本隐私政策适用于ThoughtWorks®经其官网www.thoughtworks.com、或按下述其它方式在开展业务过程中收集的个人资料。\n' +
        '\n' +
        '### **1. 控制者**\n' +
        '\n' +
        '根据《一般数据保护条例》（GDPR）第4款第7条规定，负责的数据控制者为：\n' +
        '\n' +
        'ThoughtWorks, Inc., 200 E Randolph St, 25th Floor, Chicago, Illinois 60601, USA; 电话： +1312 373 1000; 邮箱：info-us@thoughtworks.com; 网站：[www.thoughtworks.com](http://www.thoughtworks.com/)\n' +
        '\n' +
        '您可通过邮箱privacyofficer@thoughtworks.com联系数据保护专员。\n' +
        '\n' +
        '### **2. 基本信息**\n' +
        '\n' +
        '在开展业务和提供服务时，ThoughtWorks会收集个人信息以开展业务、提供和推广服务并履行我们的法律义务。同样，我们也可能为了其他目的收集个人信息，具体情况我们将在收集个人信息时进行详细阐释。\n' +
        '\n' +
        '您可以拒绝为我们提供部分或者全部个人信息，但这可能会限制我们与您进行互动的渠道，您由此可以享受的服务也会受限。\n' +
        '\n' +
        '### **3. 日志文件**\n' +
        '\n' +
        '我们通过我们的互联网访问日志收集个人信息。当您进入我们的网站，您的互联网地址会被自动收集并放置到我们的互联网访问日志中（如服务器上的日志文件）。我们也会记录您所浏览网站和网页的URL、浏览日期和时间以及您所使用的电脑硬盘和软件信息。\n' +
        '\n' +
        '此类信息可能包括IP（互联网协议）地址、浏览器型号和版本、互联网服务供应商（ISP）、访问/退出的网页、操作系统、日期/时间戳记，和/或点击流数据、访问次数、引荐来源网站和通过我们网址访问的网站。\n' +
        '\n' +
        '处理此类信息是我们网站提供服务并确保网站安全的必要条件。这样处理的法律依据是GDPR第6(1)(f)条规定。我们不会将这些信息与特定个人相关联。为上述目的处理完信息后，相关信息将被删除。\n' +
        '\n' +
        '### **4. 联系方式**\n' +
        '\n' +
        '我们的网站采取多种联系表格，您可通过多种电子表格联系我们。为处理您的请求，您需要向我们提供一个有效的电子邮件地址，此外，我们会储存您的IP地址和您提交请求的时间，以防误用联系表格。或者，您可通过上文第1节中提到的电子邮件地址联系我们。如果您采用上述任意一种联系方式，ThoughtWorks作为数据控制者将自动储存您传输的个人信息，以便后续处理。该项处理的法律依据是GDPR第6(1)(f)条规定。\n' +
        '\n' +
        '有些情况下，我们也许需要您提供更多信息，例如姓名、职业、地址或者电话号码。关于此类个人信息的处理，我们将会征求您的明确同意。该处理的法律依据是GDPR第6(1)(a) 条规定。\n' +
        '\n' +
        '### **5. 网站注册**\n' +
        '\n' +
        '如果您使用我们的网站注册来获取某些服务、活动的信息或下载电子书，这将需要您提供个人信息。对应注册表中插入的信息将会传输给数据控制者ThoughtWorks。处理此类数据是向您提供相关服务的必要条件，其法律依据是GDPR第6(1)(b)条规定。如需处理更多您提供的个人信息，我们将征求您的明确同意，其法律依据是GDPR第6(1)(a)条规定。\n' +
        '\n' +
        '所有的注册表格将会由我们的服务商Marketo（Marketo EMEA Ltd., Cairn House, South County Business Park, Leopardstown Road, Dublin 18, Ireland ）提供。因此，对于您提供的个人信息，Marketo将代表我们进行收集、储存，且您的个人信息将按照相关处理规定在ThoughtWorks集团各公司间进行共享，同时ThoughtWorks各公司将遵循ThoughtWorks实体间已签订的适用协议，此类协议包括但不限于位于EU/ EEA（欧盟/欧洲经济区）或非EU/EEA的企业间签订的信息转让示范条款协议。（请前往[https://www.thoughtworks.com/contact-us](https://www.thoughtworks.com/contact-us)查阅ThoughtWorks的办公室列表）。\n' +
        '\n' +
        '此外，Marketo出于分析目的使用功能Cookie，详情请见下文第12.9节。在非EU/EEA地区转让您的个人信息连同Marketo对信息的处理会遵从示范条款协议。您完成注册后，您的IP地址和注册的日期时间会被收集。此项操作将帮助我们防止服务的误用。该操作的法律依据是GDPR第6(1)(f)条规定。\n' +
        '\n' +
        '### **6. 工作申请**\n' +
        '\n' +
        '我们网站开放求职申请，您可通过网站刊登的招聘广告或投递意向性申请的方式求职。如果您经以上方式提供个人信息，包括联系方式、个人经历、职位等，或提供（主动提供或被动提供）特殊类别个人信息（详见第7节），申请表中插入或另行提供的信息（如您简历中添加的信息）将被传输至数据控制者ThoughtWorks。关于此类个人信息的处理，我们将征求您的明确同意。该操作法律依据是GDPR第6(1)(a)条规定。我们存储该类个人信息仅用于内部处理您的申请。如果申请流程中没有建立、行使或保护合法要求的需要，无需继续保留此类个人信息，我们将在申请流程结束后立即删除您的个人信息。\n' +
        '\n' +
        '请注意申请表将由我们的服务供应商Greenhouse（Greenhouse Software, Inc., 110 Fifth Avenue, 3rd Floor, New York, NY 10011, USA, [www.greenhouse.io](http://www.greenhouse.io/)）提供和管理。您所提供的个人信息将由Greenhouse代表ThoughtWorks收集并存储，并且会与处理申请ThoughtWorks各公司进行共享。\n' +
        '\n' +
        '在非EU/EEA地区转让您的个人信息连同Greenhouse对信息的处理会遵从示范条款协议中转让个人信息至第三方国家的相关规定。\n' +
        '\n' +
        '当您在工作申请界面注册时，您的IP地址和注册的日期时间将被收集，此项操作将帮助我们防止服务的误用。该处理的法律依据是GDPR）第6(1)(f)条规定。\n' +
        '\n' +
        '### **7. 主动提供的个人信息的特殊类别**\n' +
        '\n' +
        '除了您在ThoughtWorks申请工作时提供的信息（见第6节），通常情况下我们不会尝试通过网站搜集特殊类别的个人信息。\n' +
        '\n' +
        '“特殊类别的个人信息”包括被美国、欧洲和其他司法管辖地区隐私法认定的各类个人信息和数据，包括某些情况下需要获取明确同意的各类个人信息。这些类别可能包括透露种族或民族本源、政治观点、宗教或哲学信仰的个人信息，或工会会员身份、基因数据、生物识别数据、健康信息或性取向信息（GDPR第9条规定）。\n' +
        '\n' +
        '因此，我们建议您不要主动提供任何敏感性个人数据。ThoughtWorks采用HTTPS或者其他适当的技术措施和组织措施保证个人数据在网站传递中的安全性。\n' +
        '\n' +
        '### **8. 新闻通讯**\n' +
        '\n' +
        '您可以输入您的电子邮箱并点击我们发送给您的电子邮件中的确认链接（双向确认）注册获得定期的电子邮件通讯。该事项处理的法律依据是GDPR第6(1)(a)条规定。\n' +
        '\n' +
        '在一些情况下，我们也许会请您提供更多信息，例如姓名、职业、地址或者电话号码。关于该类个人信息的处理，我们将会征求您的明确同意。该处理的法律依据是GDPR第6(1)(a)条规定。\n' +
        '\n' +
        '如果您订阅了我们的定期电子邮件新闻通讯，ThoughtWorks作为数据控制者将收集和存储您的IP地址和订阅的日期和时间信息。这将帮助我们避免服务或者订阅者电子邮件地址的误用。该处理的法律依据是GDPR第6(1)(f)条规定。该信息仅用于分发新闻通讯。您可根据每一封业务通讯中的取消订阅指引选择随时结束订阅。一旦您取消订阅，我们将立即删除您的相关个人信息。\n' +
        '\n' +
        '### **9. 网络博客**\n' +
        '\n' +
        '在我们的网站可以访问公开的网络博客。请注意您在这些地方提供的所有信息都可能会被访问用户阅读、收集和使用。我们的网络博客是由第三方应用Feedly（Feedly, Inc. 285 Hamilton Avenue, Suite 250, Palo Alto, CA 94301, https://feedly.com/i/welcome）所管理，在您发表评论前可能会被要求先行注册。Feedly是一种新闻聚合应用程序，可用于不同类型的网页浏览器以及iOS和安卓系统的移动设备，同时也可用于基于云的服务。Feedly从各类网络来源汇编信息流，以供用户定制和分享。我们在网站上使用Feedly来聚合展示ThoughtWorks员工和前同事撰写的网络博客。我们也在网页上显示Feedly小组件，点击即可开启Feedly应用。更多关于Feedly的隐私政策的更多信息请点击[这里](https://feedly.com/i/legal/privacy)。该处理的法律依据是GDPR第6(1) (b) 、(f)条规定。\n' +
        '\n' +
        '### **10. 客户评价**\n' +
        '\n' +
        '除了其他认可与支持外，我们也会将顾客个人的满意评价放于网站展示。在征得您的同意后，我们可能会将您的名字同评价一并贴出。该处理的法律依据是GDPR第6(1)(a)条规定。如果您想更新或者删除您的评价，可通过privacyofficer@thoughtworks.com联系我们。\n' +
        '\n' +
        '### **11. Cookie （基本信息）**\n' +
        '\n' +
        'ThoughtWorks网站使用Cookie保存和检索您的访问信息。Cookie是可保存和检索您对于一个网站或应用程序的访问信息的小型文件。Cookie位于互联网浏览器内，帮助记忆您的优先选项和历史活动。您可访问 [www.allaboutcookies.org](https://www.allaboutcookies.org/) 以及 [www.youronlinechoices.eu](https://www.youronlinechoices.eu/) 获取更多关于Cookie的信息。\n' +
        '\n' +
        '我们网站目前使用的Cookie将您识别为一个匿名编号。我们以及我们的合作伙伴（如市场合作伙伴、附属公司或分析服务供应商）使用Cookie及日志文件分析趋势、管理网站、跟踪用户在网站上的活动并收集用户群体的统计资料。我们可基于合作伙伴对这类技术的使用情况以汇总的方式收到匿名报告。我们也将依据此类信息提供网站内容、确保信息技术系统的功能性并优化我们的网站。该处理的法律依据为GDPR第6(1)(f)条。日志文件数据与其它个人信息将分开存储。\n' +
        '\n' +
        '用户可以在浏览器中选择接受或拒绝使用cookies。 已安装的Cookies可以删除。 如果您曾经访问过我们的网站，并且想更改您的cookie偏好设置，首先请从浏览器中清除cookies，然后更新cookie偏好设置。 如果拒绝使用cookies，您仍然可以使用我们的网站，但是网站的某些功能会受到限制。 如果您要从欧盟地区访问网站，则可以从[此处](https://www.thoughtworks.com/cn/privacy-policy#optanon_show_settings)更改cookie设置。\n' +
        '\n' +
        '在访问我们网站时，您的浏览器将设置以下Cookie类别：\n' +
        '\n' +
        '#### *11.1 必需Cookie*\n' +
        '\n' +
        '为确保您能正常浏览网站并使用相关功能，此类Cookie必须设置。未设置此类Cookie，您请求的服务将无法提供。\n' +
        '\n' +
        '注册访客Cookie——每位注册用户的唯一标识符，在您访问和返回网站时可对您进行匿名识别。\n' +
        '\n' +
        '#### *11.2 性能 Cookie*\n' +
        '\n' +
        '此类Cookie负责收集信息，从而我们可分析访客对我们网站的使用情况。此类Cookie不会收集任何可以识别您身份的信息。此类Cookie收集到的所有信息均为匿名，且仅用于提升我们网站的运行能力。\n' +
        '\n' +
        '#### *11.3 功能Cookie*\n' +
        '\n' +
        '此类Cookie允许网站及应用程序记忆您的选择（如您的用户名或所居住区域），并提供增强型个性化功能。\n' +
        '\n' +
        '我们可利用功能Cookie收集的信息识别用户行为并根据用户配置文件提供服务内容。此类Cookie无法追踪您位于其它网站的浏览活动。此类Cookie不会收集本网站以外的任何信息用于广告或记录您位置等潜在用途。\n' +
        '\n' +
        '#### *11.4. 定位Cookie*\n' +
        '\n' +
        '为维持我们网站服务的相关性、易用性和最新性，我们使用网页分析服务帮助获悉用户对网站的使用情况。\n' +
        '\n' +
        '此类Cookie允许网页分析服务识别您的浏览器或设备，并了解您是否曾经访问过我们网站、您的历史浏览或点击信息以及您发现我们网站的方式。此类信息均为匿名且仅用于数据统计，并将帮助我们分析用户活动模式，从而提供更好的用户体验。\n' +
        '\n' +
        '### **12. 第三方应用程序**\n' +
        '\n' +
        '我们将按本隐私政策尊重、保护您的隐私。我们仅在本隐私政策列明的情况下与第三方共享您的个人信息，且不会出售您的个人信息。\n' +
        '\n' +
        '与第三方，特别是与ThoughtWorks无关的第三方共享信息前，ThoughtWorks只有在您明确同意或适用法律允许的处理情况下才会共享您的个人信息。\n' +
        '\n' +
        '我们共享个人信息的ThoughtWorks无关方包括托管和云服务供应商、营销和邮寄机构，以及参与履行我们对客户合同义务的分包商。该处理的法律依据为GDPR第6(1)(f)条。\n' +
        '\n' +
        '#### *12.1 AddThis*\n' +
        '\n' +
        '我们网站采用书签服务商AddThis。AddThis是Clearspring（Clearspring Technologies Inc., 8000 Westpark Drive, Suite 625, McLean, VA 2210, USA, http://www.addthis.com/. 推出的一项服务。每次我们网站收到配有AddThis组件的访问请求，该组件将提示您的浏览器下载此AddThis组件的镜像。通过此项操作，AddThis可明确获知您正在浏览我们网站的哪一网页。此外，AddThis还可记录您的IP地址、浏览器类型、浏览器语言、网站访问历史及其具体日期和时间，并将此类信息编辑成一个匿名用户配置文件。此类信息帮助AddThis及其伙伴企业根据网站用户的个人取向直接递送个性化的目标广告。广告的显示依据为AddThis设置到位的浏览器Cookie，该Cookie可分析用户与网站的互动情况。若要永久禁止AddThis在您的浏览器设置Cookie，您可从 http://www.addthis.com/privacy/opt-out 下载安装退出Cookie。\n' +
        '\n' +
        '如果安装退出Cookie，您可能无法完整使用我们网站的所有功能。您可访问 http://www.addthis.com/privacy/privacy-policy 获取AddThis的隐私政策。为分享网页，目前AddThis在我们网站包含下述社交媒体网站的小插件：\n' +
        '\n' +
        '[Facebook](https://www.facebook.com/)\n' +
        '\n' +
        '[Google +](https://plus.google.com/discover)\n' +
        '\n' +
        '[Twitter](https://www.twitter.com/)\n' +
        '\n' +
        '[LinkedIn](https://www.linkedin.com/)\n' +
        '\n' +
        '[Pocket](https://getpocket.com/)\n' +
        '\n' +
        '[WeChat](https://web.wechat.com/)\n' +
        '\n' +
        '#### *12.2 CloudFront*\n' +
        '\n' +
        'Amazon CloudFront是亚马逊旗下企业AWS（Amazon Web Services, P.O. Box 81226, Seattle, WA 98108-1226, [http://aws.amazon.com](http://aws.amazon.com/) 推出的网站服务，用于加速向用户发布静态或动态的网站内容（如.html、.css、.js和图片文件）。CloudFront通过遍布全球的数据中心——边缘站点构建的网络传送内容。当用户请求由CloudFront供应的内容，该请求将被路由到迟延最短的 CloudFront 边缘站点，从而内容传送性能可达到最优。\n' +
        '\n' +
        '•若该内容已位于迟延最短的边缘站点，CloudFront将立即进行传送。\n' +
        '\n' +
        '•若内容不在迟延最短的边缘站点，CloudFront将在被认定为内容最终版本的来源，即Amazon S3存储桶（本网站资产托管处）或HTTP服务器（本网站服务器为Rackspace）中进行检索。\n' +
        '\n' +
        'CloudFront抓取包含系统日志每次请求的相关信息，具体包括：IP地址、处理请求的服务器经纬度、国家和日期时间。更多关于AWS的隐私政策，请访问 [https://aws.amazon.com/privacy/](https://aws.amazon.com/privacy/)。\n' +
        '\n' +
        '#### *12.3 Disqus*\n' +
        '\n' +
        'Disqus（Disqus, Inc, 301 Howard St, San Francisco, CA 94105, USA, [https://disqus.com/](https://disqus.com/) ）在线服务提供商为网站提供了一个集中的讨论平台。在我们的线上服务中，我们已经整合了Disqus的插件，该插件可以支持访客在我们的网站上发表评论，同时可以在多个网页（包括第三方网站）关联评论。\n' +
        '\n' +
        '如果您进入我们包含Disqus插件的网页，您的浏览器将从插件加载处与Disqus服务器建立直接联系。即使您没有或未登陆Disqus账户，您浏览器访问我们在线服务相关页面的信息也会被传输至Disqus。该信息将直接从您的浏览器发送并存储至美国的Disqus服务器。\n' +
        '\n' +
        '如果您同时登陆您的Disqus账户，网页检索可能会关联至您的Disqus账号，并允许Disqus将您的上网习惯直接关联至您的账户。\n' +
        '\n' +
        '如果您想禁止传输和存储您的信息及行为，您必须在访问我们的网站前注销您的Disqus账号并且删除所有Disqus设置的Cookie。\n' +
        '\n' +
        '您必须登陆您的Disqus账号才可以在我们的网站上发表评论（使用Disqus插件）。当您在网站上发表评论，Disqus会收集您访问我们和其他网站的相关信息，包括您发表的信息和您的IP地址。您的评论将通过iframe直接发送至Disqus服务器。\n' +
        '\n' +
        '更多关于Disqus的信息详见\n' +
        '\n' +
        '[https://help.disqus.com/customer/portal/articles/466187](https://help.disqus.com/customer/portal/articles/466187)\n' +
        '\n' +
        '更多关于Disqus隐私政策的信息详见\n' +
        '\n' +
        '[https://help.disqus.com/customer/portal/articles/466259-privacy](https://help.disqus.com/customer/portal/articles/466259-privacy)\n' +
        '\n' +
        '#### *12.4 Facebook转化追踪像素*\n' +
        '\n' +
        '我们网站使用Facebook（Facebook Inc., 1601 S. California Ave, Palo Alto, CA 94304, USA)的“自定义受众群体像素（Custom Audience pixel）”。有了这项技术的帮助，我们可以跟踪使用者在看到或者点击Facebook广告后的行为，这使我们可以监测Facebook广告的有效性，达到统计和市场研究的目的。这种方式收集的数据对我们来说都是匿名的，这意味着我们无法看到个人用户的个人信息。但是，这些信息均由Facebook存储和处理。Facebook可以将这些信息和您的Facebook账号关联并用于其广告目的，上述操作均遵照Facebook的信息政策，详见[https://www.facebook.com/about/privacy/](https://www.facebook.com/about/privacy/)。您可以允许Facebook及其合作伙伴将广告放置于Facebook的内外部。为达成上述目的，一个Cookie将存储于您的设备。如果您想撤销同意，请点击 [https://www.facebook.com/settings/?tab=ads#_=_](https://www.facebook.com/settings/?tab=ads#_=_)。\n' +
        '\n' +
        '*12.5 Google Analytics*\n' +
        '\n' +
        '我们的网站使用Google Analytics，一种Google (Google, Inc., 1600 Amphitheatre Parkway, Mountain View, CA 94043 USA, [www.google.com](https://www.google.com/))提供的网络分析服务。Google Analytics运用存储在您的电脑上的Cookie，以便对您使用的网站进行分析。这些Cookie生成的信息，例如您访问我们网站的时间、地点和频率，包括您的IP地址，这些信息将传输并存储至Google位于美国的办公场所。在使用Google Analytics时，我们网站采用一种名为“anonymizeIp（IP匿名化）”的扩展代码，由此Google在信息从EU/EEA成员国传出之前将缩略并从而隐去您的IP地址。Google使用该类信息分析您对于我们网站的使用情况，将您的网络活动编辑成报告发送给我们，并为我们网站提供其他相关服务。\n' +
        '\n' +
        'Google可能会按照法律要求将信息转移给第三方，或将信息转移给代表Google处理这些数据的第三方。Google申明不会将您的IP地址与其掌握的其他信息相关联。您可以按本隐私政策中提到的方式，通过调整您浏览器软件的设置禁止安装Cookie。但是您应当了解，此种操作可能使您无法完整使用我们网站的所有功能。\n' +
        '\n' +
        'Google Analytics也为目前大部分浏览器提供一种停用扩展，通过这个工具您可以对Google收集的您访问网站的信息拥有更大控制权。这款扩展会通知Google Analytics所使用的JavaScript（ga.js）不要将任何关于网站访问的信息传输给Google Analytics。但是Google Analytics提供的浏览器停用扩展不会禁止将信息传输给我们或者其它我们可能开展的网络分析服务。\n' +
        '\n' +
        'Google Analytics也使用名为网络信标（有时也被叫做单像素gif）的电子图像，并同Cookie一同用来编辑汇总统计数据，从而分析我们网站的使用情况。\n' +
        '\n' +
        '您可访问以下链接查询如何安装上文所述的浏览器扩展：[https://tools.google.com/dlpage/gaoptout?hl=en](https://tools.google.com/dlpage/gaoptout?hl=en)。\n' +
        '\n' +
        '关于个人信息传送至美国的情况，Google主动遵循《欧盟-美国隐私护盾》（EU-US Privacy Shield）协议\n' +
        '\n' +
        '（[https://www.privacyshield.gov/EU-US-Framework](https://www.privacyshield.gov/EU-US-Framework)）。\n' +
        '\n' +
        '#### *12.6 Google Tag Manager (GTM)*\n' +
        '\n' +
        'Google Tag Manager (GTM”) is a tag management system to manage JavaScript and HTML tags used for tracking and Google Tag Manager 是一款标签管理系统，可管理网站用于追踪和分析的JavaScript和HTML标签。标签是一种小的代码元素，其功能包括测量流量和访客行为：了解在线广告和社交渠道的影响；针对目标群体推出再营销和导向活动；测试和优化网站。GTM使我们更为便捷地整合和管理我们的标签。我们网站使用GTM来管理以下跟踪工具（详细阐述见第12节）：\n' +
        '\n' +
        '● Google Analytics\n' +
        '\n' +
        '● Marketo Munchkin\n' +
        '\n' +
        '● Facebook转化追踪像素\n' +
        '\n' +
        '● Twitter订制受众\n' +
        '\n' +
        '● Crazy Egg\n' +
        '\n' +
        '如果您已执行停用，GTM将遵循该操作指令。关于更多GTM的隐私政策详见 [https://policies.google.com/privacy?hl=en](https://policies.google.com/privacy?hl=en)；使用条款详见[https://www.google.com/analytics/tag-manager/use-policy/](https://www.google.com/analytics/tag-manager/use-policy/)。\n' +
        '\n' +
        '***12.7 Greenhouse T\\*** **跟踪链接**\n' +
        '\n' +
        '当通过我们的Greenhouse表单提交工作申请时，我们会获取一些特定的信息（详情见第6节）。在某些营销活动中，我们会使用“Greenhouse 跟踪链接”，它们是一些URL参数，关联在职位发布页的入站链接中。当用户提交一个工作申请时，Greenhouse获取此参数，从而确定该用户是从何种广告或者促销渠道访问到该职位发布页。这会帮助ThoughtWorks 识别何种渠道更加有效。\n' +
        '\n' +
        '**12.8 Libsyn**\n' +
        '\n' +
        'Libsyn（5001 Baum Blvd., Suite 770, Pittsburgh, PA 15213, [https://libsyn.com/](https://libsyn.com/)）是一个音频托管服务和发布工具。\n' +
        '\n' +
        '我们使用Libsyn 来托管对外的 podcast，包括Apple Podcasts、Spotify、Google Play 以及其他平台。同时，我们在podcast 发布页内嵌了由 Libsyn生成的网页播放器。\n' +
        '\n' +
        '访问[https://libsyn.com/privacy-policy/](https://libsyn.com/privacy-policy/) 了解Libsyn的隐私政策。\n' +
        '\n' +
        '**12.9 LinkedIn Insight Tags**\n' +
        '\n' +
        '我们在网站上使用LinkedIn（LinkedIn Corporation, 1000 W. Maude Avenue, Sunnyvale, CA 94085 USA, www.linkedin.com）的“LinkedIn Insight Tag ”。它提供我们网站访问者的详细活动报告和分析，也可用于跟踪会话、重新定位网站访问者，以及发现会员与我们在 LinedIn的广告交互的更多洞察。\n' +
        '\n' +
        'LinkedIn Insight Tag 收集关于会员访问我们网站的数据，包括URL、引荐来源、IP地址、设备和浏览器特征（用户代理），以及时间戳。这些数据是被加密的、IP地址也被移除，会员的直接标识符在7天之内被删除从而使数据匿名化。这些被处理过的匿名化数据在90天内被删除。\n' +
        '\n' +
        'LinkedIn 并不与我们分享个人数据，而仅提供关于网站受众和广告效果的聚合报告。LinkedIn 也提供对网站访问者的重新定位，使得我们可以利用此数据，在不识别该会员的情况下，向其展示我们网站的广告。LinkedIn 会员可以通过账号设置，控制对其个人数据的广告用途的使用。\n' +
        '\n' +
        '所有这些都遵循 LinkedIn 条款以及 Cookie政策。\n' +
        '\n' +
        '**12.10 LinkedIn SlideShare**\n' +
        '\n' +
        'LinkedIn SlideShare是LinkedIn（LinkedIn Corporation, 1000 W. Maude Avenue, Sunnyvale, CA 94085 USA, [www.linkedin.com](https://www.linkedin.com/)）提供的一种Web 2.0幻灯片托管服务。用户可以私有或公开的方式上传以下格式的文件：PowerPoint、PDF或 OpenDocument presentations。幻灯片可以用手持设备在网站本身进行观看，也可嵌入其它网站。我们的网站采用LinkedIn Slideshare的插件，主要用于分享幻灯片和PDF文件。\n' +
        '\n' +
        '关于LinkedIn Slideshare的插件（以及LinkedIn产品提供的所有插件），LinkedIn Slideshare的隐私政策有这样的表述：“当您访问或使用我们的服务，包括我们的网站、应用和平台技术（如站外插件），例如当您查看或者点击内容（如学习视频）或者广告（我们的网站和应用内外），进行搜索、安装或更新我们的手机应用、分享文章或申请求职时，我们会记录您的使用数据。我们利用登录、Cookie、设备信息和IP地址去识别和记录您的使用情况。”更多关于LinkedIn的隐私政策详见 https://www.linkedin.com/legal/privacy-policy。\n' +
        '\n' +
        '*12.11 Marketo Munchkin*\n' +
        '\n' +
        '我们使用Marketo（Marketo, Inc., 901 Mariners Island Boulevard, Suite 500, San Mateo, CA 94404 USA, [www.marketo.com](https://www.marketo.com/)）提供的第三方营销软件来管理营销活动，包括：\n' +
        '\n' +
        '● 发送邮件以及跟踪邮件效果，包括打开率、点击率、以及取消订阅。\n' +
        '\n' +
        '● 规划和监督营销活动\n' +
        '\n' +
        '● 管理活动注册以及沟通\n' +
        '\n' +
        '● 存储营销沟通同意数据\n' +
        '\n' +
        '● 提供我们网站内的大多数表单（职位申请表单除外）\n' +
        '\n' +
        '此服务由Marketo 提供。具体来说，我们使用Marketo “Munchkin”Cookie作为我们网站追踪的一部分，以此获得邮件打开率和点击率信息，以及跟踪网页活动。对于注册用户（见第5节），该信息可能和您的用户配置文件关联。\n' +
        '\n' +
        '更多关于Marketo的隐私政策和cookie政策见这里。\n' +
        '\n' +
        'Munchkin的运作原理是什么？\n' +
        '\n' +
        '我们在网站内嵌入了Munchkin Javascript的片段。当访客进入网站，我们会将一个Cookie置于访客的浏览器内（如果浏览器还没有这个Cookie），并将访客的网页活动信息发送至我们的服务器。这是一种第一方Cookie，仅对我们可见。\n' +
        '\n' +
        'Munchkin 获取了什么？\n' +
        '\n' +
        '在一个网页上，Munchkin会自动收集以下信息：\n' +
        '\n' +
        '● 网页浏览\n' +
        '\n' +
        '● 链接点击\n' +
        '\n' +
        '● IP地址\n' +
        '\n' +
        '● 引荐来源\n' +
        '\n' +
        '● 我们的Cookie ID\n' +
        '\n' +
        '● Infferd Company（例如ISP）\n' +
        '\n' +
        '如果您不希望将该Cookie置于您的浏览器内，您可以点击浏览器内的“不跟踪”（DNT）功能退出安装。此操作将禁止Munchkin追踪您的特定浏览器和设备。\n' +
        '\n' +
        '**12.12 Salesforce**\n' +
        '\n' +
        'Salesforce（Salesforce.com, Inc. usually abbreviated as SF or SFDC）是一家美国基于云技术的软件公司，总部在加利福尼亚州旧金山。Salesforce是其平台的主要企业服务。它向公司提供案例管理和任务管理的接口，以及自动路由和升级重要事项的系统。Salesforce 客户门户为客户提供跟踪案例的能力，包括一个社交网络插件，使用户可以加入关于其公司在社交网络网站的会话，提供分析工具和其他服务，例如邮件提醒、Google搜索、以及顾客权益和合同的访问权限。\n' +
        '\n' +
        '出于市场营销目的，存储于 Marketo 的个人数据被传送至 Salesforce，从而被我们的销售团队查看和管理。\n' +
        '\n' +
        '更多关于 Salesforce的隐私实践信息，可以参阅[https://www.salesforce.com/in/company/privacy/](https://www.salesforce.com/in/company/privacy/)。\n' +
        '\n' +
        '**12.13 Siftrock**\n' +
        '\n' +
        'Siftrock 是一个Drift.com 子公司，总部位于625 1st Avenue Suite 300 Seattle, WA 98104 United States。此公司管理和挖掘营销邮件回复，从而促进邮件数据库时效性和可达性，以及为营销自动化提供邮件回复管理。\n' +
        '\n' +
        'Siftrock 帮组我们的营销团队分析收到的直接邮件，将发件人信息更新到 Marketo 和 Salesforce 中。Siftrock的收集处理用户信息的政策详情，请见 [https://siftrock.com/about/privacy/](https://siftrock.com/about/privacy/) 。\n' +
        '\n' +
        '*12.14 SoundCloud*\n' +
        '\n' +
        'SoundCloud（SoundCloud Limited, Rheinsberger Str. 76/77, 10115 Berlin, Germany, c/o JAG Shaw Baker, Berners House, 47-48 Berners Street, London W1T 3NF, UK; [www.soundcloud.com](https://www.soundcloud.com/)）是一款在线音频分销平台。在SoundCloud，用户可上传、录制、推广和分享原创音频。我们网站采用SoundCloud在帖子中分享播客，并在网站中使用SoundCloud插件。当您访问我们网站，与SoundCloud服务器间的连接即建立，插件随即显示。这一操作将为SoundCloud服务器提供您在我们网站访问的页面信息。若您登陆SoundCloud会员，SoundCloud会自动将您的信息与您的个人用户账号匹配。当您激活插件（如点击音频文件的开始按钮），相关信息也将匹配至您的用户账号。若您要禁止信息的自动匹配，可在登陆我们网站前注销SoundCloud账户并删除相应Cookie。\n' +
        '\n' +
        '用户与嵌入式播放器的交互功能包括：\n' +
        '\n' +
        '• 播放\n' +
        '\n' +
        '• 暂停\n' +
        '\n' +
        '• 重放持续时间\n' +
        '\n' +
        '• 播客共享\n' +
        '\n' +
        '但是，所有信息均为汇总形式，其中特殊信息已被分离。更多关于SoundCloud的隐私政策请访问[https://soundcloud.com/pages/privacy](https://www.soundcloud.com/pages/privacy)。\n' +
        '\n' +
        '#### *12.15 SumoLogic*\n' +
        '\n' +
        'Sumo Logic（Sumo Logic, Inc., 305 Main Street, Redwood City, CA 94063, USA, [www.sumologic.com](https://www.sumologic.com/)）是一项基于云的日志管理和分析服务，利用机器生成的大数据传送实时IT洞察。Sumo Logic采用一款名为“Installed Collector”的软件。一个Installed Collector就是一个Java代理，可从其来源接收日志和指标，并加密、压缩、将数据传送至Sumo服务器。如同其名字所示，Installed Collector（安装收集器）安装于您的环境中，这与位于Sumo服务器的“Hosted Collector（托管收集器）”截然相反。安装Installed Collector后，您可添加新源， Installed Collector连接后可将获取信息传送至Sumo服务器。\n' +
        '\n' +
        '一个Sumo源即为一个对象，为特定收集器配置，可定期扫描一个特定目标，并将新数据传输至Installed Collector。SumoLogic收集器已写入网站使用的所有服务器镜像，并将收集以下信息：\n' +
        '\n' +
        '● IP地址；\n' +
        '\n' +
        '● 日期和时间；\n' +
        '\n' +
        '● 会话 ID；\n' +
        '\n' +
        '● 浏览器型号和版本；以及\n' +
        '\n' +
        '● 操作系统及其版本。\n' +
        '\n' +
        '上述信息为ThoughtWorks数字团队的开发者使用，用于调试/监测目的。关于Sumo Logic的隐私政策详见[https://www.sumologic.com/privacy-statement/](https://www.sumologic.com/privacy-statement/)。\n' +
        '\n' +
        '*12.16 Twitter* **订制受众**\n' +
        '\n' +
        '定制受众是Twitter（Twitter Inc., 1355 Market Street, Suite 900, San Francisco, CA 94103, USA, [www.twitter.com](https://www.twitter.com/)）推出的一套工具，用于定位现有用户和客户并制定再营销活动。目标活动包括直接联系访问ThoughtWorks 网站及其活动页面的用户或访客，并且/或者对原有客户名单进行重新定位。Twitter设定的最低订制受众人数为500名用户。若订制受众低于500名Twitter用户，页面会显示“受众过少”且无法确定目标。关于Twitter转化追踪和订制受众政策的详细信息请访问[https://business.twitter.com/en/help/ads-policies/other-policy-requirements/policies-for-conversion-tracking-and-tailored-audiences.html](https://business.twitter.com/en/help/ads-policies/other-policy-requirements/policies-for-conversion-tracking-and-tailored-audiences.html)。\n' +
        '\n' +
        '#### *12.17 Urchin* 跟踪模块 *(UTM)* \n' +
        '\n' +
        'UTM标签并非工具。UTM作为营销活动及报告的自定义URL，可在Google Analytics等平台中查看。UTM标签添加于营销计划中的可见URL，用于了解链接的特定实例。UTM标签报告可在Google Analytics/Marketo（详见第12.7和12.9节）查看，我们可以藉此了解访问我们网站的用户——比如访问网站后点击的链接或注册参加的会议/活动。这些信息以聚合方式进行收集。利用UTM标签自定义URL，可让我们更好地了解营销活动情况，从而更好地为我们的受众服务。\n' +
        '\n' +
        '跟踪通过添加于URL的UTM参数进行。用户点击了添加UTM标签的URL后，基于参数设定，我们可跟踪到用户与该URL互动的最终来源。\n' +
        '\n' +
        '#### *12.18* Wistia/腾讯\n' +
        '\n' +
        'Wistia（Wistia, Inc., 17 Tudor Street, Cambridge, MA 02139, USA, [www.wistia.com](https://www.wistia.com/)）使用定制播放器和详细的数据分析提供制作、管理和分享商业视频的软件。我们网站采用Wistia托管视频。Wistia的特性包括一个集成CDN（内容传送网络）可确保更快的加载速度，并基于用户设备类型和网速提升质量控制。此外，Wistia还可添加字幕以提升视频的明晰性。每当您同我们网站的视频发生交互，Wistia就会自动接收和记录来自于您网站服务器日志的信息，包括您的IP地址、Cookie信息以及您请求的网页信息。\n' +
        '\n' +
        '如Wistia隐私政策所述，Wistia可能会以可识别的方式使用视频的使用信息，从而为视频所有者提供其发布视频的直接关联信息。此类信息可能包括一位用户观看了某一视频所有者的哪些视频、一位用户从某个视频哪里开始观看以及一位用户观看某一视频的次数。更多关于Wistia隐私政策的信息请访问 [https://wistia.com/privacy](https://wistia.com/privacy)。\n' +
        '\n' +
        '腾讯视频是一款与Wistia类似的视频播放器。由于Wistia在中国无法使用，我们网站为中国用户提供腾讯的视频托管服务。关于腾讯的隐私政策请访问：\n' +
        '\n' +
        '[https://intl.cloud.tencent.com/document/product/301/9247](https://intl.cloud.tencent.com/document/product/301/9247)。\n' +
        '\n' +
        '### **13. 社交媒体链接**\n' +
        '\n' +
        '您可在以下社交媒体查找ThoughtWorks ：\n' +
        '\n' +
        '● [Twitter](https://twitter.com/thoughtworks)\n' +
        '\n' +
        '● [Facebook](https://www.facebook.com/ThoughtWorks)\n' +
        '\n' +
        '● [Youtube](https://www.youtube.com/user/thoughtworks)\n' +
        '\n' +
        '● [LinkedIn](https://www.linkedin.com/company/thoughtworks)\n' +
        '\n' +
        '●[微博](https://www.weibo.com/login.php)\n' +
        '\n' +
        '● [Instagram](https://www.instagram.com/thoughtworks/)\n' +
        '\n' +
        '●[微信](https://web.wechat.com/)\n' +
        '\n' +
        '上述服务供应商为相关信息处理的控制者。\n' +
        '\n' +
        '### **14. 删除和存储条款**\n' +
        '\n' +
        'ThoughtWorks仅在必要的时候为达到阐明目的（除非本隐私政策另作说明）、且在适用法律或规定允许的情况下处理和存储您的个人信息。\n' +
        '\n' +
        '一旦信息存储的目的达成，或适用法律或规定下的相关存储条款到期，您的个人信息将按照本隐私政策以及其它适用的ThoughtWorks政策（如文件保存和/或记录管理政策）予以删除，但订立或执行合同所必需的个人信息除外。\n' +
        '\n' +
        '### **15. 信息当事人的权利**\n' +
        '\n' +
        '您拥有以下权利：\n' +
        '\n' +
        '● 知情查阅权；\n' +
        '\n' +
        '原则上，您有权根据GDPR第15条规定获取相关信息，也有权根据GDPR第15条第（3）款规定要求一份您个人数据的备份。\n' +
        '\n' +
        '● 更正或擦除（被遗忘）的权利；\n' +
        '\n' +
        '您有权对不正确个人信息进行更正。如果不再需要进一步处理、相关处理违反法律或您已经撤回了您所同意的，您还有权要求删除您的个人信息。\n' +
        '\n' +
        '● 限制处理的权利；\n' +
        '\n' +
        '如果发生GDPR第18条中的情形的，您有权对您的个人数据限制处理，如阻止当前的进一步处理。\n' +
        '\n' +
        '● 反对的权利；\n' +
        '\n' +
        '在您的个人数据基于GDPR第6条第（1）款e或f点被处理时，如果GDPR第21条中进一步要求的情形满足时，您有权反对该处理。\n' +
        '\n' +
        '● 数据携带的权利。\n' +
        '\n' +
        '在GDPR第20条范围内，您有权获取机器可读形式的个人数据，以便转发或传输给另一个控制者。\n' +
        '\n' +
        '您可发送邮件至privacyofficer@thoughtworks.com要求履行上述权利。\n' +
        '\n' +
        '在不妨碍其它任何行政和司法救济的情况下，若您认为对您个人信息的处理违反了适用的信息保护法律规定，您有权向监察机关，特别是在您常住地、工作单位所在地或侵权行为发生地的监察机关提出申诉。\n' +
        '\n' +
        '**16.** **变更**\n' +
        '\n' +
        '我们可能不定时更新本隐私政策，所有更新的具体时间将被注明。如本隐私政策有任何实质性或重大变更，我们将尽力以更为显眼的方式发布隐私政策变更通知。\n' +
        '\n' +
        '\n' +
        '\n' +
        '**附属内容**\n' +
        '\n' +
        '**招聘活动的补充说明**\n' +
        '\n' +
        '\n' +
        '\n' +
        '思特沃克（ThoughtWorks）在招聘网站、页面、微信招聘帐号、或微信小程序（以下统称“相关帐号”）提供关于公司的信息，并通过相关帐号收集应聘者或潜在应聘者的个人信息。 ThoughtWorks对个人信息的收集、使用、处理将依照ThoughtWorks的隐私政策（如上）处理。对于招聘活动，如果是通过微信的平台，请注意并了解微信的有关用户协议及隐私政策。同时，ThoughtWorks对招聘活动的个人信息收集及使用作出以下补充说明。\n' +
        '\n' +
        '**收集的信息**\n' +
        '\n' +
        '如果你在微信平台内同意添加相关帐号，ThoughtWorks将通过微信获得你的OpenID、 用户名、用户头像等信息。\n' +
        '\n' +
        '你通过相关帐号或ThoughtWorks的平台提供你的应聘申请时，我们将收集你在线上填写的、或在简历等文件上个人信息，包括但不限于你的教育背景、工作背景等。\n' +
        '\n' +
        '在评估你的工作申请时，你有可能需要完成一些测试或面试等流程，我们将在此过程中收集你的个人信息。\n' +
        '\n' +
        '**信息的使用者**\n' +
        '\n' +
        'ThoughtWorks在收集到你的个人信息后，有可能需要与ThoughtWorks关联公司或合作伙伴分享你的个人信息，以便用于招聘及应聘相关的目的。\n' +
        '\n' +
        '**第三方服务提供商**\n' +
        '\n' +
        'ThoughtWorks将使用到以下第三方服务提供商的服务，该等第三方服务提供商有可能为了你的求职应聘会接触或使用到你的个人信息。\n' +
        '\n' +
        '第三方服务提供商名单：\n' +
        '\n' +
        '​     北森\n' +
        '​     Greenhouse\n' +
        '​     AWS\n' +
        '​     Hackerrank\n' +
        '\n' +
        '上述第三方服务提供商有可能通过它们的关联企业或合作伙伴提供服务。 ',
}
class Privacy extends Component {
    render() {
        return (
            <Container style={{padding: 0}} className="Privacy">

                <Row style={{background: '#f4f4f4'}}>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Container style={{textAlign: "left", paddingTop: '1em', paddingBottom: '2em'}}
                                   dangerouslySetInnerHTML={{__html: markdown.toHTML(privacyContent.content)}}>

                        </Container>
                    </Col>
                </Row>
            </Container>
        );
    };

    componentWillMount() {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Privacy);
