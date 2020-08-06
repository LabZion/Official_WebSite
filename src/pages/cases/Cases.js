import React, {Component} from 'react';
import './Cases.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import BreadNav from "../../components/bread_nav/BreadNav";
import {Image, Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";

const cases = {
    car: {
        title: '汽车企业',
        img:'https://dynamic.thoughtworks.com/landing_pages/hero_banner_image_desktop-3f455d6dfe5e7180777c2f2fd751dfd5.jpeg',
        description: '智能网联汽车是未来创新热点和产业发展制高点，但是智能化、网联化程度的加深带来的是汽车日益凸显的信息安全问题，我国自2015年开始，也已经在智能网联汽车相关行业内积极推进信息安全研究工作，从标准、法规、行业报告到咨询、测试、认证、产品，逐步形成由政府及行业组织主导、汽车和信息安全企业积极推动的产业链发展态势。如何保障汽车驾驶安全，解决便捷性与安全性之间的矛盾成为智能网联汽车发展的重要环节。',
        data: [
            {
                customer: '国内某汽车行业巨头',
                img:'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png',
                description: '我们的客户是中国四大汽车制造商之一，我们提供了二进制自动化漏洞扫描以及加固的解决方案,为业界的智能设备产品公司在快速迭代的过程中保驾护航。',
                content:'## 某汽车行业巨头车机安全漏洞扫描及加固案例  \n' +
                    '>  \n' +
                    '###客户简介  \n' +
                    '\n' +
                    '我们的客户是中国四大汽车制造商之一，主要业务包括整车研发、生产和销售，正积极推进新能源汽车、互联网汽车的商业化，并开展智能驾驶等技术研究和产业化探索。  \n' +
                    '\n' +
                    '###业务挑战  \n' +
                    '\n' +
                    '当前车载智能终端（车机）应用日益广泛，智能汽车已是大势所趋。在整个汽车生态体系中，车机由不同的供应商提供，每个车机又由很多的组件组装而成。在这个由多个供应商组成的生态系统中，对安全漏洞的追踪和确认变的非常的困难。而且车机厂商大多关注于产品功能，忽视产品安全。而安全威胁会给智能汽车带来严重后果，甚至损害整车厂商品牌。对于造成厂而言，往往在最终拿到的只是一堆的二进制文件，那如何在没有源码的前提下，发现其中存在的漏洞，目前业界的做法都是采用人工逆向分析技术，去发现二进制中的漏洞。但是存在的问题是，当设备很多的时候，人工分析太慢，产品迭代太慢，还可能出现误判。企业急需打破安全监测供需瓶颈。  \n' +
                    '\n' +
                    '###解决方案  \n' +
                    '\n' +
                    'ThoughtWorks安全BU通过和国内多家大型车企以及智能设备生成厂商的多年合作，利用积累的经验为客户提供了一套对二进制自动化漏洞扫描以及加固的解决方案。解决方案有2个亮点：  \n' +
                    '\n' +
                    '#####1、二进制漏洞自动化扫描  \n' +
                    '\n' +
                    '首先会自动化的进行信息采集与评估，采用一些手段，自动化的从二进制的固件中分析出系统架构，组件列表，组件版本等信息。并且会自动化爬取对应的漏洞列表，以及补丁等信息。有了这些信息后，会依据符号执行，编译原理，二进制分析等，自动化的从固件中提取是否存在对应的漏洞，形成漏洞报告。  \n' +
                    '\n' +
                    '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E4%B8%8A%E6%B1%BD%E6%A1%88%E4%BE%8B.png#width-80)  \n' +
                    '\n' +
                    '#####2、漏洞自动化加固  \n' +
                    '\n' +
                    'TW安全团队自主研发的加固框架，采用inline hook的技术，会对固件中确认存在的漏洞做修补，在固件运行时做漏洞动态拦截。该框架同时支持arm32和arm64的平台，支持如缺陷函数拦截、修复函数管理注册、内核符号导出、地址随机化绕过等功能。  \n' +
                    '\n' +
                    '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E4%B8%8A%E6%B1%BD%E6%A1%88%E4%BE%8B2.png#width-80)  \n' +
                    '\n' +
                    '###客户价值  \n' +
                    '\n' +
                    'Thoughtworks安全BU对二进制自动化漏洞扫描以及加固的解决方案解决了传统的二进制漏洞检测难度大，检测周期长的问题。同时研发了一套漏洞自动化修复框架，在准确和快速的检测出二进制文件中漏洞的同时，还可以自动化的修复漏洞，为业界的智能设备产品公司在快速迭代的过程中保驾护航。'
            },
            {
                customer: '国际汽车行业巨头',
                img:'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png',
                description: '我们的客户是世界最大跑车制造商，我们在不影响客户现有业务的同时，在严格符合相关国家法律的基础上，设计了三阶段迁移的方案，完美实现了数据迁移的工作。',
                content:'## 国际汽车行业巨头数据存储本地化案例\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    '> \n' +
                    '\n' +
                    '### 客户简介\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    '我们的客户是一家规模庞大、历史悠久的跑车制造商，也是非常具有盈利能力的汽车制造商之一。近年来车款多元化后，我们的客户不仅销售量高于其它汽车平台成为世界最大跑车制造商，实际巨额利润和厂房规模，已经超过其他传统名牌超跑厂商总和，年销售额过千亿元。\n' +
                    '\n' +
                    '### 业务挑战\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    '随着国际业务的发展，与不同地区车主的增加，管理不同区域车主数据的同时，满足不同地区数据管理法律法规的要求成为了保时捷乃至其它国际车企在数字化战略的一个挑战。2017年实行的《中华人民共和国网络安全法》第37条规定： “关键信息基础设施的运营者在中华人民共和国境内运营中收集和产生的个人信息和重要数据应当在境内存储。因业务需要，确需向境外提供的，应当按照国家网信部门会同国务院有关部门制定的办法进行安全评估；法律、行政法规另有规定的，依照其规定。”也就是说，在中国境内运营时收集的个人信息应在中国境内存储。我们需要基于AWS平台，将数据和DevOps架构迁移到中国。在保护隐私数据的前提下，将车主信息从中国同步回德国，用于商业分析。因为团队成员组成复杂来自不同国家和地区。客户stakeholder众多，仅PO就有三个，因此项目十分复杂。\n' +
                    '\n' +
                    '### 解决方案\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    'ThoughtWorks安全团队为客户设计了通过三个阶段来进行数据迁移的方案，在不影响现有业务的基础上对方案进行了实施。在第一阶段开始之前，我们对服务进行了虚拟化，将服务从机房上到了AWS上，然后将数据从Idap改到dynamodb。\n' +
                    '\n' +
                    '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/cases/poershouche0.png)\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    '第一阶段，实现中国只读备份。当中国数据更新时，异步备份到中国，中国提供只读服务。\n' +
                    '\n' +
                    '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/cases/poershouche1.png)\n' +
                    '\n' +
                    '第二阶段，实现中国读写备份。直接在中国进行数据读写，并将修改异步到国外，保证国外数据分析的完整性。\n' +
                    '\n' +
                    '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/cases/poershouche2.png)\n' +
                    '\n' +
                    '第三阶段，达到合规就绪状态。当需要进行合规时，直接暂停中国数据到德国的备份。\n' +
                    '\n' +
                    '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/cases/poershouche3.png)\n' +
                    '\n' +
                    '### 客户价值\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    'Thoughtworks安全BU在对客户的数据进行迁移的过程中克服了Ldap与Dynamodb异构数据库的切换、Serverless下的mTLS实现、Serverless下的JMS异步消费、数据同步中的exactly once保证等问题，为不同地区与国家的数据合规、跨区域数据的透明迁移、AWS Global与CN的数据异地备份等问题积累了丰富的经验，在不影响客户现有业务的同时，在严格符合相关国家法律的基础上，完美实现了数据迁移的工作。'
            },
        ]
    },
    cloud: {
        title: '通信企业',
        description: '随着信息通信技术与社会各行业的深度融合，能源、交通、水利、金融、公共服务、政务等各行业、各领域的信息化程度不断提高，对关键信息基础设施的依赖也日益加深。一旦关键信息基础设施遭到破坏，无疑会对社会运行产生巨大影响。另一方面，随着我国云计算应用的日益普及，用户不再仅仅考虑“如何上云”，而更关注“如何安全上云”，受近些年来云安全时间频发的影响，用户对云上的安全需求越发迫切。',
        data: [
            {
                customer: '某通信行业巨头',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E9%80%9A%E4%BF%A13.png',
                description: '我们的客户是全球领先的下一代电信网络解决方案供应商，我们提供了身份认证及权限管理方案，帮助企业实现高效、统一管理身份信息和权限信息，助力企业提高生产效率。',
                content:'## 某通信行业巨头私有云平台身份认证与权限管理系统开发案例\n' +
                    '###客户简介\n' +
                    '>我们的客户是全球领先的下一代电信网络解决方案供应商，致力于向客户提供创新的满足其需求的产品、服务和解决方案，为客户创造长期的价值和潜在的增长。在全球建立了100多个分支机构，营销及服务网络遍及全球，能够为客户提供快速、优质的服务。目前，产品和解决方案已经应用于全球100多个国家，以及31个全球前50强的运营商，服务全球超过10亿用户。\n' +
                    '\n' +
                    '>###业务挑战\n' +
                    '>随着公司业务逐步规划上云并面向互联网开放，传统企业网络安全边界开始变得模糊，安全高效的基于云的身份认证与访问控制平台将成为未来应用访问的“边界”，在这种情况下，传统企业内网的身份验证与IAM系统已无法满足业务上云后日益发展的需求。因为企业的业务场景极其复杂，内部私有云已无法支撑所有的业务系统，但市场上的公有云也无法满足企业内部的要求与限制。如何将内部云与公有云结合使用，符合企业内部的合规要求，使用公有云与私有云的能力是企业亟需解决的一个问题。\n' +
                    '>>![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/cases/%E4%BA%91%E5%AE%89%E5%85%A8.png#width-80)\n' +
                    '\n' +
                    '###解决方案\n' +
                    '>Thoughtworks安全BU面向除了客户企业员工以外的合作伙伴、供应商、客户和消费者提供移动办公套件身份认证服务。服务包括标准的SAML/OAuth等Web、移动应用认证和授权协议，提供基于多因子和风险控制分析的强身份认证，集成社交账号和企业账号联邦认证，并实现多租户管理等。核心价值包括以下几点：\n' +
                    '#####1、\tSSO单点登录\n' +
                    '采用业内标准协议实现SSO单点登录,为企业所有部门提供统一的登录入口，打通部门间的认证壁垒，减少用户操作，提高生产效率。\n' +
                    '>![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/cases/SSO.png#width-80)\n' +
                    '#####2、\tIAM系统\n' +
                    '  搭建IAM服务，精细管理研发人员在云平台上对各类资源和服务的访问权限，比如，规定某员工必须在指定IP下的特定时间段购买某种类型的虚拟机。\n' +
                    '>![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/cases/IAM.png#width-80)\n' +
                    '#####3、\t产品化\n' +
                    '在满足企业自身需求的基础上，将系统产品化，供更多的企业来使用身份认证和权限管理的服务。\n'+
                    '>![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E4%BA%A7%E5%93%81%E5%8C%96.png#width-80)\n' +
                    '###客户价值\n' +
                    '>Thoughtworks安全BU开发的身份认证及权限管理平台，拥有安全性高、扩展能力良好的特点，针对企业内部拥有多个子系统，员工使用各个系统时需要使用不同的用户信息登录，企业期望实现单点登录，统一认证入口的需求，以及企业需要细粒度管控员工对资源和服务的访问权限的需求，但不局限于云平台和公司规模，帮助企业实现高效、统一管理身份信息和权限信息，助力企业提高生产效率，适合于政府、运营商、企业、金融、军队、医疗、教育、制造业等大型企事业单位。\n' +
                    ' \n' +
                    '\n'
            },
            {
                customer: '某通信行业巨头',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E9%80%9A%E4%BF%A11.png',
                description: '我们的客户是全球领先的下一代电信网络解决方案供应商，我们提供了智能信息资产管控软件，通过定制化开发，帮助企业实现系统级别的监控与审计。',
                content:'## 某通信行业巨头信息资产安全审计案例\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    '> \n' +
                    '\n' +
                    '### 客户简介\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    '我们的客户是全球领先的下一代电信网络解决方案供应商，致力于向客户提供创新的满足其需求的产品、服务和解决方案，为客户创造长期的价值和潜在的增长。在全球建立了100多个分支机构，营销及服务网络遍及全球，能够为客户提供快速、优质的服务。目前，产品和解决方案已经应用于全球100多个国家，以及31个全球前50强的运营商，服务全球超过10亿用户。\n' +
                    '\n' +
                    '### 业务挑战\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    '一方面，客户的旧版本软件只能监控和审计特定软件，无法达到系统级别的监控，且使用体验影响开发人员的工作效率。另一方面，企业对内部软件有严格的安全标准，不愿使用业界现有软件，希望通过自研的方式根据业务需求定制化开发。其次，客户需要的软件需要兼容多PC平台，包括Linux、Windows、macOS。\n' +
                    '\n' +
                    '### 解决方案\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    'ThoughtWorks安全团队自主研发了智能信息资产管控软件系统。在用户态，支持关键信息资产的访问策略及资源敏感度自定义，支持信息资产的安全行为审计，支持敏感资产的非预期访问拦截。在内核态，通过自主研发的驱动程序，基于inline hook审计文件访问操作，基于netfilter审计网络数据包，扩展了操作系统的安全能力。\n' +
                    '\n' +
                    '### ![img](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/cases/shenjianli.png)\n' +
                    '\n' +
                    '### 客户价值\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    'Thoughtworks安全BU研发的智能信息资产管控软件改进了客户的旧版本软件只能监控和审计特定软件，无法达到系统级别的监控的问题。另一方面，通过定制化开发来满足业务需求，提供了兼容多PC平台的软件，完美地解决了客户的问题。'
            },
            {
                customer: '某通信行业巨头',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E9%80%9A%E4%BF%A11.png',
                description: '我们的客户是全球领先的下一代电信网络解决方案供应商，我们提供了内部PC终端监控，助力企业大幅度性能提升，为员工提供无障碍体验。',
                content:'## 某通信行业巨头内部PC终端监控系统案例\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    '> \n' +
                    '\n' +
                    '### 客户简介\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    '我们的客户是全球领先的下一代电信网络解决方案供应商，致力于向客户提供创新的满足其需求的产品、服务和解决方案，为客户创造长期的价值和潜在的增长。在全球建立了100多个分支机构，营销及服务网络遍及全球，能够为客户提供快速、优质的服务。目前，产品和解决方案已经应用于全球100多个国家，以及31个全球前50强的运营商，服务全球超过10亿用户。\n' +
                    '\n' +
                    '### 业务挑战\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    '作为全球领先的通信巨头，我们的客户对内部员工的资源访问权限有着严格的监控机制。在为员工配备的电脑设备上，企业内置了安全监控模块，管理员可以根据员工的角色配置相应的资源访问权限。同时，系统会自动收集员工在终端的行为和数据访问记录，作为企业内部流程审计和行为分析的大数据支持。一方面，旧的系统只能监控特定软件，无法达到系统级别的监控，且使用体验影响开发人员的工作效率。另一方面，企业不愿使用业界现有软件，希望通过自研的方式根据业务需求定制化开发。为此，我们需要设计出一套方案来满足获取多种资源数据，包括网络，文件，USB，串口等的需求，实现对于不同角色可以定制资源的权限规则，消除性能卡顿，提供无障碍体验，在多PC平台上实现权限控制系统，包括Linux，Windows，macOS等主流平台，并支撑企业内部数万用户量。\n' +
                    '\n' +
                    '### 解决方案\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    'ThoughtWorks安全团队为客户设计了PC端资源访问监控与审计的系统，针对文件系统和网络的访问进行监控，并且记录用户行为，用于企业内部的审查。\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    '![huaweijiankongxitong](/Users/wuyunfeng/Desktop/Official_Website/Official_WebSite/public/picture/cases/huaweijiankongxitong.png)\n' +
                    '\n' +
                    '我们为客户搭建了全新的ICPM，对企业内部的员工PC端进行管控。当员工访问文件、网络、USB、串口时，系统自动拦截不合法资源或操作。与此同时，我们设计的监控系统不局限于特定软件，而是系统界别收集员工在PC端操作的行为和内容，发送到其他内部系统，用于对内部安全的审计。\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    '### 客户价值\n' +
                    '\n' +
                    '\n' +
                    '\n' +
                    'Thoughtworks安全BU研发的PC终端监控系统适用于企业内部大规模使用PC端工作，重视资源的安全与保护，企业对不同角色员工的访问权限有定制化需求，以及企业想要自定义内部资源类型，比如定义哪些属于敏感信息等场景。助力企业大幅度性能提升，为员工提供无障碍体验。'
            },
        ]
    },

};

class Cases extends Component {
    render() {
        let industry = this.props.location.state.params;
        return (
            <Container style={{padding: 0}} className="Cases">
                <BreadNav
                    bg={"url('https://static.thoughtworks.com/images/contact-us/contact-us-banner-1.jpg')"}
                    title={cases[industry].title}
                    subtitle={cases[industry].description}
                />
                <Row style={{background: '#f4f4f4'}}>
                    <Col md={2}></Col>
                    <Col md={8} style={{marginTop: '2em'}}>
                        <Row>
                            <Col md={12} style={{textAlign: 'left'}}>
                                <h3>客户案例</h3>
                                <Container style={{textAlign: "left", padding: 0, paddingTop: '1em', paddingBottom: '2em'}}>
                                    <Row>
                                        {this.renderCases()}
                                    </Row>
                                </Container>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    };

    renderCases() {
        let industry = this.props.location.state.params;
        return cases[industry].data.map((item, index) => {
            return <Col md={6} sytle={{background: '#fff'}}>
                <Link to={{
                    pathname: '/case-detail',
                    state: {params: item}
                }}>
                    <Image src={item.img} style={{width: '100%'}}/></Link>
                <Container style={{paddingTop: '1em', paddingBottom: '0.1em', background: '#fff', marginBottom: '2em'}}>
                    <h5>{item.customer}</h5>
                    <p>{item.description}</p>
                </Container>
            </Col>
        });
    }

    componentWillMount() {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Cases);
