import React, {Component, Fragment} from 'react';
import './Solution.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Image} from "react-bootstrap";

class Solution extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Row style={{background: '#f4f4f4'}}>
                    <Col md={2}></Col>
                    <Col md={8}>

                        <Container style={{textAlign: "left", paddingTop: '2em', paddingBottom: '2em'}}>
                            <h2>解决方案与服务</h2>
                            <br/><br/>
                            <Row style={{marginTop: '1em'}}>
                                <Col md={3}>
                                    <Container style={{textAlign: 'center', marginTop: '0.5em'}}>
                                        <Image src={"https://1.cms.s81c.com/sites/default/files/2019-10-11/assess-risk-1.5-icon1.png"}/>
                                    </Container>
                                    <Container style={{padding: 0, marginTop: '1em'}}>
                                        <h4><strong>保护您的数据安全</strong></h4>
                                        <br/>
                                        <p>提供隐私数据合规、数据防泄漏、数据脱敏、数据安全迁移、系统审计支持、安全运维评估等方面的咨询与服务，
                                            您可以获得一套高效可落地的隐私保护解决方案，为您的数据加上一道坚实的保险。</p>
                                    </Container>
                                </Col>
                                <Col md={3}>
                                    <Container style={{textAlign: 'center', marginTop: '0.5em'}}>
                                        <Image src={"https://1.cms.s81c.com/sites/default/files/2019-10-11/reduce-risk-1.5-icon2.png"}/>
                                    </Container>
                                    <Container style={{padding: 0, marginTop: '1em'}}>
                                        <h4><strong>保障您的身份资源</strong></h4><br/>
                                        <p>提供更安全的身份访问认证，更精细的资源权限管控，更友好的操作权限定制化，更安全的云安全策略，
                                            为企业带来更安全的服务，促进企业提高生产力，安全管理客户、合作伙伴、供应商、内部员工的身份与权限，提升用户的工作效率与降低运营成本。</p>
                                    </Container>
                                </Col>
                                <Col md={3}>
                                    <Container style={{textAlign: 'center', marginTop: '0.5em'}}>
                                        <Image src={"https://1.cms.s81c.com/sites/default/files/2019-10-11/manage-risk-1.5-icon3.png"}/>
                                    </Container>
                                    <Container style={{padding: 0, marginTop: '1em'}}>
                                        <h4><strong>内建武装您的软件</strong></h4><br/>
                                        <p>在整个软件开发生命周期中的每一个阶段引入安全的思考和实践，
                                            遵循安全左移、职责共享的思想，帮助团队构建高度安全的软件，BSI中的指导、最佳实践、工具和流程是我们结合敏捷软件交付，
                                            在内部用于构建更安全的产品和服务的实践。随着我们对云、物联网和人工智能等新业务技术的增长，我们也在不断更新BSI实践。</p>
                                    </Container>
                                </Col>
                                <Col md={3}>
                                    <Container style={{textAlign: 'center', marginTop: '0.5em'}}>
                                        <Image src={"https://1.cms.s81c.com/sites/default/files/2019-10-11/assess-risk-1.5-icon1.png"}/>
                                    </Container>
                                    <Container style={{padding: 0, marginTop: '1em'}}>
                                        <h4><strong>平台助您万物互联</strong></h4><br/>
                                        <p>在嵌入式系统安全研发领域深耕多年，研究方向包括嵌入式Linux内核/RTOS/SoC芯片，以及可信操作系统裁剪定制、
                                            系统安全加固、系统监控、系统加密、通讯协议软硬件加密等。目前，自研的IOT-RTOS/Linux安全模块等的研发工作已接近尾声。</p>
                                    </Container>
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


export default connect(mapStateToProps, mapDispatchToProps)(Solution);
