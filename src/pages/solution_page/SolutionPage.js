import React, {Component} from 'react';
import './SolutionPage.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import FollowUs from "../../components/followus/FollowUs";
import BreadNav from "../../components/bread_nav/BreadNav";
import Col from "react-bootstrap/Col";
import {Image, Row} from "react-bootstrap";

const industry = {
    car: {
        title: '',
        description: '',
        data: [
            {
                title: '车机安全',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png',
                description: '当前车载智能终端（车机）应用日益广泛，智能汽车已是大势所趋。在汽车生态体系中，车机由不同的供应商提供，因此对安全漏洞的追踪和确认十分困难。而车厂对发现的漏洞只能采用人工逆向分析技术，存在人工分析慢，产品迭代慢，会出现误判等问题。ThoughtWorks安全团队通过和国内多家大型车企以及智能设备生成厂商多年合作，积累了一套对二进制自动化漏洞扫描以及加固的解决方案。解决了传统的二进制漏洞检测难度大，检测周期长的问题。同时研发了一套漏洞自动化修复框架，在准确和快速地检测出二进制文件中漏洞的同时，还可以自动化修复漏洞，为业界的智能设备产品公司在快速迭代的过程中保驾护航。',
            }, {
                title: '自动驾驶',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png',
                description: '自动驾驶是近年来最为火热的方向之一，无论是新兴的互联网公司，还是传统的知名汽车制造商，都投入了大量资金和研发人力。自动驾驶平台是一个软硬件高度耦合的复杂系统，从硬件设计到软件开发，从系统底层到应用上层，从业务逻辑到算法分析，横跨了众多的专业领域，对从业公司入局自动驾驶有很高的技术要求。ThoughtWorks作为专业服务咨询公司，在自动驾驶落地所需的硬件驱动、系统底层、算法应用等领域有丰富的从业经验和成功案例，与多个国内外头部整车企业研发部门在V2X车机系统、ADAS研发效能平台、感知数据采集与处理标注平台方面，有着深厚的合作，可为您的自动驾驶研发提供能力支持和技术保障。',
            }, {
                title: '数据隐私',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png',
                description: '对于跨国大型车企而言，不同区域车主数据可能保存在同一区域，因此会存在不同区域车主访问数据速度不一致的问题，另一方面不同地区数据管理法律法规对于数据安全的要求不同，隐私合规也是车企需要考虑的一个问题。数据隐私是ThoughtWorks安全团队的一个主攻方向，帮助客户更好地达到数据保护、隐私合规是我们的愿景。基于对不同地区法律法规（如网安法，等保合规，GDPR等）的了解，针对不同种类的数据，采用如加密、脱敏、合规迁移等不同的保护措施，结合具体的应用场景，为客户提供数据安全与隐私保护的解决方案。方案不仅仅涵盖技术实施，同时也包含了企业内部安全意识培训，安全流程建立等，进而为客户提供全套的解决方案。',
            }]
    },
    financial: {
        title: '',
        description: '',
        data: [
            {
                title: '迭代安全',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png',
                description: '国内金融行业科技部门的一些团队已经采用了敏捷开发流程，但是迭代开发过程中相应的敏捷安全措施是空缺的，对于金融行业科技部门探索迭代内安全实践的需求，ThoughtWorks安全团队提供了调研及过程改进建议、开发团队成员及安全团队成员赋能两阶段的交付实践，提供了敏捷迭代安全内建实施指南以及内建安全赋能培训课程。使得客户在敏捷流程中安全实践得到落地实施，进而降低了应用安全风险，另一方面，开发团队安全意识能力得到提升。'
            },
            {
                title: '应用安全',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png',
                description: '金融行业信息安全十分重要，尤其是客户信息，一旦客户信息发生泄漏，将会企业带来巨大的损失。金融企业中用户信息泄漏时有发生，反映出金融行业开发团队缺乏安全实践，应用存在安全隐患的风险较高，亟需采取措施作出改变。ThoughtWorks安全团队提供了敏捷项目内建安全指南以及BSI(内建安全体系)Master培养方案及课程，帮助提升开发团队的安全意识，培养出企业自己的BSIMaster种子教练，使得团队安全成熟度得到提升，从而提升应用安全质量。'
            },
            {
                title: '交互式安全',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png',
                description: '针对金融行业内典型的业务场景，结合常⻅的安全问题和安全漏漏洞，ThoughtWorks安全团队形成一整套安全需求设计规范，提供交互式安全需求识别工具，便于研发人员根据需求描述自动化、自助化地生成安全需求；便于信息安全中心实现安全需求管控、维护的线上化、标准化；助⼒实现系统全⽣命周期、全流程⻆度同步考虑安全工作，强化安全前移目标的达成。'
            }
        ]
    },
    cloud: {
        title: '',
        description: '',
        data: [
            {
                title: '源码可信',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png',
                description: '源码可信不仅是欧盟和国家的基本合规要求，也是软件规模极速扩张后面临的非常棘手的工程问题。一旦做不到源码级别的可信，后续安全检查和保障的工作量就会指数级别增长。ThoughtWorks安全团队利用自身在交付和运维领域的经验，帮助通信行业客户建立安全流水线，自动化代码分析，代码依赖管理，真正做到了one - track(单一代码溯源)，让安全防护和问题排查变得更高效和准确。'
            },
            {
                title: '隐私保护',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png',
                description: '对于通信行业企业来说，用户隐私已经成为当前各类安全议题的常客，特别是欧盟颁布了GDPR（通用数据保护条例）。ThoughtWorks安全团队可以帮助客户搭建一套隐私管理平台来处理符合GDPR规范的隐私信息。该平台不仅可以自动化地处理用户隐私信息的登记和分类，还可以按照规范自动销毁用户信息，大大减少了人工处理隐私信息的工作量。GDPR作为目前最为严格个人隐私保护条例，合规意味着可以很方便地适应到全球其它地区的规范条例中。'
            },
            {
                title: '终端数据安全',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png',
                description: '大于大型企业来说，企业创新和工作环境管控往往呈现一定程度的矛盾，如果在保护企业商业数据的同时最大限度保证员工的创新自由是一个很有趣的挑战。随着云计算的成熟，企业计算环境也变得空前的复杂。ThoughtWorks安全团队可以帮助客户开发一套终端环境管理平台，包括审计模块和数据处理中心，理念是以对用户透明的方式进行敏感数据管控，同时借用数据平台不断对搜集到的数据进行学习，可以随时响应变化。'
            }, {
                title: '云安全',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png',
                description: '任何公有云最重要也是最核心的组件主要包括三个部分：计算，存储和身份，对应到亚马逊云就是EC2，S3和IAM。IAM作为云平台上的底层服务，管理着公司内外部的所有研发用户对资源和服务的操作权限。ThoughtWorks安全团队帮助客户搭建基于私有云平台建立的IAM底层服务，定制精细管理规则，通过SSO统一多部门和服务的登录入口，对标AWS和Azure的IAM，支撑大型企业内部所有云计算的需求，同时包装成产品对外进行输出，也就是针对企业的公有云搭建技术。'
            }
        ]
    },
    sales: {
        title: '',
        description: '',
        data: [
            {
                title: '内建安全体系',
                img: 'https://raw.githubusercontent.com/LabZion/Official_WebSite/master/src/static/images/%E8%BD%A6%E6%9C%BA%E5%AE%89%E5%85%A8.png',
                description: '全球餐饮连锁巨头通过数字化转型，拓展全球业务版图、打造智能化数字消费体验。在中国区打造适用中国市场和用户操作习惯的app，为近千万的活跃用户提供优质、温馨、独特的消费体验。其app提供移动支付、充值卡管理、会员管理等优化完善线下用户体验，同时采用个性化数字营销、实时计算等方式促进业务持续增长。Thoughtwork安全团队为客户构建内建安全体系(BSI，build security in)，将安全实践应用于软件开发的各个阶段，在响应业务快速变化的同时，安全为业务持续增长保驾护航。在app技术开发中，安全团队构建app安全基建，保证各个业务功能满足安全需求。'
            }
        ]
    },
    logistics: {
        title: '',
        description: '',
        data: []
    },
    data: {
        title: '',
        description: '',
        data: []
    },
    identify: {
        title: '',
        description: '',
        data: []
    },
    embed: {
        title: '',
        description: '',
        data: []
    },
    trust: {
        title: '',
        description: '',
        data: []
    },
    buildin: {
        title: '',
        description: '',
        data: []
    },
};

class SolutionPage extends Component {

    render() {
        let solution = this.props.location.state.params;

        return (
            <Container style={{padding: 0}} className="Home">
                <BreadNav
                    bg={"url('https://static.thoughtworks.com/images/contact-us/contact-us-banner-1.jpg')"}
                    bread={"Security / Solution / Car"}
                    title={industry[solution].title}
                    subtitle={industry[solution].description}
                />
                <Row style={{background: 'rgb(223, 102, 159)', textAlign: 'center', padding: '2em'}}>
                    <Col>
                        <h1 style={{textAlign: 'center', color: '#fafafc'}}>方案详情</h1>
                    </Col>
                </Row>
                {industry[solution].data.map((item, index) => {
                    return this.renderSolutionBlock(item, index);
                })
                }
                <FollowUs/>
            </Container>
        );
    };

    renderSolutionBlock(item, index) {
        return <Row style={{background: index % 2 === 0 ? '#fff' : '#fafafc', paddingTop: '3em', paddingBottom: '3em'}}>
            <Col md={1}></Col>
            <Col md={10}>
                <Row>
                    <Col md={8} style={{padding: '1em', textAlign: 'left', paddingRight: '10em'}}>
                        <h3>{index + 1} {item.title}</h3>
                        <h6 style={{lineHeight: '2em'}}>{item.description}</h6>
                    </Col>
                    <Col md={4} style={{padding: '1em', textAlign: 'right'}}>
                        <Image src={item.img} style={{width: '100%'}} rounded/>
                    </Col>
                </Row>
            </Col>
        </Row>
    }

    componentWillMount() {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(SolutionPage);
