import React, {Component} from 'react';
import './SolutionPage.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BreadNav from "../../components/bread_nav/BreadNav";
import Col from "react-bootstrap/Col";
import {Image, Row} from "react-bootstrap";


const industry = {
    car: {
        title: '汽车',
        img:"url('https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/car.jpeg')",
        description: '智能网联汽车是未来创新热点和产业发展制高点，但是智能化、网联化程度的加深带来的是汽车日益凸显的信息安全问题，我国自2015年开始，也已经在智能网联汽车相关行业内积极推进信息安全研究工作，从标准、法规、行业报告到咨询、测试、认证、产品，逐步形成由政府及行业组织主导、汽车和信息安全企业积极推动的产业链发展态势。如何保障汽车驾驶安全，解决便捷性与安全性之间的矛盾成为智能网联汽车发展的重要环节。',
        data: [
            {
                title: '车机安全',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png',
                description: '当前车载智能终端（车机）应用日益广泛，智能汽车已是大势所趋。在汽车生态体系中，车机由不同的供应商提供，因此对安全漏洞的追踪和确认十分困难。而车厂对发现的漏洞只能采用人工逆向分析技术，存在人工分析慢，产品迭代慢，会出现误判等问题。ThoughtWorks安全团队通过和国内多家大型车企以及智能设备生成厂商多年合作，积累了一套对二进制自动化漏洞扫描以及加固的解决方案。解决了传统的二进制漏洞检测难度大，检测周期长的问题。同时研发了一套漏洞自动化修复框架，在准确和快速地检测出二进制文件中漏洞的同时，还可以自动化修复漏洞，为业界的智能设备产品公司在快速迭代的过程中保驾护航。',
            }, {
                title: '自动驾驶',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E6%B1%BD%E8%BD%A6-%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B61.png',
                description: '自动驾驶是近年来最为火热的方向之一，无论是新兴的互联网公司，还是传统的知名汽车制造商，都投入了大量资金和研发人力。自动驾驶平台是一个软硬件高度耦合的复杂系统，从硬件设计到软件开发，从系统底层到应用上层，从业务逻辑到算法分析，横跨了众多的专业领域，对从业公司入局自动驾驶有很高的技术要求。ThoughtWorks作为专业服务咨询公司，在自动驾驶落地所需的硬件驱动、系统底层、算法应用等领域有丰富的从业经验和成功案例，与多个国内外头部整车企业研发部门在V2X车机系统、ADAS研发效能平台、感知数据采集与处理标注平台方面，有着深厚的合作，可为您的自动驾驶研发提供能力支持和技术保障。',
            }, {
                title: '数据隐私',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E6%B1%BD%E8%BD%A6-%E6%95%B0%E6%8D%AE%E9%9A%90%E7%A7%81.png',
                description: '对于跨国大型车企而言，不同区域车主数据可能保存在同一区域，因此会存在不同区域车主访问数据速度不一致的问题，另一方面不同地区数据管理法律法规对于数据安全的要求不同，隐私合规也是车企需要考虑的一个问题。数据隐私是ThoughtWorks安全团队的一个主攻方向，帮助客户更好地达到数据保护、隐私合规是我们的愿景。基于对不同地区法律法规（如网安法，等保合规，GDPR等）的了解，针对不同种类的数据，采用如加密、脱敏、合规迁移等不同的保护措施，结合具体的应用场景，为客户提供数据安全与隐私保护的解决方案。方案不仅仅涵盖技术实施，同时也包含了企业内部安全意识培训，安全流程建立等，进而为客户提供全套的解决方案。',
            }]
    },
    financial: {

        title: '金融',
        img:"url('https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/finance.jpeg')",
        description: '随着移动互联网、云计算等技术的发展，金融机构的业务环境愈加复杂，内部系统与外部空间的边界也愈加模糊。与此同时，网络攻击者的攻击手段却越来越丰富，攻击数量越来越多。面对0-Day、APT等新型攻击手段，传统安全以防御为核心的策略失效，金融机构的安全状况面临严峻挑战。',
        data: [
            {
                title: '迭代安全',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E6%8B%9B%E5%95%86%E9%93%B6%E8%A1%8C.png',
                description: '国内金融行业科技部门的一些团队已经采用了敏捷开发流程，但是迭代开发过程中相应的敏捷安全措施是空缺的，对于金融行业科技部门探索迭代内安全实践的需求，ThoughtWorks安全团队提供了调研及过程改进建议、开发团队成员及安全团队成员赋能两阶段的交付实践，提供了敏捷迭代安全内建实施指南以及内建安全赋能培训课程。使得客户在敏捷流程中安全实践得到落地实施，进而降低了应用安全风险，另一方面，开发团队安全意识能力得到提升。'
            },
            {
                title: '应用安全',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E4%B8%AD%E5%9B%BD%E9%93%B6%E8%A1%8C.png',
                description: '金融行业信息安全十分重要，尤其是客户信息，一旦客户信息发生泄漏，将会企业带来巨大的损失。金融企业中用户信息泄漏时有发生，反映出金融行业开发团队缺乏安全实践，应用存在安全隐患的风险较高，亟需采取措施作出改变。ThoughtWorks安全团队提供了敏捷项目内建安全指南以及BSI(内建安全体系)Master培养方案及课程，帮助提升开发团队的安全意识，培养出企业自己的BSI Master种子教练，使得团队安全成熟度得到提升，从而提升应用安全质量。'
            },
            {
                title: '交互式安全',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E4%B8%AD%E5%8E%9F%E9%93%B6%E8%A1%8C.png',
                description: '针对金融行业内典型的业务场景，结合常⻅的安全问题和安全漏漏洞，ThoughtWorks安全团队形成一整套安全需求设计规范，提供交互式安全需求识别工具，便于研发人员根据需求描述自动化、自助化地生成安全需求；便于信息安全中心实现安全需求管控、维护的线上化、标准化；助⼒实现系统全⽣命周期、全流程⻆度同步考虑安全工作，强化安全前移目标的达成。'
            }
        ]
    },
    cloud: {
        title: '通信与云计算',
        img:"url('https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/tongxin4.jpeg')",
        description: '随着信息通信技术与社会各行业的深度融合，能源、交通、水利、金融、公共服务、政务等各行业、各领域的信息化程度不断提高，对关键信息基础设施的依赖也日益加深。一旦关键信息基础设施遭到破坏，无疑会对社会运行产生巨大影响。另一方面，随着我国云计算应用的日益普及，用户不再仅仅考虑“如何上云”，而更关注“如何安全上云”，受近些年来云安全时间频发的影响，用户对云上的安全需求越发迫切。',
        data: [
            {
                title: '源码可信',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E9%80%9A%E4%BF%A13.png',
                description: '源码可信不仅是欧盟和国家的基本合规要求，也是软件规模极速扩张后面临的非常棘手的工程问题。一旦做不到源码级别的可信，后续安全检查和保障的工作量就会指数级别增长。ThoughtWorks安全团队利用自身在交付和运维领域的经验，帮助通信行业客户建立安全流水线，自动化代码分析、代码依赖管理，真正做到了one-track(单一代码溯源)，让安全防护和问题排查变得更高效和准确。'
            },
            {
                title: '隐私保护',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E9%80%9A%E4%BF%A12.png',
                description: '对于通信行业企业来说，用户隐私已经成为当前各类安全议题的常客，特别是欧盟颁布了GDPR（通用数据保护条例）。ThoughtWorks安全团队可以帮助客户搭建一套隐私管理平台来处理符合GDPR规范的隐私信息。该平台不仅可以自动化地处理用户隐私信息的登记和分类，还可以按照规范自动销毁用户信息，大大减少了人工处理隐私信息的工作量。GDPR作为目前最为严格个人隐私保护条例，合规意味着可以很方便地适应到全球其它地区的规范条例中。'
            },
            {
                title: '终端数据安全',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E9%80%9A%E4%BF%A11.png',
                description: '大于大型企业来说，企业创新和工作环境管控往往呈现一定程度的矛盾，如何在保护企业商业数据的同时最大限度保证员工的创新自由是一个很有趣的挑战。随着云计算的成熟，企业计算环境也变得空前的复杂。ThoughtWorks安全团队可以帮助客户开发一套终端环境管理平台，包括审计模块和数据处理中心，理念是以对用户透明的方式进行敏感数据管控，同时借用数据平台不断对搜集到的数据进行学习，可以随时响应变化。'
            }, {
                title: '云安全',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E9%80%9A%E4%BF%A14.png',
                description: '任何公有云最重要也是最核心的组件主要包括三个部分：计算、存储和身份，对应到亚马逊云就是EC2，S3和IAM。IAM作为云平台上的底层服务，管理着公司内外部的所有研发用户对资源和服务的操作权限。ThoughtWorks安全团队可以帮助客户搭建基于私有云平台建立的IAM底层服务，定制精细管理规则，通过SSO统一多部门和服务的登录入口，对标AWS和Azure的IAM，支撑大型企业内部所有云计算的需求，同时包装成产品对外进行输出，也就是针对企业的公有云搭建技术。'
            }
        ]
    },
    sales: {
        title: '零售与互联网',
        img:"url('https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/sales.jpeg')",
        description: '随着电子商务的快速扩张，零售商成为网络攻击的首要目标。零售商专注于无障碍个性化购物体验，有时亦意味着网络安全可能被人乘虚而入，加上越来越多人使用云端系统及web应用程序，使其容易成为攻击目标。由于开发、测试和维护稳固的网络安全措施需要时间及人力，继而影响到盈亏，所以不少零售商均将网络安全视为一项额外成本，可是这种思维方式在日后可能会换来更大代价。当客户资讯或其他重要的公司资料遭盗窃或勒索，招致的后果不仅是经济损失，更甚者可能为品牌声誉带来灾难性影响。',
        data: [
            {
                title: '内建安全体系',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E9%9B%B6%E5%94%AE%E4%B8%8E%E4%BA%92%E8%81%94%E7%BD%91.png',
                description: '全球餐饮连锁巨头通过数字化转型，拓展全球业务版图、打造智能化数字消费体验。在中国区打造适用中国市场和用户操作习惯的app，为近千万的活跃用户提供优质、温馨、独特的消费体验。其app提供移动支付、充值卡管理、会员管理等优化完善线下用户体验，同时采用个性化数字营销、实时计算等方式促进业务持续增长。ThoughtWorks安全团队可以为客户构建内建安全体系，将安全实践应用于软件开发的各个阶段，在响应业务快速变化的同时，安全为业务持续增长保驾护航。在app技术开发中，安全团队构建app安全基建，保证各个业务功能满足安全需求。'
            }
        ]
    },
    logistics: {
        title: '物流与仓储',
        description: '',
        data: []
    },
    data: {
        title: '数据安全',
        img:"url('https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/bsi6.png')",
        description: '伴随欧盟的通用数据保护条例和新的网络安全法的颁布，数据安全已经成为每个企业和IT从业者都必须要关注的一个话题。依赖于传统控制论基础上的主动防御和合规理论正在逐渐丧失其领导地位，要解决数据安全的问题，需要有一个场景化的方式，体系化的方案。数据安全对于组织和个人来说都是有价值且是必须的事情。Build security in our DNA, 企业需要不断增强自身在安全上的意识和理解。',
        data: [
            {
            title: '数据合规',
            img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/data1.jpeg',
            description: 'GDPR是在欧盟法律中对所有欧盟个人关于数据保护和隐私的规范，涉及了欧洲境外的个人数据出口。GDPR 主要目标为取回个人对于个人数据的控制，以及为了国际商务而简化在欧盟内的统一规范。GDPR的规范要求企业从整个公司乃至具体业务系统和产品都能够遵守一定的规范，其业务包含数据治理、数据泄露保护、数据出境等具体方面。ThoughtWorks安全团队将隐私保护作为一个单独的安全方向，结合不同国家地区的隐私保护法律法规，通过保护数据机密性、数据脱敏等方法，结合自动化等手段，提供一套高效可落地的隐私保护解决方案。该解决方案主要面对如车企、金融、保险、零售、服务等国际化企业，提供数据在不同区域的保护与隐私合规。\n'
        },{
                title: '可搜索加密',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/data2.jpg',
                description: '可搜索加密是一种密文检索的解决方案，其主要解决的问题是在数据高机密的场景下，如何保证数据的正常检索使用。可搜索加密与同态加密类似，都是在数据加密后的信息上进行操作，使得数据本身的信息在操作中不会泄露。可搜索加密基于底层密码学的应用，在加密数据的同时，生成同样加密的索引键，通过索引键的特殊构造达到数据的搜索。其一般的应用场景是在高机密的数据安全要求下，在数据存储是被字段级加密的情况下，同时需要保持一定的数据可用性。ThoughtWorks安全团队可以为客户提供基于可搜索加密的解决方案，帮助客户在高机密的场景下保证数据可用性。'
            },{
                title: '安全多方计算',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/data3.png',
                description: '安全多方计算是密码学新兴的研究领域，其主要解决了在去中心化、没有可信第三方的情况下，如何在保证各自隐私的情况下进行一些数据联合分析。安全多方计算为一些交易、通信、社交等领域提供了一些特殊场景下新的解决方案。ThoughtWorks安全团队紧跟技术前沿，将安全多方计算作为一个数据安全方向新的发力点，我们采用数据分片、同态加密、不经意传输等技术，为银行、支付、社交领域提供新的安全特性。同时安全多方计算也可以与区块链技术结合，进一步加强在去中心化的场景中的隐私保护。\n'
            },
        ]
    },
    identify: {
        title: '身份安全',
        description: ' Identity and Access Management (IAM) 是进行身份管理，访问控制的服务。IAM系统的可信目标是管理用户的身份与权限，给每一位用户赋予身份，该身份在访问系统的全身份周期都受到维护、授权、审计等。身份管理访问控制是每一个企业的企业安全都必须重视的一环，一个好的IAM系统，可以为企业带来更安全的服务，帮助企业提高生产力，安全地管理客户、合作伙伴、供应商、内部员工的身份与权限，可以提升用户的工作效率与降低运营成本。',
        data: []
    },
    embed: {
        title: '嵌入式系统与物联网',
        img:"url('https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/rtos.png')",
        description: '近年来，互联网技术的发展，改变着电子设备、智能终端的形态、功能。嵌入式设备有网络化、功能复杂化的趋势，以及嵌入式碎片化极其严重，各种各样的芯片型号，同样的代码在裸机环境下适配不同的硬件难度非常大。这也就会导致逻辑代码会过度依赖于底层软件，使得越来越多的、过去可以用裸奔实现的嵌入式产品，产生了应用操作系统的需求。芯片成本的连续下降，以及MCU性能和内存资源的迅速提高，又为大面积应用操作系统提供了物质基础。回顾裸机时代的开发，问题也渐渐显现出来。\n',
        data: [
            {
                title: 'RTOS研发',
                img: 'https://raw.githubusercontent.com/CenoOS/Ceno-RTOS/master/docs/assets/arch2.png',
                description: '在嵌入式应用领域，很多场合对系统的实时性要求严格，因此操作系统的选择要基于实时系统。\n' +
                    '\n' +
                    'RTOS系统强调实时性、短时间内响应，满足物联网高速、实时、可确定性、可靠性等诸多优势，同时也是实时商用多任务OS，追求系统资料的最大利用率，未来前途广阔；RTOS代码量少，是编写管理代码的最佳系统。相比通用Linux系统包含调度、文件、网络、驱动等完整代码,RTOS仅包含调度、同步、互斥、时钟等代码，并能根据应用需求实际增加，大大减少编写和管理工作量。' +
                    'ThoughtWorks安全团队在嵌入式系统安全研发深耕多年，研究方向包括嵌入式Linux内核/RTOS/SoC芯片，研究内容为可信操作系统裁剪定制、系统安全加固、系统监控、系统加密、通讯协议软硬件加密等。目前，自研的IOT-RTOS/Linux 安全模块等已经在研发阶段。'
            },
        ]
    },
    trust: {
        title: '可信计算',
        description: '',
        data: []
    },
    buildin: {
        title: '内建安全',
        img:"url('https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/bsi.jpg')",
        description: 'BSI(Build Security In)是在整个软件开发生命周期中的每一个阶段引入安全的思考和实践，遵循安全左移、职责共享的思想，帮助团队构建高度安全的软件，满足不同方面的安全需求，并降低开发成本。BSI中的指导、最佳实践、工具和流程是我们结合敏捷软件交付，在内部用于构建更安全的产品和服务的实践。随着我们对云、物联网和人工智能等新业务技术的增长，我们也在不断更新BSI实践。',
        data: [
            {
                title: '静态应用安全测试',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/SAST.jpg',
                description: '源码安全扫描经过多年的发展，已经变得相当成熟，是广为人知的一个安全实践。\n' +
                    '源码安全扫描，也叫做静态应用安全测试，英文Static Application Security Test，简称SAST，指通过工具对源代码进行安全检查，发现源代码里面的安全问题。\n' +
                    'ThoughtWorks安全团队遵循最佳实践的原则，一直在更新这个实践。一方面，得益于自动化，它可以让开发团队以更少的工作量付出，更快速地获取到关于源码安全质量的反馈，同时还降低了开发团队对于安全专业技能的要求。\n' +
                    '另一方面，由于源码安全扫描最早可以在开发人员编写代码的时候就进行，因此安全问题能够相对更早地暴露出来，从而降低问题修复成本。\n'
            },{
                title: '依赖安全检查',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/yilaijiancha.jpg',
                description: '现如今的应用程序里，有80%左右的代码并不是开发团队自己写出来的，而是来自于应用程序所使用的第三方组件或者库。尽管我们可以采取很多措施，诸如威胁建模、源码安全扫描等方法来确保团队自己开发的20%的源码的安全质量，但是对于剩下的这些不是由开发团队开发出来的、占比达到80%的依赖，它们如果存在安全漏洞，则同样可能导致整个应用程序受到影响。\n' +
                    'ThoughtWorks安全团队在依赖安全检查方面进行了深入的探索，除了确保自己写出来的代码的安全质量，同时关注依赖的安全性，可以主动排查它们是否有安全漏洞，并及时进行处理。\n\n'
            },{
                title: '动态应用安全测试\n',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/DAST.jpg',
                description: '动态应用安全测试，英文全称叫做Dynamic Application Security Testing，简称DAST。它主要是用安全扫描工具来扮演黑客的角色，向目标应用程序发起各种各样的请求并观察应用程序返回的响应，并以此来判断应用程序是否存在安全漏洞。本质而言，这是一种黑盒测试方法。\n' +
                    '随着测试输入的变化，应用程序的输出也在动态地变化，所以就被叫做了动态应用安全测试。\n' +
                    'ThoughtWorks安全团队会在CI/CD 部署之后，随着持续部署的节奏，输出持续动态检查，确保每一次部署都通过主要的安全动态检查，实现安全左移。'
            }
        ]
    },
};

class SolutionPage extends Component {

    render() {
        let solution = 'financial';
        if(this.props.location) {
            solution = this.props.location.state.params;
        }

        return (
            <Container style={{padding: 0}} className="SolutionPage">
                <BreadNav
                    bg={industry[solution].img}
                    bread={""}
                    title={industry[solution].title}
                    subtitle={industry[solution].description}
                />
                {
                    industry[solution].data.map((item, index) => {
                        return this.renderSolutionBlock(item, index);
                    })
                }
            </Container>
        );
    };

    renderSolutionBlock(item, index) {
        return <Row style={{background: index % 2 === 0 ? '#fff' : '#fafafc', paddingTop: '1em', paddingBottom: '1em'}}>
            <Col md={2}></Col>
            <Col md={8} style={{paddingLeft:'2em',paddingRight:'2em'}}>
                <Row>
                    <Col md={7} style={{padding: '1em', textAlign: 'left', paddingRight: '2em'}}>
                        <h3 style={{marginTop:'1em'}}><span style={{color:'#fff',background:'rgb(223, 102, 159)',padding:'0.1em'}}>0x0{index + 1}</span>
                            <span style={{border:'solid 1px rgb(223, 102, 159)',padding:'2px',color:'rgb(223, 102, 159)'}}>{item.title}</span></h3>
                        <h5 style={{fontSize: '0.9rem',lineHeight: '2rem',marginTop:'2.5rem'}}>{item.description}</h5>
                    </Col>
                    <Col md={5} style={{padding: '1em', textAlign: 'right',paddingTop:'7.5em'}}>
                        <Image src={item.img} style={{width: '100%',height:'80%'}} rounded/>
                    </Col>
                </Row>
            </Col>
        </Row>
    }

    componentWillMount() {
    }

    componentDidMount() {
        window.scrollBy(0,-8000);
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SolutionPage);
