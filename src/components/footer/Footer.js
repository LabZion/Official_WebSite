import React from 'react';
import './Footer.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {BrowserRouter as Router, Link} from "react-router-dom";
import Logo from "../../static/images/logo_large.png"
import {Image} from "react-bootstrap";

function Footer() {
    return (
        <Container className="Footer">
            <Container>
                <Router>
                    <Row>
                        <Col md={1}></Col>
                        <Col md={10}>
                            <Row>
                                <Col style={{paddingLeft: '1.5em'}}>
                                    <Row><Image style={{height: '4em', marginLeft: 0}} src={Logo}/></Row>
                                </Col>
                                <Col>

                                </Col>
                                <Col><Row>Info</Row>
                                    <Row><span className="footerText">Terms</span></Row>
                                    <Row><span className="footerText">Privacy</span></Row>
                                    <Row><span className="footerText">Contract</span></Row>
                                </Col>
                                <Col>
                                    <Row>SiteMap</Row>
                                    <Row><span className="footerText"><Link to="/home">Home</Link></span></Row>
                                    <Row><span className="footerText"><Link to="/home">Solutions</Link></span></Row>
                                    <Row><span className="footerText"><Link to="/home">Insights</Link></span></Row>
                                    <Row><span className="footerText"><Link to="/home">Events</Link></span></Row>
                                    <Row><span className="footerText"><Link to="/home">Blogs</Link></span></Row>
                                </Col>
                                <Col><Row>Focus</Row>
                                    <Row><span className="footerText">Weibo</span></Row>
                                    <Row><span className="footerText">WeChat</span></Row>
                                    <Row><span className="footerText">Twitter</span></Row>
                                </Col>
                                <Col>
                                    <Row>Links</Row>
                                    <Row><a href={"https://www.thoughtworks.com/"}><span className="footerText">ThoughtWorks</span></a></Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Router>
            </Container>
        </Container>
    );
}

export default Footer;
