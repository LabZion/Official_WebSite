import React, {Component, Fragment} from 'react';
import './Case.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import {cases} from "../../pages/cases/casesData";

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
                                        <h4 style={{paddingTop: "1em"}}><strong>车机漏洞扫描及加固</strong></h4>
                                        <p style={{paddingRight: '1.2em'}}>我们提供了二进制自动化漏洞扫描以及加固的解决方案,为业界的智能设备产品公司在快速迭代的过程中保驾护航。</p>
                                        <Link to={{
                                            pathname: '/case-detail/car/2',
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
                                        <h4 style={{paddingTop: "1em"}}><strong>身份认证及权限管理</strong></h4>
                                        <p style={{paddingRight: '1.2em'}}>我们提供了身份认证及权限管理方案，帮助企业实现高效、统一管理身份信息和权限信息，助力企业提高生产效率。</p>
                                        <Link to={{
                                            pathname: '/case-detail/cloud/0',
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
                                        <h4 style={{paddingTop: "1em"}}><strong>基础设施安全治理</strong></h4>
                                        <p style={{paddingRight: '1.2em'}}>我们为客户量身定制了基础设施安全治理方案，同时提供不定期的安全咨询和设备升级计划，为企业的信息安全保驾护航。</p>
                                        <Link to={{
                                            pathname: '/case-detail/cloud/1',
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
