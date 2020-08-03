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
        description: '智能网联汽车是未来创新热点和产业发展制高点，但是智能化、网联化程度的加深带来的是汽车日益凸显的信息安全问题，我国自2015年开始，也已经在智能网联汽车相关行业内积极推进信息安全研究工作，从标准、法规、行业报告到咨询、测试、认证、产品，逐步形成由政府及行业组织主导、汽车和信息安全企业积极推动的产业链发展态势。如何保障汽车驾驶安全，解决便捷性与安全性之间的矛盾成为智能网联汽车发展的重要环节。',
        data: [
            {
                customer: '上汽',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png',
                description: '当前车载智能终端（车机）应用日益广泛，智能汽车已是大势所趋。在汽车生态体系中，车机由不同的供应商提供，因此对安全漏洞的追踪和确认十分困难。而车厂对发现的漏洞只能采用人工逆向分析技术，存在人工分析慢，产品迭代慢，会出现误判等问题。ThoughtWorks安全团队通过和国内多家大型车企以及智能设备生成厂商多年合作，积累了一套对二进制自动化漏洞扫描以及加固的解决方案。解决了传统的二进制漏洞检测难度大，检测周期长的问题。同时研发了一套漏洞自动化修复框架，在准确和快速地检测出二进制文件中漏洞的同时，还可以自动化修复漏洞，为业界的智能设备产品公司在快速迭代的过程中保驾护航。',
                content:'wind'
            }, {
                title: '自动驾驶',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E6%B1%BD%E8%BD%A6-%E8%87%AA%E5%8A%A8%E9%A9%BE%E9%A9%B61.png',
                description: '自动驾驶是近年来最为火热的方向之一，无论是新兴的互联网公司，还是传统的知名汽车制造商，都投入了大量资金和研发人力。自动驾驶平台是一个软硬件高度耦合的复杂系统，从硬件设计到软件开发，从系统底层到应用上层，从业务逻辑到算法分析，横跨了众多的专业领域，对从业公司入局自动驾驶有很高的技术要求。ThoughtWorks作为专业服务咨询公司，在自动驾驶落地所需的硬件驱动、系统底层、算法应用等领域有丰富的从业经验和成功案例，与多个国内外头部整车企业研发部门在V2X车机系统、ADAS研发效能平台、感知数据采集与处理标注平台方面，有着深厚的合作，可为您的自动驾驶研发提供能力支持和技术保障。',
                content:'wind'
            }, {
                title: '数据隐私',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E6%B1%BD%E8%BD%A6-%E6%95%B0%E6%8D%AE%E9%9A%90%E7%A7%81.png',
                description: '对于跨国大型车企而言，不同区域车主数据可能保存在同一区域，因此会存在不同区域车主访问数据速度不一致的问题，另一方面不同地区数据管理法律法规对于数据安全的要求不同，隐私合规也是车企需要考虑的一个问题。数据隐私是ThoughtWorks安全团队的一个主攻方向，帮助客户更好地达到数据保护、隐私合规是我们的愿景。基于对不同地区法律法规（如网安法，等保合规，GDPR等）的了解，针对不同种类的数据，采用如加密、脱敏、合规迁移等不同的保护措施，结合具体的应用场景，为客户提供数据安全与隐私保护的解决方案。方案不仅仅涵盖技术实施，同时也包含了企业内部安全意识培训，安全流程建立等，进而为客户提供全套的解决方案。',
                content:'wind'
            }]
    },
    cloud: {
        title: '通信与云计算企业',
        description: '随着信息通信技术与社会各行业的深度融合，能源、交通、水利、金融、公共服务、政务等各行业、各领域的信息化程度不断提高，对关键信息基础设施的依赖也日益加深。一旦关键信息基础设施遭到破坏，无疑会对社会运行产生巨大影响。另一方面，随着我国云计算应用的日益普及，用户不再仅仅考虑“如何上云”，而更关注“如何安全上云”，受近些年来云安全时间频发的影响，用户对云上的安全需求越发迫切。',
        data: [
            {
                customer: '华为',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/public/picture/%E9%80%9A%E4%BF%A13.png',
                description: 'wind',
                content:'wind'
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
                    bg={"url('https://dynamic.thoughtworks.com/landing_pages/hero_banner_image_desktop-e5bea60f1eaf14734c2dd2c07b404813.jpeg')"}
                    title={cases[industry].title}
                    subtitle={"Knowledge should be for all, not just for the few. We believe in sharing what we learn, and regularly host and participate in thought-leadership events across the world."}
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
        return cases.industry.map((item, index) => {
            return <Col md={6} sytle={{background: '#fff'}}>
                <Link to={{
                    pathname: '/case-detail',
                    state: {params: item}
                }}>
                    <Image src={item.img} style={{width: '100%', height: '60%'}}/></Link>
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
