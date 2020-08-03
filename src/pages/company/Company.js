import React, {Component} from 'react';
import './Company.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";


class Company extends Component {
    render() {
        return (
            <Container style={{padding: 0}} className="Company">
                <img
                    src={'https://dynamic.thoughtworks.com/landing_pages/hero_banner_image_desktop-a535ca95eecf003a4c5acb7caf375121.jpeg'}
                    width={'100%'}></img>
                <Row style={{background: '#f4f4f4'}}>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Container style={{textAlign: "left", paddingTop: '1em', paddingBottom: '2em'}}>
                            <h1>公司历程</h1>
                            <Row>
                                <Col md={6}>
                                    <br/><br/>
                                    <p style={{fontSize: '1.5em'}}><strong>ThoughtWorks是一家创办于1993年的全球性软件及咨询公司，致力于用科技驱动商业变革。
                                        针对全球客户数字化业务提供专业组织转型咨询、创新软件交付、用户体验设计、产品及一体化解决方案等服务。
                                        客户遍及全球汽车、金融保险、医疗、旅游、运输、零售、电商、能源、公共事业等领域。
                                        <br/><br/>ThoughtWorks汇聚了大量软件人才，首席科学家Martin Fowler，是敏捷软件开发方法早期开拓者
                                        和敏捷宣言创始人之一。2004年进入中国，目前已在北京、西安、成都、上海、武汉、深圳及香港等
                                        地设立七个办公室，拥有超过2000名员工 。</strong></p>
                                </Col>
                                <Col md={6} style={{paddingLeft: '4em'}}>
                                    <br/><br/>
                                    <p style={{fontSize: '1.5em'}}>凭借在定制系统和敏捷软件交付领域的深耕，ThoughtWorks率先确定了全球多家成功企业都在使用的技术原则。
                                        <br/><br/>同时推动公司业务进一步扩展，依托策略、设计、数据和工程能力，为客户应对最严峻挑战提供
                                        真正的一体化解决方案。跨职能团队协作可快速发挥真正实效。</p>
                                </Col>
                            </Row>

                        </Container>
                    </Col>
                    <Container style={{background: '#000', color: '#fff', padding: 0, margin: 0}}>
                        <Container style={{
                            height: '20em',
                            backgroundSize: '100%',
                            backgroundImage: "url(\"https://dynamic.thoughtworks.com/landing_pages/banner_image_desktop-14dbcce4163dddc934cb7b8da6a173dc.jpeg\")",
                            paddingTop: '2em'
                        }}>
                            <Row>
                                <Col md={2}> </Col>
                                <Col md={8}>
                                    <Row style={{display: 'flex', justifyContent: 'center', marginTop: '1.5em'}}><h1
                                        style={{fontSize: '3em'}}>{'全球影响力和交付能力'}</h1></Row>
                                    <br/>
                                    <Row><h5 style={{
                                        lineHeight: '1.7em',
                                        fontSize: '1.5em'
                                    }}>{'ThoughtWorks提出了分布式敏捷的概念。我们开创了利用全球团队力量的工艺，在软件方面提供规模化的卓越表现。遍布全球的ThoughtWorks分布式团队可提供一系列广泛的技术能力，帮助您适时以适当的能力大胆设想、快速行动并实现价值。'}</h5>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    </Container>

                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Container style={{
                            textAlign:'center',
                            paddingTop: '1em',
                            paddingBottom: '2em'
                        }}>
                            <h1 >宗旨</h1>
                            <br/><br/>
                            <p style={{paddingTop:'1em',fontSize:'1.2em'}}>我们的宗旨也正是这个问题的答案：ThoughtWorks存在的意义是什么？
                                <br/><br/><i><b>文化独特，技术卓越，为世界创造非凡影响。</b></i>
                            <br/><br/>这既是愿景描述，也是彼此之间不断的挑战，更是我们不断衡量自己的最终指标。
                        <br/><br/>这是每个ThoughtWorker的通用代码，共同构成了ThoughtWorks。 每天，我们做出的决定和表
                                现出来的行为都是由我们的宗旨和以下五个透镜驱动的：</p>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <img
                            src={'https://dynamic.thoughtworks.com/landing_pages/side_by_side_large_image_desktop-b81a229a037dc5d64ee28e97623c04dc.jpeg'}
                            width={'100%'} height={'100%'}></img>
                    </Col>
                    <Col md={6}>
                        <Container style={{background:'#fafafc',textAlign: "left",height:'100%',width:'100%',padding:'6em 4em'}}>
                            <h1 >成为客户和他们宏大志向的杰出伙伴</h1><br/><br/>
                            <p style={{fontSize: '1.2em',lineHeight:'1.8em'}}>我们的项目经验使我们与众不同，并且我们的运作方式并不是一直一成不变。
                                我们深切关心客户，并且不只是看到客户眼前的紧急需求，追求长远并能够激发客户灵感的目标。
                                与我们合作永远能收获到一种变革的经验，这是因为最好的结果通常是最难实现的，并且常常带来超出最初预期的价值。</p>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Container style={{background:'#fafafc',textAlign: "left",height:'100%',width:'100%',padding:'6em 4em'}}>
                            <h1 >革新科技产业</h1><br/><br/>
                            <p style={{fontSize: '1.2em',lineHeight:'1.8em'}}>我们努力以身作则，成为技术行业的榜样。 这是一项重大责任，但这是我们所珍视的。
                                我们相信这是可以鞭策行业做的更好的一种方法：培养技术人才和社区。推进技术水平提升并为实践能力设定基准。</p>
                        </Container>
                    </Col>
                    <Col md={6}>
                        <img
                            src={'https://dynamic.thoughtworks.com/landing_pages/side_by_side_large_image_desktop-ac9205c82ea845a1ed1b49d246a81b0b.jpeg'}
                            width={'100%'} height={'100%'}></img>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <img
                            src={'https://dynamic.thoughtworks.com/landing_pages/side_by_side_large_image_desktop-2ca2dd027e202ba9472db537a9a1784b.jpeg'}
                            width={'100%'} height={'100%'}></img>
                    </Col>
                    <Col md={6}>
                        <Container style={{background:'#fafafc',textAlign: "left",height:'100%',width:'100%',padding:'6em 4em'}}>
                            <h1 >促进积极的社会改变，倡导科技公平的未来</h1><br/><br/>
                            <p style={{fontSize: '1.2em',lineHeight:'1.8em'}}>我们的社会影响战略是本着团结慈善的精神，跟志趣相投的社会组织一起，放大他们的效应。
                                作为技术人员，我们在技术应如何惠及全社会， 追求更公平的未来这一过程中扮演着重要角色。 该角色的一部分是继续就我们
                                所坚信的理念进行不断的自我教育。我们认识到我们的优势，并努力从弱势者的角度看待世界，并以此为基础践行我们对多元化
                                和包容性作出的承诺。</p>
                        </Container>
                    </Col>
                </Row>
                <Row>

                    <Col md={6}>
                        <Container style={{background:'#fafafc',textAlign: "left",height:'100%',width:'100%',padding:'6em 4em'}}>
                            <h1 >为多元和热情的科技从业者，培育一个生机勃勃的社区</h1><br/><br/>
                            <p style={{fontSize: '1.2em',lineHeight:'1.8em'}}>技术是我们的共同点，我们相信，无论您是什么样的身份，都应该得到尊重，友善和平等的成功机会。
                                我们努力确保以这种方式对待每一位ThoughtWorker以及与我们一起工作的每个人。我们与客户紧密合作，建立一个充满包容性和归属感
                                的社区，因为我们相信每个人都应该展现真实的自我，并且复杂问题的最佳解决方案在于汇集不同的思维和经验。</p>
                        </Container>
                    </Col>
                    <Col md={6}>
                        <img
                            src={'https://dynamic.thoughtworks.com/landing_pages/side_by_side_large_image_desktop-b4abbcd8adc03fd7e56d2aa4aa9406c3.jpeg'}
                            width={'100%'} height={'100%'}></img>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <img
                            src={'https://dynamic.thoughtworks.com/landing_pages/side_by_side_large_image_desktop-f327ba4242cb38594b26d51dd5f6c51c.jpeg'}
                            width={'100%'} height={'100%'}></img>
                    </Col>
                    <Col md={6}>
                        <Container style={{background:'#fafafc',textAlign: "left",height:'100%',width:'100%',padding:'6em 4em'}}>
                            <h1 >永续经营，持续成长</h1>
                            <br/><br/>
                            <p style={{fontSize: '1.2em',lineHeight:'1.8em'}}>我们希望成为当今和未来造福人类的技术力量，这就是为什么强大的财务基础如此重要的原因。
                                我们希望成为一家拥有百年历史的公司！ 今天我们为客户实现的目标正是我们为未来的社会提供帮助这一梦想的基础。</p>
                        </Container>
                    </Col>
                </Row>
                <Row>
                    <Col md={2}></Col>
                    <Col md={8}>
                        <Container style={{
                            textAlign:'center',
                            paddingTop: '1em',
                            paddingBottom: '2em'
                        }}>
                            <h1 >核心价值观</h1>
                            <br/><br/>
                            <h4 style={{paddingLeft:'5em',paddingRight:'5em'}}>全局优先| 果敢无畏|多元包容| 发展培养| 正直诚信 |好奇探索|
                                追求卓越| 自主团队</h4>
                            <p style={{paddingLeft:'3em',paddingRight:'3em',paddingTop:'1em',fontSize:'1.2em'}}>在这里，我们各具特色，互相鼓励，互相支持。
                                我们欣赏诚实和透明的品格。外表和背景不是我们在乎的方面，我们注重思想和做正确的事情。
                                我们憎恶并且拒绝歧视和不平等的存在，推动多元化也是我们的目标之一。我们自豪地、热情地、
                                积极地努力使ThoughtWorks乃至整个行业更具反思能力，更能包容我们所服务的社会。
                                <br/><br/><a href="https://files.thoughtworks.com/pdfs/code-of-conduct-cn.pdf" style={{color: 'black'}}>行为准则</a> 是我们价值观的体现，也反映了我们如何表现自我、如何对待他人。</p>
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


export default connect(mapStateToProps, mapDispatchToProps)(Company);
