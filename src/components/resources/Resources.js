import React, {Component, Fragment} from 'react';
import './Resources.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Image} from "react-bootstrap";

class Resources extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <Container style={{ paddingTop: '2em', paddingBottom: '2em'}}>
                    <Row>
                        <Col md={2}></Col>
                        <Col md={8} style={{textAlign: "left"}}>

                            <h2 style={{color: "#000"}}>独特洞见</h2>
                            <Row>
                                <Col md={4} style={{color: "#000", textAlign: "left", padding: "1em"}}>
                                    <Image style={{width: "100%",height:'100%'}} src={"https://raw.githubusercontent.com/WeiJiLab/Official_WebSite/master/public/picture/blogs/Linux%20Blog1.png"}/>

                                </Col>
                                <Col md={4} style={{color: "#000", textAlign: "left", padding: "1em"}}>
                                    <Image style={{width: "100%",height:'100%'}} src={"https://raw.githubusercontent.com/WeiJiLab/Official_WebSite/master/public/picture/SSL%20and%20CA%E8%A7%86%E9%A2%91%E6%88%AA%E5%9B%BE.png"}/>

                                </Col>
                                <Col md={4} style={{color: "#000", textAlign: "left", padding: "1em"}}>
                                    <Image style={{width: "100%",height:'100%'}} src={"https://raw.githubusercontent.com/WeiJiLab/Official_WebSite/master/public/picture/Token%E8%87%AA%E9%89%B4%E6%9D%83%E8%A7%86%E9%A2%91%E6%88%AA%E5%9B%BE.png"}/>

                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row style={{background: "#fff"}}>
                        <Col md={2}></Col>
                        <Col md={8}>
                            <Container style={{textAlign: "left", paddingLeft: '2em', paddingBottom: '2em',}}>
                                <Row >
                                    <Col md={4}>
                                        <Container style={{
                                            background: '#fff',
                                            boxShadow: '0 5px 56px 0 rgb(35 30 29 / 12%)',
                                            marginTop: '-2em',
                                            paddingLeft: '2em',
                                            paddingRight:'2em'
                                        }}>
                                            <h4 style={{paddingTop:'2em',paddingBottom:'1em'}}><strong>怎样Hack Linux的内核符号？</strong></h4>
                                            {/*<p>Inline Hook技术能够帮助我们完成函数的动态拦截和跳转，但要实现缺陷函数的自动化热修复则会面临更加复杂的挑战。本文从一个实际例子出发，阐述了在对二进制形式的Linux固件做自动化安全加固的时遇到的技术难题和解决办法。</p>*/}
                                            <Link to={{
                                                pathname: '/blog-detail/0',
                                            }}><p ><i><b>了解更多</b></i></p></Link><br/>
                                        </Container>
                                    </Col>
                                    <Col md={4} style={{paddingLeft:'2em'}}>
                                        <Container style={{
                                            width:'105%',
                                            background: '#fff',
                                            boxShadow: '0 5px 56px 0 rgb(35 30 29 / 12%)',
                                            marginTop: '-2em',
                                            paddingLeft: '2em',
                                            paddingRight:'2em'
                                        }}>
                                            <h4 style={{paddingTop:'2em',paddingBottom:'1em'}}><strong>聊聊SSL/TLS以及CA的那些事</strong></h4>
                                            {/*<p>想要了解对称与非对称加密的区别吗？还有SSL以及证书的作用吗？想知道如何自己给自己签发一个HTTPS证书吗？那就快点进来吧！     </p><br/><br/><br/>*/}
                                            <Link to={{
                                                pathname: '/event-detail/0',
                                            }}><p ><i><b>了解更多</b></i></p></Link><br/>
                                        </Container>
                                    </Col>
                                    <Col md={4} style={{paddingLeft:'3em'}}>
                                        <div style={{
                                            width:'105%',
                                            background: '#fff',
                                            boxShadow: '0 5px 56px 0 rgb(35 30 29 / 12%)',
                                            marginTop: '-2em',
                                            paddingLeft: '2em',
                                            paddingRight:'2em'
                                        }}>
                                            <h4 style={{paddingTop:'2em',paddingBottom:'1em'}}><strong>关于Token自鉴权的一些猜想</strong></h4>
                                            {/*<p>带你了解什么是JWT，以及什么是Token base JWT，解读session based authentication 与 token based authentication.</p><br/><br/><br/>*/}
                                            <Link to={{
                                                pathname: '/event-detail/2',
                                            }}><p ><i><b>了解更多</b></i></p></Link><br/>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }


    componentWillReceiveProps(nextProps) {
    }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Resources);
