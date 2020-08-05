import React, {Component} from 'react';
import './Home.css';
import Container from "react-bootstrap/Container";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Splash from "../../components/splash/Splash";
import Solution from "../../components/solution/Solution";
import Resources from "../../components/resources/Resources";
import Case from "../../components/case/Case";
import {Row} from "react-bootstrap";
import Col from "react-bootstrap/Col";

class Home extends Component {
    render() {
        return (
            <Container style={{padding: 0}} className="Home">
                <Splash/>
                <Solution/>
                <Resources/>
                <Container style={{background: '#000', color: '#fff', padding: 0, margin: 0}}>
                    <Container style={{
                        height: '20em',
                        backgroundSize: '100%',
                        backgroundImage: "url(\"https://dynamic.thoughtworks.com/landing_pages/banner_image_desktop-3d1999d435c05d5b19dc62d7ecc105e1.jpeg\")",
                        paddingTop: '2em'
                    }}>
                        <Row>
                            <Col md={2}> </Col>
                            <Col md={8}>
                                <Row style={{display: 'flex', justifyContent: 'center', marginTop: '1.5em'}}><h1
                                    style={{fontSize: '2.7em'}}>{'客户案例'}</h1></Row>
                                <br/>
                                <Row><h5 style={{
                                    lineHeight: '1.7em',
                                    fontSize: '1.2em'
                                }}>{'Thoughtworks安全团队已经帮助通信、汽车、金融等数十个行业的企业提供了几十余种场景的安全解决方案，包括平台搭建、系统交付、内建安全培训、专业咨询等。'}</h5>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Container>
                <Case/>
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
                                    style={{fontSize: '3em'}}>{'联系我们'}</h1></Row>
                                <br/><br/>
                                <Row style={{margin:'0'}}>
                                    <span style={{float:'left'}} className="iconfont">&#xe501;</span>&nbsp;
                                    <p>+86 18618426569（业务咨询）</p>
                                    &nbsp;&nbsp;&nbsp;
                                    <span style={{float:'right'}} className="iconfont">&#xe60c;</span>&nbsp;
                                    <p>security-solution@thoughtworks.com</p>
                                    &nbsp;&nbsp;&nbsp;
                                    <span style={{float:'right'}} className="iconfont">&#xe503;</span>&nbsp;
                                    <p>北京、上海、西安、成都、武汉、深圳、北美</p>
                                </Row>

                            </Col>
                        </Row>
                    </Container>
                </Container>
            </Container>
        );
    };

    componentWillMount() {
    }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Home);
