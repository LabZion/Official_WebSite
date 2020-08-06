import React, {Component, Fragment} from 'react';
import './Case.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";

class Case extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Row style={{background: "#fff",}}>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Container style={{textAlign: "left", paddingTop: '2em', paddingBottom: '2em'}}>
                            <Row style={{marginTop: '-8em'}}>
                                <Col md={4}>
                                    <Image style={{width: "100%", zIndex: '-1'}}
                                           src={"https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png"}/>

                                </Col>
                                <Col md={4}>
                                    <Image style={{width: "100%"}}
                                           src={"https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E9%80%9A%E4%BF%A13.png"}/>
                                </Col>
                                <Col md={4}>
                                    <Image style={{width: "100%"}}
                                           src={"https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/cases/medicine.png"}/>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>

                <Row style={{background: "#fff",}}>
                    <Col md={2}></Col>
                    <Col md={8} style={{marginLeft: '1em'}}>
                        <Container style={{textAlign: "left", paddingBottom: '2em',}}>
                            <Row>
                                <Col md={4}>
                                    <div style={{
                                        width: '100%',
                                        background: '#fff',
                                        boxShadow: '0 5px 56px 0 rgb(35 30 29 / 12%)',
                                        marginTop: '-4em',
                                        paddingLeft: '2em'
                                    }}>
                                        <h4 style={{paddingTop: "1em"}}><strong>汽车行业巨头</strong></h4>
                                        <p style={{paddingRight: '1.2em'}}>我们提供了二进制自动化漏洞扫描以及加固的解决方案,为业界的智能设备产品公司在快速迭代的过程中保驾护航。</p>
                                        <Link to={{
                                            pathname: '/case-detail',
                                            state: {
                                                params: {
                                                    customer: '某汽车行业巨头',
                                                    img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png',
                                                    description: '我们的客户是中国四大汽车制造商之一，我们提供了二进制自动化漏洞扫描以及加固的解决方案,为业界的智能设备产品公司在快速迭代的过程中保驾护航。',
                                                    content: '## 某汽车行业巨头车机安全漏洞扫描及加固案例  \n' +
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
                                            }
                                        }}><p><i><b>了解更多</b></i></p></Link><br/>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div style={{
                                        width: '100%',
                                        background: '#fff',
                                        boxShadow: '0 5px 56px 0 rgb(35 30 29 / 12%)',
                                        marginTop: '-4em',
                                        paddingLeft: '2em'
                                    }}>
                                        <h4 style={{paddingTop: "1em"}}><strong>通信行业巨头</strong></h4>
                                        <p style={{paddingRight: '1.2em'}}>我们提供了身份认证及权限管理方案，帮助企业实现高效、统一管理身份信息和权限信息，助力企业提高生产效率。</p>
                                        <Link to={{
                                            pathname: '/case-detail',
                                            state: {
                                                params: {
                                                    customer: '某通信行业巨头',
                                                    img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E9%80%9A%E4%BF%A13.png',
                                                    description: '我们的客户是全球领先的下一代电信网络解决方案供应商，我们提供了身份认证及权限管理方案，帮助企业实现高效、统一管理身份信息和权限信息，助力企业提高生产效率。',
                                                    content: '## 某通信行业巨头私有云平台身份认证与权限管理系统开发案例\n' +
                                                        '###客户简介\n' +
                                                        '>我们的客户是全球领先的下一代电信网络解决方案供应商，致力于向客户提供创新的满足其需求的产品、服务和解决方案，为客户创造长期的价值和潜在的增长。在全球建立了100多个分支机构，营销及服务网络遍及全球，能够为客户提供快速、优质的服务。目前，产品和解决方案已经应用于全球100多个国家，以及31个全球前50强的运营商，服务全球超过10亿用户。\n' +
                                                        '\n' +
                                                        '>###业务挑战\n' +
                                                        '>随着公司业务逐步规划上云并面向互联网开放，传统企业网络安全边界开始变得模糊，安全高效的基于云的身份认证与访问控制平台将成为未来应用访问的“边界”，在这种情况下，传统企业内网的身份验证与IAM系统已无法满足业务上云后日益发展的需求。因为企业的业务场景极其复杂，内部私有云已无法支撑所有的业务系统，但市场上的公有云也无法满足企业内部的要求与限制。如何将内部云与公有云结合使用，符合企业内部的合规要求，使用公有云与私有云的能力是企业亟需解决的一个问题。\n' +
                                                        '>>![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E4%BA%91%E5%AE%89%E5%85%A8.png#width-80)\n' +
                                                        '\n' +
                                                        '###解决方案\n' +
                                                        '>Thoughtworks安全BU面向除了客户企业员工以外的合作伙伴、供应商、客户和消费者提供移动办公套件身份认证服务。服务包括标准的SAML/OAuth等Web、移动应用认证和授权协议，提供基于多因子和风险控制分析的强身份认证，集成社交账号和企业账号联邦认证，并实现多租户管理等。核心价值包括以下几点：\n' +
                                                        '#####1、\tSSO单点登录\n' +
                                                        '采用业内标准协议实现SSO单点登录,为企业所有部门提供统一的登录入口，打通部门间的认证壁垒，减少用户操作，提高生产效率。\n' +
                                                        '>![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/SSO.png#width-80)\n' +
                                                        '#####2、\tIAM系统\n' +
                                                        '  搭建IAM服务，精细管理研发人员在云平台上对各类资源和服务的访问权限，比如，规定某员工必须在指定IP下的特定时间段购买某种类型的虚拟机。\n' +
                                                        '>![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/IAM.png#width-80)\n' +
                                                        '#####3、\t产品化\n' +
                                                        '在满足企业自身需求的基础上，将系统产品化，供更多的企业来使用身份认证和权限管理的服务。\n' +
                                                        '>![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E4%BA%A7%E5%93%81%E5%8C%96.png#width-80)\n' +
                                                        '###客户价值\n' +
                                                        '>Thoughtworks安全BU开发的身份认证及权限管理平台，拥有安全性高、扩展能力良好的特点，针对企业内部拥有多个子系统，员工使用各个系统时需要使用不同的用户信息登录，企业期望实现单点登录，统一认证入口的需求，以及企业需要细粒度管控员工对资源和服务的访问权限的需求，但不局限于云平台和公司规模，帮助企业实现高效、统一管理身份信息和权限信息，助力企业提高生产效率，适合于政府、运营商、企业、金融、军队、医疗、教育、制造业等大型企事业单位。\n' +
                                                        ' \n' +
                                                        '\n'
                                                },
                                            }
                                        }}><p><i><b>了解更多</b></i></p></Link><br/>
                                    </div>
                                </Col>
                                <Col md={4}>
                                    <div style={{
                                        width: '100%',
                                        background: '#fff',
                                        boxShadow: '0 5px 56px 0 rgb(35 30 29 / 12%)',
                                        marginTop: '-4em',
                                        paddingLeft: '2em'
                                    }}>
                                        <h4 style={{paddingTop: "1em"}}><strong>国内某医药企业</strong></h4>
                                        <p style={{paddingRight: '1.2em'}}>我们为客户量身定制了基础设施安全治理方案，同时提供不定期的安全咨询和设备升级计划，为企业的信息安全保驾护航。</p>
                                        <Link to={{
                                            pathname: '/case-detail',
                                            state: {
                                                params: {
                                                    customer: '国内某医药企业',
                                                    img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/cases/medicine.png',
                                                    description: '我们的客户是一家集医药研究、生产、销售和诊疗服务、教育、网络为一体的大型民营高科技企业。我们为客户量身定制了基础设施安全治理方案，同时提供不定期的安全咨询和设备升级计划，为企业的信息安全保驾护航。',
                                                    content: '## 国内某药企基础设施安全治理案例\n' +
                                                        '\n' +
                                                        '\n' +
                                                        '\n' +
                                                        '> \n' +
                                                        '\n' +
                                                        '### 客户简介\n' +
                                                        '\n' +
                                                        '\n' +
                                                        '\n' +
                                                        '我们的客户是一家集医药研究、生产、销售和诊疗服务、教育、网络为一体的大型民营高科技企业。随着中国的强大和崛起，我们的客户将进一步深化全球布局，通过产品并购和企业并购，迈向千亿市值公司的序列。\n' +
                                                        '\n' +
                                                        '### 业务挑战\n' +
                                                        '\n' +
                                                        '\n' +
                                                        '\n' +
                                                        '近年以来，客户企业的基础设施与业务支撑系统受到了大量的来自互联网端的威胁，造成了一定的经济损失，2019年9月，由于遭受到 Sin Eater 病毒的攻击，客户企业的基础设施与系统发生了中断，直接威胁到了企业的正常运营，造成了经济损失与财务损失。2019年9月下旬，ThoughtWorks安全BU在接受到企业的邀请后，在现场进行了一些调查，根据这些调查与现场访谈的结果，我们认识到需要对网络基础设施到应用层与数据层都安全需要进行一次完整的评估，并设计与实施相应安全加固方案。\n' +
                                                        '\n' +
                                                        '### 解决方案\n' +
                                                        '\n' +
                                                        '\n' +
                                                        '\n' +
                                                        '我们发现客户的每台服务器都有两根网线，一条接到内网交换机，一条接外网交换机。而且没有对数据做任何保护，服务器之间也没有做隔离，如果一台服务器被攻破，其它的也都会暴露。\n' +
                                                        '\n' +
                                                        '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/cases/311.png#width-90)\n' +
                                                        '\n' +
                                                        '\n' +
                                                        '\n' +
                                                        '我们对客户从网络、服务器、办公PC、安全设备、IT管理以及服务器漏洞几个方面对客户的IT建设做了全面的安全评估，并提出对应的改造方案。主要改造了以下几点：\n' +
                                                        '\n' +
                                                        '​        使用了专门的存储服务器，定期对数据做备份，即便服务器的数据被加密，也能很快的恢复数据。\n' +
                                                        '\n' +
                                                        '​        在核心交换机上配置VLAN，对服务器进行隔离，一台服务器被入侵不会影响到其它服务器，减少损失。\n' +
                                                        '\n' +
                                                        '​        使用VPN防火墙替换原来的防火墙，保障运维安全。原始的window远程桌面存在很多安全漏洞，比如永恒之蓝。使用VPN的方式，用户不能直接访问服务器，需要通过VPN拨号才能访问。\n' +
                                                        '\n' +
                                                        '![Image text](https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/cases/312.png#width-90)\n' +
                                                        '\n' +
                                                        '### 客户价值\n' +
                                                        '\n' +
                                                        '\n' +
                                                        '\n' +
                                                        'Thoughtworks安全BU不仅为客户量身定制了基础设施安全治理方案，同时提供不定期的安全咨询和设备升级计划，为企业的信息安全保驾护航。'
                                                },
                                            }
                                        }}><p><i><b>了解更多</b></i></p></Link><br/>
                                    </div>
                                </Col>

                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Fragment>
        );
    }


    componentWillReceiveProps(nextProps) {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Case);
