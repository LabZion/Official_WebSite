import React, {Component} from 'react';
import './CasePage.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import FollowUs from "../../components/followus/FollowUs";
import BreadNav from "../../components/bread_nav/BreadNav";
import Col from "react-bootstrap/Col";
import {Image, Row} from "react-bootstrap";


const industry = {
    HUAWEI: {
        title: '华为',
        description: 'Thoughtworks安全BU致力于数据安全、身份安全、可信计算、内建安全、嵌入式系统和内核安全的研究，拥有丰富的项目交付经验和强大的架构能力、开发能力、咨询能力，为客户提供咨询、交付、设计、数据及智能、智能物联网定制等服务，已经为包括汽车行业巨头、通信行业巨头以及国家大型银行等数十家企业提供全面的安全保护。',
        data: [
            {
                title: '客户简介',
                description: '喵喵喵是全球领先的下一代电信网络解决方案供应商，致力于向客户提供创新的满足其需求的产品、服务和解决方案，为客户创造长期的价值和潜在的增长。喵喵喵在全球建立了100多个分支机构，营销及服务网络遍及全球，能够为客户提供快速、优质的服务。目前，喵喵喵的产品和解决方案已经应用于全球100多个国家，以及31个全球前50强的运营商，服务全球超过10亿用户。',
            }, {
                title: '业务挑战',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E6%B1%BD%E8%BD%A6-%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B61.png',
                description: '随着公司业务逐步规划上云并面向互联网开放，传统企业网络安全边界开始变得模糊，安全高效的基于云的身份认证与访问控制平台将成为未来应用访问的“边界”，在这种情况下，传统喵喵喵企业内网的身份验证与IAM系统已无法满足业务上云后日益发展的需求。因为企业的业务场景极其复杂，内部私有云已无法支撑所有的业务系统，但市场上的公有云也无法满足企业内部的要求与限制。' +
                    '如何将内部云与公有云结合使用，符合企业内部的合规要求，使用公有云与私有云的能力是企业亟需解决的一个问题。吃鱼是喵喵喵私有云平台，来自内部和外部的研发人员都需要在这个平台上访问服务和资源。喵喵喵内部有一万多个部门和服务，每个部门和都可能访问吃鱼。另一方面，身份认证与访问控制系统建设过程中需要结合具体业务场景进行系统接入和部署，应用过程中需要按照实际情况进行配置和调整。且涉及到周边系统配合改造，业务逻辑复杂，开发难度高。',
            }, {
                title: '数据隐私',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E6%B1%BD%E8%BD%A6-%E6%95%B0%E6%8D%AE%E9%9A%90%E7%A7%81.png',
                description: '对于跨国大型车企而言，不同区域车主数据可能保存在同一区域，因此会存在不同区域车主访问数据速度不一致的问题，另一方面不同地区数据管理法律法规对于数据安全的要求不同，隐私合规也是车企需要考虑的一个问题。数据隐私是ThoughtWorks安全团队的一个主攻方向，帮助客户更好地达到数据保护、隐私合规是我们的愿景。基于对不同地区法律法规（如网安法，等保合规，GDPR等）的了解，针对不同种类的数据，采用如加密、脱敏、合规迁移等不同的保护措施，结合具体的应用场景，为客户提供数据安全与隐私保护的解决方案。方案不仅仅涵盖技术实施，同时也包含了企业内部安全意识培训，安全流程建立等，进而为客户提供全套的解决方案。',
            }]
    },

};

class CasePage extends Component {

    render() {
        let solution = 'HUAWEI';
        return (
            <Container style={{padding: 0}} className="Home">
                <BreadNav
                    bg={"url('https://static.thoughtworks.com/images/contact-us/contact-us-banner-1.jpg')"}
                    bread={"Security / Customer/ "+industry[solution].title}

                    subtitle={industry[solution].description}
                />
                <Row style={{background: 'rgb(223, 102, 159)', textAlign: 'center', padding: '2em',marginBottom:'2em'}}>
                    <Col>
                        <h1 style={{textAlign: 'center', color: '#fafafc'}}>方案详情</h1>
                    </Col>
                </Row>
                <Row style={{background: '#fff'}}>
                    <Col md={2}></Col>
                    <Col md={7}>
                        <Container style={{textAlign: "left", paddingTop: '2em', paddingBottom: '1em'}}>
                            <h1>客户简介</h1>
                            <p>喵喵喵是全球领先的下一代电信网络解决方案供应商，致力于向客户提供创新的满足其需求的产品、服务和解决方案，为客户创造长期的价值和潜在的增长。喵喵喵在全球建立了100多个分支机构，营销及服务网络遍及全球，能够为客户提供快速、优质的服务。目前，喵喵喵的产品和解决方案已经应用于全球100多个国家，以及31个全球前50强的运营商，服务全球超过10亿用户。</p>
                        </Container>
                        <Container style={{textAlign: "left", paddingTop: '2em', paddingBottom: '1em'}}>
                            <h1>业务挑战</h1>
                            <p>随着公司业务逐步规划上云并面向互联网开放，传统企业网络安全边界开始变得模糊，安全高效的基于云的身份认证与访问控制平台将成为未来应用访问的“边界”，在这种情况下，传统喵喵喵企业内网的身份验证与IAM系统已无法满足业务上云后日益发展的需求。因为企业的业务场景极其复杂，内部私有云已无法支撑所有的业务系统，但市场上的公有云也无法满足企业内部的要求与限制。如何将内部云与公有云结合使用，符合企业内部的合规要求，使用公有云与私有云的能力是企业亟需解决的一个问题。</p>
                            <img src='https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E4%BA%91%E5%AE%89%E5%85%A8.png'width='100%'></img>
                            <p style={{paddingTop:'2em'}}>吃鱼是喵喵喵私有云平台，来自内部和外部的研发人员都需要在这个平台上访问服务和资源。喵喵喵内部有一万多个部门和服务，每个部门和都可能访问吃鱼。另一方面，身份认证与访问控制系统建设过程中需要结合具体业务场景进行系统接入和部署，应用过程中需要按照实际情况进行配置和调整。且涉及到周边系统配合改造，业务逻辑复杂，开发难度高。</p>
                        </Container>
                        <Container style={{textAlign: "left", paddingTop: '2em', paddingBottom: '1em'}}>
                            <h1>解决方案</h1>
                            <p>Thoughtworks安全BU将面向除了喵喵喵员工以外的合作伙伴、供应商、客户和消费者提供移动办公套件身份认证服务。服务包括标准的SAML/OAuth等Web、移动应用认证和授权协议，提供基于多因子和风险控制分析的强身份认证，集成社交账号和企业账号联邦认证，并实现多租户管理等。核心价值包括以下几点：</p>
                            <h5>SSO单点登录</h5>
                            <p>采用业内标准协议实现SSO单点登录,为企业所有部门提供统一的登录入口，打通部门间的认证壁垒，减少用户操作，提高生产效率。</p>
                            <img src='https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/SSO.png'width='100%'></img>
                            <h5 style={{paddingTop:'2em'}}>IAM系统</h5>
                            <p>搭建IAM服务，精细管理研发人员在云平台上对各类资源和服务的访问权限，比如，规定某员工必须在指定IP下的特定时间段购买某种类型的虚拟机。</p>
                            <img src='https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/IAM.png'width='100%'></img>
                            <h5 style={{paddingTop:'2em'}}>产品化</h5>
                            <p>在满足企业自身需求的基础上，将系统产品化，供更多的企业来使用身份认证和权限管理的服务。</p>
                            <img src='https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E4%BA%A7%E5%93%81%E5%8C%96.png'width='100%'></img>
                        </Container>
                        <Container style={{textAlign: "left", paddingTop: '2em', paddingBottom: '1em'}}>
                            <h1>客户价值</h1>
                            <p>Thoughtworks安全BU开发的身份认证及权限管理平台，拥有安全性高、扩展能力良好的特点，针对企业内部拥有多个子系统，员工使用各个系统时需要使用不同的用户信息登录，企业期望实现单点登录，统一认证入口的需求，以及企业需要细粒度管控员工对资源和服务的访问权限的需求，但不局限于云平台和公司规模，帮助企业实现高效、统一管理身份信息和权限信息，助力企业提高生产效率，适合于政府、运营商、企业、金融、军队、医疗、教育、制造业等大型企事业单位。</p>
                        </Container>
                    </Col>
                </Row>
                <FollowUs/>
            </Container>
        );
    };

    renderSolutionBlock(item, index) {
        return <Row style={{background: index % 2 === 0 ? '#fff' : '#fafafc', paddingTop: '1em', paddingBottom: '1em'}}>
            <Col md={2}></Col>
            <Col md={8} style={{paddingLeft:'2em',paddingRight:'2em'}}>
                <Row>
                    <Col md={12} style={{padding: '1em', textAlign: 'left', paddingRight: '2em'}}>
                        <h3 style={{marginTop:'1em'}}><span style={{color:'#fff',background:'rgb(223, 102, 159)',padding:'0.1em'}}>0x0{index + 1}</span>
                            <span style={{border:'solid 1px rgb(223, 102, 159)',padding:'2px',color:'rgb(223, 102, 159)'}}>{item.title}</span></h3>
                        <h5 style={{fontSize: '0.9rem',lineHeight: '2rem',marginTop:'2.5rem'}}>{item.description}</h5>
                    </Col>
                    {/*<Col md={5} style={{padding: '1em', textAlign: 'right',paddingTop:'7.5em'}}>*/}
                    {/*    <Image src={item.img} style={{width: '100%'}} rounded/>*/}
                    {/*</Col>*/}
                </Row>
            </Col>
        </Row>
    }

    componentWillMount() {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(CasePage);
